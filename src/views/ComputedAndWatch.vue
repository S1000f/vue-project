<template>
  <div>
    <input type="text" v-model="inputName" @change="setFirstName(inputName)">
  </div>
   <div>
     <h1>Full name : {{fullName}}</h1>
   </div>
   <div>
     <h2>Full name by Watch : {{fullNameChanged}}</h2>
   </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        firstName: 'Milly',
        lastName: 'the cat',
        fullNameChanged: ''
      };
    },
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      }
    },
    watch: {
      firstName() {
        this.fullNameChanged = this.firstName + ' ' + this.lastName;
      },
      lastName() {
        this.fullNameChanged = this.firstName + ' ' + this.lastName;
      }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
      setFirstName(_inputName) {
        this.firstName = _inputName;
      }
    }
  }
</script>