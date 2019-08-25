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
          "id": 1,
          "destiny": "llenriquelopez@gmail.com",
          "account": 1234,
          "reference": 3534,
          "date": "2019-08-24",
          "name": "Erique López",
          "amount": 255,
          "to_message": "+525518519533",
          "from_message": "+15032129249"
        },
        "methods": ["email", "sms"]
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
    async sendVoucher() {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
      try {
        let response = await axios.post('http://18.218.77.52:4000/api/v1/notification', this.userDataEmail)
        alert("Mensaje enviado...")
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
    // this.testPost()
  }
})