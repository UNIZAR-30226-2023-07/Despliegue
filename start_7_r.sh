#!/bin/bash


#Actualizamos las imagenes del servidor y del frontend Web
cd ./Dockerfiles/Servidor
docker build . -t api_7_r:latest

cd ./Dockerfiles/Web 
docker build . -t web_7_r:latest

#Iniciamos el despliegue
docker compose up
