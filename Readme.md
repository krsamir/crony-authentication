# crony-auth<br>

### Node.js authentication library based on `mysql` and `JWT`

**npm:**

```sh
npm install crony-auth
```

**yarn:**

```sh
yarn add crony-auth
```

## Getting started with crony-auth

```description
crony-auth is an authentication library currently serving on database dialect MySql and using JWT as authentication strategy out of the box.
This library provides methods to generate and validate tokens.
```

Here is an example on how to use it:

```jsx
const auth = Auth({
  host: "localhost",
  database: "database_name",
  user: "root",
  password: "root",
  connectionLog: true,
  tableName: "table_name",
  aliases: { email: "email", password: "passwords" },
});
```

#### Pass configuration required for database connectivity.

#### We have kept few column which are mandatory for authentication process i.e. `id`, `email`, `name`, `password`, `token`, `expiry`, `isactive`.

#### For renaming fields as per your requirement you can use aliases fields and rename it accordingly.

#### Get Final columns object after aliasing

```columns
  try {
    const columns = await auth.columns;
    console.log(columns);
  } catch (error) {
    console.log(error);
  }
```
