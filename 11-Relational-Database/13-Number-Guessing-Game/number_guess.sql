--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE number_guess;
--
-- Name: number_guess; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE number_guess WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE number_guess OWNER TO freecodecamp;

\connect number_guess

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: guess; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.guess (
    username character varying(22),
    games_played integer,
    best_game integer
);


ALTER TABLE public.guess OWNER TO freecodecamp;

--
-- Data for Name: guess; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.guess VALUES ('sarlot', 2, 4);
INSERT INTO public.guess VALUES ('user_1675952647439', 2, 267);
INSERT INTO public.guess VALUES ('user_1675952647440', 5, 289);
INSERT INTO public.guess VALUES ('Pavel', 2, 2);
INSERT INTO public.guess VALUES ('user_1675952727797', 2, 221);
INSERT INTO public.guess VALUES ('user_1675952727798', 5, 380);


--
-- PostgreSQL database dump complete
--

