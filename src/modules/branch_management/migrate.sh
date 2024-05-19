#!/bin/bash

# src/modules/branch_management/migrate.sh

echo ""
echo "branches seed start"
# API_URL="http://127.0.0.1:5000/api/v1/branches?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/branch_management/branches/models/seeders
echo "branches seed end"
echo ""

# echo ""
# echo "branch-buildings seed start"
# API_URL="http://127.0.0.1:5000/api/v1/branch-buildings?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/branch_management/branch_buildings/models/seeders
# echo "branch-buildings seed end"
# echo ""

# echo ""
# echo "branch-building-rooms seed start"
# API_URL="http://127.0.0.1:5000/api/v1/branch-building-rooms?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/branch_management/branch_building_rooms/models/seeders
# echo "branch-building-rooms seed end"
# echo ""

# echo ""
# echo "branch-contacts seed start"
# API_URL="http://127.0.0.1:5000/api/v1/branch-contacts?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/branch_management/branch_contacts/models/seeders
# echo "branch-contacts seed end"
# echo ""

# echo ""
# echo "branch-informations seed start"
# API_URL="http://127.0.0.1:5000/api/v1/branch-informations?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/branch_management/branch_informations/models/seeders
# echo "branch-informations seed end"
# echo ""




