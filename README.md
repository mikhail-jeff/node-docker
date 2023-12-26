<!-- *** Docker Commands -->

docker exec -it node-docker-node-app-container_1 bash
docker ps

<!-- *** PROD -->

docker compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d --build
docker compose -f docker-compose.yaml -f docker-compose.prod.yaml down -v

<!-- *** DEV -->

docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --build
docker compose -f docker-compose.yaml -f docker-compose.dev.yaml down -v
