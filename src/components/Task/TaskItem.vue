<template>
  <div class="task">
    <input type="checkbox" @change="changeStatus" :checked="task.status === 'Concluído'">
    <div class="task-info">
      <p class="name"><strong>{{task.name}}</strong></p>
      <p class="project">{{task.project}}</p>
      <p class="deadline" :class="{ late: late }">
        <span>{{deadline}}</span>
        <span v-if="late">(Em atraso)</span>
      </p>
    </div>
    <div class="status-actions">
      <p :class="task.status">{{status}}</p>
      <div class="actions">
        <button class="btn-icon btn-primary" @click="() => $emit('edit',task)">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn-icon btn-danger" @click="() => $emit('delete',task.id)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'TaskItem',
  props:['task'],
  methods: {
    changeStatus(){}
  },
  computed: {
    deadline(){
      return this.task.deadline ? moment(this.task.deadline,'YYYY-MM-DD').format('DD/MM/YYYY') : 'Sem prazo'
    },
    status(){
      const options = {
        "pending": "Pendente",
        "done": "Concluído"
      }

      return options[this.task.status];
    },
    late(){
      const today = moment();
      const deadline = moment(this.task.deadline,'YYYY-MM-DD');
      const diff = today.diff(deadline,'days');

      return diff > 0;
    }
  }
}
</script>

<style lang="scss" scoped>
input[type=checkbox]{
  width: $medium_space;
  height: $medium_space;
}
.task{
  display: flex;
  justify-content: space-between;
  box-shadow: $shadow_default;
  padding: $small_space;
  margin-bottom: $medium_space2;
}
.task-info{
  margin-right: auto;
  margin-left: $small_space;
  p{
    margin-bottom: $micro_space;
  }
  .late{
    @include textcolor('error');
  }
}

.project,
.deadline,
.status-actions p{
  @include fontsize('size3');
}

.status-actions{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  .pending{
    @include textcolor('dark');
  }
  .done{
    @include textcolor('highlight');
  }
  
}

.btn-icon{
  border: none;
  padding: 5px;
  margin-left: $small_space;
  i {
    @include fontsize("size2");
  }

  &.btn-primary{
    @include bgcolor("first");
    @include textcolor("light");
  }
  &.btn-danger{
    @include bgcolor("bgerror");
    @include textcolor("light");
  }
}
</style>