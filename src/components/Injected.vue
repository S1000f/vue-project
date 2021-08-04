<template>
  <div>{{itemss}}</div>
  <div>{{injectedMsg}}</div>
</template>
<script>
export default {
  inject: ['itemss', 'itemLength'],

  mounted() {
    console.log(this.itemLength);

  },

  data() {
    return {
      items: this.itemss,
      injectedMsg: this.itemLength
    }
  }
}
</script>
