#!/bin/bash

#Clonamos repositorios del proyecto 
git clone https://github.com/UNIZAR-30226-2023-07/Backend
git clone https://github.com/UNIZAR-30226-2023-07/Frontend-Web

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

cd ..
cd ..

cd ./Frontend-web

echo "FROM node:18-alpine 
  
 COPY package.json . 
  
 RUN npm install --force 
  
 COPY . . 
  
 EXPOSE 3000 
  
 CMD ["npm", "start"]" > Dockerfile

cd ..
cd ..

#Copiamos ejecutables en contenedor

CGO_ENABLE=0 go build ./Backend/Servidor/conexion-gin.go


#Actualizamos las imagenes del servidor y del frontend Web
cd ./Dockerfiles/Servidor
docker build . -t api_7_r:latest

cd ..

cd ./Web
docker build . -t web_7_r:latest

cd ..
cd ..

#Iniciamos el despliegue
docker compose up
