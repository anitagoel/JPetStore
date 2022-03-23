create table signon (
    username varchar(25) not null,
    password varchar(25)  not null,
    constraint pk_signon primary key (username)
);
create table account (
    userid varchar(80) not null,
    email varchar(80) not null,
    firstname varchar(80) not null,
    lastname varchar(80) not null,
    status varchar(2)  null,
    addr1 varchar(80) not null,
    addr2 varchar(40) null,
    city varchar(80) not  null,
    state varchar(80) not null,
    zip varchar(20) not null,
    country varchar(20) not null,
    phone varchar(80) not null,
    constraint pk_account primary key (userid)
);
create table profile (
    userid varchar(80) not null,
    langpref varchar(80) not null,
    favcategory varchar(30),
    mylistopt int,
    banneropt int,
    constraint pk_profile primary key (userid)
);
create table bannerdata (
    favcategory varchar(80) not null,
    bannername varchar(255)  null,
    constraint pk_bannerdata primary key (favcategory)
);