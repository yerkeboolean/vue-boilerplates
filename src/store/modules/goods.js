const state = {
  goods: [
    { id: 1, name: "banana", cost: 150 },
    { id: 2, name: "apple", cost: 200 },
    { id: 3, name: "kiwi", cost: 100 }
  ],
  cart: [],
  customers: [
    {
      id: "1",
      name: "Ivanov Ivan",
      dateOrder: "20.02.2019, 19:25",
      quantity: 5,
      price: 450,
      address: "5646546546546",
      phone: "+7 707 025 00 00",
      email: "yerke99@gmail.com",
      status: "Активный",
      archived: false
    },
    {
      id: "2",
      name: "Ivanov Ivan",
      dateOrder: "20.02.2019, 19:25",
      quantity: 5,
      price: 450,
      address: "5646546546546",
      phone: "+7 707 025 00 00",
      email: "yerke99@gmail.com",
      status: "В архиве",
      archived: true
    },
    {
      id: "3",
      name: "Ivanov Ivan",
      dateOrder: "20.02.2019, 19:25",
      quantity: 5,
      price: 450,
      address: "5646546546546",
      phone: "+7 707 025 00 00",
      email: "yerke99@gmail.com",
      status: "Активный",
      archived: false
    }
  ]
};

const getters = {
  allGoods: state => state.goods,
  getCustomers: state => state.customers
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
