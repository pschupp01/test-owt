# Custom configuration

You can configure the app from the `src/main/ressources/application.properties` file.

If no database configuration is detected, an embedded H2 database will be used.

A data initializer automatically start de `data.sql` script which will insert admin user and default boats in DB.
It can also be stopped in the config.

### `webapp.client.origin`

Used to configure the frontend origin for CORS policy
