<template>
   <div>
     <button type="button" @click="setCounter(10)">Set to 10</button><br>
     <button type="button" @click="increaseCounter()">Add 1</button><br>
     <button type="button" @click="one(), two()">alert</button>
     <p>the counter is : {{counter}}</p>
   </div>
   <div>
     <select v-model="selected" @change="changeSelect()">
       <option value="">choose your city</option>
       <option value="seoul">Seoul</option>
       <option value="jeju">Jeju</option>
       <option value="deagu">Deagu</option>
     </select>
   </div>
   <div>
     <p>{{selectedCity}}</p>
   </div>
   <div>
     <input type="text" @keyup.enter="one()" placeholder="press enter here">
   </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        counter: 0,
        selectedCity: '',
        selected: ''
      };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
      increaseCounter() {
        this.counter = this.counter + 1;
      },
      setCounter(_set) {
        this.counter = _set;
      },
      one() {
        alert('One');
      },
      two() {
        alert('Two');
      },
      changeSelect() {
        this.selectedCity = this.selected;
      }
    }
  }
</script>