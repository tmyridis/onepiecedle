create table arcs
(
    id        serial
        constraint arcs_pk
            primary key,
    arc_name  varchar not null,
    arc_order integer not null
);

alter table arcs
    owner to postgres;

create unique index arcs_id_uindex
    on arcs (id);

INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (1, 'Romance Dawn', 1);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (2, 'Orange Town', 2);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (3, 'Syrup Village', 3);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (4, 'Baratie', 4);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (5, 'Arlong Park', 5);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (6, 'Loguetown', 6);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (7, 'Reverse Mountain', 7);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (8, 'Whisky Peak', 8);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (9, 'Little Garden', 9);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (10, 'Drum Island', 10);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (11, 'Arabasta', 11);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (12, 'Jaya', 12);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (13, 'Skypiea', 13);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (14, 'Long Ring Long Land', 14);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (15, 'Water 7', 15);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (16, 'Enies Lobby', 16);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (17, 'Post-Enies Lobby', 17);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (18, 'Thriller Bark', 18);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (19, 'Sabaody Archipelago', 19);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (20, 'Amazon Lily', 20);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (21, 'Impel Down', 21);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (22, 'Marineford', 22);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (23, 'Post-War', 23);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (24, 'Return to Sabaody', 24);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (25, 'Fish-Man Island', 25);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (26, 'Punk Hazard', 26);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (27, 'Dressrosa', 27);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (28, 'Zou', 28);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (29, 'Whole Cake Island', 29);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (30, 'Levely', 30);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (31, 'Wano Country', 31);
INSERT INTO public.arcs (id, arc_name, arc_order) VALUES (32, 'Egghead', 32);
