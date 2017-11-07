---
name: 3ree-dashboard
title: 3REE Dashboard
tags: 
- Fullstack
- FrontEnd
- BackEnd
- React
- Redux
- Express
- Node.js
- RethinkDB
- Bootstrap
- Socket.io
- Webpack
- C3.js
- Featured
links:
    github: https://github.com/horizon0708/rethink-dashboard-back 
    link: https://rethink-dashboard.herokuapp.com/
---
## About
This is a 3REE(RethinkDB, React, Redux, Express) stack application that tracks and visualises changes in databases. Using RethinkDB's unique changefeed feature, I built a secondary database for logging that logged numbers of users after every changes in the primary user DB.

Front-end components are built with React-Redux, and are updated as soon as there is a change in the DB. The updates are pushed with socket.io and stored in a Redux store. C3.js is used to visualise data.

## Goals
- Learn real-time data-visualisation using C3.js, socket.io and RethinkDB.
- Learn more about back-end development and deployment.
- Familiarise myself more with Redux. 

## Post Mortem
- I realised the importance of having a good development environment. Tooling was time-consuming and hard, and I have appreciated how amazing create-react-app was. I would like to be able to set up an automated back-end development environment.
- Deploying can be a nightmare. 'Works on my machine' problem is very real. I still have one amazingly weird bug (ask me for more details!)
- I've also appreciated how good ESLint is at keeping my code clean.

## Future goals
- Learn more about D3.js and websockets. While C3.js and Socket.io are amazing abstractions, I feel like I would be able to do much more if I understood web-sockets and d3.js.
- Learn more about Docker. I would like future deployments to be less painful.





