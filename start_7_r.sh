#!/bin/bash

#Clonamos repositorios del proyecto 
git clone https://github.com/UNIZAR-30226-2023-07/Backend
git clone https://github.com/UNIZAR-30226-2023-07/Frontend-Web

#Creamos estructura del directorio 
echo "
mkdir Dockerfiles
cd Dockerfiles
mkdir Servidor
mkdir Web

cd Servidor 
echo "FROM ubuntu:18.04 
  
 COPY conexion-gin /usr/local/bin/conexion-gin 
  
 ENTRYPOINT /usr/local/bin/conexion-gin 
  
 EXPOSE 3001" > Dockerfile

cd ..
cd Web 
echo "FROM node:18-alpine 
  
 COPY package.json . 
  
 RUN npm install --force 
  
 COPY . . 
  
 EXPOSE 3000 
  
 CMD ["npm", "start"]" > Dockerfile

cd ..
cd ..

#Copiamos ejecutables en contenedor

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
