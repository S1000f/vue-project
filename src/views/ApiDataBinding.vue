<template>
   <div>
     <table>
       <thead>
         <tr>
           <th>No.</th>
           <th>Product name</th>
           <th>Price</th>
           <th>Category</th>
           <th>shipment rate</th>
         </tr>
       </thead>
       <tbody>
         <tr :key="index" v-for="(product, index) in productList">
           <td>{{index + 1}}</td>
           <td>{{product.product_name}}</td>
           <td>{{product.price}}</td>
           <td>{{product.category}}</td>
           <td>{{product.delivery_price}}</td>
         </tr>
       </tbody>
     </table>
   </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        productList: []
      };
    },
    setup() {},
    created() {
      this.getList();
    },
    mounted() {},
    unmounted() {},
    methods: {
      async getList() {
        this.productList = await this.$api("https://ff5c228c-f384-494e-a256-47008df67760.mock.pstmn.io/list", "get");
      }
    }
  }
</script>
<style scoped>
  table {
    font-family: sans-serif;
    border-collapse: collapse;
    width: 80%;
  }
  td, th {
    border: 1px solid teal;
    text-align: left;
    padding: 8px;
  }
</style>