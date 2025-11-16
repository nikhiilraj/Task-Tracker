const { addTask, listTasks, removeTask} = require('./utils/taskManager');

const command = process.argv[2];
const value = process.argv.slice(3).join(' ');

switch(command) {
    case 'add' :
        addTask(value);
        break;
    case 'list' :
        listTasks();
        break;
    case 'remove':
        removeTask(value);
        break;
    default:
        console.log('Usage:');
        console.log('  node app.js add "Task Name"');
        console.log('  node app.js list'); //Print list
        console.log('  node app.js remove <taskId>');
}
