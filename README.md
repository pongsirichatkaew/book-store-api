# Book Store API

This project is a Book Store API built using NestJS. It follows a modular, microservices-based architecture, with separate modules for authentication/authorization, notifications, and book services. Kafka is used for event-driven communication, and PostgreSQL can be used for data storage.

Project Structure
The project is organized into two main directories:

- apps: Contains microservices for handling specific business logic.
- libs: Contains shared libraries for common functionality across services.

- Enhance this starter application so that upon startup it loads the data from [./src/quotes.ts](./src/quotes.ts) into a MongoDB collection named 'prices'.

## How to start a project:

### Prerequisites
- Node.js (>=18.x.x)
- Docker and Docker Compose for running dependencies like Kafka, Zookeeper, and Kafka UI.

```
npm install
```

or

```
yarn
```

The application can be started in development mode by running:

```
docker-compose build
docker-compose dev
```

Once running, the application should restart when changes to the **JavaScript** are detected.

## Monitoring with Kafka UI
Kafka UI is available at http://localhost:8080. You can use it to monitor the Kafka topics, messages, and consumers.

## Note: How to view log from Kibana:
Kibana is available at http://localhost:5601/app/discover# You can use it to monitor the logs from application.
