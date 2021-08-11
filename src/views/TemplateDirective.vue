<template>
  <div>
    <a v-bind:href="#" v-pre>Hello {{messaged}}</a>
  </div>
  <div>
    <a href="#" v-once>Hi {{messaged}}</a>
  </div>
  <div>
    <span v-text="messaged"></span>
  </div>
  <div id="clocking" v-cloak>
    <h3>dark templer</h3>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        messaged: "world!"
      };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
  }
</script>
<style scoped>
  @keyframes clock-in {
    0% { opacity: 0;}
  }

  #clocking {
    animation: clock-in 1s;
  }

  #clocking[v-clock] {
    opacity: 0;
  }

</style>