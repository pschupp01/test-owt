# Boat server Features

### Authentication

We use two types of authentication:
-- username / password for login
-- JWT Authentication to keep the session open

Password are stored in DB with Bcrypt encryption

`api/login` endpoint is used for username / password authentication, and will return a JWT token.

All other endpoints need a user to be authenticated for being queried

### Rest API

`GET /api/boats` return all boats

`GET /api/boats/:boatId` return the boat with id equals to :boatId

`DELETE /api/boats/:boatId` delete the boat with id equals to :boatId

`POST /api/boats/` add a new boat with data sent

`PUT /api/boats/:boatId` update the boat with id equals to :boatId, replace its data with sent data.
