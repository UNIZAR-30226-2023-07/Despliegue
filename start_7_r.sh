#!/bin/bash
#Borramos contenido anterior si existe 
rm init.sql &> /dev/null

#Paramos todos los contenedores
docker stop $(docker ps -q) &> /dev/null

#Clonamos repositorios del proyecto 
git clone https://github.com/UNIZAR-30226-2023-07/Backend
git clone https://github.com/UNIZAR-30226-2023-07/Frontend-web

#Copiamos esquema de la BD
cp ./Backend/Database/init.sql init.sql 

echo -n "Desea actualizar los contendores (solo Adrian puede hacer esto)? (Si/No): "
read respuesta
case $respuesta in
	S* | s*)
	#Pasamos el Dockerfile
	cp Dockerfile_Servidor ./Backend/Servidor/Dockerfile
	cp Dockerfile_Web ./Frontend-web/Frontend_Trabajo/Dockerfile

	#Compilamos el servidor y creamos imagen
	cd ./Backend/Servidor 

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
	;;
	*)
	echo "Ha decidido no actualizar los contenedores"
esac

#Borramos contenido
rm -rf Backend 
rm -rf Frontend-web 

echo -n "Desea desplegar el Servidor con docker compose? (Si/No): "
read respuesta
case $respuesta in
	S* | s*)
	#Iniciamos el despliegue
	docker-compose up
	if [ $? -ne 0 ] 
	then
		docker compose up
	fi 
	;;
	*)
	echo -n "Desplegar web? (Si/No): "
	read respuesta
	case $respuesta in
		S* | s*)
		docker start web_7_r
		if [ $? -ne 0 ] 
		then
			docker run --name web_7_r -p 3000:3000 815177/web_7_r 
		fi 	
		;;
		*)
		echo "Chao pues"
	esac
esac

