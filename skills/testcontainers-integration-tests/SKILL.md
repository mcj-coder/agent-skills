---
name: testcontainers-integration-tests
description: >
  Use this skill whenever implementing or reviewing integration tests that
  require real infrastructure (databases, queues, caches) for single-component
  validation.
---

# Testcontainers Integration Testing

## Intent
Ensure that a component's interaction with its immediate infrastructure (PostgreSQL, Redis, RabbitMQ) is validated against real services running in Docker, rather than mocks or in-memory substitutes. This provides high confidence in data access, migrations, and infrastructure-specific behaviour.

---

## When to Use
- Testing data access layers against actual database engines (e.g., PostgreSQL instead of EF InMemory).
- Verifying database migrations and schema constraints.
- Testing message queue publishing/consumption.
- Validating caching behaviour with real Redis.
- Implementing "ComponentE2E" tests as defined in the 5-tier strategy.

---

## Precondition Failure Signal
- Database logic is "tested" via mocks that ignore SQL syntax, constraints, or triggers.
- In-memory providers are used that don't match production database behaviour.
- Infrastructure-related bugs are only caught in CI or production.
- Tests depend on a shared, pre-configured database instance.

---

## Postcondition Success Signal
- Tests use Testcontainers to spin up isolated, fresh instances of required services.
- Container lifecycle (start/stop) is managed automatically by the test fixture.
- Dynamic port mapping is used to avoid host-level conflicts.
- Tests demonstrate successful interaction with real infrastructure (e.g., records persisted to real SQL).

---

## Process
1. **Source Review**: Identify the infrastructure dependencies of the component under test.
2. **Implementation**: 
   - Define a `Testcontainers` builder with the appropriate Docker image.
   - Configure random port binding and wait strategies.
   - Implement `IAsyncLifetime` to start the container and initialize connection strings.
3. **Verification**: Run the tests and confirm they interact correctly with the containerized service.
4. **Documentation**: Document the required Docker images and any special configuration.
5. **Review**: Platform/DevOps Engineer and Tech Lead review the container configuration and disposal logic.

---

## Example Test / Validation
- **Pattern**: PostgreSQL Repository Test.
  1. Start PostgreSQL container.
  2. Run migrations.
  3. Insert record.
  4. Query record and assert values match.

---

## Common Red Flags / Guardrail Violations
- Hard-coding host ports (e.g., `.WithPortBinding(5432, 5432)`).
- Forgetting to dispose of containers in `DisposeAsync`.
- Tests that are slow because containers are recreated for every single test (use `ICollectionFixture` to reuse where appropriate).
- Using Testcontainers for cross-component testing (use `aspire-integration-testing` instead).

---

## Recommended Review Personas
- **Platform/DevOps Engineer** – validates Docker usage and CI compatibility.
- **Tech Lead** – validates that tests cover real-world infrastructure edge cases.

---

## Skill Priority
P1 – Quality & Correctness

---

## Conflict Resolution Rules
- Testcontainers are preferred over mocks for "ComponentE2E" / Infrastructure testing.
- If multiple infrastructure components are involved across services, prefer `aspire-integration-testing`.

---

## Conceptual Dependencies
- quality-gate-enforcement
- test-driven-development

---

## Classification
Core
Operational

---

## Notes
Testcontainers ensures "ComponentE2E" tests remain co-located with the component code and run reliably in any Docker-enabled environment.
