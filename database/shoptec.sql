-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2022 a las 14:27:36
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `shoptec`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `PKIdCarrito` int(10) NOT NULL,
  `cantidadPdto` int(10) NOT NULL,
  `FkIdPdto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`PKIdCarrito`, `cantidadPdto`, `FkIdPdto`) VALUES
(132, 1, 8),
(133, 6, 8),
(134, 6, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `PK_idCategoria` int(10) NOT NULL,
  `nombreCategoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`PK_idCategoria`, `nombreCategoria`) VALUES
(1, 'celularess'),
(2, 'computadores'),
(3, 'table'),
(4, 'ensayar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalleventa`
--

CREATE TABLE `detalleventa` (
  `PK_idDetalleCompra` int(10) NOT NULL,
  `cantidadProducto` int(10) NOT NULL,
  `FK_idCompra` int(10) NOT NULL,
  `FK_idProducto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detalleventa`
--

INSERT INTO `detalleventa` (`PK_idDetalleCompra`, `cantidadProducto`, `FK_idCompra`, `FK_idProducto`) VALUES
(1, 2, 1, 10),
(2, 4, 2, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `PK_nitEmpresa` int(100) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `ubicacion` varchar(50) NOT NULL,
  `FK_propietario` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`PK_nitEmpresa`, `nombre`, `ubicacion`, `FK_propietario`) VALUES
(0, 'ensayo', 'yamboro', 13),
(2334, 'Shoptecsdd', 'pitalito-huiladsd', 12),
(121212, 'ensayo', 'yamboro', 13),
(202020, 'Shoptecsdd', 'pitalito-huiladsd', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen`
--

CREATE TABLE `imagen` (
  `PK_idImagen` int(11) NOT NULL,
  `nombreImagen` varchar(50) NOT NULL,
  `FK_idProducto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `imagen`
--

INSERT INTO `imagen` (`PK_idImagen`, `nombreImagen`, `FK_idProducto`) VALUES
(3, '1666057508904product07.png', 8),
(4, '1666056902793product02.png', 9),
(5, '1666057508904product07.png', 10),
(6, '1666054667584product01.png', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `PK_codigoProducto` int(10) NOT NULL,
  `nombreProducto` varchar(50) NOT NULL,
  `referencia` varchar(30) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `tipoProducto` enum('Nuevo','Usado') NOT NULL,
  `estadoProducto` enum('revision','cancelado','ok') DEFAULT NULL,
  `precioCompra` decimal(10,2) DEFAULT NULL,
  `precioVenta` decimal(10,3) NOT NULL,
  `stock` int(10) NOT NULL,
  `FK_idCategoria` int(30) NOT NULL,
  `FK_idEmpresa` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`PK_codigoProducto`, `nombreProducto`, `referencia`, `descripcion`, `tipoProducto`, `estadoProducto`, `precioCompra`, `precioVenta`, `stock`, `FK_idCategoria`, `FK_idEmpresa`) VALUES
(8, 'tecno camon 17', '1111', 'Delicado y un poco pequeño', 'Nuevo', 'cancelado', '1232.00', '0.000', 10, 2, 202020),
(9, 'ewew', '-1', 'wedsfer', 'Nuevo', 'revision', '2332.00', '23.000', 10, 2, 202020),
(10, 'remid', '2032932', 'Delicado y un poco pequeño', 'Nuevo', 'cancelado', '2323223.00', '9999999.999', 10, 2, 202020),
(11, 'ensayo', '121212', 'ensayando ', 'Nuevo', 'ok', '10000.00', '20000.000', 10, 4, 121212);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `PK_id_usuario` int(10) NOT NULL,
  `identificacion` int(10) NOT NULL,
  `nombreUsuario` varchar(50) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `estadoUsuario` enum('activo','inactivo') DEFAULT NULL,
  `contrasenia` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` varchar(13) DEFAULT NULL,
  `TipoUsuario` enum('Administrador','Asesor','Cliente') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`PK_id_usuario`, `identificacion`, `nombreUsuario`, `fechaNacimiento`, `estadoUsuario`, `contrasenia`, `correo`, `telefono`, `TipoUsuario`) VALUES
(11, 1078746186, 'Juan Fernando Yuco Rojas', '2022-10-12', 'activo', '123456', 'juan@gmail.com', '3126796273', 'Asesor'),
(12, 1076903377, 'Juan Felipe Moreno Ramirez', '2003-04-07', 'activo', '123456', 'hsdgbgushj@cj', '3134165315', ''),
(13, 9999999, 'Juan Yuco ', '2022-09-16', 'activo', '3243', '4re@@jkgf', '43545', ''),
(14, 12323, 'juan', '2022-09-15', 'activo', '132243', '@skdcjks,m', '31223', 'Asesor'),
(15, 1078746185, '', '0000-00-00', '', '', '', '', ''),
(16, 1223323, 'rerrer', '2022-10-10', 'activo', '12345', 'juanrojitass0418@j.com', '1232343434', 'Administrador'),
(17, 1078746188, 'carlos', '0000-00-00', 'activo', '123456', 'juanrojitass0418@j.com', '3126796273', 'Asesor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `PK_idCompra` int(10) NOT NULL,
  `fechaCompra` date NOT NULL,
  `FK_idUsuario` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `venta`
--



--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`PKIdCarrito`),
  ADD KEY `carritoPdto` (`FkIdPdto`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`PK_idCategoria`),
  ADD KEY `cate_prod_L` (`PK_idCategoria`);

--
-- Indices de la tabla `detalleventa`
--
ALTER TABLE `detalleventa`
  ADD PRIMARY KEY (`PK_idDetalleCompra`),
  ADD KEY `comp_Detalle_L` (`FK_idCompra`),
  ADD KEY `prod_comp_L` (`FK_idProducto`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`PK_nitEmpresa`),
  ADD UNIQUE KEY `PK_nitEmpresa` (`PK_nitEmpresa`),
  ADD KEY `empr_usu_L` (`FK_propietario`);

--
-- Indices de la tabla `imagen`
--
ALTER TABLE `imagen`
  ADD PRIMARY KEY (`PK_idImagen`),
  ADD KEY `img_Usu` (`FK_idProducto`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`PK_codigoProducto`),
  ADD KEY `cate_Producto_L` (`FK_idCategoria`),
  ADD KEY `empr_Producto_L` (`FK_idEmpresa`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`PK_id_usuario`),
  ADD UNIQUE KEY `identificacion` (`identificacion`),
  ADD KEY `tipo_Usuario` (`TipoUsuario`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`PK_idCompra`),
  ADD KEY `usua_comp_L` (`FK_idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `PKIdCarrito` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `PK_idCategoria` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `detalleventa`
--
ALTER TABLE `detalleventa`
  MODIFY `PK_idDetalleCompra` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `imagen`
--
ALTER TABLE `imagen`
  MODIFY `PK_idImagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `PK_codigoProducto` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `PK_id_usuario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `PK_idCompra` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carritoPdto` FOREIGN KEY (`FkIdPdto`) REFERENCES `producto` (`PK_codigoProducto`);

--
-- Filtros para la tabla `detalleventa`
--
ALTER TABLE `detalleventa`
  ADD CONSTRAINT `venta_Detalle` FOREIGN KEY (`FK_idCompra`) REFERENCES `venta` (`PK_idCompra`),
  ADD CONSTRAINT `produ_Detalle` FOREIGN KEY (`FK_idProducto`) REFERENCES `producto` (`PK_codigoProducto`);
  

--
-- Filtros para la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`FK_propietario`) REFERENCES `usuario` (`PK_id_usuario`);

--
-- Filtros para la tabla `imagen`
--
ALTER TABLE `imagen`
  ADD CONSTRAINT `imagen_ibfk_1` FOREIGN KEY (`FK_idProducto`) REFERENCES `producto` (`PK_codigoProducto`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `cate_Producto` FOREIGN KEY (`FK_idCategoria`) REFERENCES `categoria` (`PK_idCategoria`),
  ADD CONSTRAINT `empr_Producto` FOREIGN KEY (`FK_idEmpresa`) REFERENCES `empresa` (`PK_nitEmpresa`);

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `usua_comp` FOREIGN KEY (`FK_idUsuario`) REFERENCES `usuario` (`PK_id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
