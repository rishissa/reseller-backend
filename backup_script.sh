#!/bin/bash

# Define variables
DB_NAME="siya_db"
BACKUP_DIR="/www/backup/database/siya"
DATE_FORMAT=$(date +"%Y%m%d%H%M%S")
BACKUP_FILE="$BACKUP_DIR/${DB_NAME}_$DATE_FORMAT.sql"

# Perform the backup
sudo -i -u postgres pg_dump -U postgres "$DB_NAME" > "$BACKUP_FILE"

# List existing backup files
existing_files=("$BACKUP_DIR"/*)
num_existing_files=${#existing_files[@]}

# If more than 3 files exist, delete the oldest file
if [ $num_existing_files -gt 3 ]; then
    # Sort files by modification time (oldest first) and delete the first one
    oldest_file=$(ls -t "$BACKUP_DIR" | tail -n 1)
    rm "$BACKUP_DIR/$oldest_file"
fi