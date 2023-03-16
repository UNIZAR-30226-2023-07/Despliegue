#!/bin/bash
#Borramos contenido anterior si existe 
rm init.sql &> /dev/null

#Paramos todos los contenedores
docker stop $(docker ps -q) &> /dev/null

echo -n "Desea actualizar los contendores (solo Adrian puede hacer esto)? (Si/No): "
read respuesta
case $respuesta in
	S* | s*)
	#Clonamos repositorios del proyecto 
	git clone https://github.com/UNIZAR-30226-2023-07/Backend
	git clone https://github.com/UNIZAR-30226-2023-07/Frontend-web

	#Pasamos el Dockerfile
	cp Dockerfile_Servidor ./Backend/Servidor/Dockerfile
	cp Dockerfile_Web ./Frontend-web/Frontend_Trabajo/Dockerfile

	#Compilamos el servidor y creamos imagen
	cd ./Backend/Servidor 

	CGO_ENABLE=0 go build conexion-gin.go

	docker build . -t 815177/api_7_r:latest

	docker push 815177/api_7_r

	cd ..
	cd ..

	#Creamos imagen del frontend web
	cd ./Frontend-web/Frontend_Trabajo

	docker build . -t 815177/web_7_r:latest

	docker push 815177/web_7_r

	cd ..
	cd ..

	#Copiamos esquema de la BD
	cp ./Backend/Database/init.sql init.sql

	#Borramos contenido anterior si existe 
	rm -rf Backend 
	rm -rf Frontend-web 
	;;
	*)
	echo "Ha decidido no actualizar los contenedores"
esac

echo -n "Desea desplegar rabino_7_reinas? (Si/No): "
read respuesta
case $respuesta in
	S* | s*)
	#Iniciamos el despliegue
	docker compose up
	;;
	*)
	echo "Chao pescao"
esac

