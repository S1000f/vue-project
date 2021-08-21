<template>
   <div v-if="detail" key="listing">
     <h3>Product detail</h3>
     <dl>
       <dt>product name</dt><dd>{{ detail.name }}</dd>
       <dt>product price</dt><dd>{{ detail.price }}</dd>
       <dt>product desc</dt><dd>{{ detail.content }}</dd>
     </dl>
   </div>
   <div v-else key="loading">loading...</div>
   <div>
     <h1>{{ detail.name }}</h1>
     <nav>
       <router-link :to="{ name: 'product-review' }">review</router-link> 
     </nav>
     <router-view/>
   </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      id: Number
    },

    computed: mapGetters('products', ['detail']),

    watch: {
      id: {
        handler() {
          this.$store.dispatch('products/load', this.id)
        },
        
        immediate: true
      }
    },

    name: '',
    components: {},
    data() {
      return {
        item: null
      };
    },

    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
  }
</script>