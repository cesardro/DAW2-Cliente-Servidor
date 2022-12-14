CREATE USER 'logRegConBD'@'localhost' IDENTIFIED VIA mysql_native_password USING '***';
GRANT USAGE ON *.* TO 'logRegConBD'@'localhost' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 
MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
CREATE DATABASE IF NOT EXISTS `logRegConBD`;GRANT ALL PRIVILEGES ON `logRegConBD`.* TO 'logRegConBD'@'localhost';

CREATE TABLE logRegConBD (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    pswd varchar(255) NOT NULL,
    email varchar(255) NOT NULL
);