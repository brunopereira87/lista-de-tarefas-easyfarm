<template>
  <div class="task-form" :class="{mobile: mobile}">
    <h2>{{previous_task ? 'Editar ': 'Criar '}} Tarefa</h2>
    <form @submit.prevent="saveTask">
      <Input type="text" name="name" label="Nome" v-model="task.name" :v="$v.task.name" />
      <Input type="text" name="project" label="Projeto" v-model="task.project" />
      <Input type="date" name="deadline" label="Data de conclusão" v-model="task.deadline" />
      <Button :disabled="$v.$invalid">Enviar</Button>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import TaskService from '@/taskService';

import Input from '../Input';
import Button from '../Button';
export default {
  name: 'TaskForm',
  props:['previous_task','mobile'],
  components: {
    Input,
    Button
  },
  data() {
    return {
      task: {
        name: null,
        status: 'pending',
        project: null,
        deadline: null
      }
    }
  },
  created(){
    if(this.previous_task){
      this.task = this.previous_task
    }
  },
  validations:{
    task: {
      name: { required }
    }
  },
  methods: {
    saveTask(){
      if(!this.$v.invalid){
        if(this.previous_task){

        }else {
          TaskService.createTask(this.task);
        }
      }

      this.$emit('updateTasksList');
      this.$store.commit('UPDATE_OPEN_MODAL',false);
    }
  }
}
</script>

<style lang="scss" scoped>
.task-form {
  @include bgcolor("light");
  padding: $medium_space;
  width: 80%;

  h2{
    @include fontsize("size5");
    margin-bottom: $medium_space;
  }
  .button {
    margin-top: $small_space;
  }
}
.mobile {
  h2{
    text-align: center;
  }
}
</style>