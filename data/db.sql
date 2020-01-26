--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

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

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Daily_task; Type: TABLE; Schema: public; Owner: alexandra
--

CREATE TABLE public."Daily_task" (
    week_task_id integer NOT NULL,
    daily_task_id integer NOT NULL,
    general_task_id integer NOT NULL,
    submission_time timestamp without time zone NOT NULL,
    status_daily_task text NOT NULL,
    importance_daily_task text NOT NULL,
    daily_task_name text NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public."Daily_task" OWNER TO alexandra;

--
-- Name: general_task; Type: TABLE; Schema: public; Owner: alexandra
--

CREATE TABLE public."general_task" (
    task_id integer NOT NULL,
    sumbission_time timestamp without time zone NOT NULL,
    status text NOT NULL,
    importance integer NOT NULL,
    general_task_name text NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public."general_task" OWNER TO alexandra;

--
-- Name: daily_task_id_seq; Type: SEQUENCE; Schema: public; Owner: alexandra
--

CREATE SEQUENCE public.daily_task_id_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    MAXVALUE 1000000000
    CACHE 1;


ALTER TABLE public.daily_task_id_seq OWNER TO alexandra;

--
-- Name: submission_time_general_seq; Type: SEQUENCE; Schema: public; Owner: alexandra
--

CREATE SEQUENCE public.submission_time_general_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    MAXVALUE 1000000000
    CACHE 1;


ALTER TABLE public.submission_time_general_seq OWNER TO alexandra;

--
-- Name: submission_time_week_seq; Type: SEQUENCE; Schema: public; Owner: alexandra
--

CREATE SEQUENCE public.submission_time_week_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    MAXVALUE 1000000000
    CACHE 1;


ALTER TABLE public.submission_time_week_seq OWNER TO alexandra;

--
-- Name: sumbmission_time_daily_seq; Type: SEQUENCE; Schema: public; Owner: alexandra
--

CREATE SEQUENCE public.sumbmission_time_daily_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    MAXVALUE 1000000000
    CACHE 1;


ALTER TABLE public.sumbmission_time_daily_seq OWNER TO alexandra;


CREATE TABLE public."user" (
    user_id integer NOT NULL,
    name text NOT NULL,
    email text,
    hash_password text NOT NULL
);


ALTER TABLE public."user" OWNER TO alexandra;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: alexandra
--

CREATE SEQUENCE public.user_id_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    MAXVALUE 1000000000
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO alexandra;

--
-- Name: week_task; Type: TABLE; Schema: public; Owner: alexandra
--

CREATE TABLE public.week_task (
    week_task_id integer NOT NULL,
    sumbission_time timestamp without time zone NOT NULL,
    general_task_id integer,
    submission_time timestamp without time zone NOT NULL,
    week_task_name text NOT NULL,
    status_week_task text NOT NULL,
    importance_week_task integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.week_task OWNER TO alexandra;

--
-- Name: week_task_id_seq; Type: SEQUENCE; Schema: public; Owner: alexandra
--

CREATE SEQUENCE public.week_task_id_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    MAXVALUE 1000000000
    CACHE 1;


ALTER TABLE public.week_task_id_seq OWNER TO alexandra;

--
-- Data for Name: Daily_task; Type: TABLE DATA; Schema: public; Owner: alexandra
--

COPY public."Daily_task" (week_task_id, daily_task_id, general_task_id, submission_time, status_daily_task, importance_daily_task, daily_task_name, user_id) FROM stdin;
\.


--
-- Data for Name: general_task; Type: TABLE DATA; Schema: public; Owner: alexandra
--

COPY public."general_task" (task_id, sumbission_time, status, importance, general_task_name, user_id) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: alexandra
--

COPY public."user" (user_id, name, "e-mail", hash_password) FROM stdin;
\.


--
-- Data for Name: week_task; Type: TABLE DATA; Schema: public; Owner: alexandra
--

COPY public.week_task (week_task_id, sumbission_time, general_task_id, submission_time, week_task_name, status_week_task, importance_week_task, user_id) FROM stdin;
\.


--
-- Name: daily_task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alexandra
--

SELECT pg_catalog.setval('public.daily_task_id_seq', 0, false);


--
-- Name: submission_time_general_seq; Type: SEQUENCE SET; Schema: public; Owner: alexandra
--

SELECT pg_catalog.setval('public.submission_time_general_seq', 0, false);


--
-- Name: submission_time_week_seq; Type: SEQUENCE SET; Schema: public; Owner: alexandra
--

SELECT pg_catalog.setval('public.submission_time_week_seq', 0, false);


--
-- Name: sumbmission_time_daily_seq; Type: SEQUENCE SET; Schema: public; Owner: alexandra
--

SELECT pg_catalog.setval('public.sumbmission_time_daily_seq', 0, false);


--
-- Name: task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alexandra
--

SELECT pg_catalog.setval('public.task_id_seq', 0, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alexandra
--

SELECT pg_catalog.setval('public.user_id_seq', 0, false);


--
-- Name: week_task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alexandra
--

SELECT pg_catalog.setval('public.week_task_id_seq', 0, false);


--
-- Name: general_task task_id; Type: CONSTRAINT; Schema: public; Owner: alexandra
--

ALTER TABLE ONLY public."general_task"
    ADD CONSTRAINT task_id PRIMARY KEY (task_id);


--
-- Name: user user_id; Type: CONSTRAINT; Schema: public; Owner: alexandra
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_id PRIMARY KEY (user_id);


--
-- Name: week_task week_task_pkey; Type: CONSTRAINT; Schema: public; Owner: alexandra
--

ALTER TABLE ONLY public.week_task
    ADD CONSTRAINT week_task_pkey PRIMARY KEY (week_task_id);


--
-- Name: Daily_task general_task_id; Type: FK CONSTRAINT; Schema: public; Owner: alexandra
--

ALTER TABLE ONLY public."Daily_task"
    ADD CONSTRAINT general_task_id FOREIGN KEY (general_task_id) REFERENCES public."general_task"(task_id) ON UPDATE CASCADE ON DELETE CASCADE DEFERRABLE;


--
-- Name: week_task generalk_task_id; Type: FK CONSTRAINT; Schema: public; Owner: alexandra
--

ALTER TABLE ONLY public.week_task
    ADD CONSTRAINT generalk_task_id FOREIGN KEY (general_task_id) REFERENCES public."general_task"(task_id) MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE DEFERRABLE;


--
-- Name: Daily_task user_id; Type: FK CONSTRAINT; Schema: public; Owner: alexandra
--

ALTER TABLE ONLY public."Daily_task"
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public."user"(user_id) ON UPDATE CASCADE ON DELETE CASCADE DEFERRABLE;


--
-- Name: general_task user_id; Type: FK CONSTRAINT; Schema: public; Owner: alexandra
--

ALTER TABLE ONLY public."general_task"
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public."user"(user_id) ON UPDATE CASCADE ON DELETE CASCADE DEFERRABLE;


--
-- Name: week_task user_id; Type: FK CONSTRAINT; Schema: public; Owner: alexandra
--

ALTER TABLE ONLY public.week_task
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public."user"(user_id) ON UPDATE CASCADE ON DELETE CASCADE DEFERRABLE;


--
-- Name: Daily_task week_task_id; Type: FK CONSTRAINT; Schema: public; Owner: alexandra
--

ALTER TABLE ONLY public."Daily_task"
    ADD CONSTRAINT week_task_id FOREIGN KEY (week_task_id) REFERENCES public.week_task(week_task_id) ON UPDATE CASCADE ON DELETE CASCADE DEFERRABLE;


--
-- PostgreSQL database dump complete
--

