---
name: aspire-integration-testing
description: >
  Use this skill whenever implementing or reviewing cross-component integration
  tests or smoke tests for .NET Aspire applications to ensure distributed system
  integrity.
---

# .NET Aspire Integration Testing

## Intent
Ensure that distributed components in an Aspire application interact correctly using real infrastructure and dynamic service discovery. This replaces mocks for service-to-service communication and infrastructure dependencies.

---

## When to Use
- Testing service-to-service communication.
- Verifying infrastructure connectivity (SQL, Redis, RabbitMQ) in an Aspire context.
- Implementing "E2E" or "Smoke Tests" that target local Aspire orchestration.
- Validating health check aggregation across the distributed application.

---

## Precondition Failure Signal
- Integration is tested via mocks that don't reflect real network/infrastructure behaviour.
- Service URLs or connection strings are hard-coded in tests.
- Tests fail due to port conflicts or race conditions during service startup.
- Cross-component failure modes are ignored.

---

## Postcondition Success Signal
- Tests use `DistributedApplicationTestingBuilder` to orchestrate real components.
- Resource endpoints and connection strings are discovered dynamically at runtime.
- Tests wait for services to be healthy before execution.
- Cross-component user journeys or smoke tests pass against a real Aspire AppHost.

---

## Process
1. **Source Review**: Inspect the `AppHost` to understand the distributed application structure and its resources.
2. **Implementation**: 
   - Create an `AspireFixture` (using `IAsyncLifetime`) that starts the `DistributedApplication`.
   - Use `app.CreateHttpClient(resourceName)` or `app.GetConnectionStringAsync(resourceName)` in tests.
   - Implement health check polling to ensure readiness.
3. **Verification**: Execute the integration tests and verify they pass against the orchestrated environment.
4. **Documentation**: Document the integration testing setup and any environment-specific requirements.
5. **Review**: Platform/DevOps Engineer and Tech Lead review the fixture lifecycle and endpoint discovery logic.

---

## Example Test / Validation
- **Pattern**: Basic Service Call.
  1. Start `AppHost`.
  2. Discover `webapp` URL.
  3. GET `/health` via `HttpClient`.
  4. Assert `200 OK`.

---

## Common Red Flags / Guardrail Violations
- Using hard-coded ports (e.g., `localhost:5000`).
- Skipping `DisposeAsync` for the distributed application.
- Using `Task.Delay` instead of health check polling for readiness.
- Tests that require a pre-started environment (tests should be self-contained).

---

## Recommended Review Personas
- **Platform/DevOps Engineer** – validates orchestration, port management, and CI compatibility.
- **Tech Lead** – validates that tests cover meaningful integration paths.

---

## Skill Priority
P1 – Quality & Correctness

---

## Conflict Resolution Rules
- Aspire integration testing is preferred over mocking for P1/P0 integration requirements.
- Use `xUnit` collections to prevent multiple `AppHost` instances from conflicting.

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
Always wait for health checks. Aspire makes it easy to use real SQL, Redis, etc., so avoid mocking them in this tier.
