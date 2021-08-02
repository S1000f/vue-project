<template>
  <div>
    <page-title titled="aaaassssdddddd" :likes="42" :isPublished="isPublished" :arrayProps="['Milly', 'Sully', 'Yeon']" 
    :author="authorObj" :obj="obj" ref="child_component" />
  </div>
  <div>
    <button type="button" @click="changeChildData()">change child data</button>
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
      }
    }
  },
  methods: {
    changeChildData() {
      this.$refs.child_component.msg = "I can modify child's data options";
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