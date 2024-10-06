
# Onepiecedle
This is a recreation of the official [onepiecedle](https://onepiecedle.net) web application. I just love One Piece and i wanted to recreate this website just for practise and experimentation.
I do not own any of the assets used in the application. All assets i used are owned by [Pimeko](https://github.com/Pimeko).

While creating this i tested my skills in APIs creation and communication between database - api and client. It is my first time working with Docker, i learned a lot about it, and there is still a ton to learn.


## TL;DR about the app
this is a daily guess game (similar to  [Wordle](https://www.nytimes.com/games/wordle/index.html)) in which you can guess One Piece characters based on their characteristics (gender, origin, affiliation, haki, fruit type etc.), devil fruit, wanted poster and laugh.

## Tech Stack
<div>
<img width=50px src="https://icon.icepanel.io/Technology/svg/React.svg">&nbsp;&nbsp;&nbsp;
<img width=50px src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg">&nbsp;
<img width=50px src="https://icon.icepanel.io/Technology/svg/Node.js.svg">&nbsp;
<img width=50px src="https://icon.icepanel.io/Technology/png-shadow-512/Express.png">&nbsp;
<img width=50px src="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg">&nbsp;
<img width=50px src="https://icon.icepanel.io/Technology/svg/Vite.js.svg">&nbsp;
<img width=50px src="https://icon.icepanel.io/Technology/svg/Docker.svg">&nbsp;
<img width=50px src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png">&nbsp;
</div>
I used docker for creating the PostgresSQL database and NX for the monorepo.

  

## Running Locally
Before using the app on your system make sure you create the **.env** file at the root of the project and add the following variables:

```sh

DB_USERNAME = postgres
DB_PASSWORD = <add password>
DB_NAME = 'postgres'
HOST_URL = 'localhost'
DB_PORT = '5432'
PORT = '5000'

```

Install dependencies

```sh

npm install

```

To run the postgres database:

  

```sh

docker-compose up --build

```

  

To run the backend server:

  

```sh

npx  nx  serve backend

```

  


To run the frontend server:

  

```sh

npx  nx  serve frontend

```
## TODO
Dockerize both frontend and backend and add them all together with the postgres database for a single docker-compose.
