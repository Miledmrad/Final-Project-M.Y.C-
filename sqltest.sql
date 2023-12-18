-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.33 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table final_project.anti-virus
CREATE TABLE IF NOT EXISTS `anti-virus` (
  `virus_id` int NOT NULL AUTO_INCREMENT,
  `virus_name` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `virus_price` float DEFAULT NULL,
  PRIMARY KEY (`virus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table final_project.anti-virus: ~5 rows (approximately)
INSERT INTO `anti-virus` (`virus_id`, `virus_name`, `virus_price`) VALUES
	(1, 'Avast Ransomware Decryption Tools 2023 Free Download', 1222),
	(2, 'Smadav Pro 2023 Free Download', 300),
	(3, 'IObit Malware Fighter Pro 2023 Free Download', 600),
	(4, 'Auslogics Anti-Malware 2023 Free Download', 800),
	(5, 'GridinSoft Anti-Malware 2022 Free Download', 400);

-- Dumping structure for table final_project.multimedia
CREATE TABLE IF NOT EXISTS `multimedia` (
  `media_id` int NOT NULL AUTO_INCREMENT,
  `media_name` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci,
  `media_price` double DEFAULT NULL,
  PRIMARY KEY (`media_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table final_project.multimedia: ~5 rows (approximately)
INSERT INTO `multimedia` (`media_id`, `media_name`, `media_price`) VALUES
	(1, 'ProPresenter 2023 Free Download', 200),
	(2, 'HitPaw Video Object Remover 2023 Free Download', 300),
	(3, 'WinCam 2023 Free Download', 150),
	(4, 'Zortam Mp3 Media Studio Pro 2023 Free Download', 400),
	(5, 'ColorPicker Max 2023 Free Download', 350);

-- Dumping structure for table final_project.operating_system
CREATE TABLE IF NOT EXISTS `operating_system` (
  `operating_id` int NOT NULL AUTO_INCREMENT,
  `operating_name` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `operating_price` float DEFAULT NULL,
  PRIMARY KEY (`operating_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table final_project.operating_system: ~5 rows (approximately)
INSERT INTO `operating_system` (`operating_id`, `operating_name`, `operating_price`) VALUES
	(1, 'Windows 10 April 2023 Free Download', 250),
	(2, 'Windows 11 April 2023 Free Download', 130),
	(3, 'Windows 7 Professional SP1 Multilingual APRIL 2023 Free Download', 340),
	(4, 'Windows 7 SP1 March 2023 Free Download', 200),
	(5, 'Windows 8.1 Pro JAN 2023 Free Download', 400);

-- Dumping structure for table final_project.tutorial
CREATE TABLE IF NOT EXISTS `tutorial` (
  `tutorial_id` int NOT NULL AUTO_INCREMENT,
  `tutorial_name` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci,
  `tutorial_price` float DEFAULT NULL,
  PRIMARY KEY (`tutorial_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table final_project.tutorial: ~5 rows (approximately)
INSERT INTO `tutorial` (`tutorial_id`, `tutorial_name`, `tutorial_price`) VALUES
	(1, 'How to Find IT Jobs in the US', 100),
	(2, '4 Methods to Fix “MP4 No Sound” Issue', 200),
	(3, 'How to Screenshot on Dell Computer?', 150),
	(4, 'How to Monitor Your Child’s Phone Stealthily', 300),
	(5, '5 Simple Problem-Solving Tools', 350);

-- Dumping structure for table final_project.user
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_username` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `user_first_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `user_last_name` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(50) DEFAULT NULL,
  `user_address` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `user_dob` date DEFAULT NULL,
  `role` enum('user','admin') DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table final_project.user: ~10 rows (approximately)
INSERT INTO `user` (`user_id`, `user_username`, `user_first_name`, `user_last_name`, `user_email`, `user_password`, `user_address`, `user_dob`, `role`) VALUES
	(39, 'test', 'charbel', 'tetst', 'tetst@test.com', 'test', 'test', '2023-11-29', NULL),
	(40, 'here01', 'here', 'here', 'here@here.com', '1234567890', 'here', '2023-11-27', NULL),
	(41, 'test', 'test', 'test', 'test@email.com', 'test', 'testchnata', '2023-11-30', NULL),
	(42, 'test', 'test', 'rtset1', 'test@test.com', 'test123', 'chnata', '2023-12-06', NULL),
	(43, '123456', 'test123', 'test', 'test', '12334', 'chnata', '2023-12-06', NULL),
	(44, 'jeff2378', 'ramiz', 'trad', 'test83@test.com', '1234de56', 'chnata', '2000-05-14', NULL),
	(45, 'jeff2378', 'jamil', 'trad', 'test83@test.com', '1234de56', 'chnata', '2000-05-14', NULL),
	(46, 'tayson', 'tsyson', 'jeffry', 'tayson@.com', '123456', 'deirbella', '2023-12-11', NULL),
	(47, 'elias', 'elias', 'mikhael', 'mikhael123@est.com', '1234', 'chnata', '2023-11-29', NULL),
	(48, 'elias', 'Elias', 'Mikheail', 'eliasmk@test.com', '12345', 'Amioun', '2009-05-03', NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
