create extension "pgcrypto";

create table users (
	user_id serial not null primary key,
	user_username character varying(64) not null,
	user_password character varying(60) not null,
	user_role smallint default 0,
	user_joined timestamptz default current_timestamp
);

create unique index on users (lower(user_username));

create table accounts (
	account_id serial not null primary key,
	user_id int not null references users(user_id),
	firstname character varying(32) not null,
	lastname character varying(32) not null,
	gender smallint not null
);

create table courses (
	course_id serial not null primary key,
	course_name character varying(128) not null,
	course_description character varying(256) not null,
	course_isopen boolean default false
);

create table levels (
	level_id serial not null primary key,
	level_number smallint default 1,
	course_id int not null references courses(course_id)
);

create table subjects (
	subject_id serial not null primary key,
	subject_name character varying (64) not null,
	course_id int not null references courses(course_id),
	level_id int not null references levels(level_id)
);

create table lectures (
	lecture_id serial not null primary key,
	lecture_title character varying(128) not null,
	lecture_content text,
	lecture_completed boolean default false,
	lecture_successor int references lectures(lecture_id),
	subject_id int not null references subjects(subject_id)
);

create table quizzes (
	quiz_id serial not null primary key,
	quiz_title character varying(256) not null,
	quiz_time smallint default 30,
	lecture_id int not null references lectures(lecture_id)
);

create table quiz_options (
	option_id serial not null primary key,
	option_title character varying(128) not null,
	option_isright boolean default false,
	quiz_id int not null references quizzes(quiz_id)
);

create table results (
	result_id serial not null primary key,
	result_completed smallint default 0,
	account_id int not null references accounts(account_id),
	lecture_id int not null references lectures (lecture_id)
);
