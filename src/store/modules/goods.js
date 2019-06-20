const state = {
  goods: [
    { id: 1, name: "banana", cost: 150 },
    { id: 2, name: "apple", cost: 200 },
    { id: 3, name: "kiwi", cost: 100 }
  ],
  cart: []
};

const getters = {
  allGoods: state => state.goods
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
