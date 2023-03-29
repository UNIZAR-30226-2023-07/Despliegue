#!/bin/bash

#Clonamos repositorios del proyecto 
git clone https://github.com/UNIZAR-30226-2023-07/Backend
git clone https://github.com/UNIZAR-30226-2023-07/Frontend-web

#Copiamos esquema de la BD
cp ./Backend/Database/init.sql init.sql 

#Pasamos el Dockerfile
cp Dockerfile_Servidor ./Backend/Servidor/Dockerfile
cp Dockerfile_Web ./Frontend-web/Frontend_Trabajo/Dockerfile

echo -n "Desea actualizar el contendor del servidor? (Si/No): "
read respuesta
case $respuesta in
	S* | s*)
	#Compilamos el servidor y creamos imagen
	cd ./Backend/Servidor 

	docker build . -t 815177/api_7_r:latest

	docker push 815177/api_7_r

	cd ..
	cd ..

	;;
	*)
esac

echo -n "Desea actualizar el contendor de la web? (Si/No): "
	read respuesta
	case $respuesta in
	S* | s*)
	#Creamos imagen del frontend web
	cd ./Frontend-web/Frontend_Trabajo

	docker build . -t 815177/web_7_r:latest

	docker push 815177/web_7_r

	cd ..
	cd ..

	;;
	*)
esac

#Borramos contenido
rm -rf Backend 
rm -rf Frontend-web 

echo -n "Desea desplegar todo el proyecto junto? (Si/No): "
read respuesta
case $respuesta in
	S* | s*)
	#Iniciamos el despliegue
	cp docker-compose1.yml docker-compose.yml 
	docker-compose up
	rm docker-compose.yml &> /dev/null
	
	;;
	*)
	echo -n "Desea desplegar el Servidor? (Si/No): "
	read respuesta
	case $respuesta in
		S* | s*)
		#Iniciamos el despliegue
		cp docker-compose2.yml docker-compose.yml 
		docker-compose up
		rm docker-compose.yml &> /dev/null
	
		;;
		*)
		echo -n "Desea desplegar web? (Si/No): "
		read respuesta
		case $respuesta in
			S* | s*)
			#Iniciamos el despliegue
			cp docker-compose3.yml docker-compose.yml 
			docker-compose up
			rm docker-compose.yml &> /dev/null
			
			;;
			*)
			echo "Chao pues"
		esac
	esac
esac

rm init.sql &> /dev/null
