<template>
  <div class="introduction">
    <div class="banner">
      <img src="@/assets/introduction/banner.png" alt="banner.png">
    </div>
    <div class="content">
      <div class="header">
        中医9种体质测试
      </div>
      <div class="header-child">
        测测你属于哪一种体质
      </div>
      <div class="button" @click="navigateTo('/home')">
        立即开始测试
      </div>
      <div class="footer">
        本测试来自《中医体质分类与判定》国家标准
      </div>
    </div>
    <div class="border"></div>
    <div class="evaluate-box">
      <div class="header">
        <span class="small-border">-</span>
        <span>测评简介</span>
        <span class="small-border">-</span>
      </div>
      <div class="img-box">
        <img src="@/assets/introduction/平和质.jpg" alt="平和质.jpg">
        <img src="@/assets/introduction/气虚质.jpg" alt="气虚质.jpg">
        <img src="@/assets/introduction/气虚质.jpg" alt="气虚质.jpg">
        <img src="@/assets/introduction/阴虚质.jpg" alt="阴虚质.jpg">
        <img src="@/assets/introduction/痰湿质.jpg" alt="痰湿质.jpg">
        <img src="@/assets/introduction/湿热质.jpg" alt="湿热质.jpg">
        <img src="@/assets/introduction/血瘀质.jpg" alt="血瘀质.jpg">
        <img src="@/assets/introduction/气郁质.jpg" alt="气郁质.jpg">
        <img src="@/assets/introduction/特禀质.jpg" alt="特禀质.jpg">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    document.title = `"中医9中体质测试"`
  },
  methods: {
    navigateTo(path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    position: relative;
    img {
      position: relative;
      width: 100%;
    }
  }
  .content {
    position: relative;
    text-align: center;
    .header {
      position: relative;
      margin-top: 24px;
      font-size: 18px;
    }
    .header-child {
      position: relative;
      margin-top: 12px;
      font-size: 10px;
      color: #767676;
    }
    .button {
      position: relative;
      display: inline-block;
      margin-top: 32px;
      line-height: 40px;
      width: 219px;
      color: #fff;
      background: #22ac38;
      font-size: 16px;
      border-radius: 30px;
    }
    .footer {
      position: relative;
      margin-top: 16px;
      font-size: 10px;
    }
  }
  .border {
      position: relative;
      margin-top: 16px;
      height: 12px;
      background: #eeeeee;
    }
  .evaluate-box {
    position: relative;
    text-align: center;
    .header {
      position: relative;
      font-size: 16px;
      margin: 24px 0;
    }
    .small-border {
      position: relative;
    }
    .small-border:first-of-type {
      right: 3px;
    }
    .small-border:last-of-type {
      left: 3px;
    }
    .img-box {
      position: relative;
      img {
        position: relative;
        width: 80%;
        box-shadow: 0 0 5px 3px rgb(58, 58, 58);
        margin: 12px 0;
      }
    }
  }
</style>