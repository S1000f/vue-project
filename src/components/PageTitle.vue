<template>
  <div id="will-be-overrode" class="children">
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
      <h3>{{objj.name}}</h3><br>
      <h3>{{objj.age}}</h3>
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
    <div>
      <button type="button" @click="sendMessage()">Send message to parent comp</button>
      <p>data is {{dataFromChild}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      dataFromChild: String,
      titled: {
        type: String,
        default: 'this is title message.'
      },
      likes: Number,
      isPublished: Boolean,
      arrayProps: Array,
      author: Object,
      objj: {
        type: Object,
        default: function() {
          return {
            name: 'Milly the cat',
            age: 12
          }
        }
      }
    },

    data() {
      return {
        msg: 'dont touch me',
        syncMe: 'sync me'
      }
    },

    mounted() {
    },

    created() {
    },

    methods: {
      sendMessage() {
        this.$emit('send-message', 'MooYAHO');
      },

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
  }
</script>
