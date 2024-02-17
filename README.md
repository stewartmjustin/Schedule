Temp readme for how to set up file:

create .env file that looks similar to this:
```
MYSQL_HOST=yours
MYSQL_USER=yours
MYSQL_PASSWORD=yours
MYSQL_DATABASE=yours
```
create mysql table with the folling command:
```
CREATE TABLE events(ID int NOT NULL AUTO_INCREMENT, Name varchar(255), PRIMARY KEY (ID));
```
set up the server and run it with
```
npm i
npm start
```

set up and run the client with
```
npm i
npm run dev
```