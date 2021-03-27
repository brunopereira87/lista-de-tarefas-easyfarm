<template>
  <div class="deleteAlert">
    <h4>Você tem certeza que quer deletar esta tarefa?</h4>
    <div class="actions">
      <Button type="danger" @clicked="() => $emit('delete')">Sim</Button>
      <Button type="primary" @clicked="() => $emit('close')" >Não</Button>
    </div>
  </div>
</template>

<script>
import Button from './Button';
export default {
  name: 'DeleteAlert',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
.deleteAlert{
  @include bgcolor("light");
  padding: $medium_space;
  width: 80%;

  h4{
    text-align: center;
  }
}
.actions{
  display: flex;
  justify-content: center;
  margin-top: $medium_space;
  button:first-child{
    margin-right: $medium_space2;
  }
}
</style>