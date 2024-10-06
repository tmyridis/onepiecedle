create table daily_characters
(
    id                   serial
        constraint daily_characters_pk
            primary key,
    classic_character_id integer not null,
    fruit_character_id   integer not null,
    date                 date    not null,
    laugh_character_id   json,
    wanted_character_id  json
);

alter table daily_characters
    owner to postgres;

create unique index daily_characters_date_uindex
    on daily_characters (date);

create unique index daily_characters_id_uindex
    on daily_characters (id);

INSERT INTO public.daily_characters (id, classic_character_id, fruit_character_id, date, laugh_character_id, wanted_character_id) VALUES (50, 419, 419, '2024-09-18', '{"id":3,"laugh":0}', '{"id":14,"wanted_image":0}');
INSERT INTO public.daily_characters (id, classic_character_id, fruit_character_id, date, laugh_character_id, wanted_character_id) VALUES (51, 467, 432, '2024-09-20', '{"id":411,"laugh":0}', '{"id":6,"wanted_image":0}');
INSERT INTO public.daily_characters (id, classic_character_id, fruit_character_id, date, laugh_character_id, wanted_character_id) VALUES (52, 478, 414, '2024-09-21', '{"id":413,"laugh":0}', '{"id":4,"wanted_image":0}');
INSERT INTO public.daily_characters (id, classic_character_id, fruit_character_id, date, laugh_character_id, wanted_character_id) VALUES (53, 426, 1, '2024-09-22', '{"id":485,"laugh":0}', '{"id":460,"wanted_image":1}');
INSERT INTO public.daily_characters (id, classic_character_id, fruit_character_id, date, laugh_character_id, wanted_character_id) VALUES (54, 15, 477, '2024-10-01', '{"id":415,"laugh":0}', '{"id":466,"wanted_image":0}');
INSERT INTO public.daily_characters (id, classic_character_id, fruit_character_id, date, laugh_character_id, wanted_character_id) VALUES (55, 476, 433, '2024-10-05', '{"id":424,"laugh":0}', '{"id":415,"wanted_image":0}');
INSERT INTO public.daily_characters (id, classic_character_id, fruit_character_id, date, laugh_character_id, wanted_character_id) VALUES (22, 9, 415, '2024-09-16', '{"id":5,"laugh":0}', '{"id":417,"wanted_image":0}');
INSERT INTO public.daily_characters (id, classic_character_id, fruit_character_id, date, laugh_character_id, wanted_character_id) VALUES (40, 411, 413, '2024-09-17', '{"id":3,"laugh":0}', '{"id":413,"wanted_image":0}');
