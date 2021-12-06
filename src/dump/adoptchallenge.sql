-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06-Dez-2021 às 17:04
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
-- Banco de dados: `adoptchallenge`
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
(1, 'teste', 'testee', '2021-12-06 12:52:03', '2021-12-06 12:52:03');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `cookies`
--
ALTER TABLE `cookies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `cookiesbox`
--
ALTER TABLE `cookiesbox`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `flavors`
--
ALTER TABLE `flavors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `format`
--
ALTER TABLE `format`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cookies`
--
ALTER TABLE `cookies`
  ADD CONSTRAINT `cookies_ibfk_1` FOREIGN KEY (`formatId`) REFERENCES `format` (`id`),
  ADD CONSTRAINT `cookies_ibfk_2` FOREIGN KEY (`flavorId`) REFERENCES `flavors` (`id`);

--
-- Limitadores para a tabela `cookiesbox`
--
ALTER TABLE `cookiesbox`
  ADD CONSTRAINT `cookiesbox_ibfk_1` FOREIGN KEY (`cookieId`) REFERENCES `cookies` (`id`),
  ADD CONSTRAINT `cookiesbox_ibfk_2` FOREIGN KEY (`boxId`) REFERENCES `box` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
