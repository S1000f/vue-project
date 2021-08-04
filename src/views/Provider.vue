<template>
   <div>
     <injected />
   </div>
</template>
<script>
  import Injected from '../components/Injected.vue'
  export default {
    name: '',
    components: {
      Injected
    },
    data() {
      return {
        items: ['a', 'b', 'c']
      };
    },
    provide() {
      return {
        itemss: this.items,
        itemLength: this.items.length
      }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
  }
</script>