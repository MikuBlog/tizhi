<template>
  <div class="answer" ref="answer">
    <div class="header">
      <div class="first">
        中医九种体质测试
      </div>
      <div class="second">
        根据最近三个月的体验和感觉回答
      </div>
    </div>
    <div class="answer-box">
      <div 
      class="answer-list" 
      :key="items.title"
      v-for="(items, index) in answerList">
        <div class="answer-content">
          <span style="font-size: 24px">{{index + 1}}</span>
          <span style="margin: 0 2px">/</span>
          <span style="font-size: 16px;">{{total}}</span>
          <span style="margin-left: 5px; font-size: 16px">{{items.title}}</span>
        </div>
        <div class="options" >
          <el-radio-group 
          v-model="items.answer" 
          size="small"
          >
            <el-radio-button :label="options.value" v-for="options in items.options" :key="options.label">{{options.label}}</el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </div>
    <div class="question-box" ref="questionBox">
      <div class="box">
        <div class="number">
          <span style="font-size: 24px">{{index}}</span>
          <span style="margin: 0 2px">/</span>
          <span style="font-size: 16px;">{{total}}</span>
        </div>
        <div class="content"> 
          {{question.title}}
        </div>
        <div class="options" >
          <el-radio-group 
          v-model="question.answer" 
          @change="getAnswer()"
          size="small"
          >
            <el-radio-button :label="options.value" v-for="options in question.options" :key="options.label">{{options.label}}</el-radio-button>
          </el-radio-group>
        </div>
        <div class="button-box" v-if="index == 62">
          <span 
          @click="submitAnswer"
          :class="[answerList.length == 62 ? 'button-active' : 'button']">
            <img src="@/assets/submit.png" alt="submit.png">
          </span>
          <div class="button-content">
            <div style="margin-top: 30px; font-size: 16px">
              提交代表你接收以下声明
            </div>
            <div style="text-align: left; margin: 25px 20px 0 20px">
              本测试不作为诊断和治疗的依据，对于已经医生确诊的疾病，应该按照医嘱积极治疗。所提及的内容仅作为生活保健的咨询建议。如遇不适请及时就医。
            </div>
            <div style="text-align: left; margin: 0 20px; font-weight: bold">
              本测试不适用于孕妇和产妇
            </div>
          </div>
        </div>
        <div class="qrcode">
          <div class="qrcode-img">
            <img src="@/assets/wechat.jpg" alt="qrcode.jpg">
          </div>
          <div class="qrcode-content">
            <div>
              超准体质测试，5分钟从健康看你的性格！
            </div>
            <div>
              长按二维码关注后获取解析
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Loading } from 'element-ui';
export default {
  data() {
    return {
      // 问题列表(深拷贝)
      questionList: JSON.parse(JSON.stringify(this.$store.state.questions)),
      // 已回答列表
      answerList: [],
      // 未达题目
      question: {},
      // 当前题目位置
      index: 1,
      // 题目总数
      total: 0,
      // hack button样式
      buttonLength: 2
    }
  },
  mounted() {
    this.initialData()
    this.initialStyle()
    this.$nextTick(() => {
      this.initialButtonStyle()
      this.buttonLength = 2
    })
  },
  methods: {
    // 初始化数据
    initialData() {
      this.questions = this.questionList[0]
      this.total = this.questionList.length
      for(let key in this.questionList[0]) {
        this.question[key] = this.questionList[0][key]
      }
    },
    initialStyle() {
      const 
        questionBox = this.$refs.questionBox,
        answer = this.$refs.answer
      questionBox.style.height = `${window.innerHeight - 120}px`
      answer.style.height = `${window.innerHeight}px`
    },
    initialButtonStyle() {
      const eles = document.querySelectorAll('.el-radio-button__inner')
      this.buttonLength = eles.length
      eles.forEach(val => {
        val.style.border = "1px solid #22ac38"
        val.addEventListener('mouseover', () => {
          val.style.color = "#000"
        })
      })
    },
    initialNewButtonStyle() {
      const eles = document.querySelectorAll('.el-radio-button__inner')
      for(let i = this.buttonLength - 1, len = eles.length; i < len; i ++) {
        eles[i].style.color = "#000"
      }
    },
    // 切换题目
    nextQuestion() {
      this.question = this.questionList[this.index - 1]
      this.$nextTick(() => {
        this.initialNewButtonStyle()
        this.initialButtonStyle()
        this.index != 62
        ? this.$refs.answer.scrollTop = this.$refs.answer.scrollHeight
        : this.$refs.answer.scrollTop = this.$refs.answer.scrollHeight - 880
      })
    },
    // 获取答案
    getAnswer() {
      this.index < 62 
      && (this.index += 1 )
      this.answerList.length < 62
      && (this.answerList.push(this.question))
      this.nextQuestion()
    },
    // 提交答案
    submitAnswer() {
      if(this.answerList.length == 62) {
        let 
        loadingInstance1 = Loading.service({ fullscreen: true }),
        _this = this
        this.$.ajax({
          url: `/physique/submitAnswers.action?answerList=${JSON.stringify(this.answerList.map(val => val.answer)).replace(/[\[\]]/g, '')}`,
          type: "post",
          success(data) {
            loadingInstance1.close()
            localStorage.setItem('resultData', data)
            _this.$router.push({ path:"/result" })
          },error() {
            loadingInstance1.close()
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .answer {
    position: relative;
    overflow: auto;
  }
  .header {
    position: fixed;
    width: 100%;
    height: 104px;
    text-align: center;
    z-index: 1;
  }
  .first {
    line-height: 54px;
    font-size: 18px;
    background: #22ac38;
    color: #fff;
  }
  .second {
    line-height: 50px;
    font-size: 14px;
    color: #22ac38;
    border-bottom: 1px solid #efefef;
    background: #fff;
  }
  .answer-box {
    position: relative;
    margin-top: 134px;
  }
  .answer-list {
    position: relative;
    margin: 27px 20px 0 20px;
    .options {
      margin-top: 16px;
    }
  }
  .answer-content {
    color: #b3b3b3;
  }
  .question-box {
    position: relative;
  }
  .box {
    position: relative;
    margin: 0 20px;
  }
  .number {
    position: relative;
    margin-top: 134px;
    color: #1ca04d;
  }
  .content {
    position: relative;
    font-size: 18px;
    margin-top: 40px;
    color: #1ca04d;
  }
  .options {
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    margin-top: 55px;
  }
  .qrcode {
    position: relative;
    text-align: center;
    margin-top: 75px;
    .qrcode-img {
      position: relative;
      margin: auto;
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .qrcode-content {
      position: relative;
      margin-top: 10px;
      line-height: 23px;
      font-size: 12px;
    }
  }
  .button-box {
    position: relative;
    text-align: center;
    .button-active {
      position: relative;
      display: inline-block;
      margin-top: 60px;
      background: #22ac38;
      width: 160px;
      line-height: 45px;
      border-radius: 5px;
      img {
        vertical-align: middle;
        width:100%;
      }
    }
    .button {
      position: relative;
      display: inline-block;
      margin-top: 60px;
      background: #cacaca;
      width: 160px;
      line-height: 45px;
      border-radius: 5px;
      img {
        vertical-align: middle;
        width:100%;
      }
    }
  }
  .button-content {
    position: relative;
    color: #979797;
  }
</style>