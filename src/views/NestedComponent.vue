<template>
  <page-title titled="message from parent to child via attribute" id="override-child-id" class="parent1 parent2" 
  :likes="42" 
  :isPublished="isPublished" 
  :arrayProps="['Milly', 'Sully', 'Yeon']" 
  :author="authorObj" 
  :obj="objj" 
  ref="child_component"
  :dataFromChild="dataFromChild"
  @send-message="sendMessage"
  />
  <div>
    <button type="button" @click="changeChildData()">change child data</button>
  </div>
  <div>
    <h3>data from child : {{dataFromChild}}</h3>
  </div>
  <div class="bbb">
    <button type="button" @click="checkChild()">Check SyncMe data</button>
  </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
export default {
  data() {
    return {
      objj: {
        
      },
      isPublished: true,
      authorObj: {
        name: 'Nick',
        book: 'Buy Bitcoin'
      },
      dataFromChild: 'haha'
    }
  },

  computed: {
    syncMe() {
      return this.$refs.child_component.syncMe + ' <= computed child data via $refs';
    }
  },

  methods: {
    changeChildData() {
      this.$refs.child_component.msg = "I can modify child's data options";
    },

    sendMessage(_msg) {
      this.dataFromChild = _msg;
    },

    checkChild() {
      alert(this.syncMe);
    }
  },

  mounted() {
    this.$refs.child_component.$refs.btn.click()
  },

  components: {
    PageTitle
  }
}
</script>
<style scoped>
  .bbb {
    margin-bottom: 100px;
  }
</style>