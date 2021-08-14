<template>
  <div class="comp-child">
    <div>
      <slot name="header">default title</slot>
    </div>
    <div>
      slot here -> <slot>this is default data for slot</slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgData: 'child data'
    }
  }
}
</script>

<style scoped>
  .comp-child {
    background-color: dodgerblue;
  }
</style>