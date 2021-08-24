CREATE TABLE public.thing(
   id serial PRIMARY KEY,
   name VARCHAR (255) UNIQUE NOT NULL
);


INSERT INTO public.thing (name) VALUES
    ('Paperclip');
