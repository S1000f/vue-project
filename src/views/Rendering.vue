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
   <div>
     <ul>
       <li v-for="item in productList" :key="item.id" :class="{ strong:item.price > 4000 }">
         ID.{{item.id}} {{item.product_name}} {{item.price}}
       </li>
     </ul>
   </div>
   <div>
     <input type="text" v-model="cat_name" @keyup.enter="addCat()">
     <button type="button" @click="addCat()">add cat</button>
   </div>
   <div>
     <ul>
       <li v-for="(cat, index) in cats" :key="cat.id">index: {{index}} {{cat.name}} long live! {{cat.age}}
         <button type="button" @click="goHome(index)">go home</button>
       </li>
     </ul>
   </div>
   <div>
     <button type="button" @click="append()">append test</button>
   </div>
</template>
<script>
  export default {
    name: '',
    components: {
    },
    data() {
      return {
        cat_name: "",

        cats: [
          {
            id: 1,
            name: "Sully",
            age: 500
          },
        ],

        productList: [
          {
            "id": 1,
            "product_name" : "mechanical keyboard",
            "price" : 5000,
            "category" : "hardware",
            "delivery_price" : 5000
          },
          {
            "id": 2,
            "product_name" : "Logitech MX MASTER 3",
            "price" : 3000,
            "category" : "hardware",
            "delivery_price" : 3000
          },
          {
            "id": 3,
            "product_name" : "iMac 32-inch",
            "price" : 6000,
            "category" : "hardware",
            "delivery_price" : 5000
          },
        ],
        type: 'A'
      };
    },
    setup() {},
    created() {
      
    },
    mounted() {
    },
    unmounted() {},
    methods: {
      append() {
        this.cats[1] = {
          id: 2,
          name: "test nyng",
          age: 300
        }
      },

      addCat() {
        if (this.cat_name === "" || this.cat_name == undefined) {
          return;
        }

        let max = this.cats.reduce((a, b) => {
          return a > b.id ? a : b.id
        })

        this.cats.push({
          id: max + 1,
          name: this.cat_name,
          age: 500
        })

        this.cat_name = ""
      },

      goHome(index) {
        this.cats.splice(index, 1);
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