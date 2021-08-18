<template>
   <div>
     <p>count : {{count}}</p>
     <button type="button" @click="increment()">increment</button>
     <p>count in storeB: {{ countB }}</p>
   </div>
   <div>
     <p>{{ message }}</p>
     <input type="text" v-model="message" @input="doUpdate" /> 
   </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    computed: {
      countB() {
        return this.$store.state.storeB.count
      },

      count() {
        return this.$store.state.storeA.count
      },

      message: {
        get() { return this.$store.getters['storeA/message'] },
        set(value) { this.$store.dispatch('storeA/doUpdate', value) }
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
        this.$store.commit('storeA/increment');
      },

      doUpdate() {
        this.$store.dispatch('storeB/doUpdate')
      }
    }
  }
</script>