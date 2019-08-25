Vue.component('modal-container', {
  template: '#modal',
  props: {
    modalVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
})

var app = new Vue({
  el: '#dashboard',
  data: {
    modalVisible: false,
    info: null,
    userDataEmail: {
      "notification": {
        "transaction": {
          "id": 101,
          "destiny": "llenriquelopez@gmail.com",
          "account": 1234,
          "reference": 3534,
          "date": "2019-08-24",
          "name": "Edin Ramirez",
          "amount": 255
        },
        "methods": ["email"]
      }
    }
  },
  methods: {
    handleOpenModal() {
      this.modalVisible = true;
    },
    handleCloseModal() {
      this.modalVisible = false;
    },
    async testPost() {
      const headers = {
        'Content-Type': 'application/json',
        // 'Authorization': 'JWT fefege...',
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Request-Method': 'POST',
        // 'Access-Control-Request-Headers': 'X-Custom-Header',  
        // 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
      try {
        let response = await axios.post('http://18.218.77.52:4000/api/v1/notification', this.userDataEmail, {
          headers: headers
        })
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    // test axios
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response))
    this.testPost()
  }
})