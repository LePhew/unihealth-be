-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: unihealth_db
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` varchar(36) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `disabled` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_de87485f6489f5d0995f584195` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certification`
--

DROP TABLE IF EXISTS `certification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certification` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `valid_period_start` datetime NOT NULL,
  `valid_period_end` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certification`
--

LOCK TABLES `certification` WRITE;
/*!40000 ALTER TABLE `certification` DISABLE KEYS */;
/*!40000 ALTER TABLE `certification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `municipality`
--

DROP TABLE IF EXISTS `municipality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `municipality` (
  `id` varchar(36) NOT NULL,
  `provinceId` varchar(255) NOT NULL,
  `municipality` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipality`
--

LOCK TABLES `municipality` WRITE;
/*!40000 ALTER TABLE `municipality` DISABLE KEYS */;
INSERT INTO `municipality` VALUES ('1001','83','JIMANI'),('1002','83','DUVERGE'),('1003','83','LA DESCUBIERTA'),('1004','83','POSTRER RIO'),('1005','83','CRISTOBAL'),('1006','83','MELLA'),('101','1','SANTO DOMINGO CENTRO (DN)'),('1101','23','HIGUEY'),('1102','23','SAN RAFAEL DEL YUMA'),('1201','22','LA ROMANA'),('1202','22','GUAYMATE'),('1203','22','VILLA HERMOSA'),('1301','41','LA VEGA'),('1302','41','CONSTANZA'),('1303','41','JARABACOA'),('1304','41','JIMA ABAJO'),('1401','33','NAGUA'),('1402','33','CABRERA'),('1403','33','EL FACTOR'),('1404','33','RIO SAN JUAN'),('1501','62','MONTE CRISTI'),('1502','62','CASTAÃ‘UELAS'),('1503','62','GUAYUBIN'),('1504','62','LAS MATAS DE SANTA CRUZ'),('1505','62','PEPILLO SALCEDO'),('1506','62','VILLA VASQUEZ'),('1601','84','PEDERNALES'),('1602','84','OVIEDO'),('1701','94','BANI'),('1702','94','NIZAO'),('1801','57','PUERTO PLATA'),('1802','57','ALTAMIRA'),('1803','57','GUANANICO'),('1804','57','IMBERT'),('1805','57','LOS HIDALGOS'),('1806','57','LUPERON'),('1807','57','SOSUA'),('1808','57','VILLA ISABELA'),('1809','57','VILLA MONTELLANO'),('1901','34','SALCEDO'),('1902','34','TENARES'),('1903','34','VILLA TAPIA'),('2001','32','SAMANA'),('2002','32','SANCHEZ'),('2003','32','LAS TERRENAS'),('201','71','AZUA'),('202','71','LAS CHARCAS'),('203','71','LAS YAYAS DE VIAJAMA'),('204','71','PADRE LAS CASAS'),('205','71','PERALTA'),('206','71','SABANA YEGUA'),('207','71','PUEBLO VIEJO'),('208','71','TABARA ARRIBA'),('209','71','GUAYABAL'),('210','71','ESTEBANIA'),('2101','91','SAN CRISTOBAL'),('2102','91','SABANA GRANDE DE PALENQUE'),('2103','91','BAJOS DE HAINA'),('2104','91','CAMBITA GARABITOS'),('2105','91','VILLA ALTAGRACIA'),('2106','91','YAGUATE'),('2107','91','SAN GREGORIO DE NIGUA'),('2108','91','LOS CACAOS'),('2201','72','SAN JUAN'),('2202','72','BOHECHIO'),('2203','72','EL CERCADO'),('2204','72','JUAN DE HERRERA'),('2205','72','LAS MATAS DE FARFAN'),('2206','72','VALLEJUELO'),('2301','21','SAN PEDRO DE MACORIS'),('2302','21','LOS LLANOS'),('2303','21','RAMON SANTANA'),('2304','21','CONSUELO'),('2305','21','QUISQUEYA'),('2306','21','GUAYACANES'),('2401','43','COTUI'),('2402','43','CEVICOS'),('2403','43','FANTINO'),('2404','43','LA MATA'),('2501','51','SANTIAGO'),('2502','51','BISONO'),('2503','51','JANICO'),('2504','51','LICEY AL MEDIO'),('2505','51','SAN JOSE DE LAS MATAS'),('2506','51','TAMBORIL'),('2507','51','VILLA GONZALEZ'),('2508','51','PUÑAL'),('2509','51','SABANA IGLESIA'),('2601','64','SAN IGNACIO DE SABANETA'),('2602','64','VILLA LOS ALMACIGOS'),('2603','64','MONCION'),('2701','61','MAO'),('2702','61','ESPERANZA'),('2703','61','LAGUNA SALADA'),('2801','42','BONAO'),('2802','42','MAIMON'),('2803','42','PIEDRA BLANCA'),('2901','92','MONTE PLATA'),('2902','92','BAYAGUANA'),('2903','92','SABANA GRANDE DE BOYA'),('2904','92','YAMASA'),('2905','92','PERALVILLO'),('3001','25','HATO MAYOR'),('3002','25','SABANA DE LA MAR'),('3003','25','EL VALLE'),('301','82','NEIBA'),('302','82','GALVAN'),('303','82','TAMAYO'),('304','82','VILLA JARAGUA'),('305','82','LOS RIOS'),('3101','93','SAN JOSE DE OCOA'),('3102','93','SABANA LARGA'),('3103','93','RANCHO ARRIBA'),('3201','1','SANTO DOMINGO ESTE'),('3202','1','SANTO DOMINGO OESTE'),('3203','1','SANTO DOMINGO NORTE'),('3204','1','BOCA CHICA'),('3205','1','SAN ANTONIO DE GUERRA'),('3206','1','LOS ALCARRIZOS'),('3207','1','PEDRO BRAND'),('401','81','BARAHONA'),('402','81','CABRAL'),('403','81','ENRIQUILLO'),('404','81','PARAISO'),('405','81','VICENTE NOBLE'),('406','81','EL PEÑON'),('407','81','LA CIENAGA'),('408','81','FUNDACION'),('409','81','LAS SALINAS'),('410','81','POLO'),('411','81','JAQUIMEYES'),('501','63','DAJABON'),('502','63','LOMA DE CABRERA'),('503','63','PARTIDO'),('504','63','RESTAURACION'),('505','63','EL PINO'),('601','31','SAN FRANCISCO DE MACORIS'),('602','31','ARENOSO'),('603','31','CASTILLO'),('604','31','PIMENTEL'),('605','31','VILLA RIVA'),('606','31','LAS GUARANAS'),('607','31','EUGENIO MARIA DE HOSTOS'),('701','73','COMENDADOR'),('702','73','BANICA'),('703','73','EL LLANO'),('704','73','HONDO VALLE'),('705','73','PEDRO SANTANA'),('706','73','JUAN SANTIAGO'),('801','24','EL SEIBO'),('802','24','MICHES'),('901','56','MOCA'),('902','56','CAYETANO GERMOSEN'),('903','56','GASPAR HERNANDEZ'),('904','56','JAMAO AL NORTE');
/*!40000 ALTER TABLE `municipality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_pic`
--

DROP TABLE IF EXISTS `profile_pic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_pic` (
  `id` varchar(36) NOT NULL,
  `data` longblob NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_pic`
--

LOCK TABLES `profile_pic` WRITE;
/*!40000 ALTER TABLE `profile_pic` DISABLE KEYS */;
/*!40000 ALTER TABLE `profile_pic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provinces`
--

DROP TABLE IF EXISTS `provinces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provinces` (
  `id` varchar(36) NOT NULL,
  `province` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_0d386f5e90677e90e4a067c137` (`province`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provinces`
--

LOCK TABLES `provinces` WRITE;
/*!40000 ALTER TABLE `provinces` DISABLE KEYS */;
INSERT INTO `provinces` VALUES ('71','Azua'),('82','Bahoruco'),('81','Barahona'),('63','Dajabónn'),('1','Distrito Nacional'),('31','Duarte'),('24','El Seibo'),('73','Elías Piña'),('56','Espaillat'),('25','Hato Mayor'),('83','Independencia'),('23','La Altagracia'),('22','La Romana'),('41','La Vega'),('33','Maria Trinidad Sánchez'),('42','Monseñor Nouel'),('62','Monte Cristi'),('92','Monte Plata'),('94','Peravia'),('84','Perdenales'),('57','Puerto Plata'),('34','Salcedo'),('32','Samaná'),('91','San Cristóbal'),('93','San José de Ocoa'),('72','San Juan de la Maguana'),('21','San Pedro de Macorís'),('43','Sánchez Ramirez'),('51','Santiago'),('64','Santiago Rodríguez'),('61','Valverde');
/*!40000 ALTER TABLE `provinces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `id` varchar(36) NOT NULL,
  `title` varchar(50) NOT NULL,
  `bloodType` varchar(3) NOT NULL,
  `provinceId` varchar(255) NOT NULL DEFAULT '0',
  `municipalityId` varchar(255) NOT NULL DEFAULT '0',
  `address` varchar(120) NOT NULL,
  `responseDate` varchar(10) NOT NULL,
  `contact` varchar(14) NOT NULL,
  `note` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_061fc32fc257495203335004502` (`provinceId`),
  KEY `FK_34412c6e9c1db062f58723de91f` (`municipalityId`),
  CONSTRAINT `FK_061fc32fc257495203335004502` FOREIGN KEY (`provinceId`) REFERENCES `provinces` (`id`),
  CONSTRAINT `FK_34412c6e9c1db062f58723de91f` FOREIGN KEY (`municipalityId`) REFERENCES `municipality` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES ('060078ff-a63f-44e5-829c-d1881cc40f59','aaa','A+','1','3201','asdasdasdasd','2021-04-18','(123) 123-1231',NULL),('ae233793-1b10-452f-ba53-57d336605951','asdasdasda','AB+','82','302','asdadasdasd','2021-04-18','(123) 123-1231','aasdasdsed'),('ca9f45f7-49ee-4e5d-a367-ea0632a247fd','asdasdasdasd','B+','1','3201','aasdasd','2021-04-18','(123) 123-1231','asdasd');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(36) NOT NULL,
  `firebase_id` varchar(255) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `age` int NOT NULL,
  `identity_document` varchar(255) NOT NULL,
  `identity_document_type_id` int NOT NULL,
  `bloody_type` enum('A+','A-','B+','B-','AB+','AB-','O+','O-') NOT NULL,
  `phone` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(50) NOT NULL,
  `donor` enum('1','0') NOT NULL,
  `certification_id` varchar(255) NOT NULL,
  `profile_pic_id` varchar(255) NOT NULL,
  `disabled` tinyint NOT NULL,
  `notifications` varchar(255) NOT NULL,
  `created_date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `last_updated_date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-18 23:01:12
