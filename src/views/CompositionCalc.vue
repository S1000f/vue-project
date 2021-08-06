<template>
   <div>
     <h2>Calculator</h2>
     <div>
       <input type="text" v-model="num1" v-focus />
       <span> + </span>
       <input type="text" v-model="num2" />
       <span> = </span>
       <span>{{result}}</span>
     </div>
   </div>
   <div>
     <p v-pin="position">page with Custom Directive</p>
   </div>
</template>
<script>
  import {plusNumber} from '../common'

  export default {
    name: 'calculator',
    setup() {
      let {num1, num2, result} = plusNumber();
      
      return {
        num1,
        num2,
        result
      }
    },
    directives: {
      pin: {
        mounted(el, bind) {
          console.log(bind)
          el.style.position = 'fixed';
          el.style.top = bind.value.top + 'px';
          el.style.left = bind.value.left + 'px';
          el.style.backgroundColor = bind.value.bg;
        }
      }
    },
    data() {
      return {
        position: {
          top: 50,
          left:100,
          bg: 'dodgerblue'
        }
      }
    }
  }
</script>