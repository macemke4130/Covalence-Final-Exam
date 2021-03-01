CREATE SCHEMA `mace_final_exam` ;

create user 'final_exam_user'@'localhost' identified by 'root';
GRANT ALL ON mace_final_exam.* TO 'final_exam_user'@'localhost';

USE mace_final_exam;

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `price` decimal(5,2) NOT NULL DEFAULT '0.00',
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_categoryid_category_id_idx` (`categoryid`),
  CONSTRAINT `fk_categoryid_category_id` FOREIGN KEY (`categoryid`) REFERENCES `Categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `role` varchar(25) DEFAULT 'admin',
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
);
select * from users;

CREATE TABLE `Tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` text,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_userid_users_id_idx` (`userid`),
  CONSTRAINT `fk_userid_users_id` FOREIGN KEY (`userid`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO `Categories` VALUES (1,'Science Fiction'),(2,'Fantasy'),(3,'Political Fiction'),(4,'Thriller'),(5,'Mystery');
INSERT INTO `Books` VALUES (2,2,'The Hobbit','J.R.R. Tolkien',9.99,'2019-02-26 13:06:09'),(3,3,'1984','George Orwell',7.49,'2019-02-26 13:08:52'),(4,4,'The Outsider','Stephen King',20.63,'2019-02-26 13:11:07'),(5,5,'The Adventures of Sherlock Holmes','Sin Arthur Conan Doyle',8.99,'2019-02-26 13:12:33'),(11,1,'The Martian','Andy Weir',12.99,'2019-02-27 13:28:04');
