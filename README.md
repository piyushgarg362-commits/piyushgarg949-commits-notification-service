# Notification Service

Notification management microservice.

## Responsibilities

- Create notifications
- Retrieve notifications
- Track notification status

## Port

3004

## API

GET /health

GET /notifications

POST /notifications

## Create Notification

POST /notifications

Example:

{
  "userId": 1,
  "message": "Your order has been created",
  "type": "EMAIL"
}

## Supported Types

EMAIL

SMS

PUSH

## Run

npm install

npm start

## Test

npm test

## Docker

docker build -t notification-service .

docker run -p 3004:3004 notification-service

## Repository

https://github.com/piyushgarg949-commits/notification-service
