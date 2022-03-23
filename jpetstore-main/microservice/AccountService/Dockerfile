# ----------- Build stage ----------- 
FROM maven:3.8.2-jdk-11 as build
WORKDIR /usr/src/app
#download dependency
COPY pom.xml .
RUN mvn dependency:go-offline
COPY . /usr/src/app
RUN mvn clean package

# ----------- Package stage ----------- 
FROM tomcat:8.5.47-jdk8-openjdk
RUN rm -r /usr/local/tomcat/webapps/
COPY --from=build /usr/src/app/target/account-microservice-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war
COPY tomcat-conf.xml /usr/local/tomcat/conf/server.xml
RUN apt update && apt install netcat -y
COPY wait-for-it.sh .
RUN chmod +x wait-for-it.sh 
