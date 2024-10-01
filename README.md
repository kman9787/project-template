# project-template
Nice place to keep my templates

MYSQL setup:
	docker run --name mysql-default -p 3306:3306 -p 33060:33060 -e MYSQL_ROOT_HOST='%' -e MYSQL_ROOT_PASSWORD='password' -v /sharedfolders/Docker/Volumes/mysql/data:/var/lib/mysql -d mysql:latest 

CREATE DATABASE db_dev;

CREATE USER 'user_dev'@'%' IDENTIFIED WITH sha256_password BY 'user_dev';

GRANT ALL PRIVILEGES ON db_dev.* TO 'user_dev'@'%';

add client option to your mysql-connector allowPublicKeyRetrieval=true

Running tomcat with remote debugging

- catalina jpda start 

