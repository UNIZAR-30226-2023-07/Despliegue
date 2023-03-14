#!/bin/bash
#Borramos contenido anterior si existe 
rm -rf Backend 
rm -rf Frontend-web 
rm init.sql 
docker rm $(docker ls -aq)

#Clonamos repositorios del proyecto 
git clone https://github.com/UNIZAR-30226-2023-07/Backend
git clone https://github.com/UNIZAR-30226-2023-07/Frontend-web

#Creamos despliegue de docker compose
 
echo "version: "3.8" 
  
 services: 
   api: 
     container_name: api_7_r 
     restart: always 
     ports: 
       - "3001:3001" 
     image: api_7_r 
      
   postgres: 
     container_name: postgres_7_r 
     image: postgres 
     restart: always 
     ports: 
       - "5432:5432" 
     environment: 
       - DATABASE_HOST=127.0.0.1 
       - POSTGRES_USER=frances 
       - POSTGRES_PASSWORD=1234 
       - POSTGRES_DB=Pro_Soft 
     volumes: 
       - ./init.sql:/docker-entrypoint-initdb.d/init.sql 
        
   pgadmin: 
     container_name: pgadmin_7_r 
     image: dpage/pgadmin4 
     environment: 
       PGADMIN_DEFAULT_EMAIL: "frances@allen.es" 
       PGADMIN_DEFAULT_PASSWORD: "1234" 
     ports: 
       - "80:80" 
     depends_on: 
       - postgres  
        
   web: 
     container_name: web_7_r 
     restart: always 
     ports: 
       - "3000:3000" 
     image: web_7_r" > docker-compose.yml

cd ./Backend/Servidor 

echo "FROM ubuntu:18.04 
  
 COPY conexion-gin /usr/local/bin/conexion-gin 
  
 ENTRYPOINT /usr/local/bin/conexion-gin 
  
 EXPOSE 3001" > Dockerfile

CGO_ENABLE=0 go build conexion-gin.go

docker build . -t api_7_r:latest

cd ..
cd ..

cd ./Frontend-web/Frontend_Trabajo

echo "FROM node:18-alpine 
  
 COPY package.json . 
  
 RUN npm install --force 
  
 COPY . . 
  
 EXPOSE 3000 
  
 CMD ["npm", "start"]" > Dockerfile

docker build . -t web_7_r:latest

cd ..
cd ..

#Copiamos esquema de la BD
cp ./Backend/Database/init.sql init.sql

#Iniciamos el despliegue
docker compose up
