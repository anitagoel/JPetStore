#!/bin/bash
host="mysql-order"
port=3306

until nc -z -v -w30 "$host" $port
do
  echo 'Waiting for SQL...'
  sleep 3
done
echo "Order SQL is up and running"

$CATALINA_HOME/bin/startup.sh   
tail -f /dev/null