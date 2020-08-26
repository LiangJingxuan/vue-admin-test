import mock from 'mockjs'

// export default {
//   getHomeData: () => {
//     return {
//       code: 20000,
//       data: {
//         videoData: [
//           {
//             name: 'SpringBoot',
//             value: mock.Random.float(1000, 10000, 0, 2)
//           },
//           {
//             name: 'Vue',
//             value: mock.Random.float(1000, 10000, 0, 2)
//           },
//           {
//             name: 'ES6',
//             value: mock.Random.float(1000, 10000, 0, 2)
//           },
//           {
//             name: 'React',
//             value: mock.Random.float(1000, 10000, 0, 2)
//           },
//           {
//             name: 'Jave',
//             value: mock.Random.float(1000, 10000, 0, 2)
//           },
//         ]
//       }
//     }
//   }
// }
// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        mock.mock({
          vue: mock.Random.float(100, 8000, 0, 2),
          wechat: mock.Random.float(100, 8000, 0, 2),
          ES6: mock.Random.float(100, 8000, 0, 2),
          Redis: mock.Random.float(100, 8000, 0, 2),
          React: mock.Random.float(100, 8000, 0, 2),
          springboot: mock.Random.float(100, 8000, 0, 2)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: 'springboot',
            value: mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'vue',
            value: mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '小程序',
            value: mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'ES6',
            value: mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Redis',
            value: mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'React',
            value: mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: mock.Random.integer(1, 100),
            active: mock.Random.integer(100, 1000)
          },
          {
            date: '周二',
            new: mock.Random.integer(1, 100),
            active: mock.Random.integer(100, 1000)
          },
          {
            date: '周三',
            new: mock.Random.integer(1, 100),
            active: mock.Random.integer(100, 1000)
          },
          {
            date: '周四',
            new: mock.Random.integer(1, 100),
            active: mock.Random.integer(100, 1000)
          },
          {
            date: '周五',
            new: mock.Random.integer(1, 100),
            active: mock.Random.integer(100, 1000)
          },
          {
            date: '周六',
            new: mock.Random.integer(1, 100),
            active: mock.Random.integer(100, 1000)
          },
          {
            date: '周日',
            new: mock.Random.integer(1, 100),
            active: mock.Random.integer(100, 1000)
          }
        ],
        // 折线图
        orderData: {
          date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
          data: List
        },
        tableData: [
          {
            name: 'ES6',
            todayBuy: mock.Random.float(100, 1000, 0, 2),
            monthBuy: mock.Random.float(3000, 5000, 0, 2),
            totalBuy: mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: '小程序',
            todayBuy: mock.Random.float(100, 1000, 0, 2),
            monthBuy: mock.Random.float(3000, 5000, 0, 2),
            totalBuy: mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: 'Vue',
            todayBuy: mock.Random.float(100, 1000, 0, 2),
            monthBuy: mock.Random.float(3000, 5000, 0, 2),
            totalBuy: mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: 'springboot',
            todayBuy: mock.Random.float(100, 1000, 0, 2),
            monthBuy: mock.Random.float(3000, 5000, 0, 2),
            totalBuy: mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: 'React',
            todayBuy: mock.Random.float(100, 1000, 0, 2),
            monthBuy: mock.Random.float(3000, 5000, 0, 2),
            totalBuy: mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: 'Redis',
            todayBuy: mock.Random.float(100, 1000, 0, 2),
            monthBuy: mock.Random.float(3000, 5000, 0, 2),
            totalBuy: mock.Random.float(40000, 1000000, 0, 2)
          }
        ]
      }
    }
  }
}
