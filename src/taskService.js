class TaskService {
  static createTask(task){
    const tasks = this.getTasks();
    if(tasks.length > 0){
      console.log('last:',tasks[tasks.length - 1])
      task.id = Number(tasks[tasks.length - 1].id) + 1;
    }
    else {
      task.id = 1;
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static getTasks(){
    let tasks = [];
    if(localStorage.getItem('tasks')){
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }
}

export default TaskService;