#!/bin/bash

#Clonamos repositorios del proyecto 
git clone https://github.com/UNIZAR-30226-2023-


#Creamos estructura del directorio 
mkdir Dockerfiles
cd Dockerfiles

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
