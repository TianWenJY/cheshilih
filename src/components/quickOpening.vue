<template>
  <div class="hello">
    <div>
      <i></i>
      <span></span>
    </div>
    <div></div>   
    <div class="goods">
       <div class="menu-wrapper" ref="menuWrapper">
         <ul>
           <li v-for="item in dataes" 
               class="menu-item" 
               ref="menuList">
               {{item.name}}
           </li>
         </ul>
       </div>
       <div class="foods-wrapper" ref="foodsWrapper">
         <ul>
          <li  class="food-list" ref="foodList">
            <ul>
              <li  class="food-item"></li>
              <div class="content">
                <h2 class="name"></h2>
                <p class="desc"></p>
                <div class=""></div>
                <div class="price">
                  <span class="now">￥</span><span class="old"
                     >￥
                    </span>
                </div>
              </div>
            </ul>
          </li>
         </ul>
       </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll' 
export default {
  name: 'HelloWorld',
  data () {
    return {
      dataes:[
        {
           name:'服务项目',
           type:1,
           list:[
             {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
             },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            }
           ]
        },       
         {
           name:'库存项目',
           type:2,
           list:[
             {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            }
           ]
        },       
         {
           name:'附加项目',
           type:1,
           list:[
             {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            }
           ]
        },
         {
           name:'卡内项目',
           type:1,
           list:[
             {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            },
            {
              name:'精品洗车',
              order: 80172134,
              desc:'车身水蜡冲洗、轮毂表...',
              price:58.00
            }
           ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  ul,li {
    list-style:none;
    margin:0;
    padding:0;
  }
   .goods {
     display: flex;
     position:absolute;
     top: 160px;
     bottom: 46px;
     width: 100%;
     overflow: hidden;
      .menu-wrapper {
        flex:  0 84px;
        width: 84px;
        left: 0px;
        background-color:#FAFAFA;
        .menu-item {
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          color: #333;
          text-align: center;
        }
      }
      .food-item {
        display: flex;
        margin: 18px;
        padding: 15px 0 13px 16px;
        .content {
          flex: 1;
          h2 {
            height: 24px;
            line-height: 24px;
            color: #333;
            font-size: 17px;
            text-align: left;
            font-family: PingFangSC-Regular;
          }
          .biao {
            color: #999;
            font-size: 14px;
          }
          .desc {
            color: #999;
            font-size: 14px;
          }
        }
      }
   }
     
</style>