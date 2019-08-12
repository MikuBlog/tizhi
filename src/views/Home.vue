<template>
  <div class="home">
    <!-- <div class="absoulate"> -->
      <div class="head fixed">
        <h1>中医9种体质测试</h1>
      </div>
      <div class="section_header_placeholder">
        <div class="section_header" id="header_fixed">
          <h2>根据最近三个月的体验和感觉回答</h2>
        </div>
      </div>
    <!-- </div> -->
    <div class="space"></div>
    <form action="" class="questionForm">
      <!-- <div class="container question-desc">
        <span>超准体质测试，5 分钟从健康看你的性格!</span>
      </div> -->
      <div class="container question-container">
        <!-- <div class="section_header_placeholder">
          <div class="section_header fixed" id="header_fixed">
            <h2>根据最近三个月的体验和感觉回答</h2>
          </div>
        </div> -->
        <!-- <div class="scroller"  @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" :style="{transform: 'translate3d(0,' + top + 'px, 0)'}"> -->

         <!-- <el-carousel direction="vertical" :autoplay="false" ref="carousel" height="259px" trigger="click"> -->
          <!-- <el-carousel-item v-for="(item,index) in questions" :key="index"> -->
        <ul class="question-ul" ref="ul">
          <li v-for="(item,index) in questions" :key="index"  :class="['question' + (index == 0 ? ' active' : ' disabled'), 'li-box']" :id="'question' + index">
            <div>
              <h3 :id="'grey' + index">
                <span class="question-no">
                  <b>{{index+1}}</b>/{{total}}
                </span>
                <span class="real-title">
                  {{item.title}}
                </span>
              </h3>
              <div class="question-options">
                <ul class="row" v-if="index == 0">
                  <li class="col-xs-6" :id="'question' + index + '_option1'" @click="selectOption(index,1)">
                    {{item.option1}}
                  </li>
                  <li class="col-xs-6" :id="'question' + index + '_option2'" @click="selectOption(index,2)">
                    {{item.option2}}
                  </li>
                </ul>
                <ul class="row" v-else>
                  <li class="option" :id="'question' + index + '_option1'" @click="selectOption(index,1)">
                    {{item.option1}}
                  </li>
                  <li class="option" :id="'question' + index + '_option2'" @click="selectOption(index,2)">
                    {{item.option2}}
                  </li>
                  <li class="option" :id="'question' + index + '_option3'" @click="selectOption(index,3)">
                    {{item.option3}}
                  </li>
                  <li class="option" :id="'question' + index + '_option4'" @click="selectOption(index,4)">
                    {{item.option4}}
                  </li>
                  <li class="option" :id="'question' + index + '_option5'" @click="selectOption(index,5)">
                    {{item.option5}}
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>

          <!-- </el-carousel-item> -->
        <!-- </el-carousel> -->
        <!-- </div> -->
        <div ref="hidden" id="hidden-div">
          <div class="container option-container">
            <input type="submit" class="hidden-button">
            <a class="submit" id="submitButton" ref="submit">
              <img @click="submitAnswer()">
            </a>
          </div>

          <div class="container option-statement">
            <h4>提交代表你已接受以下声明</h4>
            <p>本测试不作为诊断和治疗的依据，对于已经医生确诊的疾病，应按照医嘱积极治疗。所提及的内容仅作为生活保健的咨询建议。如遇不适请及时就医。<br><b>本测试不适用于孕妇和乳母</b></p>
          </div>
        </div>

        <img src="../assets/wechat.jpg" alt="" id="qrcode" ref="qrcode">
        <div class="qrcode-explain">
          <p>超准体质测试，5 分钟从健康看你的性格！</p>
          <p>长按二维码关注后获取解析</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    
  },
  data() {
    return {
      // questions: [],
      questions: [{"questionId":"1","title":"请选择您的性别：","option1":"男","option2":"女","creatorid":"0","version":"0"},{"questionId":"2","title":"你喜欢安静懒得说话吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"3","title":"你面色晦暗或容易出现褐斑吗？","option1":"根本不","option2":"有一点","option3":"有些","option4":"相当","option5":"非常","creatorid":"0","version":"0"},{"questionId":"4","title":"你容易有黑眼圈吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"5","title":"你口唇颜色偏暗吗？","option1":"根本不","option2":"有一点","option3":"有些","option4":"相当","option5":"非常","creatorid":"0","version":"0"},{"questionId":"6","title":"你口唇的颜色比一般人红吗？","option1":"根本不","option2":"有一点","option3":"有些","option4":"相当","option5":"非常","creatorid":"0","version":"0"},{"questionId":"7","title":"你皮肤或口唇干吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"8","title":"你面部两颧潮红或偏红吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"9","title":"你两颧部有细微红丝吗？","option1":"根本不","option2":"有一点","option3":"有些","option4":"相当","option5":"非常","creatorid":"0","version":"0"},{"questionId":"10","title":"你腹部肥满松软吗？","option1":"根本不","option2":"有一点","option3":"有些","option4":"相当","option5":"非常","creatorid":"0","version":"0"},{"questionId":"11","title":"你有额部油脂分泌多的现象吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"12","title":"你上眼睑比别人肿（上眼睑有轻微隆起的现象）吗？","option1":"根本不","option2":"有一点","option3":"有些","option4":"相当","option5":"非常","creatorid":"0","version":"0"},{"questionId":"13","title":"你面部或鼻部有油腻感或者油亮发光吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"14","title":"你容易生痤疮或疮疖吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"15","title":"你的皮肤在不知不觉中会出现青紫瘀斑（皮下出血）吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"16","title":"你的皮肤一抓就红，并出现抓痕吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"17","title":"你精力充沛吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"18","title":"你容易疲乏吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"19","title":"你容易精神紧张、焦虑不安吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"20","title":"你多愁善感、感情脆弱吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"21","title":"你容易感到害怕或受到惊吓吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"22","title":"你说话声音低弱无力吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"23","title":"你感到闷闷不乐，情绪低沉吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"24","title":"你感到口苦或嘴里有异味吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"25","title":"你感到眼睛干涩吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"26","title":"你感到口舌干燥总想喝水吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"27","title":"你感到胸闷或腹部胀满吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"28","title":"你感到身体沉重不轻松或不爽快吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"29","title":"你感到手脚心发热吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"30","title":"你感觉身体脸上发热吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"31","title":"你无缘无故叹气吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"32","title":"你容易忘事（健忘）吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"33","title":"你比别人容易患感冒吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"34","title":"你嘴里有黏黏的感觉吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"35","title":"你平时痰多特别是咽喉部总感觉有痰堵着吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"36","title":"你舌苔厚腻或有舌苔厚厚的感觉吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"37","title":"你大便黏滞不爽（常常粘在马桶上冲不干净），有解不尽的感觉吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"38","title":"你胃脘部、背部或腰膝部怕冷吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"39","title":"你身上有哪里疼痛吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"40","title":"你胁肋部（胸腔两侧，腋部以下至最后一根肋骨之间）或乳房胀痛吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"41","title":"你咽喉部有异物感且吐之不出，咽之不下吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"42","title":"你感到怕冷衣服比别人穿的多吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"43","title":"你比一般人耐受不了寒冷（冬天的寒冷，夏天的空调，电扇等）吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"44","title":"你能适应外界自然和社会环境的变化吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"45","title":"你容易气短（呼吸急促，接不上气）吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"46","title":"你容易心慌吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"47","title":"你容易失眠吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"48","title":"你容易头晕或站起时眩晕吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"49","title":"你活动量稍大就容易出虚汗吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"50","title":"你手脚发凉吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"51","title":"你吃（喝）凉的东西会感到不舒服或者怕吃（喝）凉的东西吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"52","title":"你受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"53","title":"你没有感冒时也会打喷嚏吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"54","title":"你没有感冒时也会鼻塞、流鼻涕吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"55","title":"你有因季节变化、温度变化或异味等原因而咳嗽的现象吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"56","title":"你容易过敏(对药物,食物,气味,花粉或在季节交替,气候变化时)吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"57","title":"你容易便秘或大便干燥吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"58","title":"你小便时尿道有发热感，尿色浓（深）吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"59","title":"你的皮肤容易起荨麻疹（风团、风疹块、风疙瘩）吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"60","title":"你的皮肤因过敏出现过紫癜（紫红色瘀点、瘀斑）吗？","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"61","title":"你的阴囊部位潮湿吗？（男性）/您白带颜色发黄吗？（女性）","option1":"没有","option2":"很少","option3":"有时","option4":"经常","option5":"总是","creatorid":"0","version":"0"},{"questionId":"62","title":"请选择您的年龄","option1":"28以上","option2":"28~35","option3":"35~45","option4":"45~60","option5":"60以上","creatorid":"0","version":"0"}],
      total: 62,
      answers: [],
      isShow: true,
      isAnswer: false,
      index: 0,

      defaultOffset: 30, // 默认高度, 相应的修改.releshMoudle的margin-top和.down-tip, .up-tip, .refresh-tip的height
      top: 0,
      scrollIsToTop: 0,
      startY: 0,
      isDropDown: false, // 是否下拉
      isRefreshing: false, // 是否正在刷新
      dropDownState: 1, // 显示1:下拉刷新, 2:松开刷新, 3:刷新中……

      isPullUp: false,
    }
  },
  created () {
    // if (document.querySelector('.scroller')) {
    //   // 获取不同手机的物理像素（dpr）,以便适配rem
    //   this.defaultOffset = document.querySelector('.scroller').clientHeight || this.defaultOffset
    // }
  },
  mounted() {
    this.initialStyle()
  },
  methods: {
    // 初始化样式
    initialStyle() {

    },
    touchStart (e) {
      this.startY = e.targetTouches[0].pageY
    },
    touchMove(e) {
      this.scrollIsToTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop // safari 获取scrollTop用window.pageYOffset
      if (e.targetTouches[0].pageY > this.startY) { // 下拉
        this.isDropDown = true
        if (this.scrollIsToTop === 0 && !this.isRefreshing) {
          // 拉动的距离
          let diff = e.targetTouches[0].pageY - this.startY - this.scrollIsToTop
          this.top = Math.pow(diff, 0.8) + (this.dropDownState === 3 ? this.defaultOffset : 0)
          if (this.top >= this.defaultOffset) {
            this.dropDownState = 2
          } else {
            this.dropDownState = 1
          }
          e.preventDefault()
        }
      } else {
        this.isDropDown = false
        this.dropDownState = 1
        // this.isPullUp = true
        // if (this.scrollIsToTop === 0 && !this.isRefreshing) {
        //   // 拉动的距离
        //   let diff = e.targetTouches[0].pageY - this.startY - this.scrollIsToTop
        //   this.top = Math.pow(diff, 0.8) + (this.dropDownState === 3 ? this.defaultOffset : 0)
        //   // console.log('top:' + top)
        //   if (this.top >= this.defaultOffset) {
        //     this.dropDownState = 2
        //   } else {
        //     this.dropDownState = 1
        //   }
        //   e.preventDefault()
        // }
      }
    },
    touchEnd (e) {
      if (this.isDropDown && !this.isRefreshing) {
        if (this.top >= this.defaultOffset) { // do refresh
          this.dropDown()
          this.refresh()
          this.isRefreshing = true
          console.log(`do refresh`)
        } else { // cancel refresh
          this.isRefreshing = false
          this.isDropDown = false
          this.dropDownState = 1
          this.top = 0
        }
      } else if(this.isPullUp && !this.isRefreshing){
        if (this.top <= this.defaultOffset) { // do refresh
          this.refresh()
          this.isRefreshing = true
          console.log(`do refresh`)
        } else { // cancel refresh
          this.isRefreshing = false
          this.isPullUp = false
          this.dropDownState = 1
          this.top = 0
        }
      }
    },
    refresh () {
      this.dropDownState = 3
      this.top = 0
      setTimeout(() => {
        this.refreshDone()
      }, 1000)
    },
    refreshDone () {
      this.isRefreshing = false
      this.isDropDown = false
      this.isPullUp = false
      this.dropDownState = 1
      this.top = 0
    },
    dropDown() {
      if(this.isShow == true){   
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          if(this.answers.length > 0 && this.isAnswer==false) {
            this.$refs.carousel.prev()
            this.answers.splice(this.answers.length-1,1)
          }else if(this.isAnswer==true){
            this.$refs.carousel.prev()
          }
        }, 100)
      }
    },
    pullUp() {
      if(this.isShow == true){   
        this.isShow = false
        setTimeout(() => {
          if(this.isAnswer==true){
            this.$refs.carousel.next()
          }
        }, 100)
      }
    },
    handleScroll (e) { 
      // debugger
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTop = document.querySelector('.section_header').offsetTop
      var div = document.getElementById('header_fixed')
      if(scrollTop<=120){
        offsetTop = 120 - Number(scrollTop);
        div.setAttribute('class','section_header')
        document.querySelector('.section_header').style.top = offsetTop+'px'
      }else{
        div.setAttribute('class','section_header fixed')
        document.querySelector('.section_header').style.top = '60px'
      }
      // var direction = e.deltaY>0?'down':'up'
      // if(this.isShow == true){   //此处决定无论一次滚轮滚动的距离是多少，此事件                                                              
      //                           //都得等上次滚动结束，才会执行本次
      //     this.isShow = false
      //     setTimeout(() => {
      //       this.isShow = true
      //       if(this.answers.length > 0 && direction == 'up' && this.isAnswer==false) {
      //         this.$refs.carousel.prev()
      //         this.answers.splice(this.answers.length-1,1)
      //       }else if(direction == 'up' && this.isAnswer==true){
      //         this.$refs.carousel.prev()
      //       }
      //         /* else if(isAnswer && this.answers.length!=(index+1)){
      //         this.$refs.carousel.next()
      //       } */
      //     }, 10)
      // }
    },
    selectOption(index,score) {
      // debugger
      this.index = index
      if(index == 0) {
        for(var i = 1; i <= 2; i++) {
          if(i == score) {
            var selected = document.getElementById('question0_option' + i)
            selected.setAttribute('class','col-xs-6 active')
          } else {
            var notSelect = document.getElementById('question0_option' + i)
            notSelect.setAttribute('class','col-xs-6')
          }
        }
      } else {
        for(var i = 1; i <= 5;i++) {
          if(score == i) {
            var selected = document.getElementById('question' + index + '_option' + i)
            selected.setAttribute('class','option active')
          } else {
            var notSelect = document.getElementById('question' + index + '_option' + i)
            notSelect.setAttribute('class','option')
          }
        }
      }

      // 切换题目选中状态
      if(index == this.answers.length) {
        var selected = document.getElementById('question' + index)
        selected.setAttribute('class','question normal')
      }

      // 切换下一题
      if(index == this.answers.length && index < this.questions.length) {
        console.log('切换下一题')
        var 
          nextQuestion = document.getElementById('question' + (index+1)),
          ul = this.$refs.ul
        nextQuestion.setAttribute('class','question active')
        $(ul).animate({scrollTop: ul.scrollHeight}, 500)
      }

      // document.querySelector('#grey' + index).style.color = 'grey';
      if(index == this.questions.length-2) {
        this.$refs.hidden.style.display = 'block'
        $('#qrcode').css({'margin-top':'46px'})
      }

      if(index == this.questions.length-1 && this.questions.length != this.answers.length) {
        var submit = this.$refs.submit
        $('.submit').css({'background-color':'#1ca04d'})
        this.isAnswer = true
        // this.answers.push(score)
      }
      // if(index != this.answers.length) {
      //   this.answers[index] = score
      // }else {
      //   this.answers.push(score)
      //   console.log(score)
      // }
      this.answers[index] = score

      // if(index == this.questions.length-1 && this.questions.length != this.answers.length) {
      //   var submit = this.$refs.submit
      //   $('.submit').css({'background-color':'#1ca04d'})
      //   this.answers.push(score)
      //   this.isAnswer = true
      // }else if(this.isAnswer == true) {
      //   // index == this.questions.length-1 && this.questions.length == this.answers.length
      //   this.answers[index] = score
      // }else {
      //   this.$refs.carousel.next()
      //   this.answers.push(score)
      // }
      
    },
    submitAnswer() {
      if(this.isAnswer && this.answers.length == this.questions.length) {
        console.log(this.answers)
        console.log(this.answers.length)

        var params = $.param({'answerList':this.answers},true);

        var _this = this
        
        $.ajax({

          url: _this.url + "submitAnswers",

          type:"post",

          cache: false,

          async: false,

          data: params,

          dataType: 'json',

          success(data) {

              console.log(data)

              // var obj = $.parseJSON(data)

              window.localStorage.setItem('resultData',JSON.stringify(data.resultParm.physique))

              _this.$router.push('result')

          },error() {

            console.log("请求成功")

          }
        })
      }
    },
    getAllQuestions() {
      var _this = this

      $.ajax({

        url: _this.url + "getAllQuestions",

        type:"GET",

        success(data) {

            var obj = $.parseJSON(data)

            // _this.questions = obj.resultParm.list

            _this.total = obj.resultParm.total

            // console.log(_this.questions)

        },error() {

          console.log("请求成功")

        }

      })
    }
  },
  beforeMount() {
    this.getAllQuestions()    
  },
  mounted() {
    // window.addEventListener('scroll',this.handleScroll)
    // window.addEventListener('mousewheel',this.handleScroll,false)
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.head {
  height: 60px;
  width: 100%;
  background-color: #219E4E !important;
  position: relative;
}
/* .head.fixed {
    min-width: 100%;
    position: fixed;
    top: 0px;
    border-bottom: 0 !important;
    z-index: 10000;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.1);
} */
.head h1{
  display: block;
  padding: 0 15px;
  margin: 0 auto;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 60px;
  text-align: center;
}
form {
    display: block;
    margin-top: 0em;
}
.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.question-desc,
.question-container {
    max-width: 720px;
    border-color: #EEE;
    border-style: solid;
    border-width: 0 1px 1px 1px;
    padding: 0;
    background-color: #fff;
}
.question-desc span {
    padding: 20px;
    color: #959488;
    font-size: 16px;
    display: block;
    margin: 0 auto;
}
.section_header_placeholder {
  height: 60px;
}
.section_header {
  /* max-width: 720px; */
  width: 100%;
  background: #FFF;
  height: 60px;
  border-bottom: 1px solid #EEE;
  position: relative;
}
/* .section_header.fixed {
    min-width: 100%;
    position: fixed;
    top: 60px;
    border-bottom: 0 !important;
    z-index: 10000;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.1);
} */
.question-container {
  border-left: 1 !important;
  border-right: 1 !important;
}
.section_header h2 {
  font-size: 16px;
  color: #22ac38;
  line-height: 60px;
  text-align: center
}

.question-container .question.active {
    background: #FFFFFF;
    display: block;
}
.question.active {
    padding: 10px 20px 20px 20px;
}
.question-container .question {
    padding: 20px 20px 20px 20px;
    position: relative;
    width: 100%;
}
.question-container .question.active h3 {
    height: 140px;
    padding-top: 15px;
    font-size: 20px;
    font-weight: bold;
    vertical-align: middle;
    display: table-cell;
    line-height: 150%;
    color: #1ca04d;
    margin: 0;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}
.question-container .question h3 {
    margin: 0;
    color: #BDBDAC;
    font-size: 18px;
    margin-bottom: 20px;
}
.question-container .question.active h3 .question-no {
    font-size: 18px;
    font-weight: normal;
    left: 20px;
    top: 15px;
    position: absolute;
    display: block;
    font-family: "HelveticaNeue-Light";
}
.question-container .question h3 .question-no {
    margin-right: 5px;
    font-family: "HelveticaNeue-Light";
}
.question-container .question.active h3 .question-no b {
    font-size: 24px;
}
b, strong {
    font-weight: 700;
}
.question-container .question.active h3 .real-title {
  font-size: 18px;
  font-weight: 600;
}
.question-options ul {
    height: 46px;
    margin: 0;
    padding: 0;
}
ul.row {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.question-options li:nth-child(1) {
    border-radius: 6px 0 0 6px;
    margin-left: 0px;
}
.question-options li:nth-last-child(1) {
    border-radius: 0 6px 6px 0;
}
.question-options li {
    font-weight: bold;
}
.question-options li {
    list-style: none;
    height: 46px;
    text-align: center;
    line-height: 46px;
    font-size: 16px;
    color: #1ca04d;
    cursor: pointer;
    border: 1px solid #1ca04d;
    background: #FFFFFF;
    margin-left: -1px;
}
.question-options li.active {
    background: #1ca04d;
    border-right: 1px solid #1ca04d;
    margin-left: -1px;
    color: #FFF;
}
.row li {
  float: left;
}
.col-xs-6 {
    width: 50%;
}
.option {
    width: 20%;
    float: left;
    position: relative;
    min-height: 1px;
}
.question-container .question h3 {
    margin: 0;
    color: #BDBDAC;
    font-size: 18px;
    margin-bottom: 20px;
}

/* .question-container .question.disabled {
    padding: 0px 20px 0px 20px;
}
.question-container .question.disabled h3 {
    text-overflow: ellipsis;
    font-size: 16px;
    height: 60px;
    white-space: nowrap;
    overflow: hidden;
    line-height: 60px;
    margin: 0;
}
.question-container .question.disabled .question-options {
    display: none;
} */

.question-container .question.disabled {
    padding: 0px 20px 0px 20px;
}

.question-container .question.disabled {
    display: none;
}

.option-container {
    max-width: 720px;
    border-color: #EEE;
    border-style: solid;
    border-width: 0 1px;
    padding: 0 0 50px 0;
}
.hidden-button {
    display: none;
}
.option-container .submit {
    display: block;
    margin: 50px auto 0;
    background-color: #cacaca;
    width: 220px;
    height: 60px;
    border-radius: 9px;
}
.option-container .submit img {
    width: 220px;
    height: 60px;
    background: url('../assets/submit.png') no-repeat;
    background-size: 220px 60px;
    background-color: #fff;
}
.option-statement {
    max-width: 720px;
    border-color: #EEE;
    border-style: solid;
    border-width: 0 1px;
    padding: 0 30px 50px 30px;
    color: #BDBDAC;
    line-height: 150%;
}
.option-statement h4 {
    text-align: center;
    color: #B0B0B0;
    font-size: 17px;
    display: block;
    margin-bottom: 44px;  
}
.option-statement p {
  font-size: 14px;
  
}
p b {
    color: #B0B0B0;
    font-weight: 550;
}

#hidden-div {
  display: none;
}

#qrcode {
  margin: 0 auto;
  margin-top: 120px;
  width: 120px;
  height: 120px;
  display: block;
  background-color: #fff;
}  
.qrcode-explain {
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 36px;
  text-align: center;
  font-size: 12px;
}
.qrcode-explain p {
  line-height: 25px;
}
.scroller {
  width: 100%;
  height: 250px;
}
/* .absoluate {
  position: fixed;
  top: 0
} */
/* .space {
  height: 120px;
  width: 100%;
} */
.question-ul {
  overflow-y: auto;
  height: 250px;
}
</style>
