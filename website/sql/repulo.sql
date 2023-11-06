-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2023. Okt 18. 12:06
-- Kiszolgáló verziója: 5.7.17-log
-- PHP verzió: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `repulok`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `repulo`
--

CREATE TABLE `repulo` (
  `id` int(11) NOT NULL,
  `repulonev` text COLLATE utf8_hungarian_ci NOT NULL,
  `repulotipus` text COLLATE utf8_hungarian_ci NOT NULL,
  `maxseb` int(11) NOT NULL,
  `kapacitas` int(11) NOT NULL,
  `maxtav` int(11) NOT NULL,
  `gyartaskezdet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `repulo`
--

INSERT INTO `repulo` (`id`, `repulonev`, `repulotipus`, `maxseb`, `kapacitas`, `maxtav`, `gyartaskezdet`) VALUES
(0, 'Boeing', '737', 908, 141, 6300, 1966),
(1, 'Boeing', '787', 945, 330, 15750, 2007),
(2, 'Boeing', '777', 950, 550, 11120, 1994),
(3, 'Boeing', '747', 930, 605, 14320, 1970),
(4, 'Boeing', '757', 850, 239, 7222, 1981),
(5, 'Boeing', '717', 822, 117, 3820, 1997),
(6, 'Boeing', '767', 851, 269, 12200, 1981),
(7, 'Airbus', 'A220', 871, 121, 6390, 2012),
(8, 'Airbus', 'A310', 892, 220, 9540, 1981),
(9, 'Airbus', 'A320', 829, 136, 5700, 1987),
(10, 'Airbus', 'A321', 871, 230, 6100, 1993),
(11, 'Airbus', 'A330', 871, 406, 11760, 1992),
(12, 'Airbus', 'A340', 914, 420, 16670, 1991),
(13, 'Airbus', 'A350', 950, 440, 16100, 2011),
(14, 'Airbus', 'A350', 903, 853, 14800, 2003);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `repulo`
--
ALTER TABLE `repulo`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
