# Game Store(Angular)

A web app for managing products, built with Angular and RESTful API.

<kbd>![image](/src/assets/products.png)</kbd>

# Function

This application is used to manage products. It implements all CRUD operations. Below are the available features.

- Product List - Show all products in a list with Edit and Delete button.
- Product Management - Create, update and delete product.
- Image Upload - Set image for product and upload to server.
- Dynamic Data - All data is fetched from backend RESTful services.

# Demo

Three available demos:

- `Live Demo on Render:` <a href="https://game-store-angular.onrender.com/" target="\_blank">https://game-store-angular.onrender.com//</a>
- `Live Demo on Netlify:` <a href="https://game-store-angular.netlify.com/" target="\_blank">https://game-store-angular.netlify.com/</a>
- `Live Demo on Azure:` <a href="https://game-store-angular.azurewebsites.net/" target="\_blank">https://game-store-angular.azurewebsites.net/</a>
- `Live Demo on GitHub Page:` <a href="https://jojozhuang.github.io/game-store-angular/" target="\_blank">https://jojozhuang.github.io/game-store-angular/</a>

_Note: The demo websites may be slow when you access them for the first time. Be patient!_

# Setup Locally

## 1. RESTful API

Setup server to host RESTful API with Spring Boot or ASP.NET Core, see below.

- https://github.com/jojozhuang/game-store-springboot
- https://github.com/jojozhuang/restful-api-springboot
- https://github.com/jojozhuang/restful-api-aspnet

## 2. Angular App

```bash
git clone https://github.com/jojozhuang/game-store-angular.git
cd game-store-angular
npm install
ng serve
npm start
```

Access http://localhost:12080/ in web browser, enjoy!

# Test

## 1. Unit Test

```sh
npm run test
```

## 2. e2e Test

Run the following command to open a `Cypress` standalone app in its own window.

```sh
npx cypress open
```

Or run

```sh
npm run e2e
```

In the Cypress app, click `Run n integration specs` button.

- https://armno.medium.com/setting-up-cypress-for-an-angular-project-92dfa2e2caef

# Deployment

Follow the tutorial [Deploying Game Store Angular App to Netlify](https://jojozhuang.github.io/tutorial/deploying-game-store-angular-app-to-netlify) to deploy this app to Netlify.

Follow the tutorial [Continuously Deploy Angular App to GitHub Pages using Travis-CI](https://jojozhuang.github.io/tutorial/continuously-deploy-angular-app-to-github-pages-using-travis-ci) to deploy this app to GitHub Pages.

# Portfolio

Read portfolio [Game Store(Angular)](https://jojozhuang.github.io/project/game-store-angular) to learn the main functions of this Angular app.

# Tutorial

Read tutorial [Building Web Application with Angular](https://jojozhuang.github.io/tutorial/building-web-application-with-angular) to learn how this Angular app is built.
