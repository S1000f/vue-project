<template>
  <div>
    <input type="text" v-model="inputName" @change="setFirstName()">
  </div>
   <div>
     <h1>Full name by computed : {{fullName}}</h1>
   </div>
   <div>
     <h2>Full name by Watch : {{fullNameChanged}}</h2>
   </div>
   <div>
     <input type="text" v-model="inputed">
     <h3>{{getterSetter}}</h3>
   </div>
   <div>
     <input v-model.number="budget">won filter
     <input v-model.number="limit">limit
     <p>print {{limited.length}} of {{matched.length}} matched. total size is {{list.length}}</p>
     <button @click="order = !order">sorting</button>
     <ul>
       <li v-for="item in sorted" :key="item.id">{{item.name}} : {{item.price}}</li>
     </ul>
   </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        firstName: 'Milly',
        lastName: 'the cat',
        fullNameChanged: '',
        inputName: '',
        inputed: '',
        budget: 300,
        limit: 2,
        order: false,
        list: [
          { id: 1, name: 'apple', price: 100 },
          { id: 2, name: 'banana', price: 200 },
          { id: 3, name: 'water melon', price: 400 },
          { id: 4, name: 'peach', price: 300 },
          { id: 5, name: 'strawberry', price: 200 },
          { id: 6, name: 'mango', price: 600 },
          { id: 7, name: 'orange', price: 500 }
        ]
      };
    },

    computed: {
      matched() {
        return this.list.filter(function(el) {
          return el.price <= this.budget;
        }, this);
      },

      limited() {
        return this.matched.slice(0, this.limit);
      },

      sorted() {
        return this.limited.slice(0).sort(this.order ? (a, b) => a.price - b.price : (a, b) => b.price - a.price)
      },

      getterSetter: {
        get() {
          return this.inputed + ' ' + this.lastName;
        },

        set() {
        }
      },

      fullName() {
        return this.firstName + ' ' + this.lastName;
      }
    },

    watch: {
      firstName: {
        handler(newVal, oldVal) {
          console.log('new value : ' + newVal)
          console.log('old value : ' + oldVal)
          this.fullNameChanged = this.firstName + ' ' + this.lastName;
        },

        deep: true,
        immediate: false
      },

      lastName() {
        this.fullNameChanged = this.firstName + ' ' + this.lastName;
      }
    },
    setup() {},
    created() {
    },

    mounted() {
    },
    unmounted() {},
    methods: {
      setFirstName() {
        this.firstName = this.inputName;
      }
    }
  }
</script>