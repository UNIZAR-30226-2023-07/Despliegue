#!/bin/bash
#Borramos contenido anterior si existe 
rm init.sql 

#Paramos todos los contenedores
docker stop $(docker ps -q)

#Clonamos repositorios del proyecto 
git clone https://github.com/UNIZAR-30226-2023-07/Backend
git clone https://github.com/UNIZAR-30226-2023-07/Frontend-web

#Pasamos el Dockerfile
cp Dockerfile_Servidor ./Backend/Servidor/Dockerfile
cp Dockerfile_Web ./Frontend-web/Frontend_Trabajo/Dockerfile

#Compilamos el servidor y creamos imagen
cd ./Backend/Servidor 

CGO_ENABLE=0 go build conexion-gin.go

docker build . -t api_7_r:latest

cd ..
cd ..

#Creamos imagen del frontend web
cd ./Frontend-web/Frontend_Trabajo

docker build . -t web_7_r:latest

cd ..
cd ..

#Copiamos esquema de la BD
cp ./Backend/Database/init.sql init.sql

#Borramos contenido anterior si existe 
rm -rf Backend 
rm -rf Frontend-web 

#Iniciamos el despliegue
docker compose up
