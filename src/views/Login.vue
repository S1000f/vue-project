<template>
   <div>
     <a id="custom-login-btn" @click="kakaoLogin()">
       KAKAO login
     </a>
   </div>
   <div>
     <button type="button" @click="kakaoLogout()">kakao logout</button>
   </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        sampleData: ''
      };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
      kakaoLogin() {
        window.Kakao.Auth.login({
          scope: 'profile_nickname, account_email',
          success: this.getKakaoAccount
        })
      },

      getKakaoAccount() {
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            const kakao_account = res.kakao_account;
            const nickname = kakao_account.profile.nickname;
            const email = kakao_account.email;

            console.log('nickname', nickname);
            console.log('email ', email);

            alert("login success");
          },
          fail: error => {
            console.log(error);
          }
        })
      },

      kakaoLogout() {
        window.Kakao.Auth.logout((res) => {
          console.log(res);
        })
      }
    }
  }
</script>