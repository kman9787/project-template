#!/usr/bin/env bash

replace_prop(){
    KEY=$1
    VALUE=$2
    FILE=$3

    # Check if file exists
    if [ ! -f "$FILE" ]; then
        echo "Error: File $FILE not found."
        exit 1
    fi

    # Replace the value if the key exists
    awk -F"=" -v key="$KEY" -v val="$VALUE" '/^'"$KEY"'=/{$2=val; print $1"="val; next}1' $FILE > temp.properties && mv temp.properties $FILE
    
}