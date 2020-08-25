import mock from 'mockjs'

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: 'SpringBoot',
            value: mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Vue',
            value: mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'ES6',
            value: mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'React',
            value: mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Jave',
            value: mock.Random.float(1000, 10000, 0, 2)
          },
        ]
      }
    }
  }
}