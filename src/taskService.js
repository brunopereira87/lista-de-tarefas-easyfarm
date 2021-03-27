class TaskService {
  static createTask(task){
    const tasks = this.getTasks();
    if(tasks.length > 0){
      task.id = Number(tasks[tasks.length - 1].id) + 1;
    }
    else {
      task.id = 1;
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static updateTask(editedTask){
    const tasks = this.getTasks();
    const taskIndex = tasks.findIndex( task => task.id === editedTask.id);

    if(taskIndex !== -1 ){
      tasks[taskIndex] = editedTask;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }else{
      console.log('erro:',taskIndex)
    }
  }

  static getTasks(){
    let tasks = [];
    if(localStorage.getItem('tasks')){
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static deleteTask(id){
    const tasks = this.getTasks();
    const taskIndex = tasks.findIndex( task => task.id === id);

    if(taskIndex !== -1 ){
      tasks.splice(taskIndex,1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }else{
      console.log('erro:',taskIndex)
    }
  }

  
}

export default TaskService;