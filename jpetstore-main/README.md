# Jpetstore
The [JPetStore](https://github.com/mybatis/jpetstore-6) is an online e-commerce pet store application. We redesigned and redeveloped the existing application in **micro-service architecture**.
## Prerequisite
- [Install Docker](https://docs.docker.com/engine/install/#server)
- [Install Docker-compose](https://docs.docker.com/compose/install/#install-compose)

## Setup Jpetstore
### Start server
    docker-compose build
    docker-compose up -d
NOTE: ``docker-compose build`` will take 10-15 minutes for the first time. It downloads all the required dependency.
### Stop server
    docker-compose down

## Microservice Architecture
![microservice](/images/microservice.png)
