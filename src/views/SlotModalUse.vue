<template>
  <slot-modal/>
  <comp-child>
    this is slot contents!!!
  </comp-child>  
</template> 
<script>
  import SlotModal from './SlotModal.vue'
  export default {
    components: {
      SlotModal
    }
  }
</script>

