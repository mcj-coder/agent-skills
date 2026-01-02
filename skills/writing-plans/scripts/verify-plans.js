#!/usr/bin/env node
// Installed from skills/writing-plans/scripts/verify-plans.js
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const rootDir = process.cwd();
const plansDir = path.join(rootDir, "docs", "plans");

const allowedStatuses = new Set(["Planned", "In Progress", "Done", "Aborted"]);
const allowedOutcomes = new Set(["Delivered", "Aborted", "Pending"]);

function walkDir(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function findTableLines(lines, headerIndex) {
  const tableLines = [];
  for (let i = headerIndex + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim().startsWith("|")) {
      break;
    }
    tableLines.push(line);
  }
  return tableLines;
}

function parseRow(line) {
  const cells = line.split("|").map((cell) => cell.trim());
  if (cells.length < 7) {
    return null;
  }
  return {
    id: cells[1],
    task: cells[2],
    status: cells[3],
    verification: cells[4],
    evidence: cells[5],
  };
}

function validatePlan(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split(/\r?\n/);
  const errors = [];

  if (!/^\s*>\s*Status:\s*/m.test(content)) {
    errors.push("Missing status line: '> Status: ...'");
  }

  if (!/^\s*##\s+Task Checklist\s*$/m.test(content)) {
    errors.push("Missing '## Task Checklist' section");
  }

  const headerRegex = /^\|\s*ID\s*\|\s*Task\s*\|\s*Status\s*\|\s*Verification\s*\|\s*Evidence\s*\|/m;
  if (!headerRegex.test(content)) {
    errors.push("Missing Task Checklist table header");
  }

  if (!/^\s*##\s+Finalization\s*$/m.test(content)) {
    errors.push("Missing '## Finalization' section");
  }

  if (!/^\s*###\s+Verification Summary\s*$/m.test(content)) {
    errors.push("Missing '### Verification Summary' section");
  }

  const outcomeMatch = content.match(/^\s*>\s*Outcome:\s*([A-Za-z ]+)\s*$/m);
  if (!outcomeMatch) {
    errors.push("Missing outcome line: '> Outcome: ...'");
  } else {
    const outcome = outcomeMatch[1].trim();
    if (!allowedOutcomes.has(outcome)) {
      errors.push(`Invalid outcome '${outcome}' (allowed: ${Array.from(allowedOutcomes).join(", ")})`);
    }
  }

  const headerIndex = lines.findIndex((line) => headerRegex.test(line));
  if (headerIndex !== -1) {
    const tableLines = findTableLines(lines, headerIndex);
    if (tableLines.length < 2) {
      errors.push("Task Checklist table has no task rows");
    } else {
      for (const line of tableLines.slice(1)) {
        if (/^\|\s*-+\s*\|/.test(line)) {
          continue;
        }
        const row = parseRow(line);
        if (!row) {
          errors.push(`Invalid task row: ${line}`);
          continue;
        }
        if (!row.id) {
          errors.push("Task row missing ID");
        }
        if (!row.task) {
          errors.push("Task row missing Task");
        }
        if (!allowedStatuses.has(row.status)) {
          errors.push(`Invalid task status '${row.status}' (allowed: ${Array.from(allowedStatuses).join(", ")})`);
        }
        if (row.status === "Done") {
          if (!row.verification) {
            errors.push("Done task missing Verification");
          }
          if (!row.evidence) {
            errors.push("Done task missing Evidence");
          }
        }
      }
    }
  }

  return errors;
}

function main() {
  if (!fs.existsSync(plansDir)) {
    return;
  }

  const planFiles = walkDir(plansDir);
  const failures = [];

  for (const filePath of planFiles) {
    const errors = validatePlan(filePath);
    if (errors.length > 0) {
      failures.push({ filePath, errors });
    }
  }

  if (failures.length > 0) {
    const lines = ["Plan verification failed:"];
    for (const failure of failures) {
      lines.push(`- ${path.relative(rootDir, failure.filePath)}`);
      for (const error of failure.errors) {
        lines.push(`  - ${error}`);
      }
    }
    // eslint-disable-next-line no-console
    console.error(lines.join("\n"));
    process.exit(1);
  }
}

main();
