#!/bin/bash

# bash src/modules/asset_management/migrate.sh

# echo ""
# echo "asset categories seed start"
# API_URL="http://127.0.0.1:5000/api/v1/asset-categories?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/asset_management/asset_categories/models/seeders
# echo "asset categories seed end"
# echo ""

# echo ""
# echo "asset types seed start"
# API_URL="http://127.0.0.1:5000/api/v1/asset-types?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/asset_management/asset_types/models/seeders
# echo "asset types seed end"
# echo ""

echo ""
echo "assets seed start"
API_URL="http://127.0.0.1:5000/api/v1/assets?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/asset_management/assets/models/seeders
echo "assets seed end"
echo ""







