# CodeMon React Website

A clean, maintainable React frontend project built using TypeScript. Designed with modular structure, reusable components and clear separation of concerns to make development and scaling easier.


This project is meant to be a FrontEnd website for the showing of the Database of CodeMon

## Features

- Single Page Application (SPA) routing.  
- Very simple UI that needs work in the future though 
- Typescript function that will add a CodeMon from the database 
  and display a AI generated picture for i

---

## Tech Stack

- **React** — Functional components and hooks.  
- **TypeScript** — Strong typing and safer development.  
- **Simple CSS** (depending on setup).
- **Conects though a backend to a MongoDB database**

## Enviromental Variables
- Data is fetched from the backend service, passed through codeMonService.ts, typed via codemon.ts, and finally displayed in React components.
- Make sure that you get a .env.local file since it will be needed to get to the backend and into the database

## Getting Started

1. First make sure you got Node and NPM installed  
2. Clone this repository:  
   ```bash
   git clone https://github.com/HuckerDuck/CodeMon_React_Website.git 

3: After getting the reposotory open the terminal, make sure you are inside the Website part 
4: Then write in terminal: npm install
5: If that all works then you can start the server and see the website localy with npm run dev 

## Project stucture
src/
  service -> codeMonService.ts = Simple service that lets the API to know where to connect
             Also it will check that the env file is read and another check if anything is faulty 
  types/codemon.ts = interface that you use when you connect to the database. It has all the same values as the backend when it put into the database
  App.tsx = Here is where the main of the program is run, including what is written. 
            Uses some error matching if anything should be wrong and will return that visually to the user 
  index.css` — Central stylesheet where all the page styling is defined, such as layout, positioning, and component appearance.


## Future Improvement 
- Add a background
- Add more CodeMons
- Add a prettier CSS that is not so basic
- Add a welcome page
- Add generation option and maybe more pages for filtering

## License

All Rights Reserved.  
This project and its contents may not be copied, modified, distributed, or used in any form without explicit permission from the author.
