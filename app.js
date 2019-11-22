App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("小程序初始化完成，on launch 生命函数被触发~~~~");    
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // });

    // setTimeout(() => {
    //   const error = new Error();
    //   throw error;
    // }, 3000);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("小程序页面渲染完毕，on show 生命函数被触发~~~~");
    console.log(options);
    switch (options) {
      case 1001:
        break;
      case 1005:
        break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("小程序退出，on hide 生命函数被触发~~~~");    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序运行出现错误，on error 生命函数被触发~~~~");    
  }
})
