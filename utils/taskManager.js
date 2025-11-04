const { readTasks, writeTasks } = require('./fileHandler');
const chalk = require('chalk');


//Add Tasks
function addTask(taskName) {
    const tasks = readTasks();
    tasks.push({id: tasks.length + 1, name: taskName});
    writeTasks(tasks);
    console.log(chalk.green(`✅ Task added: "${taskName}"`));
}

//List Tasks
function listTasks() {
    const tasks = readTasks();
    if(tasks.length === 0) {
        console.log("Your tasks is empty!");
    }
    else{
        console.log("Your tasks: ");
        tasks.forEach(task => console.log(`${task.id}. ${task.name}`));
    }
}

// Remove Task
function removeTask(id){
    let tasks = readTasks();
    const index = tasks.findIndex(task => task.id === parseInt(id));

    if(index === -1) {
        console.log(`No task found with id ${id}`);
        return;
    }

    const removed = tasks.splice(index,1);
    //reassign IDs after removal
    tasks = tasks.map((t,i) => ({...t, id: i+1}));
    writeTasks(tasks);
    console.log(`Removed: ${removed[0].name}`);
}

module.exports = { addTask, listTasks, removeTask};