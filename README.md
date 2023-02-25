# routing-app

## Running locally

Run Valhalla using Docker:

```
cd valhalla
docker-compose up --build
```

You can send a test request to ensure it is working:

```
curl http://localhost:8002/route --data '{"locations":[{"lat":49.856413,"lon":-119.471660},{"lat":49.85901360673831,"lon":-119.49025777469902}],"costing":"auto","directions_options":{"units":"miles"}}' | jq '.'
```

Run the API:

```
cd api
yarn run dev
```

Run the client:

```
cd web-app
yarn start
```
