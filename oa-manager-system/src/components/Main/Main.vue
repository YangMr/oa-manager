<template>
  <div class="main">

      <app-item v-for="(item,index) in tree" :item="item" :key="index"></app-item>

  </div>
</template>

<script>
import AppItem from "../Item"
export default {
  name: "Main",
  data(){
    return {
      tree : [{
        name: 'IT互联网',
        child: [{
          name: '编辑语言',
          child: [{
            name: 'java'
          }, {
            name: 'c#/.net'
          }, {
            name: 'python'
          }, {
            name: '前端开发',
            child: [{
              name: 'jq',
              child : [
                {
                  name : "ajax"
                }
              ]
            }, {
              name: 'vue'
            }, {
              name: 'react'
            }]
          }]
        }, {
          name: '移动开发',
          child: [{
            name: 'android开发'
          }, {
            name: 'IOS开发'
          }]
        }, {
          name: '游戏开发',
          child: [{
            name: 'phaser游戏开发'
          }, {
            name: 'webGL游戏开发',
            child: [{
              name: '3D游戏'
            }, {
              name: '2D游戏'
            }]
          }]
        }]
      }, {
        name: '设计创作',
        child: [{
          name: '平面设计',
          child: [{
            name: '电商美工'
          }, {
            name: '综合平面设计'
          }, {
            name: '摄 影后期'
          }]
        }, {
          name: 'UI设计',
          child: [{
            name: '交互设计'
          }, {
            name: 'webUI设计'
          }, {
            name: '游戏UI 设计'
          }]
        }, {
          name: '软件设计'
        }]
      }, {
        name: '升学考研',
        child: [{
          name: '考研'
        }, {
          name: '大学'
        }, {
          name: '高中'
        }, {
          name: '初中'
        }]
      }, {
        name: '职企考证',
        child: [{
          name: '公务员',
          child: [{
            name: '教师考试'
          }, {
            name: '建筑工程'
          }]
        }]
      }]
    }
  },
  components : {
    AppItem
  }
}
</script>

<style scoped>

</style>
