#!/bin/bash

# bash src/modules/accounts_management/migrate.sh

# echo ""
# echo "accounts seed start"
# API_URL="http://127.0.0.1:5000/api/v1/accounts?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/accounts_management/accounts/models/seeders
# echo "accounts seed end"
# echo ""

# echo ""
# echo "account categories seed start"
# API_URL="http://127.0.0.1:5000/api/v1/account-categories?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/accounts_management/account_categories/models/seeders
# echo "account categories seed end"
# echo ""

# echo ""
# echo "account periods seed start"
# API_URL="http://127.0.0.1:5000/api/v1/account-periods?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/accounts_management/account_periods/models/seeders
# echo "account periods seed end"
# echo ""

# echo ""
# echo "budgets seed start"
# API_URL="http://127.0.0.1:5000/api/v1/budgets?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/accounts_management/budgets/models/seeders
# echo "budgets seed end"
# echo ""

echo ""
echo "account vouchers seed start"
API_URL="http://127.0.0.1:5000/api/v1/account-vouchers?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/accounts_management/account_vouchers/models/seeders
echo "account vouchers seed end"
echo ""







