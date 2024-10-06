create table characters
(
    id                      serial
        constraint characters_pk
            primary key,
    char_name               varchar not null,
    gender                  varchar not null,
    affiliation             varchar not null,
    devil_fruit_type        varchar not null,
    haki                    json    not null,
    bounty                  bigint  not null,
    height                  real    not null,
    origin                  varchar not null,
    first_arc               varchar not null,
    first_apparition        varchar not null,
    devil_fruit_name        varchar not null,
    devil_fruit_translated  varchar not null,
    devil_fruit_explanation varchar not null,
    image                   varchar,
    wanted_image            character varying[],
    laugh                   character varying[]
);

alter table characters
    owner to postgres;

INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (424, 'Edward Newgate', 'Male', 'Whitebeard Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 5000000000, 6.66, 'Grand Line', 'Arabasta', 'Chapter 159 / Episode 95', 'Gura Gura no Mi', 'Tremor-Tremor Fruit', 'Allows the user to create vibrations, or "quakes"', 'https://ucarecdn.com/4b13b001-14ef-4f43-9772-079b6b72667e/EdwardNewgatedd464c39.png', '{https://ucarecdn.com/226cf68c-a40a-4585-9c34-fe72cc195b2b/edwardnewgate_wanted_1.avif,https://ucarecdn.com/c4a0ea3b-451c-467f-b902-f889a5e810c9/edwardnewgate_wanted_2.avif}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/edward+newgate_laugh_1.mp3,https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/edward+newgate_laugh_2.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (489, 'Carrot', 'Female', 'Mokomo Dukedom', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.61, 'Grand Line', 'Zou', 'Chapter 804 / Episode 753', 'None', 'None', 'None', 'https://ucarecdn.com/ae3e1c46-a9c7-4dfe-bd16-5b1e442fed57/Carrot7fe792fc.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (491, 'Nekomamushi', 'Male', 'Mokomo Dukedom', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 5.22, 'Grand Line', 'Zou', 'Chapter 809 / Episode 756', 'None', 'None', 'None', 'https://ucarecdn.com/53135e83-af35-4498-9e11-46d7e0823827/Nekomamushi3bea3a89.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (492, 'Inuarashi', 'Male', 'Mokomo Dukedom', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 5.11, 'Grand Line', 'Zou', 'Chapter 808 / Episode 756', 'None', 'None', 'None', 'https://ucarecdn.com/d580c876-ab89-4fad-aeec-96844447aa7c/Inuarashi455ca992.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (493, 'Wanda', 'Female', 'Mokomo Dukedom', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.81, 'Grand Line', 'Zou', 'Chapter 804 / Episode 753', 'None', 'None', 'None', 'https://ucarecdn.com/aad1c112-6715-4d99-8c82-bb78c6cd54c1/Wandaf76e7e22.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (494, 'Morgans', 'Male', 'World Economy News Paper', 'Zoan', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 3.05, 'Grand Line', 'Whole Cake Island', 'Chapter 860 / Episode 828', 'Tori Tori no Mi, Model: Albatross', 'Bird-Bird Fruit, Model: Albatross', 'Allows its user to transform into an albatross hybrid and a full albatross at will', 'https://ucarecdn.com/23aa69ac-8483-42c4-864b-384715f462d6/Morgans875b7b8e.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (495, 'Charlotte Chiffon', 'Female', 'Fire Tank Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 2.15, 'Grand Line', 'Whole Cake Island', 'Chapter 825 / Episode 783', 'None', 'None', 'None', 'https://ucarecdn.com/7c778f26-9df7-4384-a8a9-966297ffa9e6/CharlotteChiffon8722f63e.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (496, 'Charlotte Pudding', 'Female', 'Big Mom Pirates', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.66, 'Grand Line', 'Fish-Man Island', 'Chapter 651 / Episode 571', 'Memo Memo no Mi', 'Memo-Memo Fruit', 'Allows the user to turn people''s memories into strips of film and manipulate them', 'https://ucarecdn.com/c8d9a377-b30c-4f77-a6a7-69a15be1114e/CharlottePuddinga6ceb0e0.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (490, 'Pedro', 'Male', 'Mokomo Dukedom', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 382000000, 2.33, 'Grand Line', 'Zou', 'Chapter 805 / Episode 754', 'None', 'None', 'None', 'https://ucarecdn.com/4bc94634-4926-4226-98c2-817893af4af5/Pedro722ee0db.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (21, 'Monkey D. Dragon', 'Male', 'Revolutionary Army', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 2.56, 'East Blue', 'Loguetown', 'Chapter 100 / Episode 52', 'None', 'None', 'None', 'https://ucarecdn.com/7a2e61cc-734b-40c7-a0f4-3d19453b8658/MonkeyDDragonf38fec6e.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (8, 'Benn Beckman', 'Male', 'Red-Haired Pirates', 'None', '{
      "observation": false,
      "armament": true,
      "conqueror": false
    }', 0, 2.06, 'North Blue', 'Romance Dawn', 'Chapter 1 / Episode 4', 'None', 'None', 'None', 'https://ucarecdn.com/2aa72963-dd22-4d59-a6a2-eea6a42472a0/BennBeckman7eb4c718.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (2, 'Usopp', 'Male', 'Straw Hat Pirates', 'None', '{
      "observation": true,
      "armament": false,
      "conqueror": false
    }', 500000000, 1.76, 'East Blue', 'Syrup Village', 'Chapter 23 / Episode 8', 'None', 'None', 'None', 'https://ucarecdn.com/31325125-e040-40c2-bded-1f971fb50a28/Usopp8103124b.png', '{https://ucarecdn.com/a1ddff20-933f-43a4-8973-fc410970968e/usopp_wanted_1.avif}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (16, 'Gin', 'Male', 'Krieg Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 12000000, 1.86, 'East Blue', 'Baratie', 'Chapter 44 / Episode 21', 'None', 'None', 'None', 'https://ucarecdn.com/1999e655-d633-486b-a3c5-d63313be6efe/Gin5e1d4c23.png', '{https://ucarecdn.com/a8520a4d-d973-485d-a477-615eb62b436a/gin_wanted_1.jfif}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (9, 'Koby', 'Male', 'Marines', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 1.67, 'East Blue', 'Romance Dawn', 'Chapter 2 / Episode 1', 'None', 'None', 'None', 'https://ucarecdn.com/f389c5ab-ea29-4885-9049-8fa9c8129095/Kobyb049cb35.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (19, 'Smoker', 'Male', 'Marines', 'Logia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 2.09, 'Grand Line', 'Loguetown', 'Chapter 97 / Episode 48', 'Moku Moku no Mi', 'Smoke-Smoke Fruit', 'Grants its user the ability to transform their body into smoke', 'https://ucarecdn.com/8e585b0e-c919-430c-8e9f-9de287288b6f/Smoker9a6e5ee8.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (15, 'Zeff', 'Male', 'Baratie', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.89, 'East Blue', 'Baratie', 'Chapter 43 / Episode 20', 'None', 'None', 'None', 'https://ucarecdn.com/3b10dd7a-fc17-4d01-8076-d18a6d44b628/Zeff100c797f.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (7, 'Shanks', 'Male', 'Red-Haired Pirates', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 4048900000, 1.99, 'West Blue', 'Romance Dawn', 'Chapter 1 / Episode 4', 'None', 'None', 'None', 'https://ucarecdn.com/a10a29aa-d2a0-4e6d-82b7-ec3037c01169/Shanks2df0fd33.png', '{https://ucarecdn.com/49abfdc0-64f4-4ab0-af9f-346ee9b0ebcf/shanks_wanted_1.avif}', '{https://ucarecdn.com/ae8e4143-8884-4b67-aaf4-bd83ddeb86d4/shanks_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (4, 'Roronoa Zoro', 'Male', 'Straw Hat Pirates', 'None', '{
      "observation": false,
      "armament": true,
      "conqueror": true
    }', 1111000000, 1.81, 'East Blue', 'Romance Dawn', 'Chapter 3 / Episode 1', 'None', 'None', 'None', 'https://ucarecdn.com/973e5558-8918-4bee-98e4-39359058053b/RoronoaZoro8e6c24d5.png', '{https://ucarecdn.com/672d75ce-b7b2-4fe3-835f-4ae2ff14f1b2/roronoazoro_wanted_1.webp}', '{https://ucarecdn.com/1bf1bbda-02a0-4975-afb1-929dc4dfe674/roronoazoro_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (477, 'Kaido', 'Male', 'Beasts Pirates', 'Zoan', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 4600000000, 7.1, 'Grand Line', 'Dressrosa', 'Chapter 795 / Episode 736', 'Uo Uo no Mi, Model: Seiryu', 'Fish-Fish Fruit, Model: Azure Dragon', 'Allows its user to transform into a hybrid and full Azure Dragon at will', 'https://ucarecdn.com/f271806c-b252-4346-abd0-a02bdf6bf364/Kaidof33ffc15.png', '{https://ucarecdn.com/039560d2-7be0-4285-9ed0-cead519f4cf4/kaido_wanted_1.avif,https://ucarecdn.com/930ba4a5-d42f-4e5f-ad7f-a226d072f77c/kaido_wanted_2.avif}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/kaido_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (480, 'Pica', 'Male', 'Donquixote Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 99000000, 4.7, 'North Blue', 'Dressrosa', 'Chapter 700 / Episode 629', 'Ishi Ishi no Mi', 'Stone-Stone Fruit', 'Allows the user to merge with and manipulate stone', 'https://ucarecdn.com/b4b72f86-0ffd-40b6-af52-40e40e5d81ab/Pica8797a010.png', '{https://ucarecdn.com/1a92c4ec-7fa8-4f4f-82ef-79bd728e1b0e/pica_wanted_1.jpg,https://ucarecdn.com/32259342-d02d-442c-98c0-b6384f7c58d2/pica_wanted_2.jfif}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/pica_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (497, 'Pekoms', 'Male', 'Big Mom Pirates', 'Zoan', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 330000000, 2.32, 'Zou', 'Fish-Man Island', 'Chapter 651 / Episode 570', 'Kame Kame no Mi', 'Turtle-Turtle Fruit', 'Allows the user to become a turtle hybrid and full turtle at will', 'https://ucarecdn.com/30690281-b81c-4ca1-b398-9c4007fbc02e/Pekomsac3fbbf4.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (498, 'Vinsmoke Reiju', 'Female', 'Vinsmoke Family', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.73, 'North Blue', 'Whole Cake Island', 'Chapter 826 / Episode 784', 'None', 'None', 'None', 'https://ucarecdn.com/b9a6c7c0-5545-422f-a810-0b57a8d678e6/VinsmokeReiju0886f274.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (5, 'Vinsmoke Sanji', 'Male', 'Straw Hat Pirates', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 1032000000, 1.8, 'North Blue', 'Baratie', 'Chapter 43 / Episode 20', 'None', 'None', 'None', 'https://ucarecdn.com/c30ba38d-63e1-4939-8d2a-9f31e8f80d27/VinsmokeSanji2615d736.png', '{https://ucarecdn.com/276ebff0-517d-4004-ae32-bb8a81d74d75/vinsmokesanji_wanted_1.png}', '{https://ucarecdn.com/7b6ff7cb-6ba0-4133-9cf8-18c58c44cea3/vinsmokesanji_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (20, 'Tashigi', 'Female', 'Marines', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 1.7, 'East Blue', 'Loguetown', 'Chapter 96 / Episode 48', 'None', 'None', 'None', 'https://ucarecdn.com/82183399-3209-48d2-b205-3d342a191b76/Tashigi4eb99ed3.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (11, 'Kaya', 'Female', 'None', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.69, 'East Blue', 'Syrup Village', 'Chapter 23 / Episode 9', 'None', 'None', 'None', 'https://ucarecdn.com/54b36332-3cc6-469d-ae41-320e7cb4ec64/Kaya719a7546.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (409, 'Nefertari Vivi', 'Female', 'Arabasta Kingdom', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.69, 'Grand Line', 'Reverse Mountain', 'Chapter 103 / Episode 62', 'None', 'None', 'None', 'https://ucarecdn.com/e6bb2342-787f-45cb-814a-4c0a0584fa1c/NefertariVivid05af611.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (417, 'Portgas D. Ace', 'Male', 'Whitebeard Pirates', 'Logia', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 550000000, 1.85, 'South Blue', 'Drum Island', 'Chapter 154 / Episode 91', 'Mera Mera no Mi', 'Flame-Flame Fruit', 'Allows the user to create, control, and transform into fire at will', 'https://ucarecdn.com/ec7218b3-1d0a-4380-a39e-a288739caf65/PortgasDAced4483010.png', '{https://ucarecdn.com/9905ca61-10e5-454b-b09e-c55a26003b5d/portgasdace_wanted_1.jpg}', '{https://ucarecdn.com/deb87fca-30e9-484d-8c06-34f7824af5ee/portgasdace_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (462, 'Borsalino', 'Male', 'Marines', 'Logia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 3.02, 'North Blue', 'Sabaody Archipelago', 'Chapter 504 / Episode 398', 'Pika Pika no Mi', 'Glint-Glint Fruit', 'Allows the user to create, control, and transform into light at will', 'https://ucarecdn.com/594709c5-194f-484a-b8d4-ad7ccf875c82/Borsalinoa86cccbd.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (1, 'Monkey D. Luffy', 'Male', 'Straw Hat Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 3000000000, 1.74, 'East Blue', 'Romance Dawn', 'Chapter 1 / Episode 1', 'Gomu Gomu no Mi', 'Gum-Gum Fruit', 'Grants the user''s body the properties of rubber', 'https://ucarecdn.com/e2da9f5b-5e2c-4c61-b0c0-a49e9b1bddc5/MonkeyDLuffy0b25d859.png', '{https://ucarecdn.com/f8bb6fb9-1c31-4a50-9f78-78b063dbcecb/monkeydluffy_wanted_1.jpg,https://ucarecdn.com/b7ba1266-232b-46e5-b760-7b6366a2d60f/monkeydluffy_wanted_2.jpg}', '{https://ucarecdn.com/ecebe4ba-c3f4-41b0-b11c-2a12a3b90c45/monkeydluffy_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (18, 'Nojiko', 'Female', 'None', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.7, 'East Blue', 'Arlong Park', 'Chapter 70 / Episode 31', 'None', 'None', 'None', 'https://ucarecdn.com/0b35dd40-e961-4a7d-a1d2-bfd771faac02/Nojikobb3cd816.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (17, 'Arlong', 'Male', 'Arlong Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 20000000, 2.63, 'Grand Line', 'Arlong Park', 'Chapter 69 / Episode 31', 'None', 'None', 'None', 'https://ucarecdn.com/a2fd6052-99c1-4031-b891-f03eef13e5d7/Arlongc438ea61.png', '{https://ucarecdn.com/660612b3-9dd1-4515-b6c1-4f45bd1c63ea/arlong_wanted_1.png}', '{https://ucarecdn.com/21e6f61c-8080-48b9-bd54-85b3868c0905/arlong_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (413, 'Galdino', 'Male', 'Cross Guild', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 24000000, 1.79, 'South Blue', 'Little Garden', 'Chapter 117 / Episode 70', 'Doru Doru no Mi', 'Wax-Wax Fruit', 'Allows the user to create large quantities of candle wax from their body and control it, making the user a Candle Human', 'https://ucarecdn.com/50646381-7c22-4c52-887d-05b9c017d23a/Galdino3e2b8ac5.png', '{https://ucarecdn.com/cdfde632-8ff8-4595-a3f0-17c321c5546a/galdino_wanted_1.png}', '{https://ucarecdn.com/47b94f0a-299f-42f4-9276-3ea8a625012c/galdino_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (416, 'Kureha', 'Female', 'Sakura Kingdom', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.88, 'Grand Line', 'Drum Island', 'Chapter 134 / Episode 80', 'None', 'None', 'None', 'https://ucarecdn.com/2caa568d-d555-4edf-9b74-2a3caeb76abc/Kureha102c7ea8.png', '{}', '{https://ucarecdn.com/71f578f9-1d07-4d45-aaac-65c417a0f52b/kureha_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (3, 'Nami', 'Female', 'Straw Hat Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 366000000, 1.7, 'East Blue', 'Romance Dawn', 'Chapter 8 / Episode 1', 'None', 'None', 'None', 'https://ucarecdn.com/4ed9ebae-db6a-4907-a9ae-5eeda185cd29/Namia7ad4806.png', '{https://ucarecdn.com/b63271c2-a677-4883-b704-c9f30e5a4bff/nami_wanted_1.webp}', '{https://ucarecdn.com/2c9c8cf0-ed21-4ad6-b214-bff01e559b2d/nami_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (499, 'Charlotte Brulee', 'Female', 'Big Mom Pirates', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 3.5, 'Grand Line', 'Whole Cake Island', 'Chapter 831 / Episode 791', 'Mira Mira no Mi', 'Mirror-Mirror Fruit', 'Allows the user to create mirrors which can reflect attacks or appearances', 'https://ucarecdn.com/0c2b4a9d-4bce-46c3-98e4-db94f3e7ea70/CharlotteBrulee9a792ac4.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (500, 'Charlotte Mont-d''Or', 'Male', 'Big Mom Pirates', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 120000000, 2.6, 'Grand Line', 'Whole Cake Island', 'Chapter 829 / Episode 789', 'Buku Buku no Mi', 'Book-Book Fruit', 'Allows the user to manipulate books', 'https://ucarecdn.com/13f2405a-e451-47cb-b9fb-b375b782ef23/CharlotteMontdOr867685f9.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (414, 'Bentham', 'Male', 'Newkama Land', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 32000000, 2.38, 'East Blue', 'Little Garden', 'Chapter 129 / Episode 78', 'Mane Mane no Mi', 'Clone-Clone Fruit', 'Allows the user to turn themselves into a physical double of anyone they touch', 'https://ucarecdn.com/2114ecbb-6bc6-4f70-82ff-fe1d2dc389ea/Bentham9f4e4807.png', '{https://ucarecdn.com/663a746a-b6ca-41b4-879f-40a8109b092c/bentham_wanted_1.jpg}', '{https://ucarecdn.com/6a1f07d0-739e-47ff-9abd-f86b42740012/bentham_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (412, 'Brogy', 'Male', 'Giant Warrior Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 100000000, 21.3, 'Grand Line', 'Little Garden', 'Chapter 115 / Episode 71', 'None', 'None', 'None', 'https://ucarecdn.com/e10ce743-c838-4ddb-ba8e-22f34071576d/Brogy14823c39.png', '{https://ucarecdn.com/e63c2cb8-2b91-4f57-95ba-6ba7fbde98b2/brogy_wanted_1.jfif,https://ucarecdn.com/4b05e230-b68d-4992-8303-dc8511cb0558/brogy_wanted_2.png}', '{https://ucarecdn.com/6723bff5-2d6b-4917-a578-a32017fb950a/brogy_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (411, 'Dorry', 'Male', 'Giant Warrior Pirates
', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 100000000, 22.6, 'Grand Line', 'Little Garden', 'Chapter 116 / Episode 71', 'None', 'None', 'None', 'https://ucarecdn.com/b8b26d60-02e7-481e-8f0c-bb7e92ce317f/Dorry3fc9507e.png', '{https://ucarecdn.com/7cfdc474-2ceb-4378-9ffc-81066535e250/dorry_wanted_1.png}', '{https://ucarecdn.com/976a0e11-8186-4de5-8063-7aa24fe49db2/dorry_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (410, 'Crocodile', 'Male', 'Cross Guild', 'Logia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 81000000, 2.53, 'Grand Line', 'Little Garden', 'Chapter 126 / Episode 76', 'Suna Suna no Mi', 'Sand-Sand Fruit', 'Allows the user to create, control, and transform into sand at will, turning the user into a Sand Human', 'https://ucarecdn.com/4ac7cb2e-9614-4121-bbad-bcff4c0c6cea/Crocodile301a35d6.png', '{https://ucarecdn.com/44d42b5d-0802-4692-9fb7-c4ece28572fd/crocodile_wanted_1.avif}', '{https://ucarecdn.com/fc825541-99ae-4542-8a91-21f8026ea3c0/crocodile_laugh_2.mp3,https://ucarecdn.com/b7b2ff27-90d7-4da8-983b-6b8930829a2e/crocodile_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (10, 'Buggy', 'Male', 'Cross Guild', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 3189000000, 1.92, 'Grand Line', 'Orange Town', 'Chapter 9 / Episode 4', 'Bara Bara no Mi', 'Chop-Chop Fruit', 'Allows the user to split their own body into pieces and control said pieces however they wish.', 'https://ucarecdn.com/0b690585-f279-44d9-9c17-61689a37496f/Buggyac83ae19.png', '{https://ucarecdn.com/1b1c544c-1f63-47d6-9d29-ae671f091dd0/buggy_wanted_1.avif}', '{https://ucarecdn.com/2a65a561-61d7-40a4-98e5-60caf6fb859c/buggy_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (6, 'Gol D. Roger', 'Male', 'Roger Pirates', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 5564800000, 2.74, 'East Blue', 'Romance Dawn', 'Chapter 1 / Episode 1', 'None', 'None', 'None', 'https://ucarecdn.com/5616301a-4b54-4adc-af9f-61cd03724db4/GolDRoger10e6f0e4.png', '{https://ucarecdn.com/7f309177-3fe4-4ff3-ac97-616b1f6a150f/goldroger_wanted_1.webp}', '{https://ucarecdn.com/b465697f-e421-452e-b5c4-f53a532146d2/goldroger_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (14, 'Dracule Mihawk', 'Male', 'Cross Guild', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 3590000000, 1.98, 'Unknown', 'Baratie', 'Chapter 49 / Episode 23', 'None', 'None', 'None', 'https://ucarecdn.com/502cbb27-e62d-4bd6-a3fd-f37d255a8e6c/DraculeMihawkcf4b5386.png', '{https://ucarecdn.com/3e869256-a966-46a9-9092-ff2bd923c342/draculemihawk_wanted_1.webp}', '{https://ucarecdn.com/757452d4-9045-4311-b44a-f333513099d4/draculemihawk_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (415, 'Tony Tony Chopper', 'Male', 'Straw Hat Pirates', 'Zoan', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 100, 0.9, 'Grand Line', 'Drum Island', 'Chapter 134 / Episode 81', 'Hito Hito no Mi', 'Human-Human Fruit', 'Allows its user to transform into a human hybrid or a human at will', 'https://ucarecdn.com/94633bac-c014-4b26-b3c4-0eb20793cb33/TonyTonyChopperaddd65c7.png', '{https://ucarecdn.com/d457d8c1-a8ab-4319-bd9b-59959abe3e80/tonytonychopper_wanted_1.jpg}', '{https://ucarecdn.com/238182d8-d78a-438c-b24e-2236922a19ea/tonytonychopper_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (418, 'Marshall D. Teach', 'Male', 'Blackbeard Pirates', 'Logia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 2200000000, 3.44, 'Grand Line', 'Jaya', 'Chapter 223 / Episode 146', 'Yami Yami no Mi', 'Dark-Dark Fruit', 'Allows the user to create, control, and transform into darkness at will, making the user a Darkness Human', 'https://ucarecdn.com/33c1f518-4d9a-4e6c-b5c3-6c12129b838d/MarshallDTeach7866b8b4.png', '{https://ucarecdn.com/b680caad-3e5e-4074-9eff-d67af4001e69/marshalldteach_wanted_1.jpeg,https://ucarecdn.com/e2642035-ad07-4845-8883-e0fd42ce1383/marshalldteach_wanted_2.avif}', '{https://ucarecdn.com/5c697ea5-326b-4298-be6d-3cba7d27947d/marshaldteach_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (12, 'Kuro', 'Male', 'Black Cat Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 16000000, 2.07, 'East Blue', 'Syrup Village', 'Chapter 23 / Episode 9', 'None', 'None', 'None', 'https://ucarecdn.com/c06b21c9-e45d-4ca0-a226-09afa8753c3a/Kuro8a79dfb3.png', '{https://ucarecdn.com/6f79c0cb-5b5e-4b60-9240-6a78c082c497/kuro_wanted_1.png}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (13, 'Don Krieg', 'Male', 'Krieg Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 17000000, 2.43, 'East Blue', 'Baratie', 'Chapter 45 / Episode 21', 'None', 'None', 'None', 'https://ucarecdn.com/42b785d6-43e1-43cc-9995-accabc769e7b/DonKrieg16e2b951.png', '{https://ucarecdn.com/83c133fd-1d2b-40c7-8707-495b1c45b2c5/donkrieg_wanted_1.avif}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (501, 'Vinsmoke Judge', 'Male', 'Vinsmoke Family', 'None', '{
      "observation": false,
      "armament": true,
      "conqueror": false
    }', 0, 2.72, 'North Blue', 'Whole Cake Island', 'Chapter 832 / Episode 793', 'None', 'None', 'None', 'https://ucarecdn.com/c328931e-e8f0-41e7-9153-5711133bcae6/VinsmokeJudge23fe363d.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (502, 'Charlotte Katakuri', 'Male', 'Big Mom Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 1100000000, 5.09, 'Grand Line', 'Whole Cake Island', 'Chapter 860 / Episode 825', 'Mochi Mochi no Mi', 'Mochi-Mochi Fruit', 'Allows the user to create, control, and transform into mochi', 'https://ucarecdn.com/16a6fa27-f344-43f3-a481-8e031f239276/CharlotteKatakuri3d2a3247.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (419, 'Nico Robin', 'Female', 'Straw Hat Pirates', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 130000000, 1.88, 'West Blue', 'Whisky Peak', 'Chapter 114 / Episode 67', 'Hana Hana no Mi', 'Flower-Flower Fruit', 'Allows the user to replicate and sprout pieces of their body from the surface of any object or living thing', 'https://ucarecdn.com/b3d889cc-1809-4fbe-8914-cdbb5e33cd74/NicoRobin7393a010.png', '{https://ucarecdn.com/e3cce1a3-4dbd-4a87-84c5-4248fcc85908/nicorobin_wanted_1.avif}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (430, 'Enel', 'Male', 'Automata', 'Logia', '{
      "observation": true,
      "armament": false,
      "conqueror": false
    }', 0, 2.66, 'Sky Islands', 'Skypiea', 'Chapter 254 / Episode 167', 'Goro Goro no Mi', 'Rumble-Rumble Fruit', 'Grants the power to create, control, and become lightning at will', 'https://ucarecdn.com/229de1de-c2e4-4ebb-9a32-a5a1523d4d74/Enel096d9628.png', '{}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/enel_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (434, 'Kuzan', 'Male', 'Blackbeard Pirates', 'Logia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 2.98, 'South Blue', 'Long Ring Long Land', 'Chapter 303 / Episode 225', 'Hie Hie no Mi', 'Ice-Ice Fruit', 'Allows the user to create, control, and transform into ice at will', 'https://ucarecdn.com/14311e3c-2e1f-4366-9093-5bb0fc9ef756/Kuzan1018bb12.png', '{}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/kuzan_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (425, 'Sengoku', 'Male', 'Marines', 'Zoan', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 0, 2.78, 'South Blue', 'Jaya', 'Chapter 234 / Episode 151', 'Hito Hito no Mi, Model: Daibutsu', 'Human-Human Fruit, Model: Buddha', 'Allows its user to transform into a Daibutsu (a giant gold Buddha) at will', 'https://ucarecdn.com/517c265e-e3e3-4670-b929-2c1e5aaae83c/Sengoku54c73d02.png', '{}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/sengoku_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (423, 'Mont Blanc Noland', 'Male', 'Lvneel', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 2.2, 'North Blue', 'Skypiea', 'Chapter 286 / Episode 187', 'None', 'None', 'None', 'https://ucarecdn.com/d1de1b57-7bdb-4b7c-a6b9-e7aa7b13322b/MontBlancNolanddf7878a9.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (503, 'Charlotte Perospero', 'Male', 'Big Mom Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 700000000, 3.33, 'Grand Line', 'Whole Cake Island', 'Chapter 834 / Episode 795', 'Pero Pero no Mi', 'Lick-Lick Fruit', 'Allows the user to create and manipulate candy at will', 'https://ucarecdn.com/62838e62-0c47-4300-8870-9a9bfce6503d/CharlottePerospero93502534.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (504, 'Kozuki Oden', 'Male', 'Kozuki Family', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 0, 3.82, 'Grand Line', 'Wano Country', 'Chapter 920 / Episode 910', 'None', 'None', 'None', 'https://ucarecdn.com/a8d36626-9aeb-461b-bd71-ac45953693ce/KozukiOdena947bbb2.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (505, 'Kikunojo', 'Female', 'Kozuki Family', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 2.87, 'Grand Line', 'Wano Country', 'Chapter 913 / Episode 899', 'None', 'None', 'None', 'https://ucarecdn.com/979b8236-c4e8-4ebc-a07c-c7cc8be14c18/Kikunojod00de77f.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (506, 'Kozuki Hiyori', 'Female', 'Kozuki Family', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.7, 'Grand Line', 'Wano Country', 'Chapter 909 / Episode 892', 'None', 'None', 'None', 'https://ucarecdn.com/d24a34a8-26eb-4c48-a014-42c07d67b8b6/KozukiHiyorif9f0972b.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (507, 'Kurozumi Tama', 'Female', 'Kurozumi Family', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.08, 'Grand Line', 'Wano Country', 'Chapter 911 / Episode 893', 'Kibi Kibi no Mi', 'Millet-Millet Fruit', 'Allows the user to create dango from their cheeks that can tame animals and those of part-animal nature', 'https://ucarecdn.com/64976542-b054-4473-b08a-6974106f6d15/KurozumiTama2e20cacb.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (431, 'Wyper', 'Male', 'Shandia', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.83, 'Sky Islands', 'Skypiea', 'Chapter 237 / Episode 153', 'None', 'None', 'None', 'https://ucarecdn.com/cad1f811-b57a-4eb1-9012-2fb156d35068/Wypera2b07c50.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (508, 'Yamato', 'Female', 'Ninja-Pirate-Mink-Samurai Alliance', 'Zoan', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 0, 2.63, 'Unknown', 'Wano Country', 'Chapter 971 / Episode 972', 'Inu Inu no Mi, Model: Okuchi no Makami', 'Dog-Dog Fruit, Model: Okuchi-no-Makami', 'Allows the user to transform into a hybrid and full version of an ancient wolf deity at will', 'https://ucarecdn.com/85b394d9-ccc5-49d4-9609-3ee3b23d6caf/Yamato5a122b68.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (509, 'Kawamatsu', 'Male', 'Kozuki Family', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 2.71, 'Unknown', 'Wano Country', 'Chapter 920 / Episode 910', 'None', 'None', 'None', 'https://ucarecdn.com/126c627c-4fac-4e02-97c8-61f7177b8cfa/Kawamatsu77b17aee.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (435, 'Iceburg', 'Male', 'Galley-La Company', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.99, 'Grand Line', 'Water 7', 'Chapter 323 / Episode 230', 'None', 'None', 'None', 'https://ucarecdn.com/db1719a3-5f6e-40c5-884b-108734b50c8b/Iceburg3c1505c0.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (436, 'Kaku', 'Male', 'CP0', 'Zoan', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 1.93, 'East Blue', 'Water 7', 'Chapter 323 / Episode 230', 'Ushi Ushi no Mi, Model: Giraffe', 'Ox-Ox Fruit, Model: Giraffe', 'Allows its user to transform into a giraffe hybrid and a full giraffe at will', 'https://ucarecdn.com/a35b92b7-1b1a-4d14-80e8-257038db5236/Kaku6383d706.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (437, 'Kalifa', 'Female', 'CP0', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 1.85, 'Grand Line', 'Water 7', 'Chapter 323 / Episode 230', 'Awa Awa no Mi', 'Bubble-Bubble Fruit', 'Allows the user to emit and control soap and bubbles that can not only clean off dirt but can also "clean off" power', 'https://ucarecdn.com/efa7e141-2f24-4ee1-8c5c-3cfc6ba1d16d/Kalifa92f32cde.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (510, 'Ashura Doji', 'Male', 'Mt. Atama Thieves', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 5.44, 'Grand Line', 'Wano Country', 'Chapter 920 / Episode 910', 'None', 'None', 'None', 'https://ucarecdn.com/dede8125-db68-4c0c-a814-86162e38422a/AshuraDoji3be10f9f.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (511, 'Raizo', 'Male', 'Kozuki Family', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 3.11, 'Grand Line', 'Zou', 'Chapter 817 / Episode 768', 'Maki Maki no Mi', 'Scroll-Scroll Fruit', 'Allows the user to create and control scrolls at will, which have special properties including storing objects and generating drawings', 'https://ucarecdn.com/769974c2-050a-4df5-a980-a7041ec63b9f/Raizo000da401.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (512, 'Denjiro', 'Male', 'Kozuki Family', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 3.06, 'Grand Line', 'Wano Country', 'Chapter 919 / Episode 909', 'None', 'None', 'None', 'https://ucarecdn.com/da579041-bb95-44f7-8856-3f268f99fc0b/Denjiro75aec5cf.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (438, 'Rob Lucci', 'Male', 'CP0', 'Zoan', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 2.12, 'Grand Line', 'Water 7', 'Chapter 323 / Episode 230', 'Neko Neko no Mi, Model: Leopard', 'Cat-Cat Fruit, Model: Leopard', 'Allows its user to transform into a leopard hybrid and a full leopard at will', 'https://ucarecdn.com/72132e15-71c4-470f-816f-ad8364803ffc/RobLuccief1bdd4c.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (439, 'Paulie', 'Male', 'Galley-La Company', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.95, 'Grand Line', 'Water 7', 'Chapter 323 / Episode 230', 'None', 'None', 'None', 'https://ucarecdn.com/55311d60-e2ec-43e2-8de7-b70ea628f7f7/Paulie21bf2ef1.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (449, 'Hogback', 'Male', 'Thriller Bark Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 2.23, 'West Blue', 'Thriller Bark', 'Chapter 446 / Episode 340', 'None', 'None', 'None', 'https://ucarecdn.com/a3cf74c5-4d6a-4059-943a-e6274d16441b/Hogbackc2bb1ec2.png', '{}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/hogback_laugh_1.mp3,https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/hogback_laugh_2.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (441, 'Blueno', 'Male', 'CP0', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 2.58, 'North Blue', 'Water 7', 'Chapter 325 / Episode 230', 'Doa Doa no Mi', 'Door-Door Fruit', 'Allows the user to create doors through anything they touch', 'https://ucarecdn.com/042ebe3d-6e22-4f80-91aa-47d406d143fc/Bluenob55331b2.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (443, 'Sakazuki', 'Male', 'Marines', 'Logia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 3.06, 'North Blue', 'Enies Lobby', 'Chapter 397 / Episode 278', 'Magu Magu no Mi', 'Magma-Magma Fruit', 'Allows the user to create, control, and transform into magma at will', 'https://ucarecdn.com/54a2008c-a7bd-46e8-bc14-66ccd864a9ff/Sakazukid6b3d45c.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (444, 'Jabra', 'Male', 'CP9', 'Zoan', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 2.12, 'North Blue', 'Enies Lobby', 'Chapter 375 / Episode 264', 'Inu Inu no Mi, Model: Wolf', 'Mutt-Mutt Fruit, Model: Wolf', 'Allows its user to transform into a wolf hybrid and a full wolf at will', 'https://ucarecdn.com/379d64d0-5299-466a-9bab-1b32d3b3c282/Jabra189cc563.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (445, 'Monkey D. Garp', 'Male', 'Marines', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 0, 2.87, 'East Blue', 'Arlong Park', 'Chapter 92 / Episode 68', 'None', 'None', 'None', 'https://ucarecdn.com/81269774-c0f4-4f66-8bb0-46de2323534a/MonkeyDGarp3097db17.png', '{}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/monkey+d.+garp_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (448, 'Perona', 'Female', 'Dracule Mihawk', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.6, 'West Blue', 'Thriller Bark', 'Chapter 443 / Episode 338', 'Horo Horo no Mi', 'Hollow-Hollow Fruit', 'Allows the user to conjure ghosts', 'https://ucarecdn.com/3f50ce96-0124-442e-aad2-91bc1d4087fd/Perona100c23cb.png', '{}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/perona_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (450, 'Oars', 'Male', 'Thriller Bark Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 67, 'North Blue', 'Thriller Bark', 'Chapter 456 / Episode 350', 'None', 'None', 'None', 'https://ucarecdn.com/19fbc14a-031b-451f-9236-68b78bc53bb2/Oars37cc650e.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (451, 'Shimotsuki Ryuma', 'Male', 'Thriller Bark Pirates', 'None', '{
      "observation": false,
      "armament": true,
      "conqueror": false
    }', 0, 1.79, 'Grand Line', 'Thriller Bark', 'Chapter 448 / Episode 342', 'None', 'None', 'None', 'https://ucarecdn.com/cdb22b0a-ea64-4c0e-8f38-a8d617c1093c/ShimotsukiRyuma9712e593.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (452, 'Camie', 'Female', 'Takoyaki 8 ', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.97, 'Grand Line', 'Arabasta', 'Chapter 195 / Episode 385', 'None', 'None', 'None', 'https://ucarecdn.com/7a01dfc8-ce8c-42f0-939e-176f662c8bf5/Camie660d9460.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (453, 'Silvers Rayleigh', 'Male', 'Roger Pirates', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 0, 1.88, 'Unknown', 'Orange Town', 'Chapter 19 / Episode 8', 'None', 'None', 'None', 'https://ucarecdn.com/3f664af0-7353-4f02-bea7-eee5ec2cd8c1/SilversRayleigha15b06ba.png', '{}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/silvers+rayleigh_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (442, 'Spandam', 'Male', 'CP0', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.92, 'Grand Line', 'Water 7', 'Chapter 355 / Episode 249', 'None', 'None', 'None', 'https://ucarecdn.com/b8a4d0d0-1ed2-414b-b5ef-03b8dfb80cca/Spandam0c85f4aa.png', '{}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/spandam_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (513, 'Aramaki', 'Male', 'Marines', 'Logia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 3.08, 'South Blue', 'Levely', 'Chapter 905 / Episode 882', 'Mori Mori no Mi', 'Woods-Woods Fruit', 'Grants the power to create, control, and transform into flora at will', 'https://ucarecdn.com/08d59f5f-5a60-47ec-8292-f86aa3e26fb4/Aramaki.jfif', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (514, 'Vegapunk', 'Male', 'Marines', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 2.96, 'Grand Line', 'Egghead', 'Chapter 1066 / Episode 1096', 'Nomi Nomi no Mi', 'Brain-Brain Fruit', 'Allows the user''s brain to expand indefinitely with new knowledge', 'https://ucarecdn.com/45511899-2807-44a4-a6f8-8d0a5b7e7fb7/Vegapunk.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (515, 'Karasu', 'Male', 'Revolutionary Army', 'Logia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 400000000, 2.65, 'North Blue', 'Post-War', 'Chapter 593 / Episode 510', 'Susu Susu no Mi', 'Soot-Soot Fruit', 'Allows the user to create, control, and transform into soot at will', 'https://ucarecdn.com/c3736e77-6354-4b1c-ab96-509caf59e702/Karasu.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (516, 'Lindbergh', 'Male', 'Revolutionary Army', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 316000000, 1.49, 'Unknown', 'Levely', 'Chapter 904 / Episode 880', 'None', 'None', 'None', 'https://ucarecdn.com/4b55447d-cfde-491d-a233-4596c265ceed/Lindbergh.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (517, 'Morley', 'Male', 'Revolutionary Armoy', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 293000000, 12.53, 'West Blue', 'Levely', 'Chapter 904 / Episode 880', 'Oshi Oshi no Mi', 'Push-Push Fruit', 'Allows the user to freely move and shape the ground as though it was malleable like clay', 'https://ucarecdn.com/69c3ec00-fa3a-48d4-a0e1-6c14ef9e1a1d/Morley.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (464, 'Magellan', 'Male', 'Impel Down', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 4.91, 'Grand Line', 'Impel Down', 'Chapter 528 / Episode 425', 'Doku Doku no Mi', 'Venom-Venom Fruit', 'Grants the user the ability to produce and control different types of poison, as well as grants immunity to all forms of poison', 'https://ucarecdn.com/746383c9-deb7-4654-b964-230dc3eba205/Magellan1e61def4.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (479, 'Hody Jones', 'Male', 'New Fish-Man Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 3.31, 'Grand Line', 'Fish-Man Island', 'Chapter 608 / Episode 527', 'None', 'None', 'None', 'https://ucarecdn.com/51615a97-54d5-4b44-b6d0-53db019e705a/HodyJones59d34b3f.png', '{}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/hody+jones_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (476, 'Issho', 'Male', 'Marines', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 2.7, 'Grand Line', 'Dressrosa', 'Chapter 701 / Episode 630', 'Zushi Zushi no Mi', 'Press-Press Fruit', 'Allows the user to create and manipulate gravitational forces', 'https://ucarecdn.com/f49fe28c-c3f9-4189-a75c-c1dd2fe45bbe/Isshobf83ff20.png', '{}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/issho_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (475, 'Kurozumi Kanjuro', 'Male', 'Kurozumi Family', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 3.47, 'Unknown', 'Dressrosa', 'Chapter 700 / Episode 629', 'Fude Fude no Mi', 'Brush-Brush Fruit', 'Allows the user to generate ink from their body and use a painting brush to turn images created with that ink into three-dimensional, lifelike objects', 'https://ucarecdn.com/b044ecc4-9dd8-4198-9b67-bfa8e4f25f7e/KurozumiKanjuro228dbae0.png', '{}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/kurozumi+kanjuro_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (469, 'Koala', 'Female', 'Revolutionary Army', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.6, 'Unknown', 'Fish-Man Island', 'Chapter 622 / Episode 541', 'None', 'None', 'None', 'https://ucarecdn.com/2173b4c6-a605-4419-b7f8-7a4237a64339/Koala344a7e40.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (471, 'Shirahoshi', 'Female', 'Neptune Family', 'None', '{
      "observation": true,
      "armament": false,
      "conqueror": false
    }', 0, 11.87, 'Grand Line', 'Fish-Man Island', 'Chapter 612 / Episode 531', 'None', 'None', 'None', 'https://onepiecedle.net/img/Shirahoshi.7a69563c.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (473, 'Kin''emon', 'Male', 'Kozuki Family', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 0, 2.95, 'Grand Line', 'Punk Hazard', 'Chapter 656 / Episode 580', 'Fuku Fuku no Mi', 'Garb-Garb Fruit', 'Allows the user to create clothing and other apparel out of leaves or stones by visualizing them', 'https://ucarecdn.com/156f2707-962c-4c37-b493-c6cbf1da01c0/Kinemon18bf58f0.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (474, 'Kozuki Momonosuke', 'Male', 'Kozuki Family', 'Zoan', '{
      "observation": true,
      "armament": false,
      "conqueror": false
    }', 0, 1.1, 'Grand Line', 'Punk Hazard', 'Chapter 684 / Episode 609', 'Uo Uo no Mi, Model: Seiryu', 'Fish-Fish Fruit, Model: Azure Dragon', 'Allows its user to transform into a hybrid and full Azure Dragon at will', 'https://ucarecdn.com/51174220-a894-4885-9ae6-12b091032fa6/KozukiMomonosuked8ea1575.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (478, 'Monet', 'Female', 'Donquixote Pirates', 'Logia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 2.27, 'North Blue', 'Punk Hazard', 'Chapter 657 / Episode 581', 'Yuki Yuki no Mi', 'Snow-Snow Fruit', 'Allows the user to create, control, and transform into snow at will', 'https://ucarecdn.com/3015559e-701c-4c97-aaef-e2183a3ba93d/Monet0d0fa156.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (454, 'Capone Bege', 'Male', 'Fire Tank Pirates', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 350000000, 1.66, 'West Blue', 'Sabaody Archipelago', 'Chapter 498 / Episode 392', 'Shiro Shiro no Mi', 'Castle-Castle Fruit', 'Allows the user to become a living fortress', 'https://ucarecdn.com/dffc252b-f92d-447b-9ecc-332287226ddd/CaponeBegea198aba2.png', '{https://ucarecdn.com/5f0e780e-3a4f-4902-be7c-2f7b66404401/caponebege_wanted_1.webp}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/capone+bege_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (483, 'Rebecca', 'Female', 'Dressrosa', 'None', '{
      "observation": true,
      "armament": false,
      "conqueror": false
    }', 0, 1.71, 'Grand Line', 'Dressrosa', 'Chapter 704 / Episode 633', 'None', 'None', 'None', 'https://ucarecdn.com/f5672c51-795c-4216-bd93-1cf33220d457/Rebecca75ba93cf.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (484, 'Kyros', 'Male', 'Riku Family', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 2.98, 'Grand Line', 'Dressrosa', 'Chapter 702 / Episode 631', 'None', 'None', 'None', 'https://ucarecdn.com/3a1e8f49-817a-4b66-b216-e787aebc7f01/Kyrosf244f590.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (470, 'Charlotte Linlin', 'Female', 'Big Mom Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 4400000000, 8.8, 'Grand Line', 'Fish-Man Island', 'Chapter 651 / Episode 571', 'Soru Soru no Mi', 'Soul-Soul Fruit', 'Allows the user to interact with and manipulate souls', 'https://ucarecdn.com/5cf7236b-eedc-477f-b0da-bd286cc222d0/CharlotteLinlin3a98e78f.png', '{https://ucarecdn.com/c8dcfdb7-f1bb-411b-b12f-6b75f905195e/charlottelinlin_wanted_1.jpg,https://ucarecdn.com/3e18d8b7-f598-4a43-b91f-5cf0bdacaa13/charlottelinlin_wanted_2.webp}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/charlotte+linlin_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (486, 'Donquixote Rosinante', 'Male', 'Marines', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 2.93, 'Red Line', 'Dressrosa', 'Chapter 761 / Episode 686', 'Nagi Nagi no Mi', 'Calm-Calm Fruit', 'Allows the user to create a soundproof field and to cancel all noises', 'https://ucarecdn.com/ed97163b-f160-4f47-b826-cdb61c0d8d99/DonquixoteRosinante9bc998c2.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (487, 'Viola', 'Female', 'Riku Family', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 0, 1.78, 'Grand Line', 'Dressrosa', 'Chapter 703 / Episode 632', 'Giro Giro no Mi', 'Glare-Glare Fruit', 'Allows the user to see through everything and read the minds of others', 'https://ucarecdn.com/e5e52ab4-f1b2-4848-931b-8d5ce046d988/Viola3991f770.png', '{}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (460, 'Trafalgar D. Water Law', 'Male', 'Heart Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 3000000000, 1.91, 'North Blue', 'Sabaody Archipelago', 'Chapter 498 / Episode 392', 'Ope Ope no Mi', 'Op-Op Fruit', 'Create a spherical domain in which the user can freely rearrange, take apart (without harm), and generally remodel the anatomy of anything and anyone (themselves included) in a "surgical" way', 'https://ucarecdn.com/07685982-36f9-4830-9bce-6faaa4a7c492/TrafalgarDWaterLaw2d163cd6.png', '{https://ucarecdn.com/91002055-36e5-4a0b-9213-9e97d70d79b7/trafalgardwaterlaw_wanted_1.avif,https://ucarecdn.com/546ff432-b491-4bba-9fdd-197990505988/trafalgardwaterlaw_wanted_2.avif}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (488, 'Cavendish', 'Male', 'Beautiful Pirates', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 330000000, 2.08, 'Grand Line', 'Dressrosa', 'Chapter 704 / Episode 632', 'None', 'None', 'None', 'https://ucarecdn.com/d8f61b87-bca8-409f-90a2-3238ee59a094/Cavendishdc7ff939.png', '{https://ucarecdn.com/9a93bbe3-6223-404b-a9d9-c395330eac1f/cavendish_wanted_1.avif}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (422, 'Bellamy', 'Male', 'Donquixote Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 195000000, 2.4, 'North Blue', 'Jaya', 'Chapter 222 / Episode 146', 'Bane Bane no Mi', 'Boing-Boing Fruit', 'Allows the user to turn their limbs into springs', 'https://ucarecdn.com/a32d9346-2311-4f06-8ade-7fd4103300fc/Bellamye3603645.png', '{https://ucarecdn.com/803c5551-7682-41b5-b2fe-f3184bd6d3d7/bellamy_wanted_1.avif,https://ucarecdn.com/b1fd097c-462a-4d71-9736-540697212ed4/bellamy_wanted_2.avif}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/bellamy_laugh_1.mp3,https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/bellamy_laugh_2.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (447, 'Brook', 'Male', 'Straw Hat Pirates', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 83000000, 2.77, 'West Blue', 'Thriller Bark', 'Chapter 442 / Episode 337', 'Yomi Yomi no Mi', 'Revive-Revive Fruit', 'Enhances the user''s soul to the point where they resurrect after their first death, allowing them to live a second time and to use several other soul-based abilities', 'https://ucarecdn.com/b5523031-643e-495c-9515-f97d6ccaa247/Brookd7f2e9fc.png', '{https://ucarecdn.com/c8452b83-6c7b-490a-8376-452c1264b6ad/brook_wanted_1.png}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/brook_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (457, 'Eustass Kid', 'Male', 'Kid Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 3000000000, 2.05, 'South Blue', 'Sabaody Archipelago', 'Chapter 498 / Episode 392', 'Jiki Jiki no Mi', 'Magnet-Magnet Fruit', 'Allows the user to create magnetic forces and use them to control metal', 'https://ucarecdn.com/2f4384ae-ca3a-40f2-90e2-798741ffce3d/EustassKid57fe4921.png', '{https://ucarecdn.com/7f9dee42-0423-46f2-8db8-ba8622fc6614/eustasskid_wanted_1.webp,https://ucarecdn.com/9e807e36-1158-4d60-9982-6a9d27aaacae/eustasskid_wanted_2.avif}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/eustass+kid_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (465, 'Jinbe', 'Male', 'Straw Hat Pirates', 'None', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 438000000, 3.01, 'Grand Line', 'Impel Down', 'Chapter 528 / Episode 430', 'None', 'None', 'None', 'https://ucarecdn.com/34ad4dc6-9197-4899-bc2e-490fc3f3e727/Jinbe7a29dbd5.png', '{https://ucarecdn.com/47a7bdb4-fe57-4e6e-96fb-1dcc682d9b38/jinbe_wanted_1.avif,https://ucarecdn.com/f96ec5d0-d5b3-47bc-aaed-7111acce0429/jinbe_wanted_2.webp}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/jinbe_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (455, 'Jewelry Bonney', 'Female', 'Bonney Pirates', 'Paramecia', '{
      "observation": false,
      "armament": true,
      "conqueror": false
    }', 140000000, 1.74, 'South Blue', 'Sabaody Archipelago', 'Chapter 498 / Episode 392', 'Toshi Toshi no Mi', 'Age-Age Fruit', 'Allows the user to manipulate the ages of people or objects', 'https://ucarecdn.com/b8dead51-6cc8-4e92-90d8-54b8883f05c9/JewelryBonneyd6983481.png', '{https://ucarecdn.com/10e77abe-0f85-4f9f-a16f-7f45c492d398/jewelrybonney_wanted_1.jpg}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (463, 'Boa Hancock', 'Female', 'Kuja', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 80000000, 1.91, 'Calm Belt', 'Amazon Lily', 'Chapter 516 / Episode 409', 'Mero Mero no Mi', 'Love-Love Fruit', 'Allows a range of attacks which use emotions of love, lust or adoration to transform opponents into stone', 'https://ucarecdn.com/6d7657fc-1992-4ed0-9a70-348bf145de74/BoaHancock709d01d9.png', '{https://ucarecdn.com/302ce32e-2fde-41bd-915c-e4c3f9dce5b2/boahancock_wanted_1.png}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (468, 'Caribou', 'Male', 'Caribou Pirates', 'Logia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 210000000, 2.28, 'North Blue', 'Return to Sabaody', 'Chapter 600 / Episode 519', 'Numa Numa no Mi', 'Swamp-Swamp Fruit', 'Allows the user to create, control, and transform into mud at will', 'https://ucarecdn.com/7173aed1-4fd8-4f54-9856-3bf3fc78f13d/Cariboue4b39a59.png', '{https://ucarecdn.com/cf79c7fc-0920-412a-81ed-5aa239b22df9/caribou_wanted_1.webp}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/caribou_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (432, 'Urouge', 'Male', 'Fallen Monk Pirates', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 108000000, 3.88, 'Sky Islands', 'Sabaody Archipelago', 'Chapter 498 / Episode 392', 'None', 'None', 'None', 'https://ucarecdn.com/50289141-a5d5-4b17-bd4e-1d59464e49bd/Urougeec722039.png', '{https://ucarecdn.com/7cbb2704-88a3-4f4f-9dd6-d8a6f08ddb4e/urouge_wanted_1.avif}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (426, 'Bartholomew Kuma', 'Male', 'Revolutionary Army', 'Paramecia', '{
      "observation": false,
      "armament": true,
      "conqueror": false
    }', 296000000, 6.89, 'South Blue', 'Jaya', 'Chapter 233 / Episode 151', 'Nikyu Nikyu no Mi', 'Paw-Paw Fruit', 'Grants the ability to repel anything via paws permanently manifested on the user''s palms, making the user a Paw Human', 'https://ucarecdn.com/6cf7b9ac-cfd1-473f-be59-1c3e454b0c08/BartholomewKumabe3c87af.png', '{https://ucarecdn.com/32a10c59-6cfa-4386-a9a6-f8543a9410da/bartholomewkuma_wanted_1.jpg,https://ucarecdn.com/3dbfb2f6-3ffc-43e2-a5ff-2a8c66091c6a/bartholomewkuma_wanted_2.avif}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (456, 'Basil Hawkins', 'Male', 'Hawkins Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 320000000, 2.1, 'North Blue', 'Sabaody Archipelago', 'Chapter 498 / Episode 392', 'Wara Wara no Mi', 'Straw-Straw Fruit', 'Allows the user to create and manipulate straw at will, with the straw having damage-redirecting properties', 'https://ucarecdn.com/521d2202-13d4-42b1-9ed2-e6f9072abf4c/BasilHawkinsebd4204a.png', '{https://ucarecdn.com/51127ae9-55cf-4ef7-bac7-e90a9870a07f/basilhawkins_wanted_1.png}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (428, 'Marco', 'Male', 'Whitebeard Pirates', 'Zoan', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 1400000000, 2.03, 'Grand Line', 'Jaya', 'Chapter 234 / Episode 151', 'Tori Tori no Mi, Model: Phoenix', 'Bird-Bird Fruit, Model: Phoenix', 'Bestows the power to transform into a phoenix at will', 'https://ucarecdn.com/6797e10a-b849-47aa-acb8-a2e20233674b/Marcofc7b9e0d.png', '{https://ucarecdn.com/ececc532-25f1-4077-961e-26aa90ab9efc/marco_wanted_1.jpg}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (440, 'Franky', 'Male', 'Straw Hat Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 94000000, 2.4, 'South Blue', 'Water 7', 'Chapter 329 / Episode 233', 'None', 'None', 'None', 'https://ucarecdn.com/98610aa5-3339-4ea4-a2b2-f45dd92f7aa0/Franky183757ce.png', '{https://ucarecdn.com/bb86f2db-dd2f-4c58-a720-e02664348a43/franky_wanted_1.avif}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (481, 'Diamante', 'Male', 'Donquixote Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 99000000, 5.25, 'North Blue', 'Dressrosa', 'Chapter 700 / Episode 629', 'Hira Hira no Mi', 'Ripple-Ripple Fruit', 'Allows the user to make their body and any object they touch become flat and flexible, letting solid objects ripple, billow, and flutter like a piece of cloth or a flag', 'https://ucarecdn.com/b79d0302-926d-45b7-83d9-48add90056bf/Diamantec6e356f6.png', '{https://ucarecdn.com/1eca4ddc-0a8e-4a02-b207-a43b86ac747e/diamante_wanted_1.jpg}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/diamante_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (429, 'Jesus Burgess', 'Male', 'Blackbeard Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 20000000, 3.55, 'Grand Line', 'Jaya', 'Chapter 222 / Episode 146', 'Riki Riki no Mi', 'Strong-Strong Fruit', 'Grants its user incredible strength', 'https://ucarecdn.com/b97d4ae0-591c-4616-80d3-d5cf73d8a0df/JesusBurgess2a89a718.png', '{https://ucarecdn.com/785db104-616c-44eb-8aea-c126cc1cc7d3/jesusburgess_wanted_1.avif}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/jesus+burgess_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (433, 'Foxy', 'Male', 'Foxy Pirates', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 24000000, 1.8, 'South Blue', 'Long Ring Long Land', 'Chapter 305 / Episode 207', 'Noro Noro no Mi', 'Slow-Slow Fruit', 'Allows the user to emit beams which temporarily slow down their target', 'https://ucarecdn.com/bcb9c172-889b-43e0-ae6d-ce6791c9c173/Foxy5195c0ba.png', '{https://ucarecdn.com/2f7f51b7-fa2f-470f-8a0c-3479bef1be84/foxy_wanted_1.jpg}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/foxy_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (421, 'Mont Blanc Cricket', 'Male', 'Saruyama Alliance', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 25000000, 2.42, 'North Blue', 'Jaya', 'Chapter 227 / Episode 148', 'None', 'None', 'None', 'https://ucarecdn.com/0a1314fe-a128-4ee0-b8b7-dfb2fe09ff03/MontBlancCricket77e76661.png', '{https://ucarecdn.com/294da736-33f9-4088-933f-a6a18ddb388c/montblanccricket_wanted_1.avif}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/mont+blanc+cricket_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (459, 'X. Drake', 'Male', 'Marines', 'Zoan', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 222000000, 2.33, 'North Blue', 'Sabaody Archipelago', 'Chapter 498 / Episode 392', 'Ryu Ryu no Mi, Model: Allosaurus', 'Dragon-Dragon Fruit, Model: Allosaurus', 'Allows the user to transform into an allosaurus hybrid and a full allosaurus at will', 'https://ucarecdn.com/9a316c56-d653-4d7d-8e06-917d1ae53f4d/XDrake4c6be48a.png', '{https://ucarecdn.com/409ae603-efcd-4b28-95f4-d7284af2da4b/xdrake_wanted_1.avif,https://ucarecdn.com/5d6a6a46-9334-4055-b6a3-ba3626ab7449/xdrake_wanted_2.avif}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (420, 'Daz Bonez', 'Male', 'Cross Guild', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 75000000, 2.12, 'West Blue', 'Arabasta', 'Chapter 160 / Episode 103', 'Supa Supa no Mi', 'Dice-Dice Fruit', 'Enables the user''s body to gain characteristics of a steel blade to attack opponents with, making the user a Full-Body Bladed Human', 'https://ucarecdn.com/4bee8b05-33f9-487e-aaeb-265ad2ddf84e/DazBonesc7e039c0.png', '{https://ucarecdn.com/6bbe022f-11e8-48e9-bf7e-e854dfcf0b75/dazbonez_wanted_1.avif}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (482, 'Senor Pink', 'Male', 'Donquixote Pirates', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 58000000, 2.44, 'North Blue', 'Dressrosa', 'Chapter 702 / Episode 632', 'Sui Sui no Mi', 'Swim-Swim Fruit', 'Allows the user to swim in the ground or walls', 'https://ucarecdn.com/ff159a8f-ec4b-4ed9-a620-3a031bed60d1/SenorPink61c9c242.png', '{https://ucarecdn.com/09249cf3-cbb8-4441-89e0-be0244a25980/senorpink_wanted_1.webp}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (461, 'Bepo', 'Male', 'Heart Pirates', 'None', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 500, 2.4, 'Zou', 'Sabaody Archipelago', 'Chapter 498 / Episode 392', 'None', 'None', 'None', 'https://ucarecdn.com/01c7c195-ae50-4d70-b386-888aa579939e/Bepo1e8a8286.png', '{https://ucarecdn.com/0894b5b5-fd61-4647-bdc9-064fbafc71e4/bepo_wanted_1.webp}', '{}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (485, 'Bartolomeo', 'Male', 'Barto Club', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 200000000, 2.2, 'East Blue', 'Dressrosa', 'Chapter 705 / Episode 633', 'Bari Bari no Mi', 'Barrier-Barrier Fruit', 'Allows the user to generate barriers', 'https://ucarecdn.com/5245a293-3f4d-4e3f-a67a-5be594a30825/Bartolomeod202ae3e.png', '{https://ucarecdn.com/3adc4949-ec53-45eb-9ece-8a60b1817b6c/bartolomeo_wanted_1.jpg,https://ucarecdn.com/fa72109f-d467-4c14-8019-4fed4de7ade7/bartolomeo_wanted_2.webp}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/bartolomeo_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (472, 'Caesar Clown', 'Male', 'Germa Kingdom', 'Logia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 300000000, 3.09, 'Grand Line', 'Punk Hazard', 'Chapter 658 / Episode 581', 'Gasu Gasu no Mi', 'Gas-Gas Fruit', 'Allows the user to create, control, and transform into gas at will', 'https://ucarecdn.com/97b6c976-4348-4eab-bacb-dca21e81acdb/CaesarClown189632f1.png', '{https://ucarecdn.com/a91f92a3-7eb0-499e-9761-500c5fb51936/caesarclown_wanted_1.webp}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/caesar+clown_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (427, 'Donquixote Doflamingo', 'Male', 'Donquixote Pirates', 'Paramecia', '{
      "observation": true,
      "armament": true,
      "conqueror": true
    }', 340000000, 3.05, 'Red Line', 'Jaya', 'Chapter 233 / Episode 151', 'Ito Ito no Mi', 'String-String Fruit', 'Allows the user to create and manipulate strings', 'https://ucarecdn.com/3b374bc5-662f-4d13-9ff6-971fa6e2da47/DonquixoteDoflamingo1825dbc6.png', '{https://ucarecdn.com/c10a4715-ccdc-4ef1-8327-347fd0ece0ee/donquixotedoflamingo_wanted_1.webp,https://ucarecdn.com/2347cb94-1a4a-42a4-a348-f459d8e29da9/donquixotedoflamingo_wanted_2.webp}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/donquixote+doflamingo_laugh_1.mp3,https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/donquixote+doflamingo_laugh_2.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (466, 'Emporio Ivankov', 'Male', 'Revolutionary Army', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 100000000, 4.49, 'Grand Line', 'Impel Down', 'Chapter 537 / Episode 438', 'Horu Horu no Mi', 'Hor-Hor Fruit', 'Grants the user the ability to create a variety of special hormones that can alter the recipient''s body in any way the user desires', 'https://ucarecdn.com/74145719-00bc-4506-81b6-54e6e00bc8d8/EmporioIvankov46877e61.png', '{https://ucarecdn.com/934c9124-17a2-4c9c-97e6-576fd908d9a0/emporioivankov_wanted_1.png}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/emporio+ivankov_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (446, 'Gecko Moria', 'Male', 'Thriller Bark Pirates', 'Paramecia', '{
      "observation": false,
      "armament": false,
      "conqueror": false
    }', 320000000, 6.92, 'West Blue', 'Thriller Bark', 'Chapter 449 / Episode 343', 'Kage Kage no Mi', 'Shadow-Shadow Fruit', 'Gives the user the ability to manifest and control shadows of living creatures, including their own, as physical and tangible forms', 'https://ucarecdn.com/34239e69-ac07-4611-812f-501538618bbe/GeckoMoria94f17b46.png', '{https://ucarecdn.com/d32ee5d9-44a2-49ab-9fe5-d016a9382987/geckomoria_wanted_1.jfif}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/gecko+moria_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (458, 'Killer', 'Male', 'Kid Pirates', 'Zoan', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 200000000, 1.95, 'South Blue', 'Sabaody Archipelago', 'Chapter 498 / Episode 392', 'SMILE Fruit', 'SMILE Fruit', 'SMILE Fruit', 'https://ucarecdn.com/16b2385f-1597-4bb5-ae7b-7d3eec3800bb/Killer8411d51f.png', '{https://ucarecdn.com/70c47966-d8e0-489a-af2a-151827a51030/killer_wanted_1.webp,https://ucarecdn.com/d99ff3b6-2f38-47be-be80-c6c163dd9cc6/killer_wanted_2.avif}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/killer_laugh_1.mp3}');
INSERT INTO public.characters (id, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation, image, wanted_image, laugh) VALUES (467, 'Sabo', 'Male', 'Revolutionary Army', 'Logia', '{
      "observation": true,
      "armament": true,
      "conqueror": false
    }', 602000000, 1.87, 'East Blue', 'Post-War', 'Chapter 583 / Episode 494', 'Mera Mera no Mi', 'Flame-Flame Fruit', 'Allows the user to create, control, and transform into fire at will', 'https://ucarecdn.com/0aa8f619-244c-44e2-85c2-abc5e3440c22/Sabo6791aa83.png', '{https://ucarecdn.com/a6d61b33-038a-421a-806f-f1b64da07e02/sabo_wanted_1.png}', '{https://onepiecedle-recreation.s3.eu-north-1.amazonaws.com/character-laughs/sabo_laugh_1.mp3}');
