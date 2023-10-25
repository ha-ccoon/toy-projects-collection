#### `forRoot()`

- Method supports all the configuration properties exposed by the DataSource constructor from the TypeORM package.
- In addistion, there are several extra configuration properties described below.

| `retryAttempts`    | Number of attempts to connect to the database (default:`10`)          |
| :------------------- | ----------------------------------------------------------------------- |
| `retryDelay`       | Delay between connection retry attempts (ms) (default:`3000`)         |
| `autoLoadEntities` | If `true`, entities will be loaded automatically (default: `false`) |

#### `forFeature()`

- Method to define which repositories are registed in the current scope.
- With that in place, we can inject the `UsersRepository` into the `UsersService` using the `@InjectRepository()` decorator:
