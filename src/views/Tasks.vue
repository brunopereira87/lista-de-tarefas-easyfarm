<template>

  <section class="tasks">
    <Modal v-if="$store.state.openModal" @close="closeModal">
      <TaskForm :previous_task="previous_task" :mobile="true" @refreshTasks="refreshTasks" />
    </Modal>
     <Modal v-if="deleteModal" @close="closeModal">
      <DeleteAlert @delete="deleteTask" @close="closeModal"/>
    </Modal>
    <h2 class="page-title" v-if="$store.state.windowWidth < 768">Suas tarefas</h2>
    <div class="new-task">
      <Button @clicked="handleClick" v-if="$store.state.windowWidth < 768" type="primary">Nova tarefa</Button>
      <TaskForm v-else :previous_task="previous_task"  @refreshTasks="refreshTasks" />
    </div>

    <div class="tasks-list">
      <h2 class="page-title" v-if="$store.state.windowWidth >= 768">Suas tarefas</h2>
      <TaskItem v-for="task in tasks" :task="task" :key="task.id" 
        @edit="onEditClick" @delete="onDeleteClick" @changeStatus="refreshTasks" />
    </div>
  </section>
</template>

<script>
import TaskService from '@/taskService';

import Modal from '../components/Modal';
import DeleteAlert from '../components/DeleteAlert';
import Button from '../components/Button';
import TaskForm from '../components/Task/TaskForm';
import TaskItem from '../components/Task/TaskItem';

export default {
  name:'Tasks',
  components:{
    Modal,
    TaskForm,
    Button,
    TaskItem,
    DeleteAlert
  },
  data() {
    return {
      previous_task:null,
      tasks: null,
      deleteModal: false,
      deleteTaskId: null
    }
  },
  created(){
    this.getTasks();
  },

  methods:{
    handleClick(){
      this.$store.commit('UPDATE_OPEN_MODAL', true)
    },
    refreshTasks(){
      this.getTasks();
      this.closeModal();
    },
    getTasks(){
      this.tasks = TaskService.getTasks();
    },
    deleteTask(){
      if(this.deleteTaskId){
        TaskService.deleteTask(this.deleteTaskId);
        this.refreshTasks();
      }
    },
    onEditClick(task){
      if(!this.previous_task)
        this.previous_task = task;
      if(this.$store.state.windowWidth < 768)
        this.$store.commit('UPDATE_OPEN_MODAL', true);
    },
    onDeleteClick(id){
      this.deleteTaskId = id;
      this.deleteModal = true;
    },
    closeModal(){
      this.$store.commit('UPDATE_OPEN_MODAL', false);
      this.previous_task = null;
      this.deleteModal = false;
      this.deleteTaskId = null;
    }
  }
}
</script>

<style lang="scss" scoped>
.tasks-list {
  margin-top: $medium_space2;
}

@media(min-width: 768px){
  .tasks{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: $section_margin ;
  }
  .page-title{
    margin-top: 0;
    @include fontsize("size5");
    text-align: left;
  }
}
</style>