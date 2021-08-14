<template>
  <slot-modal>
    this is contents for slot: {{msgData}}
  </slot-modal>
</template>
<script>
  import SlotModal from './SlotModal.vue'
  export default {
    data() {
      return {
        msgData: 'parent data'
      }
    },

    components: {
      SlotModal
    }
  }
</script>

