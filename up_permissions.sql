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
-- Name: up_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.up_permissions (
    id integer NOT NULL,
    action character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.up_permissions OWNER TO postgres;

--
-- Name: up_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.up_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.up_permissions_id_seq OWNER TO postgres;

--
-- Name: up_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.up_permissions_id_seq OWNED BY public.up_permissions.id;


--
-- Name: up_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions ALTER COLUMN id SET DEFAULT nextval('public.up_permissions_id_seq'::regclass);


--
-- Data for Name: up_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.up_permissions (id, action, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
10	api::store-setting.store-setting.find	2023-08-04 06:58:20.886	2023-08-04 06:58:20.886	\N	\N
11	api::shiprocket-order-item.shiprocket-order-item.find	2023-08-14 08:03:42.237	2023-08-14 08:03:42.237	\N	\N
12	api::shiprocket-order-item.shiprocket-order-item.update	2023-08-14 08:03:42.237	2023-08-14 08:03:42.237	\N	\N
13	api::lead.lead.assignLead	2023-08-19 06:40:15.145	2023-08-19 06:40:15.145	\N	\N
14	api::ship-rocket-order.ship-rocket-order.cancelOrder	2023-08-28 09:56:51.697	2023-08-28 09:56:51.697	\N	\N
15	api::user-metric.user-metric.findOne	2023-09-26 08:07:00.914	2023-09-26 08:07:00.914	\N	\N
16	api::order.order.phonepeCallbackCapture	2023-10-11 11:22:20.079	2023-10-11 11:22:20.079	\N	\N
17	api::lead.lead.searchLeads	2023-08-22 07:14:12.061	2023-08-22 07:14:12.061	\N	\N
18	api::product.product.getSingleProduct	2023-09-05 06:48:14.528	2023-09-05 06:48:14.528	\N	\N
19	api::user-metric.user-metric.find	2023-09-26 08:07:00.913	2023-09-26 08:07:00.913	\N	\N
20	api::user-metric.user-metric.findOne	2023-09-26 08:07:10.729	2023-09-26 08:07:10.729	\N	\N
21	api::user-metric.user-metric.findOne	2023-09-26 08:07:21.71	2023-09-26 08:07:21.71	\N	\N
22	api::product.product.searchInAllProducts	2023-10-11 11:46:43.66	2023-10-11 11:46:43.66	\N	\N
23	api::activity-log.activity-log.find	2023-08-23 12:04:46.909	2023-08-23 12:04:46.909	\N	\N
24	api::pin-code.pin-code.bulkCreate	2023-09-05 10:03:04.084	2023-09-05 10:03:04.084	\N	\N
25	api::user-metric.user-metric.find	2023-09-26 08:07:10.729	2023-09-26 08:07:10.729	\N	\N
26	api::user-metric.user-metric.find	2023-09-26 08:07:21.709	2023-09-26 08:07:21.709	\N	\N
27	api::custom.custom.sendOTP	2023-10-12 08:01:45.39	2023-10-12 08:01:45.39	\N	\N
28	api::cart-product.cart-product.findOne	2023-08-04 08:40:05.284	2023-08-04 08:40:05.284	\N	\N
29	api::activity-log.activity-log.findOne	2023-08-23 12:07:44.64	2023-08-23 12:07:44.64	\N	\N
30	api::pin-code.pin-code.delete	2023-09-05 10:05:57.702	2023-09-05 10:05:57.702	\N	\N
31	api::pin-code.pin-code.findOne	2023-09-05 10:06:03.671	2023-09-05 10:06:03.671	\N	\N
32	api::order.order.selectedOrders	2023-09-30 10:25:01.519	2023-09-30 10:25:01.519	\N	\N
33	api::lead.lead.assignLead	2023-10-12 10:28:41.228	2023-10-12 10:28:41.228	\N	\N
34	api::cart-product.cart-product.create	2023-08-04 08:40:05.284	2023-08-04 08:40:05.284	\N	\N
35	api::pin-code.pin-code.find	2023-09-05 10:06:03.671	2023-09-05 10:06:03.671	\N	\N
36	api::product.product.searchInAllProducts	2023-09-30 10:39:59.494	2023-09-30 10:39:59.494	\N	\N
37	api::default-page.default-page.find	2023-10-17 07:08:08.323	2023-10-17 07:08:08.323	\N	\N
38	api::lead.lead.create	2023-08-04 10:07:20.907	2023-08-04 10:07:20.907	\N	\N
39	api::lead.lead.findOne	2023-08-04 10:07:20.907	2023-08-04 10:07:20.907	\N	\N
40	api::pin-code.pin-code.create	2023-09-05 10:06:03.671	2023-09-05 10:06:03.671	\N	\N
41	api::cart.cart.create	2023-10-04 08:34:45.874	2023-10-04 08:34:45.874	\N	\N
42	api::collection.collection.searchProdInCollections	2023-10-27 07:34:00.157	2023-10-27 07:34:00.157	\N	\N
43	api::lead.lead.find	2023-08-04 10:07:20.907	2023-08-04 10:07:20.907	\N	\N
44	api::pin-code.pin-code.update	2023-09-05 10:06:03.671	2023-09-05 10:06:03.671	\N	\N
45	api::cart.cart.update	2023-10-04 08:34:45.874	2023-10-04 08:34:45.874	\N	\N
46	api::collection.collection.getCollection	2023-10-27 07:34:00.157	2023-10-27 07:34:00.157	\N	\N
47	api::custom.custom.resellerWithdraw	2023-08-08 08:31:02.816	2023-08-08 08:31:02.816	\N	\N
48	api::global.global.find	2023-09-07 06:31:20.722	2023-09-07 06:31:20.722	\N	\N
49	api::cart.cart.findOne	2023-10-04 08:34:45.874	2023-10-04 08:34:45.874	\N	\N
50	api::lead.lead.getLeadStats	2023-10-27 10:10:43.611	2023-10-27 10:10:43.611	\N	\N
51	api::store-setting.store-setting.find	2023-08-08 10:34:11.489	2023-08-08 10:34:11.489	\N	\N
52	api::store-setting.store-setting.delete	2023-08-08 10:34:11.489	2023-08-08 10:34:11.489	\N	\N
53	api::pin-code.pin-code.find	2023-09-14 07:14:44.994	2023-09-14 07:14:44.994	\N	\N
54	api::cart.cart.deleteCartProducts	2023-10-04 08:34:45.874	2023-10-04 08:34:45.874	\N	\N
55	api::plan.plan.find	2023-10-31 07:29:09.518	2023-10-31 07:29:09.518	\N	\N
56	api::plan.plan.findOne	2023-10-31 07:29:31.459	2023-10-31 07:29:31.459	\N	\N
57	api::store-setting.store-setting.update	2023-08-08 10:34:11.489	2023-08-08 10:34:11.489	\N	\N
58	api::pin-code.pin-code.findOne	2023-09-14 07:14:44.994	2023-09-14 07:14:44.994	\N	\N
59	api::product.product.create	2023-10-09 05:41:48.469	2023-10-09 05:41:48.469	\N	\N
60	plugin::users-permissions.user.me	2022-09-23 07:32:31.749	2022-09-23 07:32:31.749	\N	\N
61	plugin::users-permissions.auth.changePassword	2022-09-23 07:32:31.749	2022-09-23 07:32:31.749	\N	\N
62	plugin::users-permissions.auth.callback	2022-09-23 07:32:31.761	2022-09-23 07:32:31.761	\N	\N
63	plugin::users-permissions.auth.connect	2022-09-23 07:32:31.761	2022-09-23 07:32:31.761	\N	\N
64	plugin::users-permissions.auth.forgotPassword	2022-09-23 07:32:31.761	2022-09-23 07:32:31.761	\N	\N
65	plugin::users-permissions.auth.resetPassword	2022-09-23 07:32:31.761	2022-09-23 07:32:31.761	\N	\N
66	plugin::users-permissions.auth.register	2022-09-23 07:32:31.761	2022-09-23 07:32:31.761	\N	\N
67	plugin::users-permissions.auth.emailConfirmation	2022-09-23 07:32:31.761	2022-09-23 07:32:31.761	\N	\N
68	plugin::users-permissions.auth.sendEmailConfirmation	2022-09-23 07:32:31.761	2022-09-23 07:32:31.761	\N	\N
69	api::category.category.find	2022-09-24 05:39:31.94	2022-09-24 05:39:31.94	\N	\N
70	api::category.category.find	2022-09-24 06:19:57.356	2022-09-24 06:19:57.356	\N	\N
71	api::product.product.find	2022-09-24 06:20:10.503	2022-09-24 06:20:10.503	\N	\N
72	api::address.address.find	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
73	api::address.address.create	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
74	api::address.address.delete	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
75	api::banner.banner.findOne	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
76	api::banner.banner.update	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
77	api::cart-product.cart-product.find	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
78	api::cart-product.cart-product.create	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
79	api::cart-product.cart-product.delete	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
80	api::category.category.findOne	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
81	api::category.category.update	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
82	api::collection.collection.find	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
83	api::collection.collection.create	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
84	api::collection.collection.delete	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
85	api::config.config.update	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
86	api::custom.custom.webHook	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
87	api::custom.custom.getUser	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
88	api::global.global.find	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
89	api::global.global.update	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
90	api::order.order.find	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
91	api::order.order.findOne	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
92	api::order-product.order-product.findOne	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
93	api::order-product.order-product.update	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
94	api::product.product.find	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
95	api::product.product.findOne	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
96	api::product.product.delete	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
97	api::product-variant.product-variant.create	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
98	api::subscription.subscription.find	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
99	api::subscription.subscription.create	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
100	api::subscription.subscription.delete	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
101	plugin::content-type-builder.content-types.getContentTypes	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
102	plugin::upload.content-api.find	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
103	plugin::upload.content-api.findOne	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
104	plugin::upload.content-api.destroy	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
105	plugin::i18n.locales.listLocales	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
106	plugin::users-permissions.auth.connect	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
107	plugin::users-permissions.auth.forgotPassword	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
108	plugin::users-permissions.auth.emailConfirmation	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
109	plugin::users-permissions.auth.sendEmailConfirmation	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
110	plugin::users-permissions.user.update	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
111	plugin::users-permissions.user.destroy	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
112	plugin::users-permissions.user.me	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
113	plugin::users-permissions.role.findOne	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
114	plugin::users-permissions.role.find	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
115	plugin::users-permissions.role.deleteRole	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
116	plugin::custom-links.customLinks.count	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
117	plugin::custom-links.customLinks.create	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
118	plugin::custom-links.customLinks.update	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
119	api::address.address.addAddress	2023-03-22 13:25:13.852	2023-03-22 13:25:13.852	\N	\N
120	api::address.address.deleteAddress	2023-03-24 12:18:35.135	2023-03-24 12:18:35.135	\N	\N
121	api::product.product.getNRandomProducts	2023-03-24 13:43:35.755	2023-03-24 13:43:35.755	\N	\N
122	api::custom.custom.updateUser	2023-03-24 16:19:41.736	2023-03-24 16:19:41.736	\N	\N
123	api::custom.custom.updateUser	2023-03-24 16:22:29.658	2023-03-24 16:22:29.658	\N	\N
124	api::category.category.allCategories	2023-03-25 12:55:30.055	2023-03-25 12:55:30.055	\N	\N
125	api::category.category.searchProdInCategories	2023-03-25 13:16:40.56	2023-03-25 13:16:40.56	\N	\N
126	api::category.category.oneCategoryFullInfo	2023-03-25 13:17:03.184	2023-03-25 13:17:03.184	\N	\N
127	api::category.category.updateCategory	2023-03-25 13:17:03.184	2023-03-25 13:17:03.184	\N	\N
128	api::product-variant.product-variant.find	2023-03-27 12:55:25.136	2023-03-27 12:55:25.136	\N	\N
129	api::product.product.allProducts	2023-03-29 18:11:38.739	2023-03-29 18:11:38.739	\N	\N
130	api::address.address.findOne	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
131	api::address.address.update	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
132	api::banner.banner.find	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
133	api::banner.banner.create	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
134	api::banner.banner.delete	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
135	api::banner.banner.find	2022-10-17 07:38:50.397	2022-10-17 07:38:50.397	\N	\N
136	api::banner.banner.find	2022-10-17 07:39:02.436	2022-10-17 07:39:02.436	\N	\N
137	api::category.category.findOne	2022-10-17 15:53:55.393	2022-10-17 15:53:55.393	\N	\N
138	api::category.category.findOne	2022-10-17 15:54:39.52	2022-10-17 15:54:39.52	\N	\N
139	api::product.product.find	2022-10-20 06:53:07.669	2022-10-20 06:53:07.669	\N	\N
140	api::product.product.findOne	2022-10-20 06:53:07.669	2022-10-20 06:53:07.669	\N	\N
141	api::cart-product.cart-product.find	2022-10-20 15:45:30.973	2022-10-20 15:45:30.973	\N	\N
142	api::cart-product.cart-product.findOne	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
143	api::cart-product.cart-product.update	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
144	api::category.category.find	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
145	api::category.category.create	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
146	api::category.category.delete	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
147	api::collection.collection.findOne	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
148	api::collection.collection.update	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
149	api::config.config.find	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
150	api::config.config.delete	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
151	api::collection.collection.find	2022-11-01 06:22:17.554	2022-11-01 06:22:17.554	\N	\N
152	api::collection.collection.findOne	2022-11-01 06:22:17.554	2022-11-01 06:22:17.554	\N	\N
153	api::address.address.find	2022-11-04 07:58:20.078	2022-11-04 07:58:20.078	\N	\N
154	api::address.address.findOne	2022-11-04 07:58:20.078	2022-11-04 07:58:20.078	\N	\N
155	api::address.address.create	2022-11-04 07:58:20.078	2022-11-04 07:58:20.078	\N	\N
156	api::address.address.update	2022-11-04 07:58:20.078	2022-11-04 07:58:20.078	\N	\N
157	api::address.address.delete	2022-11-04 07:58:20.078	2022-11-04 07:58:20.078	\N	\N
158	api::product-variant.product-variant.findOne	2022-11-07 07:49:26.683	2022-11-07 07:49:26.683	\N	\N
159	api::custom.custom.selectedProductVariant	2023-03-22 12:59:42.781	2023-03-22 12:59:42.781	\N	\N
160	api::product.product.create	2022-11-10 06:41:27.187	2022-11-10 06:41:27.187	\N	\N
161	plugin::upload.content-api.upload	2022-11-10 06:43:14.017	2022-11-10 06:43:14.017	\N	\N
162	api::custom.custom.listOrdersByTags	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
163	api::custom.custom.listOrder	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
164	api::global.global.delete	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
165	api::order.order.create	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
166	api::collection.collection.find	2022-11-25 05:47:53.479	2022-11-25 05:47:53.479	\N	\N
167	api::collection.collection.findOne	2022-11-25 05:47:53.479	2022-11-25 05:47:53.479	\N	\N
168	api::order.order.delete	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
169	api::order-product.order-product.delete	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
170	api::product.product.create	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
171	api::product-variant.product-variant.findOne	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
172	api::product-variant.product-variant.delete	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
173	api::subscription.subscription.findOne	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
174	api::custom.custom.getUser	2022-12-09 10:14:24.69	2022-12-09 10:14:24.69	\N	\N
175	api::global.global.find	2022-12-09 11:00:30.431	2022-12-09 11:00:30.431	\N	\N
176	plugin::users-permissions.user.update	2022-12-09 11:09:39.25	2022-12-09 11:09:39.25	\N	\N
177	plugin::users-permissions.user.find	2022-12-09 11:09:39.25	2022-12-09 11:09:39.25	\N	\N
178	plugin::users-permissions.user.findOne	2022-12-09 11:09:39.25	2022-12-09 11:09:39.25	\N	\N
179	plugin::users-permissions.role.findOne	2022-12-09 11:09:39.25	2022-12-09 11:09:39.25	\N	\N
180	plugin::users-permissions.role.find	2022-12-09 11:09:39.25	2022-12-09 11:09:39.25	\N	\N
181	api::custom.custom.webHook	2022-12-15 12:21:06.79	2022-12-15 12:21:06.79	\N	\N
182	plugin::content-type-builder.components.getComponent	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
183	api::custom.custom.selectedProductVariant	2022-12-22 07:03:18.336	2022-12-22 07:03:18.336	\N	\N
184	api::custom.custom.selectedProductVariant	2022-12-22 07:38:40.466	2022-12-22 07:38:40.466	\N	\N
185	api::custom.custom.listOrdersByTags	2022-12-26 09:46:16.041	2022-12-26 09:46:16.041	\N	\N
186	api::order.order.find	2022-12-26 09:49:39.277	2022-12-26 09:49:39.277	\N	\N
187	api::order.order.findOne	2022-12-26 09:49:39.277	2022-12-26 09:49:39.277	\N	\N
188	api::order.order.create	2022-12-26 09:49:39.277	2022-12-26 09:49:39.277	\N	\N
189	api::order.order.update	2022-12-26 09:49:39.277	2022-12-26 09:49:39.277	\N	\N
190	api::order.order.delete	2022-12-26 09:49:39.277	2022-12-26 09:49:39.277	\N	\N
191	api::custom.custom.listOrder	2022-12-26 12:11:45.66	2022-12-26 12:11:45.66	\N	\N
192	api::order.order.update	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
193	api::order-product.order-product.find	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
194	api::order-product.order-product.create	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
195	api::product.product.update	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
196	api::product-variant.product-variant.find	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
197	api::product-variant.product-variant.update	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
198	api::subscription.subscription.update	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
199	plugin::content-type-builder.components.getComponents	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
200	plugin::content-type-builder.content-types.getContentType	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
201	plugin::email.email.send	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
202	plugin::upload.content-api.upload	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
203	plugin::users-permissions.auth.callback	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
204	plugin::users-permissions.auth.changePassword	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
205	plugin::users-permissions.auth.resetPassword	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
206	plugin::users-permissions.auth.register	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
207	plugin::users-permissions.user.create	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
208	plugin::users-permissions.user.find	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
209	plugin::users-permissions.user.findOne	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
210	plugin::users-permissions.user.count	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
211	plugin::users-permissions.role.createRole	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
212	plugin::users-permissions.role.updateRole	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
213	plugin::users-permissions.permissions.getPermissions	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
214	plugin::custom-links.customLinks.useProxy	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
215	plugin::custom-links.customLinks.find	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
216	plugin::custom-links.customLinks.findOne	2023-03-22 12:59:42.782	2023-03-22 12:59:42.782	\N	\N
217	api::address.address.updateAddress	2023-03-22 13:52:28.129	2023-03-22 13:52:28.129	\N	\N
218	api::product.product.getSingleProduct	2023-03-24 13:06:36.115	2023-03-24 13:06:36.115	\N	\N
219	api::product.product.getNRandomProducts	2023-03-24 13:44:03.744	2023-03-24 13:44:03.744	\N	\N
220	api::product.product.getSingleProduct	2023-03-24 13:44:07.467	2023-03-24 13:44:07.467	\N	\N
221	api::category.category.oneCategoryFullInfo	2023-03-25 12:55:30.055	2023-03-25 12:55:30.055	\N	\N
222	api::category.category.updateCategory	2023-03-25 13:16:40.56	2023-03-25 13:16:40.56	\N	\N
223	api::category.category.allCategories	2023-03-25 13:17:03.184	2023-03-25 13:17:03.184	\N	\N
224	api::category.category.searchProdInCategories	2023-03-25 13:17:03.184	2023-03-25 13:17:03.184	\N	\N
225	api::product.product.allProducts	2023-03-29 18:11:54.431	2023-03-29 18:11:54.431	\N	\N
226	api::collection-static.collection-static.find	2023-04-12 12:37:20.72	2023-04-12 12:37:20.72	\N	\N
227	api::collection-static.collection-static.findOne	2023-04-12 12:37:20.72	2023-04-12 12:37:20.72	\N	\N
228	api::product.product.selectedProducts	2023-04-14 10:54:32.057	2023-04-14 10:54:32.057	\N	\N
229	api::product.product.selectedProducts	2023-04-14 10:54:44.026	2023-04-14 10:54:44.026	\N	\N
230	api::product.product.selectedProducts	2023-04-14 10:54:53.287	2023-04-14 10:54:53.287	\N	\N
231	api::address.address.addAddress	2023-04-29 07:22:36.655	2023-04-29 07:22:36.655	\N	\N
232	api::address.address.updateAddress	2023-04-29 07:24:30.238	2023-04-29 07:24:30.238	\N	\N
233	api::address.address.deleteAddress	2023-04-29 07:24:30.238	2023-04-29 07:24:30.238	\N	\N
234	api::bulk-pricing.bulk-pricing.find	2023-05-17 08:28:47.122	2023-05-17 08:28:47.122	\N	\N
235	api::bulk-pricing.bulk-pricing.findOne	2023-05-17 08:28:47.122	2023-05-17 08:28:47.122	\N	\N
236	api::sub-category.sub-category.find	2023-05-18 06:31:09.463	2023-05-18 06:31:09.463	\N	\N
237	api::sub-category.sub-category.findOne	2023-05-18 06:31:09.463	2023-05-18 06:31:09.463	\N	\N
238	api::banner.banner.getBanners	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
239	api::bulk-pricing.bulk-pricing.find	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
240	api::bulk-pricing.bulk-pricing.findOne	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
241	api::bulk-pricing.bulk-pricing.create	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
242	api::bulk-pricing.bulk-pricing.update	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
243	api::bulk-pricing.bulk-pricing.delete	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
244	api::collection-static.collection-static.find	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
245	api::sub-category.sub-category.find	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
246	api::collection-static.collection-static.update	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
247	api::sub-category.sub-category.findOne	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
248	api::collection-static.collection-static.findOne	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
249	api::sub-category.sub-category.update	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
250	api::sub-category.sub-category.create	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
251	api::sub-category.sub-category.delete	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
252	api::wallet.wallet.find	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
253	api::wallet.wallet.findOne	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
254	api::wallet.wallet.update	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
255	api::wallet.wallet.create	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
256	api::wallet.wallet.delete	2023-05-23 11:06:48.247	2023-05-23 11:06:48.247	\N	\N
257	api::banner.banner.addBanner	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
258	api::collection.collection.searchProdInCollections	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
259	api::collection.collection.getCollection	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
260	api::collection.collection.getCollectionByTag	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
261	api::custom.custom.validateToken	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
262	api::custom.custom.changePassword	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
263	api::custom-courier.custom-courier.addCourier	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
264	api::custom-courier.custom-courier.find	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
265	api::custom-courier.custom-courier.findOne	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
266	api::custom-courier.custom-courier.create	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
267	api::custom-courier.custom-courier.update	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
268	api::custom-courier.custom-courier.delete	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
269	api::order.order.getOrders	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
270	api::order.order.createMultipleOrders	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
271	api::order.order.verifyPaymentOrder	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
272	api::order.order.acceptOrder	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
273	api::payment-log.payment-log.find	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
274	api::payment-log.payment-log.findOne	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
275	api::payment-log.payment-log.create	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
276	api::payment-log.payment-log.update	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
277	api::global.global.addSettingsAdmin	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
278	api::payment-log.payment-log.delete	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
279	api::order.order.rejectOrder	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
280	api::product.product.searchInAllProducts	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
281	api::wallet.wallet.walletDebit	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
282	api::wallet.wallet.walletCredit	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
283	api::subscription.subscription.getSingleUserSubscriptions	2023-05-25 11:36:21.451	2023-05-25 11:36:21.451	\N	\N
284	api::order.order.getOrders	2023-05-26 08:32:58.739	2023-05-26 08:32:58.739	\N	\N
285	api::order.order.createMultipleOrders	2023-05-26 08:32:58.739	2023-05-26 08:32:58.739	\N	\N
286	api::order.order.verifyPaymentOrder	2023-05-26 08:32:58.739	2023-05-26 08:32:58.739	\N	\N
287	api::order.order.acceptOrder	2023-05-26 08:32:58.739	2023-05-26 08:32:58.739	\N	\N
288	api::order.order.rejectOrder	2023-05-26 08:32:58.739	2023-05-26 08:32:58.739	\N	\N
289	plugin::upload.content-api.find	2023-05-30 06:38:21.018	2023-05-30 06:38:21.018	\N	\N
290	plugin::upload.content-api.findOne	2023-05-30 06:38:21.018	2023-05-30 06:38:21.018	\N	\N
291	plugin::upload.content-api.destroy	2023-05-30 06:38:21.018	2023-05-30 06:38:21.018	\N	\N
292	plugin::upload.content-api.upload	2023-05-30 06:38:21.018	2023-05-30 06:38:21.018	\N	\N
293	api::product.product.findOne	2023-05-31 05:50:13.779	2023-05-31 05:50:13.779	\N	\N
294	api::cart-product.cart-product.getUserCart	2023-06-05 06:21:12.486	2023-06-05 06:21:12.486	\N	\N
295	api::cart-product.cart-product.addToUserCart	2023-06-05 06:21:12.486	2023-06-05 06:21:12.486	\N	\N
296	api::bulk-pricing.bulk-pricing.find	2023-06-06 09:27:04.142	2023-06-06 09:27:04.142	\N	\N
297	api::bulk-pricing.bulk-pricing.findOne	2023-06-06 09:27:04.142	2023-06-06 09:27:04.142	\N	\N
298	api::bulk-pricing.bulk-pricing.create	2023-06-06 09:27:04.142	2023-06-06 09:27:04.142	\N	\N
299	api::bulk-pricing.bulk-pricing.update	2023-06-06 09:27:04.142	2023-06-06 09:27:04.142	\N	\N
300	api::bulk-pricing.bulk-pricing.delete	2023-06-06 09:27:04.142	2023-06-06 09:27:04.142	\N	\N
301	api::order.order.getOrdersByStatus	2023-06-15 09:35:41.48	2023-06-15 09:35:41.48	\N	\N
302	api::order.order.ordersDashboard	2023-06-15 09:35:41.48	2023-06-15 09:35:41.48	\N	\N
303	api::plan.plan.find	2023-06-15 10:42:01.581	2023-06-15 10:42:01.581	\N	\N
304	api::plan.plan.findOne	2023-06-15 10:42:01.581	2023-06-15 10:42:01.581	\N	\N
305	api::plan.plan.create	2023-06-15 10:42:01.581	2023-06-15 10:42:01.581	\N	\N
306	api::plan.plan.update	2023-06-15 10:42:01.581	2023-06-15 10:42:01.581	\N	\N
307	api::plan.plan.delete	2023-06-15 10:42:01.581	2023-06-15 10:42:01.581	\N	\N
308	api::transaction.transaction.getUsersTransactions	2023-06-16 05:41:10.489	2023-06-16 05:41:10.489	\N	\N
309	api::transaction.transaction.find	2023-06-16 05:41:10.489	2023-06-16 05:41:10.489	\N	\N
310	api::transaction.transaction.findOne	2023-06-16 05:41:10.489	2023-06-16 05:41:10.489	\N	\N
311	api::transaction.transaction.create	2023-06-16 05:41:10.489	2023-06-16 05:41:10.489	\N	\N
312	api::transaction.transaction.update	2023-06-16 05:41:10.489	2023-06-16 05:41:10.489	\N	\N
313	api::transaction.transaction.delete	2023-06-16 05:41:10.489	2023-06-16 05:41:10.489	\N	\N
314	api::custom.custom.forgotPasswordMail	2023-06-16 05:42:04.785	2023-06-16 05:42:04.785	\N	\N
315	api::custom.custom.firebasePhoneAuthVerify	2023-06-16 05:42:04.785	2023-06-16 05:42:04.785	\N	\N
316	api::custom.custom.forgotPasswordPhone	2023-06-16 05:42:04.785	2023-06-16 05:42:04.785	\N	\N
317	api::custom.custom.dashboardStats	2023-06-16 05:42:04.785	2023-06-16 05:42:04.785	\N	\N
318	api::custom.custom.firebasePhoneAuthVerify	2023-06-16 10:58:22.366	2023-06-16 10:58:22.366	\N	\N
319	api::custom.custom.forgotPasswordPhone	2023-06-16 11:03:00.459	2023-06-16 11:03:00.459	\N	\N
320	api::product.product.getProductWithoutPricing	2023-06-19 12:47:07.943	2023-06-19 12:47:07.943	\N	\N
321	api::free-plan.free-plan.find	2023-06-20 12:07:45.879	2023-06-20 12:07:45.879	\N	\N
322	api::free-plan.free-plan.update	2023-06-20 12:07:45.88	2023-06-20 12:07:45.88	\N	\N
323	api::free-plan.free-plan.delete	2023-06-20 12:07:45.88	2023-06-20 12:07:45.88	\N	\N
324	api::group.group.find	2023-06-21 11:09:53.614	2023-06-21 11:09:53.614	\N	\N
325	api::group.group.findOne	2023-06-21 11:09:53.614	2023-06-21 11:09:53.614	\N	\N
326	api::group.group.create	2023-06-21 11:09:53.614	2023-06-21 11:09:53.614	\N	\N
327	api::group.group.update	2023-06-21 11:09:53.614	2023-06-21 11:09:53.614	\N	\N
328	api::group.group.delete	2023-06-21 11:09:53.614	2023-06-21 11:09:53.614	\N	\N
329	api::custom.custom.generatePdfCatalogue	2023-06-21 12:36:17.128	2023-06-21 12:36:17.128	\N	\N
330	api::custom.custom.generatePdfCatalogue	2023-06-21 12:36:30.875	2023-06-21 12:36:30.875	\N	\N
331	api::group.group.find	2023-06-22 06:04:15.196	2023-06-22 06:04:15.196	\N	\N
332	api::group.group.findOne	2023-06-22 06:04:15.196	2023-06-22 06:04:15.196	\N	\N
333	api::group.group.create	2023-06-22 06:04:15.196	2023-06-22 06:04:15.196	\N	\N
334	api::group.group.update	2023-06-22 06:04:15.196	2023-06-22 06:04:15.196	\N	\N
335	api::group.group.delete	2023-06-22 06:04:15.196	2023-06-22 06:04:15.196	\N	\N
336	api::global-brand.global-brand.find	2023-06-23 10:43:55.643	2023-06-23 10:43:55.643	\N	\N
337	api::global-brand.global-brand.update	2023-06-23 10:43:55.643	2023-06-23 10:43:55.643	\N	\N
338	api::global-brand.global-brand.delete	2023-06-23 10:43:55.643	2023-06-23 10:43:55.643	\N	\N
339	api::global-brand.global-brand.find	2023-06-23 11:04:29.028	2023-06-23 11:04:29.028	\N	\N
340	api::tutorial.tutorial.find	2023-06-23 11:22:42.129	2023-06-23 11:22:42.129	\N	\N
341	api::tutorial.tutorial.findOne	2023-06-23 11:22:42.129	2023-06-23 11:22:42.129	\N	\N
342	api::tutorial.tutorial.find	2023-06-23 11:22:54.03	2023-06-23 11:22:54.03	\N	\N
343	api::tutorial.tutorial.findOne	2023-06-23 11:22:54.031	2023-06-23 11:22:54.031	\N	\N
344	api::tutorial.tutorial.find	2023-06-26 07:56:51.443	2023-06-26 07:56:51.443	\N	\N
345	api::tutorial.tutorial.findOne	2023-06-26 07:56:51.443	2023-06-26 07:56:51.443	\N	\N
346	api::tutorial.tutorial.create	2023-06-27 06:40:58.818	2023-06-27 06:40:58.818	\N	\N
347	api::tutorial.tutorial.update	2023-06-27 06:40:58.818	2023-06-27 06:40:58.818	\N	\N
348	api::tutorial.tutorial.delete	2023-06-27 06:40:58.818	2023-06-27 06:40:58.818	\N	\N
349	api::custom.custom.generatePdfCatalogue	2023-06-28 09:56:11.879	2023-06-28 09:56:11.879	\N	\N
350	api::plan.plan.find	2023-06-29 12:33:43.076	2023-06-29 12:33:43.076	\N	\N
351	api::plan.plan.findOne	2023-06-29 12:33:43.076	2023-06-29 12:33:43.076	\N	\N
352	api::free-plan.free-plan.find	2023-06-29 13:02:53.788	2023-06-29 13:02:53.788	\N	\N
353	api::subscription.subscription.verifySubPayment	2023-06-29 13:35:25.694	2023-06-29 13:35:25.694	\N	\N
354	api::subscription.subscription.create	2023-06-29 13:35:54.478	2023-06-29 13:35:54.478	\N	\N
355	api::transaction.transaction.find	2023-06-30 07:11:45.845	2023-06-30 07:11:45.845	\N	\N
356	api::collection.collection.getCollectionByTag	2023-06-30 13:35:56.735	2023-06-30 13:35:56.735	\N	\N
357	api::collection.collection.getCollectionByTag	2023-06-30 13:36:30.918	2023-06-30 13:36:30.918	\N	\N
358	api::product.product.findAllProducts	2023-07-01 07:08:51.327	2023-07-01 07:08:51.327	\N	\N
359	api::wallet.wallet.find	2023-07-11 06:16:43.158	2023-07-11 06:16:43.158	\N	\N
360	api::wallet.wallet.findOne	2023-07-11 06:16:43.158	2023-07-11 06:16:43.158	\N	\N
361	api::order.order.payoutReseller	2023-07-12 07:02:14.492	2023-07-12 07:02:14.492	\N	\N
362	api::order.order.searchInOrders	2023-07-12 07:02:14.492	2023-07-12 07:02:14.492	\N	\N
363	api::custom.custom.getRecentOrders	2023-07-12 07:02:24.537	2023-07-12 07:02:24.537	\N	\N
364	api::custom.custom.getRecentlyAddedProducts	2023-07-12 07:02:24.537	2023-07-12 07:02:24.537	\N	\N
365	api::custom.custom.updateUserFcmToken	2023-07-12 07:02:24.537	2023-07-12 07:02:24.537	\N	\N
366	api::custom.custom.getResellerDashboardStats	2023-07-12 07:02:24.537	2023-07-12 07:02:24.537	\N	\N
367	api::sub-category.sub-category.getAllSubCategories	2023-07-12 08:12:16.81	2023-07-12 08:12:16.81	\N	\N
368	api::product.product.findAllProducts	2023-07-12 10:12:41.465	2023-07-12 10:12:41.465	\N	\N
369	api::product.product.getProductWithoutPricing	2023-07-12 10:12:41.465	2023-07-12 10:12:41.465	\N	\N
370	api::notification.notification.find	2023-07-12 10:59:57.039	2023-07-12 10:59:57.039	\N	\N
371	api::notification.notification.findOne	2023-07-12 10:59:57.039	2023-07-12 10:59:57.039	\N	\N
372	api::notification.notification.create	2023-07-12 10:59:57.039	2023-07-12 10:59:57.039	\N	\N
373	api::notification.notification.update	2023-07-12 10:59:57.039	2023-07-12 10:59:57.039	\N	\N
374	api::notification.notification.delete	2023-07-12 10:59:57.039	2023-07-12 10:59:57.039	\N	\N
375	api::subscription.subscription.verifySubPayment	2023-07-12 11:00:10.973	2023-07-12 11:00:10.973	\N	\N
376	plugin::strapi-plugin-fcm.fcm-target.find	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
377	plugin::strapi-plugin-fcm.fcm-target.count	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
378	plugin::strapi-plugin-fcm.fcm-topic.find	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
379	plugin::strapi-plugin-fcm.fcm-topic.findOne	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
380	plugin::strapi-plugin-fcm.fcm-topic.delete	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
381	plugin::strapi-plugin-fcm.fcm-topic.create	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
382	plugin::strapi-plugin-fcm.fcm-topic.update	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
383	plugin::strapi-plugin-fcm.fcm-topic.count	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
384	plugin::strapi-plugin-fcm.fcm-notification.find	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
385	plugin::strapi-plugin-fcm.fcm-notification.findOne	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
386	plugin::strapi-plugin-fcm.fcm-notification.delete	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
387	plugin::strapi-plugin-fcm.fcm-notification.send	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
388	plugin::strapi-plugin-fcm.fcm-notification.create	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
389	plugin::strapi-plugin-fcm.fcm-plugin-configuration.find	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
390	plugin::strapi-plugin-fcm.fcm-notification.update	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
391	plugin::strapi-plugin-fcm.fcm-plugin-configuration.findOne	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
392	plugin::strapi-plugin-fcm.fcm-notification.count	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
393	plugin::strapi-plugin-fcm.fcm-plugin-configuration.update	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
394	plugin::strapi-plugin-fcm.fcm-plugin-configuration.create	2023-07-12 11:00:26.158	2023-07-12 11:00:26.158	\N	\N
395	plugin::strapi-plugin-fcm.fcm-topic.findOne	2023-07-13 05:25:54.114	2023-07-13 05:25:54.114	\N	\N
396	plugin::strapi-plugin-fcm.fcm-topic.create	2023-07-13 05:25:54.114	2023-07-13 05:25:54.114	\N	\N
397	plugin::strapi-plugin-fcm.fcm-notification.findOne	2023-07-13 05:25:54.114	2023-07-13 05:25:54.114	\N	\N
398	plugin::strapi-plugin-fcm.fcm-notification.create	2023-07-13 05:25:54.114	2023-07-13 05:25:54.114	\N	\N
399	plugin::strapi-plugin-fcm.fcm-notification.send	2023-07-13 05:25:54.114	2023-07-13 05:25:54.114	\N	\N
400	plugin::strapi-plugin-fcm.fcm-plugin-configuration.create	2023-07-13 05:28:17.623	2023-07-13 05:28:17.623	\N	\N
401	api::sub-category.sub-category.getCustomDataSubCategories	2023-07-14 06:20:18.15	2023-07-14 06:20:18.15	\N	\N
402	api::notification.notification.find	2023-07-14 06:25:30.156	2023-07-14 06:25:30.156	\N	\N
403	api::notification.notification.findOne	2023-07-14 06:25:30.156	2023-07-14 06:25:30.156	\N	\N
404	api::custom.custom.searchInUsers	2023-07-14 11:21:39.244	2023-07-14 11:21:39.244	\N	\N
405	api::custom.custom.getUserInfoByToken	2023-07-14 11:56:50.202	2023-07-14 11:56:50.202	\N	\N
406	api::custom.custom.updateUsersShares	2023-07-14 12:39:22.509	2023-07-14 12:39:22.509	\N	\N
407	api::order.order.setOrderStatusDelivered	2023-07-17 07:50:12.825	2023-07-17 07:50:12.825	\N	\N
408	api::order.order.getOrdersByDate	2023-07-17 07:50:12.826	2023-07-17 07:50:12.826	\N	\N
409	api::collection.collection.searchInCollections	2023-07-17 12:13:09.33	2023-07-17 12:13:09.33	\N	\N
410	api::custom.custom.updateUserFcmToken	2023-07-18 05:39:54.503	2023-07-18 05:39:54.503	\N	\N
411	api::campaign.campaign.find	2023-07-19 06:24:07.317	2023-07-19 06:24:07.317	\N	\N
412	api::campaign.campaign.findOne	2023-07-19 06:24:07.318	2023-07-19 06:24:07.318	\N	\N
413	api::campaign.campaign.create	2023-07-19 06:24:07.318	2023-07-19 06:24:07.318	\N	\N
414	api::campaign.campaign.update	2023-07-19 06:24:07.318	2023-07-19 06:24:07.318	\N	\N
415	api::campaign.campaign.delete	2023-07-19 06:24:07.318	2023-07-19 06:24:07.318	\N	\N
416	api::lead.lead.find	2023-07-27 12:39:22.283	2023-07-27 12:39:22.283	\N	\N
417	api::lead.lead.findOne	2023-07-27 12:39:22.284	2023-07-27 12:39:22.284	\N	\N
418	api::lead.lead.create	2023-07-27 12:39:22.284	2023-07-27 12:39:22.284	\N	\N
419	api::lead.lead.update	2023-07-27 12:39:22.284	2023-07-27 12:39:22.284	\N	\N
420	api::lead.lead.delete	2023-07-27 12:39:22.284	2023-07-27 12:39:22.284	\N	\N
421	api::store-setting.store-setting.find	2023-08-14 07:57:00.297	2023-08-14 07:57:00.297	\N	\N
422	api::ship-rocket-order.ship-rocket-order.create	2023-08-14 08:03:42.237	2023-08-14 08:03:42.237	\N	\N
423	api::shiprocket-order-item.shiprocket-order-item.findOne	2023-08-14 08:03:42.237	2023-08-14 08:03:42.237	\N	\N
424	api::shiprocket-order-item.shiprocket-order-item.create	2023-08-14 08:03:42.237	2023-08-14 08:03:42.237	\N	\N
425	api::shiprocket-order-item.shiprocket-order-item.delete	2023-08-14 08:03:42.237	2023-08-14 08:03:42.237	\N	\N
426	api::product.product.findAllProducts	2023-09-18 05:46:20.377	2023-09-18 05:46:20.377	\N	\N
427	api::order.order.getOrdersByStatus	2023-11-23 08:15:32.086	2023-11-23 08:15:32.086	\N	\N
428	api::admin-subscription.admin-subscription.create	2023-11-25 08:11:20.269	2023-11-25 08:11:20.269	\N	\N
429	api::admin-subscription.admin-subscription.verifySubscription	2023-11-25 08:16:51.53	2023-11-25 08:16:51.53	\N	\N
430	api::promotional-message.promotional-message.find	2023-11-28 07:46:32.309	2023-11-28 07:46:32.309	\N	\N
431	api::promotional-message.promotional-message.findOne	2023-11-28 07:46:32.309	2023-11-28 07:46:32.309	\N	\N
432	api::promotional-message.promotional-message.find	2023-11-28 07:46:44.518	2023-11-28 07:46:44.518	\N	\N
433	api::promotional-message.promotional-message.findOne	2023-11-28 07:46:44.518	2023-11-28 07:46:44.518	\N	\N
434	api::promotional-message.promotional-message.find	2023-11-28 07:46:54.054	2023-11-28 07:46:54.054	\N	\N
435	api::promotional-message.promotional-message.findOne	2023-11-28 07:46:54.054	2023-11-28 07:46:54.054	\N	\N
436	api::promotional-message.promotional-message.create	2023-11-28 07:46:54.054	2023-11-28 07:46:54.054	\N	\N
437	api::promotional-message.promotional-message.update	2023-11-28 07:46:54.054	2023-11-28 07:46:54.054	\N	\N
438	api::promotional-message.promotional-message.delete	2023-11-28 07:46:54.054	2023-11-28 07:46:54.054	\N	\N
439	api::order.order.ordersDashboardReseller	2023-11-29 06:43:15.152	2023-11-29 06:43:15.152	\N	\N
440	api::lead.lead.create	2023-12-14 06:23:35.217	2023-12-14 06:23:35.217	\N	\N
441	api::return-order.return-order.getReturnOrderRequests	2023-12-14 11:03:07.527	2023-12-14 11:03:07.527	\N	\N
442	api::return-order.return-order.findOne	2023-12-14 11:03:07.527	2023-12-14 11:03:07.527	\N	\N
443	api::return-order.return-order.find	2023-12-14 11:03:07.527	2023-12-14 11:03:07.527	\N	\N
444	api::return-order.return-order.create	2023-12-14 11:03:07.527	2023-12-14 11:03:07.527	\N	\N
445	api::return-order.return-order.getReturnOrderRequests	2023-12-14 11:03:17.199	2023-12-14 11:03:17.199	\N	\N
446	api::return-order.return-order.findOne	2023-12-14 11:03:17.199	2023-12-14 11:03:17.199	\N	\N
447	api::return-order.return-order.find	2023-12-14 11:03:17.199	2023-12-14 11:03:17.199	\N	\N
448	api::return-order.return-order.create	2023-12-14 11:03:17.199	2023-12-14 11:03:17.199	\N	\N
449	api::return-order.return-order.update	2023-12-14 11:03:17.199	2023-12-14 11:03:17.199	\N	\N
450	api::return-order.return-order.delete	2023-12-14 11:03:17.199	2023-12-14 11:03:17.199	\N	\N
451	api::custom.custom.generateSiteMap	2023-12-23 07:34:09.827	2023-12-23 07:34:09.827	\N	\N
452	api::order.order.returnRequestOrder	2023-12-23 08:30:08.177	2023-12-23 08:30:08.177	\N	\N
453	api::order-product.order-product.findOne	2023-12-23 08:32:26.166	2023-12-23 08:32:26.166	\N	\N
454	api::order-product.order-product.find	2023-12-23 08:32:26.166	2023-12-23 08:32:26.166	\N	\N
458	api::order.order.rejectReturnRequests	2023-12-25 10:06:26.335	2023-12-25 10:06:26.335	\N	\N
457	api::order.order.acceptReturnRequests	2023-12-25 10:06:26.335	2023-12-25 10:06:26.335	\N	\N
461	api::default-page.default-page.find	2023-12-26 06:56:00.122	2023-12-26 06:56:00.122	\N	\N
462	api::default-page.default-page.update	2023-12-26 06:56:00.122	2023-12-26 06:56:00.122	\N	\N
\.


--
-- Name: up_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.up_permissions_id_seq', 463, true);


--
-- Name: up_permissions up_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_pkey PRIMARY KEY (id);


--
-- Name: up_permissions_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_permissions_created_by_id_fk ON public.up_permissions USING btree (created_by_id);


--
-- Name: up_permissions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_permissions_updated_by_id_fk ON public.up_permissions USING btree (updated_by_id);


--
-- Name: up_permissions up_permissions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_permissions up_permissions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

