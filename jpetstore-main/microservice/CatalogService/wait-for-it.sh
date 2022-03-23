#!/bin/bash
host="mysql-catalog"
port=3306

until nc -z -v -w30 "$host" $port
do
  echo 'Waiting for SQL...'
  sleep 3
done
echo "Catalog SQL is up and running"

$CATALINA_HOME/bin/startup.sh run
tail -f /dev/null