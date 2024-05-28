#!/bin/bash

# bash src/modules/student_evaluation_management/migrate.sh

echo ""
echo student evaluations seed start"
API_URL="http://127.0.0.1:5000/api/v1/student-evaluations?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/student_evaluation_management/student_evaluation/models/seeders
echo student evaluations seed end"
echo ""
