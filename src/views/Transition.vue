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
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        count: 0,
        abs: true,
        show: true,
        rightleft: true
      };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
  }
</script>
<style scoped>
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