<template>
  <div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: ""
    }
  },
  created() {
    this.getAuth()
  },
  methods: {
    getCode() {
      try {
        let code = window.location.search.split("&")[0].split("=")[1]
        return code
      }catch(e) {
        return false
      }
    },
    getAuth() {
      const code = this.getCode()
      if(code) {
        this.$.ajax({url: `/physique/loginWechat.action?wechatinfo=${encodeURI(JSON.stringify({jscode: code}))}`})
      }else {
        window.open("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7e0553fdd4db2d5f&redirect_uri=http%3a%2f%2fquestion.xuanzai.top%2fphysique%2fviews%2fquestion%2findex.html&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect")
      }
    }
  }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}
</style>



