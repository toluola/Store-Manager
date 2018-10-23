# Store-Manager

Store Manager is an Andela boot camp project.

[![Build Status](https://travis-ci.com/toluola/Store-Manager.svg?branch=develop)](https://travis-ci.com/toluola/Store-Manager) [![Coverage Status](https://coveralls.io/repos/github/toluola/Store-Manager/badge.svg?branch=develop)](https://coveralls.io/github/toluola/Store-Manager?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/61dda4730d002bc2f094/maintainability)](https://codeclimate.com/github/toluola/Store-Manager/maintainability)

# Description

My store-manager is an andela boot-camp project that is written in javascript, the app will allow the store owner(admin) to create attendant profile to log in and create a sales record. The admin will be able create a product and remove product it also helps with inventory of the store.

## Documentation

users will be able access the following endpoints
GET /products https://mystoremanager10.herokuapp.com/api/v1/products
GET /products/<productId> https://mystoremanager10.herokuapp.com/api/v1/products/:id
POST /products https://mystoremanager10.herokuapp.com/api/v1/products
GET /sales https://mystoremanager10.herokuapp.com/api/v1/sales
GET /sales/<saleId> https://mystoremanager10.herokuapp.com/api/v1/sales/:id
POST /sales https://mystoremanager10.herokuapp.com/api/v1/sales

## Setup

### Dependencies

List of libraries and tools needed are:
nodejs
express
babel
mocha

### Getting Started

clone the repo and install all the dependencies
Run npm start

## Testing

Install mocha, chai and babel-polyfill
run npm test

## Contribute

Contributions are welcomed. You can create a pull request to contribute.

## Deployment

Check for new pull request to check for repo updates.
