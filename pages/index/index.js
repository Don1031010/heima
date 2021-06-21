//
import { request } from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // swiper list
    swiperList: [],
    // category list
    catesList: [],
    //floordata
    floorList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     // console.log(result)
    //     this.setData( {
    //       swiperList: result.data.message
    //     })
    //   }
    // })
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },

  // get swiper data
  getSwiperList() {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata' }).then(result => {
      this.setData({
        swiperList: result.data.message
      })
    })
  },

  // get category data
  getCateList() {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems' }).then(result => {
      this.setData({
        catesList: result.data.message
      })
    })
  },

  // get floor data
  getFloorList() {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata' }).then(result => {
      this.setData({
        floorList: result.data.message
      })
    })
  },

})