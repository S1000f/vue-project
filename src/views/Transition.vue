<template>
  <button type="button" @click="show = !show">do transition effect</button>
  <transition>
    <div v-show="show" class="trans">
      <p>Transition</p>
    </div>
  </transition>
  <transition name="customName">
    <div v-if="show"><h3>Transition~~~~</h3></div>
  </transition>
  <div>
    <button type="button" @click="rightleft = !rightleft">right left</button>
    <transition name="rightleft">
      <div v-show="rightleft" class="rightleft"></div>
    </transition>
  </div>
  <div>
    <button type="button" @click="abs = !abs">position: absolute</button>
    <transition name="abs">
      <div v-if="abs" key="abs-if" class="abs">TRUE</div>
      <div v-else key="abs-else" class="abs">FALSE</div>
    </transition>
  </div>
  <div>
    <button @click="count++">count</button>
    <transition>
      <div :key="count">{{count}}</div>
    </transition>
  </div>
  <div>
    <button @click="order = !order">change list</button>
    <transition-group tag="ul" name="list">
      <li v-for="item in sortedList" :key="item.id">{{item.id}} : {{item.name}}, price: {{item.price}}</li>
    </transition-group>
  </div>
  <div>
    <button @click="toggle = !toggle">Toggle</button>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <transition name="svg">
        <circle cx="80" cy="75" r="50" :fill="fill" :key="fill"></circle>
      </transition>
    </svg>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {
    },
    data() {
      return {
        toggle: false,
        order: false,
        list: [
          { id: 1, name: 'apple', price: 100 },
          { id: 2, name: 'banana', price: 200 },
          { id: 3, name: 'melon', price: 300 },
          { id: 4, name: 'orange', price: 400 }
        ],
        count: 0,
        abs: true,
        show: true,
        rightleft: true
      };
    },
    computed: {
      fill() {
        return this.toggle ? 'dodgerblue' : 'lightpink'
      },

      sortedList() {
        return this.list.slice(0).sort(this.order ? (a, b) => a.price - b.price : (a, b) => b.price - a.price)
      }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
  }
</script>
<style scoped>
  .svg-enter-active, .svg-leave-active {
    transition: all 1s;
  }

  .svg-leave-active {
    position: absolute;
  }

  .svg-enter, .svg-leave-to {
    opacity: 0;
    transform: translateX(-20px)
  }

  .list-move {
    transition: transform 1s;
  }


  .abs {
    width: 100px;
    height: 100px;
  }

  .abs-enter-active, .abs-leave-active {
    transition: opacity 1s;
    position: absolute
  }

  .abs-enter, .abs-leave-to {
    opacity: 0;
  }

  .rightleft-enter-active, .rightleft-leave-active {
    transition: opacity 1s, transform 1s;
  }

  .rightleft-enter {
    opacity: 0;
    transform: translateX(-100px);
  }

  .rightleft-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }

  .rightleft {
    background-color: dodgerblue;
    width: 50px;
    height: 50px;
  }

  .trans {
    background-color: tomato;
  }

  .v-enter-active, .v-leave-active {
    transition: opacity 1s;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
  }

  .customName-enter-active, .customName-leave-active {
    transition: opacity 1s;
  }

  .customName-enter, .customName-leave-to {
    opacity: 0;
  }

</style>