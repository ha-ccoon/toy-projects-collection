## `src` Stuructures

![1696310401883](image/architecture/1696310401883.png)

- app.controller.spec.ts
- app.controller.ts
- app.module.ts
- app.service.ts
- main.ts
  - The entry file of the application which uses the core function `NestFactory` to create a Nest application instance.

#### NestFactory

- exposes a few static methods that allow creating an application instance.
- `create()`: returns an application object, which fulfills the `INestApplication`

## Controllers

Controllers are responsible for handling incoming **requests** and returning **responses** to the client.

![1696311888254](image/architecture/1696311888254.png)

- A controller's purpose is to receive specific requests for the application.

  - The **routing** mechanism controls which controller receives which requests.
  - Frequently, each controller has more than one route, and different routes can perform different actions.
- In order to create a basic controller, we use classes and **decorators**.

  - Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).

> For quickly creating a CRUD controller with the validation built-in, you may use the CLI's CRUD generator.
>
> `nest g resource [name]`
