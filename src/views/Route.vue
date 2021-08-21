<template>
   <div>
     <p>path variable is : {{ $route.params.id }}</p>
   </div>
   <div>
     <p>path variable via Props : {{ id }}</p>
   </div>
   <div>
     <h2>product list</h2>
     <ul>
       <li v-for="{ id, name } in list" :key="id">
         <router-link :to="`/product/${ id }`">{{ name }}</router-link>
       </li>
     </ul>
   </div>
</template>
<script>
  import mock from '@/mock'

  export default {
    computed: {
      list: () => mock.fetch()
    },

    props: {
      id: Number
    },

    data() {
      return {
        sampleData: ''
      };
    },

    name: '',
    components: {},
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
  }
</script>