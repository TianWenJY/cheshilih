<template>
  <div class="hello">
    <div class="title">
      <i class="goBack"></i>
      <span>1234567890123456</span>
    </div>
    <div class="search">
      <div class="myInput">
        <input type="text" class="searchInput">
        <span class="addCustomer">选择客户<i class="add"></i></span>
      </div>
      <i class="searchIcon"></i>
      <i class="scan"></i>
    </div>
    <div><input type="text" class="insideInput"></div>
    <div class="detail">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in dataes" @click="selectMenu(index,$event)" class="menu-item" ref="menuList" :class="{'current':currentIndex == index}">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="itemsWrapper">
        <ul>
          <li class="food-list" ref="itemList" v-for="item in dataes">
            <ul style="">
              <li class="food-item" v-for="data in item.list" @click="selectFood(data,$event)">
                <div class="content">
                  <h2 class="name">{{data.name}}</h2>
                  <div class="text">
                    <p class="order">{{data.order}}</p>
                    <div class="desc">{{data.desc}}</div>
                  </div>
                  <div class="price">
                    <span class="now">￥{{data.price}}
                    </span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <img src="../assets/select.png" alt="">
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="bootom">
      <span class="he">合计:￥58.00</span>
      <span class="save">保存</span>
      <span class="open">开单</span>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "quickOpening",
  data() {
    return {
      listHeight: [],
      thisIndex: 0,
      scrollY: 0,
      dataes: [
        {
          name: "服务项目",
          type: 1,
          list: [
            {
              name: "服务洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            }
          ]
        },
        {
          name: "库存项目",
          type: 2,
          list: [
            {
              name: "库存洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            }
          ]
        },
        {
          name: "附加项目",
          type: 1,
          list: [
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            }
          ]
        },
        {
          name: "卡内项目",
          type: 1,
          list: [
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            },
            {
              name: "精品洗车",
              order: 80172134,
              desc: "车身水蜡冲洗、轮毂表...",
              price: 58.0
            }
          ]
        }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this._initScroll();
      this._calculateHeight();
    });
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          this._followScroll(i);
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.itemsScroll = new BScroll(this.$refs.itemsWrapper, {
        click: true,
        probeType: 3
      });
      this.itemsScroll.on("scroll", pos => {
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }
      });
    },
    _calculateHeight() {
      let itemList = this.$refs.itemList;
      let height = 0;
      this.listHeight.push(height);
      for (var i = 0; i < itemList.length; i++) {
        let item = itemList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    _followScroll(index) {
      let menuList = this.$refs.menuList;
      let el = menuList[index];
      this.menuScroll.scrollToElement(el, 300, 0, -100);
    },
    selectMenu(index, event) {
      // if (!event._construected) {
      //   return;
      // }
      let itemList = this.$refs.itemList;
      let el = itemList[index];
      this.itemsScroll.scrollToElement(el, 300);
    },
    selectFood(data, event) {
      // if (!event._construected) {
      //   return;
      // }
      this.selectedFood = data;
      this.$refs.data.show();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title {
  height: 25/3.75vw;
  line-height: 25/3.75vw;
  color: #333;
  font-size: 18/3.75vw;
  text-align: center;
  position: relative;
  .goBack {
    width: 17/3.75vw;
    height: 17/3.75vw;
    display: inline-block;
    background: url("../assets/goBack.png") no-repeat 0 center;
    background-size: 100%;
    position: absolute;
    left: 17/3.75vw;
    top: 50%;
    transform: translate(0, -50%);
  }
}
.search {
  position: relative;
  padding: 9/3.75vw 0 9/3.75vw 16/3.75vw;
  box-sizing: border-box;
  font-size: 0;
  .myInput {
   position: relative;
   display:inline-block;

  .searchInput {
    left: 17/3.75vw;
    width: 259/3.75vw;
    height: 30/3.75vw;
    border-radius: 1px;
    border: 1px solid #eee;
    box-sizing: border-box;
  }
  .addCustomer {
    position: absolute;
    left: 13/3.75vw;
    color: #00a2ff;
    font-size: 14/7.5vw;
    top: 50%;
    transform: translate(0, -50%);
    .add {
      width: 14/3.75vw;
      height: 14/3.75vw;
      display: inline-block;
      background: url("../assets/add.png") no-repeat 0 center;
      background-size: 100%;
      margin-left: 5/3.75vw;
      vertical-align: middle;
    }
  }
  }
  .searchIcon {
    width: 22/3.75vw;
    height: 22/3.75vw;
    display: inline-block;
    background: url("../assets/seach.png") no-repeat 0 center;
    background-size: 100%;
    margin: 0 20/3.75vw;
    // margin-top:
  }
  .scan {
    width: 22/3.75vw;
    height: 22/3.75vw;
    display: inline-block;
    background: url("../assets/scan.png") no-repeat 0 center;
    background-size: 100%;
  }
}
.insideInput {
  width: 100%;
  height: 30/3.75vw;
  border-radius: 1/3.75vw;
  background-color: #999;
}
.detail {
  display: flex;
  position: absolute;
  top: 160px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 84/3.75vw;
    width: 84/3.75vw;
    left: 0px;
    background-color: #fafafa;
    .menu-item {
      height: 50/3.75vw;
      line-height: 50/3.75vw;
      font-size: 14/3.75vw;
      color: #333;
      text-align: center;
      &.current {
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        border-left: 4/3.75vw solid #00a2ff;
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    overflow: outo;
    .food-list {
      display: flex;
      padding: 0 0 13/3.75vw 0;
      text-align: left;
      font-family: PingFangSC-Regular;
      ul {
        flex: 1;
        .food-item {
          flex-grow: 1;
          margin-top: 15/3.75vw;
          padding-left: 15/3.75vw;
          border-bottom: 1px solid #eee;
          position: relative;
          .content {
            flex: 1;
            .name {
              height: 24/3.75vw;
              line-height: 24/3.75vw;
              color: #333;
              font-size: 17/3.75vw;
            }
            .text {
              .order,
              .desc {
                color: #999;
                font-size: 14/3.75vw;
                text-align: left;
              }
            }
            .price {
              font-size: 14/3.75vw;
              color: #e8541e;
              height: 20/3.75vw;
              line-height: 20/3.75vw;
            }
            .cartcontrol-wrapper {
              position: absolute;
              top: 50%;
              transform: translate(-50%, -50%);
              right: 16/3.75vw;
              img {
                width: 21/3.75vw;
                height: 21/3.75vw;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
}
.bootom {
  height: 48/3.75vw;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  .he {
    flex: 1;
  }
  .save {
    // width: 112/3.75vw;
    background: #50e3c2;
    font-size: 17/3.75vw;
    text-align: center;
    flex: 0 0 112/3.75vw;
  }
  .open {
    // width: 112/3.75vw;
    background: linear-gradient(to right, #317bff, #53a0fd, #00a2ff);
    flex: 0 0 112/3.75vw;
  }
}
</style>