-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: godivasastreria
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
  PRIMARY KEY (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Prendas interiores'),(2,'Prendas exteriores'),(3,'Calzado'),(4,'Accesorios');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `idcolor` int NOT NULL AUTO_INCREMENT,
  `nombrecolor` varchar(45) NOT NULL,
  PRIMARY KEY (`idcolor`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'Azul'),(2,'Amarillo'),(3,'Blanco'),(4,'Camello'),(5,'Café'),(6,'Dorado'),(7,'Gris'),(8,'Naranja'),(9,'Negro'),(10,'Marrón'),(11,'Rojo'),(12,'Verde'),(13,'Vino'),(14,'Azul/Rojo'),(15,'Azul/Café'),(16,'Carmesí');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
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
  `producto_idproducto` int NOT NULL,
  PRIMARY KEY (`compra_idcompra`,`producto_idproducto`),
  KEY `fk_compra_has_producto_producto1_idx` (`producto_idproducto`),
  KEY `fk_compra_has_producto_compra1_idx` (`compra_idcompra`),
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
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `id_material` int NOT NULL AUTO_INCREMENT,
  `nombre_material` varchar(45) NOT NULL,
  PRIMARY KEY (`id_material`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (1,'Piel'),(2,'Latón'),(3,'Piedra natural'),(4,'Acero Inoxidable'),(5,'Terciopelo');
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
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
  `descripcion` varchar(250) NOT NULL,
  `imagen` varchar(150) NOT NULL,
  `subcategoria_idsubcategoria` int NOT NULL,
  `subcategoria_categoria_idcategoria` int unsigned NOT NULL,
  PRIMARY KEY (`idproducto`,`subcategoria_idsubcategoria`,`subcategoria_categoria_idcategoria`),
  KEY `fk_producto_subcategoria1_idx` (`subcategoria_idsubcategoria`,`subcategoria_categoria_idcategoria`),
  CONSTRAINT `fk_producto_subcategoria1` FOREIGN KEY (`subcategoria_idsubcategoria`, `subcategoria_categoria_idcategoria`) REFERENCES `subcategoria` (`idsubcategoria`, `categoria_idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Calzón','Hecho con materiales de alta calidad ',' /assets/img/5.accesorios/Joyas/joya1.jpg',3,1),(2,'Calzón','Hecho con materiales de alta calidad ',' /assets/img/5.accesorios/Joyas/joya1.jpg',3,1),(3,'Calzón','Hecho con materiales de alta calidad ',' /assets/img/5.accesorios/Joyas/joya1.jpg',3,1);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_has_material`
--

DROP TABLE IF EXISTS `producto_has_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_has_material` (
  `producto_idproducto` int NOT NULL,
  `material_id_material` int NOT NULL,
  PRIMARY KEY (`producto_idproducto`,`material_id_material`),
  KEY `fk_producto_has_material_material1_idx` (`material_id_material`),
  KEY `fk_producto_has_material_producto1_idx` (`producto_idproducto`),
  CONSTRAINT `fk_producto_has_material_material1` FOREIGN KEY (`material_id_material`) REFERENCES `material` (`id_material`),
  CONSTRAINT `fk_producto_has_material_producto1` FOREIGN KEY (`producto_idproducto`) REFERENCES `producto` (`idproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_has_material`
--

LOCK TABLES `producto_has_material` WRITE;
/*!40000 ALTER TABLE `producto_has_material` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_has_material` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Jefe'),(2,'Empleado'),(3,'Administrador'),(4,'Cliente'),(5,'Jefe');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategoria`
--

DROP TABLE IF EXISTS `subcategoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategoria` (
  `idsubcategoria` int NOT NULL AUTO_INCREMENT,
  `nombre_subcategoria` varchar(45) NOT NULL,
  `categoria_idcategoria` int unsigned NOT NULL,
  PRIMARY KEY (`idsubcategoria`,`categoria_idcategoria`),
  KEY `fk_subcategoria_categoria1_idx` (`categoria_idcategoria`),
  CONSTRAINT `fk_subcategoria_categoria1` FOREIGN KEY (`categoria_idcategoria`) REFERENCES `categoria` (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategoria`
--

LOCK TABLES `subcategoria` WRITE;
/*!40000 ALTER TABLE `subcategoria` DISABLE KEYS */;
INSERT INTO `subcategoria` VALUES (1,'Camisas',1),(2,'Túnicas Interiores',1),(3,'Calzones',1),(4,'Winigas',1),(5,'Calzas',1),(6,'Túnicas Exteriores',2),(7,'Vestidos',2),(8,'Sayón',2),(9,'Jubón',2),(10,'Kaftan',2),(11,'Zapatos',3),(12,'Bonetes',4),(13,'Bolsos',4),(14,'Capirotes',4),(15,'Cinturones',4),(16,'Cofias',4),(17,'Joyas',4),(18,'Sombreros',4),(19,'Sporrans',4),(20,'Talegas',4),(21,'Zurrones',4),(22,'Camisas',1),(23,'Túnicas Interiores',1),(24,'Calzones',1),(25,'Winigas',1),(26,'Calzas',1),(27,'Túnicas Exteriores',2),(28,'Vestidos',2),(29,'Sayón',2),(30,'Jubón',2),(31,'Kaftan',2),(32,'Zapatos',3),(33,'Bonetes',4),(34,'Bolsos',4),(35,'Capirotes',4),(36,'Cinturones',4),(37,'Cofias',4),(38,'Joyas',4),(39,'Sombreros',4),(40,'Sporrans',4),(41,'Talegas',4),(42,'Zurrones',4),(43,'Camisas',1),(44,'Túnicas Interiores',1),(45,'Calzones',1),(46,'Winigas',1),(47,'Calzas',1),(48,'Túnicas Exteriores',2),(49,'Vestidos',2),(50,'Sayón',2),(51,'Jubón',2),(52,'Kaftan',2),(53,'Zapatos',3),(54,'Bonetes',4),(55,'Bolsos',4),(56,'Capirotes',4),(57,'Cinturones',4),(58,'Cofias',4),(59,'Joyas',4),(60,'Sombreros',4),(61,'Sporrans',4),(62,'Talegas',4),(63,'Zurrones',4);
/*!40000 ALTER TABLE `subcategoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talla`
--

DROP TABLE IF EXISTS `talla`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talla` (
  `idtalla` int NOT NULL AUTO_INCREMENT,
  `nombretalla` varchar(45) NOT NULL,
  PRIMARY KEY (`idtalla`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talla`
--

LOCK TABLES `talla` WRITE;
/*!40000 ALTER TABLE `talla` DISABLE KEYS */;
INSERT INTO `talla` VALUES (1,'CH'),(2,'M'),(3,'G'),(4,'XG'),(5,'Ajustable'),(6,'2'),(7,'3'),(8,'4'),(9,'5'),(10,'6'),(11,'7'),(12,'8'),(13,'9');
/*!40000 ALTER TABLE `talla` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talla_has_color`
--

DROP TABLE IF EXISTS `talla_has_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talla_has_color` (
  `talla_idtalla` int NOT NULL,
  `color_idcolor` int NOT NULL,
  PRIMARY KEY (`talla_idtalla`,`color_idcolor`),
  KEY `fk_talla_has_color_color1_idx` (`color_idcolor`),
  KEY `fk_talla_has_color_talla1_idx` (`talla_idtalla`),
  CONSTRAINT `fk_talla_has_color_color1` FOREIGN KEY (`color_idcolor`) REFERENCES `color` (`idcolor`),
  CONSTRAINT `fk_talla_has_color_talla1` FOREIGN KEY (`talla_idtalla`) REFERENCES `talla` (`idtalla`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talla_has_color`
--

LOCK TABLES `talla_has_color` WRITE;
/*!40000 ALTER TABLE `talla_has_color` DISABLE KEYS */;
/*!40000 ALTER TABLE `talla_has_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talla_has_material`
--

DROP TABLE IF EXISTS `talla_has_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talla_has_material` (
  `talla_idtalla` int NOT NULL,
  `material_id_material` int NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  PRIMARY KEY (`talla_idtalla`,`material_id_material`),
  KEY `fk_talla_has_material_material1_idx` (`material_id_material`),
  KEY `fk_talla_has_material_talla1_idx` (`talla_idtalla`),
  CONSTRAINT `fk_talla_has_material_material1` FOREIGN KEY (`material_id_material`) REFERENCES `material` (`id_material`),
  CONSTRAINT `fk_talla_has_material_talla1` FOREIGN KEY (`talla_idtalla`) REFERENCES `talla` (`idtalla`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talla_has_material`
--

LOCK TABLES `talla_has_material` WRITE;
/*!40000 ALTER TABLE `talla_has_material` DISABLE KEYS */;
/*!40000 ALTER TABLE `talla_has_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talla_has_producto`
--

DROP TABLE IF EXISTS `talla_has_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talla_has_producto` (
  `talla_idtalla` int NOT NULL,
  `producto_idproducto` int NOT NULL,
  PRIMARY KEY (`talla_idtalla`,`producto_idproducto`),
  KEY `fk_talla_has_producto_producto1_idx` (`producto_idproducto`),
  KEY `fk_talla_has_producto_talla1_idx` (`talla_idtalla`),
  CONSTRAINT `fk_talla_has_producto_producto1` FOREIGN KEY (`producto_idproducto`) REFERENCES `producto` (`idproducto`),
  CONSTRAINT `fk_talla_has_producto_talla1` FOREIGN KEY (`talla_idtalla`) REFERENCES `talla` (`idtalla`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talla_has_producto`
--

LOCK TABLES `talla_has_producto` WRITE;
/*!40000 ALTER TABLE `talla_has_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `talla_has_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Alex ','Sanchez','echoes1516@gmail.com\n ',29,' dorime','https://m.facebook.com/101589524668067/photos/a.101591138001239/101591114667908/?type=3&source=44\n ',3),(2,'Alex ','Sanchez','echoes1516@gmail.com\n ',29,' dorime','https://m.facebook.com/101589524668067/photos/a.101591138001239/101591114667908/?type=3&source=44\n ',3),(3,'Alex ','Sanchez','echoes1516@gmail.com\n ',29,' dorime','https://m.facebook.com/101589524668067/photos/a.101591138001239/101591114667908/?type=3&source=44\n ',3);
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

-- Dump completed on 2022-08-12 19:56:40
