#!/bin/bash

# bash src/modules/exam_management/migrate.sh

# echo ""
# echo "exams seed start"
# API_URL="http://127.0.0.1:5000/api/v1/exams?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exams/models/seeders
# echo "exams seed end"
# echo ""

echo ""
echo "exam equipments seed start"
API_URL="http://127.0.0.1:5000/api/v1/exam-equipments?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exam_equipments/models/seeders
echo "exam equipments seed end"
echo ""







