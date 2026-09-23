-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-09-2026 a las 19:26:23
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crepusculo_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `anio` int(4) NOT NULL,
  `director` varchar(100) NOT NULL,
  `duracion` int(3) NOT NULL,
  `sinopsis` text NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `titulo`, `anio`, `director`, `duracion`, `sinopsis`, `imagen`) VALUES
(1, 'Crepusculo', 2008, 'Catherine Hardwicke', 122, 'Bella Swan se muda a Forks y conoce a Edward Cullen, un joven que pertenece a una familia de vampiros', 'crepusculo.jpg'),
(2, 'Luna Nueva', 2009, 'Chris Weitz', 130, 'Después de que Edward se aleja de Bella, ella fortalece su amistad con Jacob Black y descubre nuevos secretos del mundo sobrenatural', 'luna-nueva.jpg'),
(3, 'Eclipse', 2010, 'David Slade', 124, 'Bella debe elegir entre Edward y Jacob mientras una nueva amenaza pone en peligro a Forks', 'eclipse.jpg'),
(4, 'Amanecer Parte 1', 2011, 'Bill Condon', 117, 'Bella y Edward comienzan una nueva etapa juntos mientras enfrentan las consecuencias de una decisión que cambia sus vidas', 'amanecer-parte-1.jpg'),
(5, 'Amanecer Parte 2', 2012, 'Bill Condon', 115, 'Bella comienza su nueva vida mientras los Cullen se preparan para enfrentar una amenaza de los Volturi', 'amanecer-parte-2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `tipo_usuario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `contrasena`, `tipo_usuario`) VALUES
(1, 'Bella Swan', 'bella@crepusculo.com', 'bella123', 'usuario'),
(2, 'Edward Cullen', 'edward@crepusculo.com', 'edward123', 'usuario'),
(3, 'Alice Cullen', 'alice@crepusculo.com', 'alice123', 'usuario'),
(4, 'Jacob Black', 'jacob@crepusculo.com', 'jacob123', 'usuario'),
(5, 'Carlisle Cullen', 'carlisle@crepusculo.com', 'carlisle123', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
