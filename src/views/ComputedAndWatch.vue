<template>
  <div>
    <input type="text" v-model="inputName" @change="setFirstName()">
  </div>
   <div>
     <h1>Full name by computed : {{fullName}}</h1>
   </div>
   <div>
     <h2>Full name by Watch : {{fullNameChanged}}</h2>
   </div>
   <div>
     <input type="text" v-model="inputed">
     <h3>{{getterSetter}}</h3>
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
        fullNameChanged: '',
        inputName: '',
        inputed: ''
      };
    },

    computed: {
      getterSetter: {
        get() {
          return this.inputed + ' ' + this.lastName;
        },

        set() {
        }
      },

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
      setFirstName() {
        this.firstName = this.inputName;
      }
    }
  }
</script>