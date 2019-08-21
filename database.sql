
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "messages" (
	"id" serial primary key,
	"bar_id" integer not null,
	"user_id" integer not null,
	"date" timestamp,
	"message" varchar(999) not null,
	"flagged" boolean default false
);

CREATE TABLE "bars" (
	"id" serial primary key,
	"name" varchar(999) not null,
	"address" varchar(999) not null,
	"notes" varchar(999) not null,
	"phone" varchar(999),
	"image_url" varchar(999),
	"approved" boolean default false
);


INSERT INTO "messages" ("bar_id", "user_id", "date", "message")
VALUES ('2', '1', '2019-08-05', 'Love the Hamm''s here!');
 
INSERT INTO "messages" ("bar_id", "user_id", "date", "message")
VALUES ('1', '2', '2019-08-05', 'Only losers drink here');

INSERT INTO "messages" ("bar_id", "user_id", "date", "message")
VALUES ('1', '3', '2019-08-05', 'Best bar in town');

INSERT INTO "bars" ("name", "address", "notes", "phone", "image_url", "approved")
VALUES ('The Bierstube', '7121 10th St N, Oakdale', '$3.50 Frosty Hamm''s mug; $5 Custom Hamm''s pint glass--get it filled with Hamm''s and keep the glass!', '651-731-8381', 'http://1.bp.blogspot.com/_ds2D5QhvqJQ/RXHgspjDnTI/AAAAAAAAAAM/1BRAZOWuCBQ/s320/bierstube.jpg', true)

INSERT INTO "bars" ("name", "address", "notes", "phone", "image_url", "approved")
VALUES ('Nuemann''s Bar', '2531 7th Ave E, North St Paul', '$3.00 Hamm''s; $5 Custom Hamm''s pint glass--get it filled with Hamm''s and keep the glass!', '651-770-6020', 'http://stmedia.stimg.co/ctyp_6594258neumann_s_front.JPG?w=800', true)
