# Aspire Integration Testing Reference

## Fixture Setup

- Use `DistributedApplicationTestingBuilder` and `IAsyncLifetime` to start and stop the AppHost.
- Prefer `app.CreateHttpClient(resourceName)` over hard-coded URLs.
- Keep fixtures shared with xUnit collections to avoid multiple AppHost instances.

## Readiness and Health

- Use health check polling instead of `Task.Delay`.
- Fail fast with clear timeouts when a resource is not healthy.

## UI and End-to-End Tests

- Use Playwright only when UI behavior is required and keep it in a separate test project.
- Ensure the UI test uses dynamic endpoint discovery from the running AppHost.

## CI and Debugging

- Run tests against real infrastructure in CI; avoid mocks for cross-service validation.
- Use the Aspire dashboard to inspect logs and health status when tests fail.
