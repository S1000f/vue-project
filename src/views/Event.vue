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
   <div>
     <button type="button" @click="handleClick($event)">console log Event Object</button>
   </div>
   <div>
      <button type="button" @click.right="rightClick()">only mouse right button click</button>
    </div>
    <div @click="print('div1')">
      div1
      <div @click.stop="print('div2')">div2</div>
    </div>
    <div @click="print('div1')">
      div1
      <a href="https://naver.com" @click.prevent="print('div2')">div2</a>
    </div>
    <div>
      <input type="text" @input="inputHandler($event)"/>
      <div><p>{{typing}}</p></div>
    </div>
    <div>
      <input type="text" v-model="imeSucks" />
      <div><p>{{imeSucks}}</p></div>
    </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        imeSucks: "",
        typing: "",
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
      inputHandler(_event) {
        this.typing = _event.target.value;
      },

      print(_msg) {
        console.log(_msg)
      },

      rightClick() {
        alert("right!")
      },

      handleClick(_param) {
        console.log(_param)
      },

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