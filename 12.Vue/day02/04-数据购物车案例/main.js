const app = new Vue({
  el: '#app',
  data: {
    bookList: [{
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128,
        count: 1
      },
    ]
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },
  computed: {
    totalPrice() {
      return this.bookList.reduce((pre, n) => pre + n.price * n.count, 0)
    }
  },
  methods: {
    decrement(index) {
      this.bookList[index].count--;
    },
    increment(index) {
      this.bookList[index].count++;
    },
    removeBtn(index) {
      this.bookList.splice(index, 1);
    }
  }
})