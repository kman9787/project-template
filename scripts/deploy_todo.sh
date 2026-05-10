#!/usr/bin/env bash
APP_DIR=../todo-app
CONF_DIR=$APP_DIR/config
source ./replace_prop.sh
# Checkout repository
rm -rf $APP_DIR
git clone https://github.com/kman9787/todo-app.git $APP_DIR
# Prepare local config 
replace_prop "flyway.password" "appdevpass" $CONF_DIR/flyway.conf
replace_prop "MYSQL_DATABASE" "todo_db" $APP_DIR/.env
replace_prop "MYSQL_USER" "todo_db_user" $APP_DIR/.env
echo "appdevpass" > $CONF_DIR/db_psswd.txt
echo "appdevpass" > $CONF_DIR/db_root_psswd.txt
# Run the application deployment script
cd $APP_DIR
exec ./run.sh
