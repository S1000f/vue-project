<template>
   <div>
     <p>count : {{count}}</p>
     <button type="button" @click="increment()">increment</button>
   </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    computed: {
      count() {
        return this.$store.state.count;
      }
    },
    data() {
      return {
        sampleData: ''
      };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
      increment() {
        this.$store.commit('increment');
      }
    }
  }
</script>