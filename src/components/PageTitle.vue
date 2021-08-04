<template>
  <div>
    <h2>{{titled}}</h2>
  </div>
  <div>
    <h3>{{likes + 1}}</h3>
  </div>
  <div>
    <h3>{{isPublished}}</h3>
  </div>
  <div>
    <h4>{{arrayProps}}</h4>
  </div>
  <div>
    <h1>author: {{author.name}}</h1><br>
    <h2>Book Title: {{author.book}}</h2>
  </div>
  <div>
    <h3>{{obj.name}}</h3><br>
    <h3>{{obj.age}}</h3>
  </div>
  <div>
    <button type="button" @click="childFunc()" ref="btn">Click Event!</button>
  </div>
  <div>
    <h1>{{msg}}</h1>
  </div>
  <div>
    <button type="button" @click="changeSyncMe()">Change sync me button</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'dont touch me',
        toParent: 'message from child component',
        syncMe: 'sync me'
      }
    },

    mounted() {
      this.$emit('send-message', this.toParent);
    },

    methods: {
      childFunc() {
        console.log('click event!!!!');
      },
      childFun() {
        document.write('ahoy!!!!');
      },
      changeSyncMe() {
        this.syncMe = 'changed syncMe props'
      }
    },
    
    props: {
      titled: {
        type: String,
        default: 'this is title message.'
      },
      likes: Number,
      isPublished: Boolean,
      arrayProps: Array,
      author: Object,
      obj: {
        type: Object,
        default: function() {
          return {
            name: 'Milly the cat',
            age: 12
          }
        }
      }
    }
  }
</script>
