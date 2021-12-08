-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 08-Dez-2021 às 03:52
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `adOptChallenge`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `box`
--

CREATE TABLE `box` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` varchar(35) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `box`
--

INSERT INTO `box` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'teste', 'Lorem ishashuaaaa', '2021-12-06 23:52:32', '2021-12-06 23:52:32');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cookies`
--

CREATE TABLE `cookies` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `formatId` int(11) NOT NULL,
  `flavorId` int(11) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(35) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cookies`
--

INSERT INTO `cookies` (`id`, `name`, `formatId`, `flavorId`, `price`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'teste', 1, 1, 1, 'My First Cookie', '2021-12-07 19:47:19', '2021-12-07 19:47:19'),
(3, 'teste3', 1, 1, 1, 'ccccccccccccccccccccccccccccccccccc', '2021-12-08 02:19:35', '2021-12-08 02:19:35');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cookiesbox`
--

CREATE TABLE `cookiesbox` (
  `id` int(11) NOT NULL,
  `cookieId` int(11) NOT NULL,
  `boxId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cookiesbox`
--

INSERT INTO `cookiesbox` (`id`, `cookieId`, `boxId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2021-12-07 23:59:41', '2021-12-07 23:59:41'),
(2, 1, 1, '2021-12-07 23:59:51', '2021-12-07 23:59:51');

-- --------------------------------------------------------

--
-- Estrutura da tabela `flavors`
--

CREATE TABLE `flavors` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `code` varchar(6) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `flavors`
--

INSERT INTO `flavors` (`id`, `name`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'teste', 'teste', '2021-12-06 23:26:41', '2021-12-06 23:26:41'),
(3, 'teste', 'testee', '2021-12-08 03:43:09', '2021-12-08 03:43:09');

-- --------------------------------------------------------

--
-- Estrutura da tabela `format`
--

CREATE TABLE `format` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `code` varchar(6) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `format`
--

INSERT INTO `format` (`id`, `name`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'teste', 'testee', '2021-12-06 12:52:03', '2021-12-06 12:52:03'),
(3, 'teste', 'teste', '2021-12-06 22:23:12', '2021-12-06 22:23:12'),
(4, 'teste', 'teste2', '2021-12-08 03:42:11', '2021-12-08 03:42:11');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `box`
--
ALTER TABLE `box`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `cookies`
--
ALTER TABLE `cookies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `formatId` (`formatId`),
  ADD KEY `flavorId` (`flavorId`);

--
-- Índices para tabela `cookiesbox`
--
ALTER TABLE `cookiesbox`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cookieId` (`cookieId`),
  ADD KEY `boxId` (`boxId`);

--
-- Índices para tabela `flavors`
--
ALTER TABLE `flavors`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `format`
--
ALTER TABLE `format`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `box`
--
ALTER TABLE `box`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `cookies`
--
ALTER TABLE `cookies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `cookiesbox`
--
ALTER TABLE `cookiesbox`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `flavors`
--
ALTER TABLE `flavors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `format`
--
ALTER TABLE `format`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cookies`
--
ALTER TABLE `cookies`
  ADD CONSTRAINT `FK_dee76a82c17b92e42d2233fa97c` FOREIGN KEY (`flavorId`) REFERENCES `flavors` (`id`),
  ADD CONSTRAINT `FK_e005f5ec8b3d9e0f3ec0265e04d` FOREIGN KEY (`formatId`) REFERENCES `format` (`id`);

--
-- Limitadores para a tabela `cookiesbox`
--
ALTER TABLE `cookiesbox`
  ADD CONSTRAINT `FK_abd498af1a56f901eee8be7cd75` FOREIGN KEY (`cookieId`) REFERENCES `cookies` (`id`),
  ADD CONSTRAINT `FK_cc7fe1cc33a5211afcf56d4e40b` FOREIGN KEY (`boxId`) REFERENCES `box` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
