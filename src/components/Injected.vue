<template>
  <pre>{{$data}}</pre>
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
      injectedMsg: this.itemLength
    }
  }
}
</script>
