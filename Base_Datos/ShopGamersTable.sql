SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- Base de Datos ShopGamers
CREATE SCHEMA IF NOT EXISTS `shopgamers`;
USE `shopgamers` ;


-- Table `shopgamers`.`usuarios`
CREATE TABLE IF NOT EXISTS `shopgamers`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `numero` VARCHAR(10) NOT NULL,
  `correo` VARCHAR(200) NOT NULL,
  `contraseña` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) VISIBLE,
  UNIQUE INDEX `numero_UNIQUE` (`numero` ASC) VISIBLE)
ENGINE = InnoDB;



-- Table `shopgamers`.`productos`
CREATE TABLE IF NOT EXISTS `shopgamers`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `imagen1` VARCHAR(200) NOT NULL,
  `nombre` VARCHAR(70) NOT NULL,
  `descripcion1` VARCHAR(200) NOT NULL,
  `descripcion2` VARCHAR(2000) NOT NULL,
  `precio` INT NOT NULL,
  `imagen2` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;



-- Table `shopgamers`.`ventas`
CREATE TABLE IF NOT EXISTS `shopgamers`.`ventas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `precio_total` DOUBLE NOT NULL,
  `usuarios_id` INT NOT NULL,
  `productos_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuarios_id`, `productos_id`),
  INDEX `fk_ventas_usuarios_idx` (`usuarios_id` ASC) VISIBLE,
  INDEX `fk_ventas_productos1_idx` (`productos_id` ASC) VISIBLE,
  CONSTRAINT `fk_ventas_usuarios`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `shopgamers`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ventas_productos1`
    FOREIGN KEY (`productos_id`)
    REFERENCES `shopgamers`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;