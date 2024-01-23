--
-- PostgreSQL database dump
--

-- Dumped from database version 14.10 (Ubuntu 14.10-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.10 (Ubuntu 14.10-0ubuntu0.22.04.1)

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
-- Name: up_permissions_role_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.up_permissions_role_links (
    id integer NOT NULL,
    permission_id integer,
    role_id integer,
    permission_order double precision
);


ALTER TABLE public.up_permissions_role_links OWNER TO postgres;

--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.up_permissions_role_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.up_permissions_role_links_id_seq OWNER TO postgres;

--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.up_permissions_role_links_id_seq OWNED BY public.up_permissions_role_links.id;


--
-- Name: up_permissions_role_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions_role_links ALTER COLUMN id SET DEFAULT nextval('public.up_permissions_role_links_id_seq'::regclass);


--
-- Data for Name: up_permissions_role_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.up_permissions_role_links (id, permission_id, role_id, permission_order) FROM stdin;
10	10	4	25
11	34	6	30
12	47	6	33
13	421	6	34
14	422	5	71
15	425	5	71
16	13	5	72
17	14	5	76
18	35	5	79
19	53	4	28
20	19	6	36
21	20	5	80
22	21	3	1
23	36	6	37
24	54	6	38
25	16	4	31
26	37	4	34
27	55	6	40
28	56	6	41
29	38	6	31
30	51	5	69
31	423	5	71
32	12	5	71
33	17	5	73
34	18	4	26
35	40	5	79
36	58	4	29
37	15	6	36
38	41	6	38
39	59	4	30
40	22	4	32
41	42	4	35
42	39	6	31
43	52	5	69
44	11	5	71
45	23	5	74
46	24	5	77
47	44	5	79
48	426	6	35
49	25	5	80
50	26	3	1
51	45	6	38
52	27	4	33
53	46	4	35
54	60	6	\N
55	61	6	\N
56	62	4	\N
57	63	4	\N
58	64	4	\N
59	65	4	\N
60	66	4	\N
61	67	4	\N
62	68	4	\N
63	69	6	\N
64	70	4	\N
65	71	6	\N
66	72	5	1
67	131	5	1
68	74	5	1
69	75	5	1
70	76	5	1
71	77	5	2
72	142	5	2
73	79	5	3
74	80	5	3
75	145	5	3
76	81	5	3
77	146	5	3
78	149	5	4
79	84	5	4
80	85	5	4
81	86	5	4
82	163	5	7
83	88	5	8
84	165	5	8
85	193	5	9
86	92	5	9
87	194	5	9
88	93	5	9
89	94	5	9
90	171	5	10
91	97	5	10
92	197	5	10
93	172	5	10
94	173	5	10
95	202	5	11
96	100	5	11
97	101	5	11
98	104	5	11
99	182	5	11
100	105	5	12
101	204	5	12
102	106	5	12
103	107	5	12
104	207	5	12
105	112	5	13
106	110	5	13
107	208	5	13
108	209	5	13
109	212	5	13
110	115	5	14
111	215	5	14
112	213	5	14
113	116	5	14
114	119	5	15
115	120	5	17
116	121	5	19
117	122	6	3
118	123	5	20
119	124	4	1
120	125	4	3
121	126	5	22
122	127	5	24
123	128	4	5
124	135	6	\N
125	136	4	\N
126	137	6	\N
127	138	4	\N
128	139	4	\N
129	140	4	\N
130	141	6	\N
131	129	4	6
132	151	4	\N
133	152	4	\N
134	153	6	\N
135	154	6	\N
136	155	6	\N
137	156	6	\N
138	157	6	\N
139	158	4	\N
140	160	6	\N
141	161	6	\N
142	166	6	\N
143	167	6	\N
144	174	6	\N
145	175	6	\N
146	176	6	\N
147	177	6	\N
148	178	6	\N
149	179	6	\N
150	180	6	\N
151	181	4	\N
152	183	6	\N
153	184	4	\N
154	185	6	\N
155	186	6	\N
156	187	6	\N
157	188	6	\N
158	190	6	\N
159	189	6	\N
160	130	5	1
161	191	6	\N
162	73	5	1
163	132	5	1
164	133	5	1
165	134	5	1
166	78	5	2
167	143	5	2
168	144	5	3
169	82	5	3
170	147	5	3
171	83	5	3
172	148	5	4
173	150	5	4
174	159	5	5
175	87	5	6
176	162	5	6
177	89	5	8
178	164	5	8
179	90	5	8
180	91	5	8
181	192	5	8
182	95	5	9
183	168	5	9
184	170	5	9
185	169	5	9
186	195	5	9
187	96	5	10
188	196	5	10
189	99	5	10
190	98	5	10
191	198	5	10
192	199	5	11
193	200	5	11
194	201	5	11
195	103	5	11
196	102	5	11
197	203	5	12
198	205	5	12
199	206	5	12
200	108	5	12
201	109	5	12
202	211	5	13
203	210	5	13
204	111	5	13
205	113	5	13
206	114	5	13
207	214	5	14
208	216	5	14
209	117	5	14
210	118	5	14
211	217	5	16
212	218	5	18
213	219	6	1
214	220	6	2
215	221	4	2
216	222	4	4
217	223	5	22
218	224	5	23
219	225	5	25
220	226	4	7
221	227	4	7
222	228	4	8
223	229	6	4
224	230	5	26
225	231	6	5
226	232	6	6
227	233	6	6
228	234	4	9
229	235	4	9
230	236	4	10
231	237	4	10
232	238	5	27
233	240	5	27
234	239	5	27
235	241	5	27
236	242	5	27
237	243	5	27
238	244	5	27
239	245	5	27
240	247	5	28
241	249	5	28
242	250	5	28
243	246	5	28
244	248	5	28
245	252	5	29
246	253	5	29
247	254	5	29
248	251	5	30
249	256	5	30
250	255	5	30
251	257	5	31
252	259	5	31
253	262	5	31
254	261	5	31
255	260	5	31
256	258	5	31
257	263	5	32
258	264	5	32
259	265	5	33
260	266	5	33
261	267	5	33
262	268	5	33
263	269	5	33
264	270	5	33
265	271	5	33
266	272	5	33
267	274	5	34
268	273	5	34
269	275	5	34
270	276	5	34
271	278	5	35
272	277	5	35
273	279	5	35
274	281	5	35
275	280	5	35
276	282	5	35
277	283	5	35
278	284	6	7
279	285	6	7
280	287	6	7
281	286	6	8
282	288	6	8
283	289	4	11
284	291	4	11
285	290	4	12
286	292	4	12
287	293	6	9
288	294	5	36
289	295	5	37
290	296	6	10
291	298	6	10
292	297	6	10
293	299	6	10
294	300	6	11
295	301	5	39
296	302	5	39
297	303	5	40
298	305	5	40
299	304	5	40
300	306	5	40
301	307	5	41
302	308	5	42
303	310	5	42
304	309	5	42
305	311	5	42
306	312	5	42
307	313	5	42
308	314	5	43
309	315	5	43
310	317	5	43
311	316	5	43
312	318	4	13
313	319	4	14
314	320	4	15
315	321	5	44
316	323	5	44
317	322	5	45
318	326	5	46
319	324	5	46
320	327	5	46
321	325	5	46
322	328	5	47
323	329	5	48
324	330	6	12
325	331	4	16
326	332	4	16
327	333	4	16
328	334	4	16
329	335	4	16
330	336	5	49
331	337	5	49
332	338	5	49
333	339	4	17
334	340	4	18
335	341	4	18
336	342	5	50
337	343	5	50
338	344	6	13
339	345	6	13
340	347	5	51
341	348	5	51
342	346	5	51
343	349	4	19
344	351	4	20
345	350	4	20
346	352	4	21
347	353	6	15
348	354	6	16
349	355	6	17
350	356	6	19
351	357	4	23
352	358	4	24
353	359	6	23
354	360	6	23
355	361	5	52
356	362	5	52
357	363	5	53
358	364	5	53
359	365	5	53
360	366	5	53
361	367	5	54
362	368	5	55
363	369	5	55
364	370	5	56
365	371	5	56
366	372	5	56
367	373	5	57
368	374	5	57
369	375	5	58
370	376	5	59
371	377	5	59
372	378	5	59
373	379	5	59
374	381	5	59
375	382	5	59
376	383	5	59
377	380	5	59
378	385	5	59
379	386	5	59
380	388	5	60
381	390	5	60
382	384	5	60
383	392	5	60
384	387	5	60
385	389	5	60
386	391	5	60
387	393	5	60
388	394	5	60
389	395	6	24
390	397	6	24
391	396	6	24
392	398	6	24
393	399	6	24
394	400	6	25
395	401	5	61
396	402	6	26
397	403	6	26
398	404	5	62
399	405	6	27
400	406	6	28
401	407	5	63
402	408	5	63
403	409	5	64
404	410	6	29
405	411	5	65
406	412	5	65
407	414	5	65
408	413	5	66
409	415	5	66
410	416	5	67
411	417	5	67
412	418	5	67
413	419	5	67
414	420	5	68
415	28	6	30
416	43	6	32
417	57	5	70
418	424	5	71
419	29	5	75
420	30	5	78
421	31	5	79
422	48	4	27
423	32	5	81
424	49	6	38
425	33	6	39
426	50	5	82
427	427	6	42
428	428	5	83
429	429	5	84
430	430	4	36
431	431	4	36
432	432	6	43
433	433	6	43
434	434	5	85
435	436	5	85
436	435	5	86
437	437	5	86
438	438	5	86
439	439	6	44
440	440	4	37
441	441	6	45
442	442	6	45
443	443	6	45
444	444	6	45
445	445	5	87
446	446	5	87
447	447	5	87
448	448	5	87
449	449	5	87
450	450	5	87
451	451	4	38
452	452	6	46
453	453	6	47
454	454	6	47
457	458	5	88
458	457	5	88
461	461	5	89
462	462	5	89
\.


--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.up_permissions_role_links_id_seq', 463, true);


--
-- Name: up_permissions_role_links up_permissions_role_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_pkey PRIMARY KEY (id);


--
-- Name: up_permissions_role_links up_permissions_role_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_unique UNIQUE (permission_id, role_id);


--
-- Name: up_permissions_role_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_permissions_role_links_fk ON public.up_permissions_role_links USING btree (permission_id);


--
-- Name: up_permissions_role_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_permissions_role_links_inv_fk ON public.up_permissions_role_links USING btree (role_id);


--
-- Name: up_permissions_role_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_permissions_role_links_order_inv_fk ON public.up_permissions_role_links USING btree (permission_order);


--
-- Name: up_permissions_role_links up_permissions_role_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_fk FOREIGN KEY (permission_id) REFERENCES public.up_permissions(id) ON DELETE CASCADE;


--
-- Name: up_permissions_role_links up_permissions_role_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.up_roles(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

