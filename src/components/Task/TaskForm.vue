<template>
  <div class="task-form" :class="{mobile: mobile}">
    <h2>{{previous_task ? 'Editar ': 'Criar '}} Tarefa</h2>
    <form @submit.prevent="saveTask">
      <Input type="text" name="name" label="Nome" v-model="form.name" :v="$v.form.name" />
      <Input type="text" name="project" label="Projeto" v-model="form.project" />
      <Input type="date" name="deadline" label="Data de conclusão" v-model="form.deadline" />
      <Button :disabled="$v.$invalid" type="primary">Enviar</Button>
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
      form: {
        name: null,
        status: 'pending',
        project: null,
        deadline: null
      }
    }
  },
  created(){
    if(this.previous_task){
      this.form = this.previous_task
    }
  },
  updated(){
    if(this.previous_task){
      this.form = this.previous_task
    }
  },
  validations:{
    form: {
      name: { required }
    }
  },
  methods: {
    saveTask(){
      if(!this.$v.invalid){
        if(this.previous_task){
          TaskService.updateTask(this.form)
        }else {
          TaskService.createTask(this.form);
        }
      }
      this.cleanTask();
      
      this.$emit('refreshTasks');
    },
    cleanTask(){
      this.form = {
        name: null,
        status: 'pending',
        project: null,
        deadline: null
      }
      
      this.$v.$reset();
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

@media(min-width: 768px){
  .task-form{
    width: 100%;
    padding-left: 0;
  }
}
</style>