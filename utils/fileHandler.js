const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/tasks.json');

//Read task from file
function readTasks() {
    try {
        const data = fs.readFileSync(filePath,'utf-8');
        return JSON.parse(data);
    } catch(err) {
        return [];
    }
}

//Write files in the file

function writeTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks,null,2));
}

module.exports = { readTasks , writeTasks};