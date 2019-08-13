<template>
  <div class="result">
    <header class="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
      <div class="container">
          <h1>我的体质测试结果</h1>
      </div>
    </header>

    <div class="container result-container">
      <!--结果类型-->
      <div class="row typeinfo">
        <div class="col-xs-12 typeinfo-text"  >
          <div class="test-intro">
            <h4>我的体质是</h4>
            <h1>{{name}}</h1>
            <h3>
              {{inclination}}<br/>
            </h3>
          </div>
          <p class="typeinfo-desc">
          根据你的体质情况，推荐你从{{name}}开始入手，配合生活方式的改变从而改善体质偏颇。<br/>
          {{nature}}
          </p>
        </div>
      </div>
      <div class="row desc-list">
        <div class="item active" @click="drop_down(0)" id="item0">
          <h3><img src="https://img.huofar.com/images/sym-icon.png?type=1" width="20" height="20" style="margin-right: 16px;">{{itemList[0].title}}<em></em></h3>
          <div class="content">
            <ul>
              <li v-for="item in meaningList"><i class="tab-lsit-conent-title-style"></i>{{item}}</li>
            </ul>
          </div>
        </div>

        <div class="item" @click="drop_down(1)" id="item1">
          <h3><img src="https://img.huofar.com/images/sym-icon.png?type=1" width="20" height="20" style="margin-right: 16px;">{{itemList[1].title}}<em></em></h3>
          <div class="content">
            <ul>
              <li  v-for="item in orginList"><i class="tab-lsit-conent-title-style"></i>{{item}}</li>
            </ul>
          </div>
        </div>

        <div class="item" @click="drop_down(2)" id="item2">
          <h3><img src="https://img.huofar.com/images/sym-icon.png?type=1" width="20" height="20" style="margin-right: 16px;">{{itemList[2].title}}<em></em></h3>
          <div class="content">
            <ul>
              <li v-for="item in probablyList"><i class="tab-lsit-conent-title-style"></i>{{item}}</li>
            </ul>
          </div>
        </div>

        <div class="item" @click="drop_down(3)" id="item3">
          <h3><img src="https://img.huofar.com/images/sym-icon.png?type=1" width="20" height="20" style="margin-right: 16px;">{{itemList[3].title}}<em></em></h3>
            <div class="content newcontent">
              <ul class="tab-list" id="myTab">
                <li v-for="(item,i) in problemList" :class="'li' + (i == 0 ? ' active':'')" :id="'problem' + i" @click.stop="goto(i)">
                  <a :value="'#bubble_' + i" data-toggle="tab">{{item.problemName}}</a>
                </li>
              </ul>

              <div id="myTabContent" class="tab-content">
                <div v-for="(item,i) in problemList" :class="'tab-pane fade in tab-list-conent' + (i == 0 ? ' active':'')" :id="'bubble_' + i">
                  <h2 class="tab-list-conent-title">
                    <i class="tab-lsit-conent-title-style"></i>
                            调理原则：{{item.principle}}                
                  </h2>
                  <p class="tab-list-conent-txt" style="border-bottom:none;">{{item.method}}</p>
                </div>
              </div>
            </div>
        </div>
              
        <div class="item" @click="drop_down(4)" id="item4">
          <h3><img src="https://img.huofar.com/images/sym-icon.png?type=1" width="20" height="20" style="margin-right: 16px;">{{itemList[4].title}}<em></em></h3>
          <div class="content">
            <ul>
              <div v-for="item in improvementList">
                <li class="bold-li">{{item.suggestion}}</li>
                <li v-for="listItem in item.method"><i class="tab-lsit-conent-title-style"></i>{{listItem}}</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="floor">
        <img src="../assets/wechat.jpg" alt="">
        <h3>想知道你的体质是什么吗？</h3>
        <br>
        <p>长按二维码关注后计科获得</p>
        <p>专属一对一调理服务</p>
      </div>
    </div>     
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleItem: [
        true,false,false,false,false
      ],
      itemList: [
        {
          title:'',
          contentList: []
        },
        {
          title:'',
          contentList: []
        },
        {
          title:'',
          contentList: []
        },
        {
          title:'',
          contentList: []
        },
        {
          title:'',
          contentList: []
        },
      ],
      name:'',
      nature: '',
      inclination: '',
      probablyList: [],
      meaningList: [],
      orginList: [],
      problem: {
        'problemName':'',
        'principle':'',
        'method': ''
      },
      improvement: {
        'suggestion':'',
        'method': []
      },
      problemList: [],
      improvementList: [],
    }
  },
  methods: {
    drop_down(index) {
      // debugger
      var flag = this.titleItem[index]
      var selected = document.getElementById('item' + index)
      if(flag) {
        selected.setAttribute('class','item')
        this.titleItem[index] = false
      }else {
        selected.setAttribute('class','item active')
        this.titleItem[index] = true
      }
    },
    goto(index) {
      for(var i = 0;i < this.problemList.length;i++) {
        if(index == i) {
          var selected = document.getElementById('problem' + i)
          selected.setAttribute('class','li active')
          var selectedId = $('#problem' + i).find('a').attr('value')
          $(selectedId).css('display','block')
        }else{
          var notSelected = document.getElementById('problem' + i)
          notSelected.setAttribute('class','li')
          var notSelectedId = $('#problem' + i).find('a').attr('value')
          $(notSelectedId).css('display','none')
        }
      }
    },
    getResult() {
        var obj = JSON.parse(window.localStorage.getItem('resultData'))
        this.name = obj.physiqueName
        this.nature = obj.nature
        if(obj.inclination != "") {
          this.inclination = '倾向于' + obj.inclination  + "。"        
        }

        var name = this.name.replace('质','')
        if(this.name != '平和质') {
          this.itemList[0].title = name + ',究竟是什么意思？'
          this.itemList[1].title = '我为什么会' + name
          this.itemList[2].title = '这些是' + this.name + '最需要警惕的'
        }else {
          this.itemList[0].title = this.name + ',是什么意思？'
          this.itemList[1].title = this.name + '怎么来？'
          this.itemList[2].title = '也许你不是真' + this.name
        }
        this.itemList[3].title = this.name + '常见问题的调理原则'
        this.itemList[4].title = '想改善，这么办！'

        // console.log(obj)
        this.meaningList = obj.meaning.split('\r\n')
        this.orginList = obj.orgin.split('\r\n')
        console.log(this.orginList)
        this.probablyList = obj.probably.split('\r\n')
        this.problemList = obj.problemVoList
        // var problem = new Object();
        // for(var i = 0;i < obj.problemVoList.length;i++) {
        //   problem.problemName = obj.problemVoList[i].problemName
        //   problem.principle = obj.problemVoList[i].principle
        //   problem.method = obj.problemVoList[i].method
        //   this.probablyList.push(problem)
        // }
        
        // console.log(this.problemList)
        // this.improvementList = obj.improvementVoList
        var improvementList = obj.improvementVoList
        for(var i = 0;i < improvementList.length;i++) {
          improvementList[i].method =  improvementList[i].method.split('\r\n')          
        }
        this.improvementList = improvementList
        console.log(this.improvementList)
    }
  },
  mounted() {
    this.getResult()
  },
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.navbar {
    height: 60px;
    border-bottom: 1px solid #F4F4F4;
    margin-bottom: 0;
    position: relative;
    min-height: 50px;
    background-color: #1ca04d;
    /* border: 1px solid transparent; */
}
.navbar-static-top {
    z-index: 1000;
    border-width: 0 0 1px;
}
.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.navbar h1 {
    font-size: 18px;
    color: #fff;
    text-align: center;
    line-height: 60px;
    letter-spacing: 2px;
    font-weight: 500;
    margin: 0;
    padding: 0;
}
/* body */
.result-container {
    /* border-left: 0 !important; */
    /* border-right: 0 !important; */
    padding: 0 0 50px 0;
    max-width: 720px;
    border-color: #EEE;
    border-style: solid;
    border-width: 0 1px 1px 1px;
    /* padding: 0 0 200px 0; */
}
.typeinfo {
    position: relative;
}
.typeinfo-text {
    border-bottom: 10px solid #f7f7f7;
    margin: 0;
    padding: 0 !important;
}
.col-xs-12 {
    width: 100%;
    /* float: left; */
    position: relative;
    min-height: 1px;
}
.test-intro {
    margin: 25px 15px 10px 15px;
}
.typeinfo-text h4 {
    margin: 0 0 10px 0;
    padding: 0;
    font-size: 18px;
    color: #CCCCBF;
    text-align: center
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}
.test-intro h1 {
    font-size: 40px;
    text-align: center
}
.test-intro h3 {
    margin: 10px 0 0 0;
    font-size: 18px;
    line-height: 150%;
    text-align: center
}
.typeinfo-text .typeinfo-desc {
    font-size: 14px;
    color: #666666;
    line-height: 150%;
    margin: 15px 15px 15px 15px !important;
}

/* 展开内容 */
.desc-list h3:hover {
    background: #F8F8F8;
}
.desc-list h3 {
    padding-left: 15px;
    font-size: 14px;
    color: #333;
    height: 50px;
    line-height: 50px;
    margin: 0;
    padding: 0 0 0 5.4%;
    font-weight: bold;
    border-bottom: 1px solid #EEE;
    cursor: pointer;
}
img {
    vertical-align: middle;
}
.desc-list img {
  margin-right: 16px;
}
.desc-list .content {
    display: none;
    border-bottom: 1px solid #EEE;
    line-height: 150%;
    color: #666666;
    margin: 0;
    font-size: 14px;
    padding: 10px 15px;
}
.desc-list .item.active .content {
    display: block;
}
.desc-list .item.active h3 em {
    background: url(https://img.huofar.com/webapp/tizhi/images/shang1@3x.png) no-repeat;
    background-size: 100%;
}
.desc-list h3 em {
    background: url(https://img.huofar.com/webapp/tizhi/images/xia1@3x.png) no-repeat;
    background-size: 100%;
    margin-top: 20px;
}
.desc-list h3 em {
    display: inline;
    float: right;
    margin: 28px 5.5% 0 0;
    width: 18px;
    height: 14px;
}
.desc-list ul li {
    list-style: none;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 150%;
}
.tab-lsit-conent-title-style {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #299939;
    margin-right: 5px;
    margin-bottom: 2px;
}
.tab-list {
    overflow: hidden;
}
.tab-list, .tab-list > li {
    list-style: none !important;
}
.content .tab-list > li {
    margin-left: 0;
    float: left;
    border: 1px solid #299939;
    border-radius: 25px;
    margin-right: 10px;
    margin-bottom: 10px;
}
.tab-list > li > a {
    display: inline-block;
    box-sizing: border-box;
    padding: 5px 20px;
    font-size: 16px;
    color: #299939;
    text-decoration: none;
}
.tab-list > .active {
    background: #299939;
}
.tab-list > .active > a {
    color: #fff;
    text-decoration: none;
}
.tab-content>.tab-pane {
    display: none;
}
.tab-list-conent {
    border: 1px solid #e5e5e5;
    padding: 15px;
    border-radius: 10px;
}
.fade {
    opacity: 0;
    transition: opacity .15s linear;
}
.tab-list-conent-title {
    font-size: 16px;
    color: #333;
    margin-top: 0;
    margin-bottom: 15px;
}
.tab-list-conent-txt {
    font-size: 14px;
    color: #555;
    line-height: 28px;
    padding-bottom: 10px;
    /* border-bottom: 1px solid #e5e5e5; */
}
p {
    margin: 0 0 10px;
}
.tab-content>.active {
    display: block;
}
.fade.in {
    opacity: 1;
}
.desc-list ul li.bold-li:first-child {
    margin-top: 0px !important;
}
.desc-list ul li.bold-li {
    margin-left: 0px !important;
}
.desc-list ul li.bold-li {
    list-style: none !important;
    margin-left: -5px !important;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 10px !important;
    color: #000 !important;
}

.floor {
  margin: 0 auto;
  margin-top: 64px;
  text-align: center;
  color: #727272;
  /* border-width: 0 1px 0 1px; */
}
.floor img {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 30px; 
  display: block;
}
.floor h3 {
  color: #1ca04d;
  font-weight: 600;
}
.floor p {
  font-size: 18px;
}
</style>
