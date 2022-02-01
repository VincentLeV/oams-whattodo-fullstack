[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/vincentlev/oams-whattodo-mern-fullstack)
![](https://img.shields.io/netlify/7b9e85c2-f681-4e34-9d44-08312640a0e5?style=flat-square)
[![License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
![](https://img.shields.io/github/issues-raw/VincentLeV/oams-whattodo-mern-fullstack?style=flat-square)
<br/>

# WhatToDo (MERN)

## Table of Contents
[Introduction](#introduction)
<br/>
[Features](#features)
<br/>
[Tech Stack](#tech-stack)
<br/>
[Run The Project Locally?](#run-the-project-locally)
<br/>
[UI Examples](#ui-examples)
<br/>
[Demo](#demo)

## Introduction
This is a very basic CRUD todo-list fullstack application. It's a part of my "One App Multi-stacks" series. This version is created with ReactJS (frontend), NodeJS & ExpressJS (backend), MongoDB (database).

The purpose of the project is practicing my fullstack development skill and the technology. 

## Features

For simplicity's sake, there is no user feature in the app.

- Create/Read/Update/Delete todos (priority, deadline, description)
- Create/Read/Update/Delete projects
- Create/Read/Update/Delete Projects' todos

## Tech Stack

1. ReactJS
2. MaterialUI
3. Cypress
4. ExpressJS
5. MongoDB
6. Docker

## Run The Project Locally

:loudspeaker: For all of the step below: make sure that you're in the project's directory :loudspeaker:

### Using Terminal and VSCode

1. Run the Backend
        
        cd server
        npm run start

2. Run the Frontend

        cd client
        yarn run start

<p align="center">Checkout the app at <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a></p>

### Using Docker

    ./deploy.ps1

<p align="center">Checkout the app at <a href="http://localhost:8080/" target="_blank">http://localhost:8080/</a></p>
<br />

### E2E Testing

    yarn run cypress
## UI Examples
<p align="center">
    <img src="https://user-images.githubusercontent.com/49280437/151970734-96c7f0da-ba46-4844-8506-1fd5e2f6f211.jpg" alt="1" width="500px" />
</p>

<p align="center">
    <img src="https://user-images.githubusercontent.com/49280437/151970745-dcfffc15-cf84-4ae4-9710-50abedfa8b7c.jpg" alt="2" width="500px" />
</p>

<p align="center">
    <img src="https://user-images.githubusercontent.com/49280437/151970745-dcfffc15-cf84-4ae4-9710-50abedfa8b7c.jpg" alt="3" width="500px" />
</p>

## Demo
<a href="https://oams-whattodo-mern.netlify.app" target="_blank">
    <p align="center">https://oams-whattodo-mern.netlify.app</p>
</a>

<p align="center">
    <img src="https://user-images.githubusercontent.com/49280437/151970803-9734962c-e20c-420c-b123-156fb9bbca67.gif" alt="gif" />
</p>