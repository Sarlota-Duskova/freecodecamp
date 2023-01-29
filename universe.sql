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

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

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
-- Name: comets; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.comets (
    name character varying(30),
    popularity integer NOT NULL,
    size integer NOT NULL,
    quantity numeric,
    destroy boolean,
    born boolean,
    comets_id integer NOT NULL,
    star_id integer
);


ALTER TABLE public.comets OWNER TO freecodecamp;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    name character varying(30),
    galaxy_id integer NOT NULL,
    popularity integer NOT NULL,
    size integer NOT NULL,
    description text,
    planet_id integer
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    name character varying(30),
    moon_id integer NOT NULL,
    popularity integer NOT NULL,
    size integer NOT NULL,
    description text,
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    name character varying(30),
    planet_id integer NOT NULL,
    popularity integer NOT NULL,
    size integer NOT NULL,
    description text,
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    name character varying(30),
    star_id integer NOT NULL,
    popularity integer NOT NULL,
    size integer NOT NULL,
    description text,
    comets_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Data for Name: comets; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.comets VALUES ('Brutus', 1, 10, NULL, NULL, NULL, 1, NULL);
INSERT INTO public.comets VALUES ('Stark', 2, 20, NULL, NULL, NULL, 2, NULL);
INSERT INTO public.comets VALUES ('Heilly', 3, 30, NULL, NULL, NULL, 3, NULL);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES ('Oreo', 1, 1, 10, NULL, NULL);
INSERT INTO public.galaxy VALUES ('Bueno', 2, 2, 20, NULL, NULL);
INSERT INTO public.galaxy VALUES ('Dely', 3, 3, 30, NULL, NULL);
INSERT INTO public.galaxy VALUES ('Twist', 4, 4, 40, NULL, NULL);
INSERT INTO public.galaxy VALUES ('Snicker', 5, 5, 50, NULL, NULL);
INSERT INTO public.galaxy VALUES ('Milk', 6, 6, 60, NULL, NULL);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES ('leden', 1, 1, 10, NULL, NULL);
INSERT INTO public.moon VALUES ('unor', 2, 2, 20, NULL, NULL);
INSERT INTO public.moon VALUES ('brezen', 3, 3, 30, NULL, NULL);
INSERT INTO public.moon VALUES ('duben', 4, 4, 40, NULL, NULL);
INSERT INTO public.moon VALUES ('kveten', 5, 5, 50, NULL, NULL);
INSERT INTO public.moon VALUES ('cerven', 6, 6, 60, NULL, NULL);
INSERT INTO public.moon VALUES ('cervenec', 7, 7, 70, NULL, NULL);
INSERT INTO public.moon VALUES ('srpen', 8, 8, 80, NULL, NULL);
INSERT INTO public.moon VALUES ('zari', 9, 9, 90, NULL, NULL);
INSERT INTO public.moon VALUES ('rijen', 10, 10, 100, NULL, NULL);
INSERT INTO public.moon VALUES ('listopad', 11, 11, 110, NULL, NULL);
INSERT INTO public.moon VALUES ('prosinec', 12, 12, 120, NULL, NULL);
INSERT INTO public.moon VALUES ('January', 13, 13, 130, NULL, NULL);
INSERT INTO public.moon VALUES ('February', 14, 14, 140, NULL, NULL);
INSERT INTO public.moon VALUES ('March', 15, 15, 150, NULL, NULL);
INSERT INTO public.moon VALUES ('April', 16, 16, 160, NULL, NULL);
INSERT INTO public.moon VALUES ('May', 17, 17, 170, NULL, NULL);
INSERT INTO public.moon VALUES ('June', 18, 18, 180, NULL, NULL);
INSERT INTO public.moon VALUES ('July', 19, 19, 190, NULL, NULL);
INSERT INTO public.moon VALUES ('August', 20, 20, 200, NULL, NULL);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES ('Merkur', 1, 1, 10, NULL, NULL);
INSERT INTO public.planet VALUES ('Venuse', 2, 2, 20, NULL, NULL);
INSERT INTO public.planet VALUES ('Zeme', 3, 3, 30, NULL, NULL);
INSERT INTO public.planet VALUES ('Mars', 4, 4, 40, NULL, NULL);
INSERT INTO public.planet VALUES ('Jupiter', 5, 5, 50, NULL, NULL);
INSERT INTO public.planet VALUES ('Saturn', 6, 6, 60, NULL, NULL);
INSERT INTO public.planet VALUES ('Uran', 7, 7, 70, NULL, NULL);
INSERT INTO public.planet VALUES ('Neptun', 8, 8, 80, NULL, NULL);
INSERT INTO public.planet VALUES ('Pluto', 9, 9, 90, NULL, NULL);
INSERT INTO public.planet VALUES ('Triton', 10, 10, 100, NULL, NULL);
INSERT INTO public.planet VALUES ('Ariel', 11, 11, 110, NULL, NULL);
INSERT INTO public.planet VALUES ('Titania', 12, 12, 120, NULL, NULL);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES ('Blizenec', 1, 1, 10, NULL, NULL);
INSERT INTO public.star VALUES ('Lev', 2, 2, 20, NULL, NULL);
INSERT INTO public.star VALUES ('Strelec', 3, 3, 30, NULL, NULL);
INSERT INTO public.star VALUES ('Panna', 4, 4, 40, NULL, NULL);
INSERT INTO public.star VALUES ('Kozoroh', 5, 5, 50, NULL, NULL);
INSERT INTO public.star VALUES ('Beran', 6, 6, 60, NULL, NULL);


--
-- Name: comets comets_comets_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.comets
    ADD CONSTRAINT comets_comets_id_key UNIQUE (comets_id);


--
-- Name: comets comets_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.comets
    ADD CONSTRAINT comets_pkey PRIMARY KEY (comets_id);


--
-- Name: galaxy galaxy_galaxy_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_galaxy_id_key UNIQUE (galaxy_id);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_moon_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_moon_id_key UNIQUE (moon_id);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: planet planet_planet_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_planet_id_key UNIQUE (planet_id);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: star star_star_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_star_id_key UNIQUE (star_id);


--
-- Name: comets comets_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.comets
    ADD CONSTRAINT comets_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: galaxy galaxy_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_comets_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_comets_id_fkey FOREIGN KEY (comets_id) REFERENCES public.comets(comets_id);


--
-- PostgreSQL database dump complete
--

