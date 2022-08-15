-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idcategoria` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(45) NOT NULL,
  `nombre_subcategoria` varchar(45) NOT NULL,
  PRIMARY KEY (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Accesorios','Joyería'),(2,'Accesorios','Talegas'),(3,'Accesorios','Zurrones'),(4,'Accesorios','Sporrans'),(5,'Accesorios','Cinturones'),(6,'Accesorios','Bolsos'),(7,'Accesorios','Sombreros'),(8,'Accesorios','Bonetes'),(9,'Accesorios','Capirotes'),(10,'Accesorios','Cofias'),(11,'Prendas interiores','Camisas'),(12,'Prendas interiores','Túnicas'),(13,'Prendas interiores','Calzones'),(14,'Prendas interiores','Winigas'),(15,'Prendas Exteriores','Túnicas'),(16,'Prendas Exteriores','Vestidos'),(17,'Prendas Exteriores','Sayón'),(18,'Prendas Exteriores','Jubón'),(19,'Calzado','Calzado'),(20,'Accesorios','Joyería'),(21,'Accesorios','Talegas'),(22,'Accesorios','Zurrones'),(23,'Accesorios','Sporrans'),(24,'Accesorios','Cinturones'),(25,'Accesorios','Bolsos'),(26,'Accesorios','Sombreros'),(27,'Accesorios','Bonetes'),(28,'Accesorios','Capirotes'),(29,'Accesorios','Cofias');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compra`
--

DROP TABLE IF EXISTS `compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compra` (
  `idcompra` int NOT NULL AUTO_INCREMENT,
  `nombre_cliente` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `idproducto` int NOT NULL,
  `monto` double NOT NULL,
  `forma_pago` varchar(45) NOT NULL,
  `idusuario` varchar(45) NOT NULL,
  PRIMARY KEY (`idcompra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra`
--

LOCK TABLES `compra` WRITE;
/*!40000 ALTER TABLE `compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compra_has_producto`
--

DROP TABLE IF EXISTS `compra_has_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compra_has_producto` (
  `compra_idcompra` int NOT NULL,
  `compra_fecha` date NOT NULL,
  `producto_idproducto` int NOT NULL,
  PRIMARY KEY (`compra_idcompra`,`producto_idproducto`),
  KEY `fk_compra_has_producto_producto1_idx` (`producto_idproducto`),
  CONSTRAINT `fk_compra_has_producto_compra1` FOREIGN KEY (`compra_idcompra`) REFERENCES `compra` (`idcompra`),
  CONSTRAINT `fk_compra_has_producto_producto1` FOREIGN KEY (`producto_idproducto`) REFERENCES `producto` (`idproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra_has_producto`
--

LOCK TABLES `compra_has_producto` WRITE;
/*!40000 ALTER TABLE `compra_has_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra_has_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idproducto` int NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(45) NOT NULL,
  `talla` varchar(45) NOT NULL,
  `material` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `precio` double NOT NULL,
  `categoria_idcategoria` int unsigned NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `imagen` varchar(150) NOT NULL,
  PRIMARY KEY (`idproducto`,`categoria_idcategoria`),
  KEY `fk_producto_categoria1_idx` (`categoria_idcategoria`),
  CONSTRAINT `fk_producto_categoria1` FOREIGN KEY (`categoria_idcategoria`) REFERENCES `categoria` (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Anillo Gosvinta','Ajustable','Latón','Dorado',350,1,'Precioso anillo de estulo visigodo, realizado en latón, ambientado en el siglo VI.','/assets/img/5.accesorios/Joyas/joya1.jpg'),(2,'Anillo Gosvinta','Ajustable','Latón','Dorado',350,1,'Precioso anillo de estulo visigodo, realizado en latón, ambientado en el siglo VI.','/assets/img/5.accesorios/Joyas/joya1.jpg');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `idrol` int NOT NULL AUTO_INCREMENT,
  `nombre_rol` varchar(45) NOT NULL,
  PRIMARY KEY (`idrol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `tipousuario` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `edad` int NOT NULL,
  `contraseña` varchar(150) NOT NULL,
  `imagen` varchar(150) NOT NULL,
  `rol_idrol` int NOT NULL,
  PRIMARY KEY (`idusuario`,`rol_idrol`),
  KEY `fk_usuario_rol1_idx` (`rol_idrol`),
  CONSTRAINT `fk_usuario_rol1` FOREIGN KEY (`rol_idrol`) REFERENCES `rol` (`idrol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_has_compra`
--

DROP TABLE IF EXISTS `usuario_has_compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_has_compra` (
  `usuario_idusuario` int NOT NULL,
  `compra_idcompra` int NOT NULL,
  PRIMARY KEY (`usuario_idusuario`,`compra_idcompra`),
  KEY `fk_usuario_has_compra_compra1_idx` (`compra_idcompra`),
  KEY `fk_usuario_has_compra_usuario1_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_usuario_has_compra_compra1` FOREIGN KEY (`compra_idcompra`) REFERENCES `compra` (`idcompra`),
  CONSTRAINT `fk_usuario_has_compra_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_has_compra`
--

LOCK TABLES `usuario_has_compra` WRITE;
/*!40000 ALTER TABLE `usuario_has_compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_has_compra` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-09 16:20:20
