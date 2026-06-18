-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: blog_management
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `date` text NOT NULL,
  `description` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (3,'Future Trends.','uploads\\1781690715588.png','15 May 2026 ','Technologies like AI, cloud computing, blockchain, and IoT are shaping the future. This article highlights the latest trends to watch.','2026-06-17 10:05:15','2026-06-17 16:20:28'),(8,'Future Trends in Technology ','uploads\\1781757768799.png','15 May 2026 ','Technologies like AI, cloud computing, blockchain, and IoT are shapin\r\n','2026-06-18 04:42:48','2026-06-18 04:52:42'),(9,'Cybersecurity Tips Everyone Should Know ','uploads\\1781757808748.png','06 May 2026 ','Protect your online accounts by using strong passwords, enabling two-factor authentication, and avoiding suspicious websites and emails.\r\n','2026-06-18 04:43:28','2026-06-18 05:03:25'),(10,'Introduction to MERN Stack Development','uploads\\1781758914264.png','10 June 2026','The MERN stack combines MongoDB, Express.js, React, and Node.js to build modern full-stack web applications. It enables developers to use JavaScript across both frontend and backend, making development faster and more efficient.','2026-06-18 05:01:54','2026-06-18 05:01:54'),(11,'Why React is Popular in Frontend Development','uploads\\1781758941802.png','12 June 2026','React simplifies UI development through reusable components and a virtual DOM. Its performance, flexibility, and large ecosystem make it one of the most preferred frontend libraries today.','2026-06-18 05:02:21','2026-06-18 05:02:21'),(12,'Getting Started with Node.js','uploads\\1781758968329.png','14 June 2026','Node.js allows developers to build fast and scalable server-side applications using JavaScript. Its event-driven architecture is ideal for APIs, real-time applications, and microservices.','2026-06-18 05:02:48','2026-06-18 05:02:48'),(13,'MySQL Best Practices for Beginners','uploads\\1781758995400.png','18 June 2026','MySQL is one of the most widely used relational databases. Following proper database design, indexing, and query optimization techniques improves application performance and scalability.','2026-06-18 05:03:15','2026-06-18 05:03:15');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-18 10:47:26
