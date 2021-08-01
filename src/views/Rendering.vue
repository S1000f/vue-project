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
   <div>
     <h1 v-if="type === 'A'">A</h1>
     <h1 v-else-if="type === 'B'">B</h1>
     <h1 v-else>C</h1>
   </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        productList: [
          {
            "product_name" : "mechanical keyboard",
            "price" : 250000,
            "category" : "hardware",
            "delivery_price" : 5000
          },
          {
            "product_name" : "Logitech MX MASTER 3",
            "price" : 150000,
            "category" : "hardware",
            "delivery_price" : 3000
          },
          {
            "product_name" : "iMac 32-inch",
            "price" : 2250000,
            "category" : "hardware",
            "delivery_price" : 5000
          },
        ],
        type: 'A'
      };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    method: {}
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