// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area:['陕西省','西安市','长安区'],
    now:''
  },
  changeRegion:function(e){
    this.setData({
      area:e.detail.value
    })
    this.getWeather();//更新天气
  },
  getWeather:function(e){
    var that = this;//this不可再wxAPI函数内部使用
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.area[1],
        key:'71112d3cb5c64cb1a917d5c5e197ce84'
      },
      success:function(res){
        console.log(res.data.HeWeather6[0].now)
        that.setData({
          now:res.data.HeWeather6[0].now
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
