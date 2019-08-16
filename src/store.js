import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        questionId: "1",
        title: "请选择您的性别：",
        options: [{
          label: "男",
          value: 1
        }, {
          label: "女",
          value: 2
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "2",
        title: "你喜欢安静懒得说话吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "3",
        title: "你面色晦暗或容易出现褐斑吗？",
        options: [{
          label: "根本不",
          value: 1
        }, {
          label: "有一点",
          value: 2
        }, {
          label: "有些",
          value: 3
        }, {
          label: "相当",
          value: 4
        }, {
          label: "非常",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "4",
        title: "你容易有黑眼圈吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "5",
        title: "你口唇颜色偏暗吗？",
        options: [{
          label: "根本不",
          value: 1
        }, {
          label: "有一点",
          value: 2
        }, {
          label: "有些",
          value: 3
        }, {
          label: "相当",
          value: 4
        }, {
          label: "非常",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "6",
        title: "你口唇的颜色比一般人红吗？",
        options: [{
          label: "根本不",
          value: 1
        }, {
          label: "有一点",
          value: 2
        }, {
          label: "有些",
          value: 3
        }, {
          label: "相当",
          value: 4
        }, {
          label: "非常",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "7",
        title: "你皮肤或口唇干吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "8",
        title: "你面部两颧潮红或偏红吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "9",
        title: "你两颧部有细微红丝吗？",
        options: [{
          label: "根本不",
          value: 1
        }, {
          label: "有一点",
          value: 2
        }, {
          label: "有些",
          value: 3
        }, {
          label: "相当",
          value: 4
        }, {
          label: "非常",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "10",
        title: "你腹部肥满松软吗？",
        options: [{
          label: "根本不",
          value: 1
        }, {
          label: "有一点",
          value: 2
        }, {
          label: "有些",
          value: 3
        }, {
          label: "相当",
          value: 4
        }, {
          label: "非常",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "11",
        title: "你有额部油脂分泌多的现象吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "12",
        title: "你上眼睑比别人肿（上眼睑有轻微隆起的现象）吗？",
        options: [{
          label: "根本不",
          value: 1
        }, {
          label: "有一点",
          value: 2
        }, {
          label: "有些",
          value: 3
        }, {
          label: "相当",
          value: 4
        }, {
          label: "非常",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "13",
        title: "你面部或鼻部有油腻感或者油亮发光吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "14",
        title: "你容易生痤疮或疮疖吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "15",
        title: "你的皮肤在不知不觉中会出现青紫瘀斑（皮下出血）吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "16",
        title: "你的皮肤一抓就红，并出现抓痕吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "17",
        title: "你精力充沛吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "18",
        title: "你容易疲乏吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "19",
        title: "你容易精神紧张、焦虑不安吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "20",
        title: "你多愁善感、感情脆弱吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "21",
        title: "你容易感到害怕或受到惊吓吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "22",
        title: "你说话声音低弱无力吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "23",
        title: "你感到闷闷不乐，情绪低沉吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "24",
        title: "你感到口苦或嘴里有异味吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "25",
        title: "你感到眼睛干涩吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "26",
        title: "你感到口舌干燥总想喝水吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "27",
        title: "你感到胸闷或腹部胀满吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "28",
        title: "你感到身体沉重不轻松或不爽快吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "29",
        title: "你感到手脚心发热吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "30",
        title: "你感觉身体脸上发热吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "31",
        title: "你无缘无故叹气吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "32",
        title: "你容易忘事（健忘）吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "33",
        title: "你比别人容易患感冒吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "34",
        title: "你嘴里有黏黏的感觉吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "35",
        title: "你平时痰多特别是咽喉部总感觉有痰堵着吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "36",
        title: "你舌苔厚腻或有舌苔厚厚的感觉吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "37",
        title: "你大便黏滞不爽（常常粘在马桶上冲不干净），有解不尽的感觉吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "38",
        title: "你胃脘部、背部或腰膝部怕冷吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "39",
        title: "你身上有哪里疼痛吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "40",
        title:
          "你胁肋部（胸腔两侧，腋部以下至最后一根肋骨之间）或乳房胀痛吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "41",
        title: "你咽喉部有异物感且吐之不出，咽之不下吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "42",
        title: "你感到怕冷衣服比别人穿的多吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "43",
        title: "你比一般人耐受不了寒冷（冬天的寒冷，夏天的空调，电扇等）吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "44",
        title: "你能适应外界自然和社会环境的变化吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "45",
        title: "你容易气短（呼吸急促，接不上气）吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "46",
        title: "你容易心慌吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "47",
        title: "你容易失眠吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "48",
        title: "你容易头晕或站起时眩晕吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "49",
        title: "你活动量稍大就容易出虚汗吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "50",
        title: "你手脚发凉吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "51",
        title: "你吃（喝）凉的东西会感到不舒服或者怕吃（喝）凉的东西吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "52",
        title: "你受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "53",
        title: "你没有感冒时也会打喷嚏吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "54",
        title: "你没有感冒时也会鼻塞、流鼻涕吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "55",
        title: "你有因季节变化、温度变化或异味等原因而咳嗽的现象吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "56",
        title: "你容易过敏(对药物,食物,气味,花粉或在季节交替,气候变化时)吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "57",
        title: "你容易便秘或大便干燥吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "58",
        title: "你小便时尿道有发热感，尿色浓（深）吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "59",
        title: "你的皮肤容易起荨麻疹（风团、风疹块、风疙瘩）吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "60",
        title: "你的皮肤因过敏出现过紫癜（紫红色瘀点、瘀斑）吗？",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "61",
        title: "你的阴囊部位潮湿吗？（男性）/您白带颜色发黄吗？（女性）",
        options: [{
          label: "没有",
          value: 1
        }, {
          label: "很少",
          value: 2
        }, {
          label: "有时",
          value: 3
        }, {
          label: "经常",
          value: 4
        }, {
          label: "总是",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      },
      {
        questionId: "62",
        title: "请选择您的年龄",
        options: [{
          label: "28以下",
          value: 1
        }, {
          label: "28~35",
          value: 2
        }, {
          label: "35~45",
          value: 3
        }, {
          label: "45~60",
          value: 4
        }, {
          label: "60以上",
          value: 5
        }],
        creatorid: "0",
        version: "0"
      }
    ],
  },
  mutations: {

  },
  actions: {

  }
})
