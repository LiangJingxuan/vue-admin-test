<template>
<el-row class="home" :gutter="20">
  <el-col :span="8">
    <el-card shadow="hover" style="height: 290px">
      <div class="user">
        <img :src="user.userImg" alt />
        <div class="userinfo">
          <p class="name">Nick</p>
          <p class="access">管理员</p>
        </div>
      </div>
      <div class="login-info">
        <p>
          上次登录时间：
          <span>2019-10-20</span>
        </p>
        <p>
          上次登录地点：
          <span>北京</span>
        </p>
      </div>
    </el-card>
    <el-card shadow="hover" style="height: 440px; margin-top: 20px">
      <el-table :data="tableData">
        <el-table-column show-overflow-tooltip v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
      </el-table>
    </el-card>
  </el-col>
  <el-col :span="16">
    <div class="num">
      <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{display: 'flex', padding: 0}">
        <i class="icon" :class="`el-icon-${item.icon}`" :style="{backgroundColor: item.color}"></i>
        <div class="detail">
          <p class="num">￥ {{item.value}}</p>
          <p class="txt">{{item.name}}</p>
        </div>
      </el-card>
    </div>
    <el-card shadow="hover">
      <echart style="height: 250px" :chartData="echartData.order"></echart>
    </el-card>
    <div class="graph">
      <el-card shadow="hover">
        <echart style="height: 240px" :chartData="echartData.user"></echart>
      </el-card>
      <el-card shadow="hover">
        <echart :chartData="echartData.video" :isAxisChart="false" style="height:240px;"></echart>
      </el-card>
    </div>
  </el-col>
</el-row>
</template>

<script>
import Echart from 'components/common/echart/Echart'

import userImg from "assets/images/user.jpg";

import {
  getHomedata
} from "network/home";

export default {
  name: "Home",
  components: {
    Echart,
  },
  data() {
    return {
      user: {
        userImg,
      },
      countData: [{
          name: "今日支付订单",
          value: 198,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 18,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 198,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 18,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      // 图表数据
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }
    };
  },
  methods: {
    getTableData() {
      getHomedata().then(({
        data
      }) => {
        // 表格数据
        this.tableData = data.tableData;
        // 订单折线图数据
        const order = data.orderData;
        this.echartData.order.xData = order.date;
        // 第一步 取出series中的name部分：键名
        let keyArray = Object.keys(order.data[0]);
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key === 'wechat' ? '小程序' : key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        // 用户柱状图
        this.echartData.user.xData = data.userData.map(
          (item) => item.date
        );
        this.echartData.user.series.push({
          name: "新增用户",
          data: data.userData.map((item) => item.new),
          type: "bar",
        });
        this.echartData.user.series.push({
          name: "活跃用户",
          data: data.userData.map((item) => item.active),
          type: "bar",
          barGap: 0,
        });
        // 视频饼图
        this.echartData.video.series.push({
          data: data.videoData,
          type: "pie",
        });
      });
    },
  },
  created() {
    this.getTableData();
  },
};
</script>

<style lang="scss" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px #ccc solid;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }

    .userinfo {
      .name {
        font-size: 32px;
        margin-bottom: 10px;
      }

      .access {
        color: #999;
      }
    }
  }

  .login-info {
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999;

      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }

  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }

    .icon {
      font-size: 30px;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }

    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }

      .txt {
        font-size: 14px;
        text-align: center;
        color: #999;
      }
    }
  }

  .graph {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-card {
      width: 48%;
    }
  }
}
</style>
