#!/bin/bash
host="mysql-account"
port=3306

until nc -z -v -w30 "$host" $port
do
  echo 'Waiting for SQL...'
  sleep 3
done
echo "Account SQL is up and running"
sleep 3
$CATALINA_HOME/bin/startup.sh run
tail -f /dev/null