// pages/home/home.js
Page({
  data: {
    name: 'Coder Why',
    age: 18,
    students: [
      { id: 110, name: 'kobe'},
      { id: 111, name: 'james' },
      { id: 112, name: 'curry' },
      { id: 113, name: 'rose' }
    ],
    count: 0
  },
  increase () {
    this.setData({
      count: this.data.count + 1
    })
  },
  decrease () {
    this.setData({
      count: this.data.count - 1
    })
  }
})