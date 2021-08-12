<template>
   <div>
     <h1>Hello, {{title}}!</h1>
   </div>
   <div>{{htmlString}}</div>
   <div v-html="htmlString"></div>
   <div><input type="text" v-model="valueModel"></div>
   <div><input type="number" v-model.number="numberModel"></div>
   <div><textarea v-model="message"></textarea></div>
   <div>
     <select v-model="city">
       <option value="02">Seoul</option>
       <option value="21">Jeju</option>
       <option value="064">Busan</option>
     </select>
   </div>
  <div>
    <label><input type="checkbox" v-model="checkedd" true-value="yes!!" false-value="nope!!">{{checkedd}}</label>
  </div>
  <div>
    <label for=""><input type="checkbox" v-bind:value="cat" v-model="checkeda">cat</label>
    <label for=""><input type="checkbox" value="dog" v-model="checkeda">dog</label>
    <label for=""><input type="checkbox" value="rabbit" v-model="checkeda">rabbit</label>
    <br>
    <span>checked: {{checkeda}}</span>
  </div>
  <div>
    <label><input type="radio" :value="radioValue1" v-model="picked">Java</label>
    <label><input type="radio" :value="radioValue2" v-model="picked">JavaScript</label>
    <label><input type="radio" :value="radioValue3" v-model="picked">TypeScript</label>
    <br>
    <span>your pick is: {{picked}}</span>
  </div>
  <div>
    <img :src="imgSrc">
  </div>
  <div>
    <input type="file" @change="changeImg($event)" />
    <div v-if="preview"><img :src="preview"></div>
  </div>
  <div>
    <input type="text" v-model="mustInput">
    <button type="button" :disabled="mustInput==''">click here</button>
  </div>
  <div class="container" :class="{
    'active' : isActive,
    'text-red' : hasError}">Class Binding</div>
  <div class="container" :class="[bindToActive2, bindToTextRed]">Class binding by array</div>
  <div v-bind:style="myStyle">Inline style binding</div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        preview: '',
        title: 'World',
        htmlString: '<p style="color:red;">This is a red string.</p>',
        valueModel: 'Milly the cat',
        numberModel: 3,
        message: 'this is a textarea input form',
        city: '064',
        checkedd: "nope!!",
        checkeda: [],
        cat: "Cat",
        picked: '',
        radioValue1: 'Java',
        radioValue2: 'JavaScript',
        radioValue3: 'TS',
        imgSrc: "https://kr.vuejs.org/images/logo.png",
        mustInput: "",
        isActive: true,
        hasError: false,
        bindToActive2: 'active2',
        bindToTextRed: 'text-red',
        myStyle: {
          'background-color' : 'tomato',
          fontSize: '20px'
        }
      };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
      changeImg(_event) {
        let file = _event.target.files[0];

        if (file && file.type.match(/^image\/(png|jpeg)$/)) {
          this.preview = window.URL.createObjectURL(file);
        }
      }
    }
  }
</script>
<style scoped>
  .container {
    width: 100%;
    height: 200px;
  }

  .active {
    background-color: dodgerblue;
    font-weight: bold;
  }

  .active2 {
    background-color: palegreen;
  }

  .text-red {
    color: tomato;
  }
</style>