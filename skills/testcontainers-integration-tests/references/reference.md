# Testcontainers Integration Testing Reference

## Container Lifecycle

- Use `IAsyncLifetime` to start and dispose containers reliably.
- Define wait strategies to ensure containers are ready before tests run.

## Ports and Isolation

- Use random port binding to avoid conflicts.
- Prefer shared fixtures for expensive containers, and clean data between tests.

## Migrations and Seed Data

- Run migrations as part of fixture setup.
- Seed only the data needed for each test case.

## CI Notes

- Ensure CI runners have Docker available.
- Keep images small and cached where possible.

## Common Failures

- Startup timeouts: increase wait time or adjust the readiness check.
- Port conflicts: avoid fixed host ports.
