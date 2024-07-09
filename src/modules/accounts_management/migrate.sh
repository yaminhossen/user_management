#!/bin/bash

# bash src/modules/accounts_management/migrate.sh

echo ""
echo "accounts seed start"
API_URL="http://127.0.0.1:5000/api/v1/accounts?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/accounts_management/accounts/models/seeders
echo "accounts seed end"
echo ""







