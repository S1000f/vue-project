<template>
   <div>
     <p>count : {{count}}</p>
     <button type="button" @click="increment()">increment</button>
   </div>
   <div>
     <p>{{ message }}</p>
     <input type="text" :value="message" @input="doUpdate" /> 
   </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    computed: {
      count() {
        return this.$store.state.count;
      },

      message() {
        return this.$store.getters.message
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
      },

      doUpdate(event) {
        this.$store.dispatch('doUpdate', event.target.value)
      }
    }
  }
</script>