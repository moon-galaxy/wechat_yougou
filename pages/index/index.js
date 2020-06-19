// 引入封装的request
import { request } from '../../request/index.js'

//Page Object
Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航数组
    catesList: [],
    // 楼层数组
    floorList: []
  },
  //options(Object)
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   method: 'GET',
    //   success: (res) => {
    //     const { message: swiperList } = res.data
    //     this.setData({ swiperList })
    //   }
    // })

    this.getSwiperList()
    this.getCateList()
    this.getFloorList()
  },
  // 获取轮播图数据
  getSwiperList() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    }).then((res) => {
      const { message: swiperList } = res.data
      this.setData({ swiperList })
    })
  },
  // 获取分类导航数据
  getCateList() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'
    }).then((res) => {
      const { message: catesList } = res.data
      this.setData({ catesList })
    })
  },
  // 获取楼层数据
  getFloorList() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'
    }).then((res) => {
      const { message: floorList } = res.data
      this.setData({ floorList })
    })
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {}
})
