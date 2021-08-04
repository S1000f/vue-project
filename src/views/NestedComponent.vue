<template>
  <div>
    <page-title titled="aaaassssdddddd" :likes="42" :isPublished="isPublished" :arrayProps="['Milly', 'Sully', 'Yeon']" 
    :author="authorObj" :obj="obj" ref="child_component" @send-message="sendMessage" />
  </div>
  <div>
    <button type="button" @click="changeChildData()">change child data</button>
  </div>
  <div>
    <h3>data from child : {{dataFromChild}}</h3>
  </div>
  <div>
    <button type="button" @click="checkChild()">Check Data From Child Component</button>
  </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
export default {
  data() {
    return {
      isPublished: true,
      authorObj: {
        name: 'Nick',
        book: 'Buy Bitcoin'
      },
      dataFromChild: ''
    }
  },

  computed: {
    syncMe() {
      return this.$refs.child_component.syncMe;
    }
  },

  methods: {
    changeChildData() {
      this.$refs.child_component.msg = "I can modify child's data options";
    },
    sendMessage(_msg) {
      console.log(_msg);
      this.dataFromChild = _msg;
    },
    checkChild() {
      alert(this.syncMe);
    }
  },

  mounted() {
    this.$refs.child_component.$refs.btn.click();
  },

  components: {
    PageTitle
  }
}
</script>