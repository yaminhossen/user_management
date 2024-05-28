#!/bin/bash

# bash src/modules/attendance_management/migrate.sh

echo ""
echo "student attendances seed start"
API_URL="http://127.0.0.1:5000/api/v1/student-attendances?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/attendance_management/student_attendances/models/seeders
echo "student attendances seed end"
echo ""






