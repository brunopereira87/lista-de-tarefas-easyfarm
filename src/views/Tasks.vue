<template>

  <section class="tasks">
    <Modal v-if="$store.state.openModal">
      <TaskForm :previous_task="previous_task" :mobile="true" @updateTasksList="getTasks" />
    </Modal>
    <h2 class="page-title">Suas tarefas</h2>
    <div class="new-task">
      <Button @clicked="handleClick">Nova tarefa</Button>
    </div>
    <div class="tasks-list">
      <TaskItem v-for="task in tasks" :task="task" :key="task.id" @edit="onEditClick" />
    </div>
  </section>
</template>

<script>
import TaskService from '@/taskService';

import Modal from '../components/Modal';
import Button from '../components/Button';
import TaskForm from '../components/Task/TaskForm';
import TaskItem from '../components/Task/TaskItem';

export default {
  name:'Tasks',
  components:{
    Modal,
    TaskForm,
    Button,
    TaskItem
  },
  data() {
    return {
      previous_task:null,
      tasks: null
    }
  },
  created(){
    this.getTasks();
  },
  methods:{
    handleClick(){
      this.$store.commit('UPDATE_OPEN_MODAL', true)
    },
    getTasks(){
      this.tasks = TaskService.getTasks();
    },
    onEditClick(task){
      console.log(task)
    }
  }
}
</script>

<style lang="scss" scoped>
.tasks-list {
  margin-top: $medium_space2;
}
</style>