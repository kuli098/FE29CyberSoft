import Task from './Task';
import ListOfTask from './ListOfTask';
import TaskData from './TaskData';

let listOfTask = new ListOfTask();

for (let task of TaskData) {
    let id = task.id;
    let name = task.name;
    let priority = task.priority;
    let labelArr = task.labelArr;
    let memberIdArr = task.memberIdArr;
    let status = task.status;
    let decsription = task.decsription;

    let newTask = new Task(id, name, priority, labelArr, memberIdArr, status, decsription);
    listOfTask.addTask(newTask);
}

export default listOfTask;