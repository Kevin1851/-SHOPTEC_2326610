-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2022 a las 17:41:31
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.28

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
  `PKidCarrito` int(10) NOT NULL,
  `cantidadPdto` int(10) NOT NULL,
  `idUsuarioC` int(10) NOT NULL,
  `idProductoC` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(6, 2, 21, 8),
(7, 2, 22, 8),
(8, 2, 23, 8),
(9, 2, 24, 8),
(10, 2, 24, 8),
(11, 2, 24, 9),
(12, 2, 24, 9),
(13, 2, 24, 10),
(14, 2, 25, 8),
(15, 2, 25, 8),
(16, 2, 25, 9),
(17, 2, 25, 9),
(18, 2, 25, 10),
(19, 2, 26, 8),
(20, 2, 26, 8),
(21, 2, 26, 9),
(22, 2, 26, 9),
(23, 2, 26, 10),
(24, 2, 27, 8),
(25, 2, 27, 8),
(26, 2, 27, 9),
(27, 2, 27, 9),
(28, 2, 27, 10),
(29, 2, 28, 8),
(30, 2, 28, 8),
(31, 2, 28, 9),
(32, 2, 28, 9),
(33, 2, 28, 10),
(34, 2, 29, 9),
(35, 2, 29, 8),
(36, 3, 29, 10),
(37, 2, 30, 9),
(38, 2, 30, 8),
(39, 3, 30, 10),
(40, 2, 31, 9),
(41, 2, 31, 8),
(42, 3, 31, 10);

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
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `PK_codigoProducto` int(10) NOT NULL,
  `nombreProducto` varchar(50) NOT NULL,
  `referencia` varchar(30) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `imgProducto` varchar(50) NOT NULL,
  `tipoProducto` enum('Nuevo','Usado') NOT NULL,
  `estadoProducto` enum('revision','cancelado','ok') DEFAULT NULL,
  `precioCompra` decimal(10,2) DEFAULT NULL,
  `precioVenta` decimal(10,3) NOT NULL,
  `stock` int(10) NOT NULL,
  `FK_idCategoria` int(10) NOT NULL,
  `FK_idEmpresa` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`PK_codigoProducto`, `nombreProducto`, `referencia`, `descripcion`, `imgProducto`, `tipoProducto`, `estadoProducto`, `precioCompra`, `precioVenta`, `stock`, `FK_idCategoria`, `FK_idEmpresa`) VALUES
(8, 'tecno camon 17', '1111', 'Delicado y un poco pequeño', '1666058137072iphone.png', 'Nuevo', 'cancelado', '1232.00', '0.000', 2, 2, 202020),
(9, 'ewew', '-1', 'wedsfer', 'product02.png', 'Nuevo', 'revision', '2332.00', '23.000', 4, 2, 202020),
(10, 'remid', '2032932', 'Delicado y un poco pequeño', 'product07.png', 'Nuevo', 'cancelado', '2323223.00', '9999999.999', 5, 2, 202020),
(11, 'ensayo', '121212', 'ensayando ', 'product06.png', 'Nuevo', 'ok', '10000.00', '20000.000', 10, 4, 121212);

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
  `TipoUsuario` enum('Administrador','Propietario','Cliente') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`PK_id_usuario`, `identificacion`, `nombreUsuario`, `fechaNacimiento`, `estadoUsuario`, `contrasenia`, `correo`, `telefono`, `TipoUsuario`) VALUES
(11, 1078746186, 'Juan Fernando Yuco Rojas', '2022-10-12', 'activo', '123456', 'juanrojitass0418@gmail.com', '3126796273', ''),
(12, 1076903377, 'Juan Felipe Moreno Ramirez', '2003-04-07', 'activo', '123456', 'hsdgbgushj@cj', '3134165315', ''),
(13, 9999999, 'Juan Yuco ', '2022-09-16', 'activo', '3243', '4re@@jkgf', '43545', ''),
(14, 12323, 'juan', '2022-09-15', 'activo', '132243', '@skdcjks,m', '31223', ''),
(15, 1078746185, '', '0000-00-00', '', '', '', '', ''),
(16, 1223323, 'rerrer', '2022-10-10', 'activo', '12345', 'juanrojitass0418@j.com', '1232343434', 'Administrador'),
(17, 1078746188, 'carlos', '0000-00-00', 'activo', '123456', 'juanrojitass0418@j.com', '3126796273', ''),
(18, 0, '', '0000-00-00', NULL, ',,', '', 'undefined', 'Administrador'),
(20, 123433434, '1222323323', '0000-00-00', NULL, '12345', 'lola', 'undefined', 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `PK_idCompra` int(10) NOT NULL,
  `fechaCompra` date NOT NULL,
  `estadoVenta` enum('Cancelado','Aprobado','Pendiente','') NOT NULL,
  `FK_idUsuario` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`PK_idCompra`, `fechaCompra`, `estadoVenta`, `FK_idUsuario`) VALUES
(20, '2022-11-11', 'Pendiente', 11),
(21, '2022-11-11', 'Pendiente', 11),
(22, '2022-11-11', 'Pendiente', 11),
(23, '2022-11-11', 'Pendiente', 11),
(24, '2022-11-11', 'Pendiente', 11),
(25, '2022-11-11', 'Pendiente', 11),
(26, '2022-11-11', 'Pendiente', 11),
(27, '2022-11-11', 'Pendiente', 11),
(28, '2022-11-11', 'Pendiente', 11),
(29, '2022-11-11', 'Pendiente', 11),
(30, '2022-11-11', 'Pendiente', 11),
(31, '2022-11-11', 'Pendiente', 11);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`PKidCarrito`);

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
  MODIFY `PKidCarrito` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `PK_idCategoria` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `detalleventa`
--
ALTER TABLE `detalleventa`
  MODIFY `PK_idDetalleCompra` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `PK_codigoProducto` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `PK_id_usuario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `PK_idCompra` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalleventa`
--
ALTER TABLE `detalleventa`
  ADD CONSTRAINT `produ_Detalle` FOREIGN KEY (`FK_idProducto`) REFERENCES `producto` (`PK_codigoProducto`),
  ADD CONSTRAINT `venta_Detalle` FOREIGN KEY (`FK_idCompra`) REFERENCES `venta` (`PK_idCompra`);

--
-- Filtros para la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`FK_propietario`) REFERENCES `usuario` (`PK_id_usuario`);

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
