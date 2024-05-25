#!/bin/bash

# bash src/modules/class_management/migrate.sh
echo ""
echo "branch classes seed start"
API_URL="http://127.0.0.1:5000/api/v1/branch-classes?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_management/branch_classes/models/seeders
echo "branch classes seed end"
echo ""




