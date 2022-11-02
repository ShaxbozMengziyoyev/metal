CREATE TABLE sms (
  sms_id serial not null PRIMARY KEY,
  sms_name text ,
  sms_phone varchar(128) ,
  sms_messages  varchar(64)
);