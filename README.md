# Schedule

## Function

Schedule is a full-stack app that allows the storage and viewing of Events.

### Usage

![Screenshot of Schedule running in a browser. The Viewer and Creator sections are shown in full, while the Delete section is only partially shown. Viewer has 3 Events saved: April fools, A dentist apointment on April 3rd and 'Janice's Birthday' on April 3rd.](./images/FullSchedule.jpg)

#### Viewer

The Viewer section shows Events between certain dates. You can select to view certain weeks ahead or to show all events.

#### Creator

The Creator section allws the user to enter a name and date for the Event that is then saved into the server upon submission.

#### Delete

Delete is split into four sections:

- ID
    - Allows the deletion of Events by ID in a range or one by one.
- Name
    - Allows the deletion of Events by Name.
- Delete All Past Events
    - Allows the deletion of all previous Events.
- DELETE ALL EVENTS
    - Allows the Deletion of all Events.

### How It Works

The app uses:

> NPM, REACTJS, HTML, CSS, Javascript, MYSQL and a API Framework

Different sections of the `/Client/` do `fetch` requests to `/Server/server.js`. `server.js` Then handles the request and calls `/Server/database.js` functions. `database.js` then makes calls to the `SQL Server` and returns the `SQL` call to `server.js`. `server.js` then modifies and sends the information back to the `/Client/`.

Information is then mapped into `HTML Tags` for the user to view.

## How To

### SQL Connection

create `.env` file in `/Server/.env`:
```
MYSQL_HOST=yours
MYSQL_USER=yours
MYSQL_PASSWORD=yours
MYSQL_DATABASE=yours
```
replace `yours` with your SQL information.

create a SQL table with the folling command:
```
CREATE TABLE events(ID int NOT NULL AUTO_INCREMENT, Name varchar(255), day DATE, PRIMARY KEY (ID));
```

> [!WARNING]
> Fetch Requests are designed for localhost and will need to be changed as per the hosting location of the program.

### Run The App

In `/Server/`
```
npm i
npm run dev
```

In `/Client/`
```
npm i
npm run dev
```
## Created By

This app was created by Justin Stewart in order to practice ReactJS and learn API frameworks with MySQL.

You Can reach me at my email:

> stewartm.justin@outlook.com