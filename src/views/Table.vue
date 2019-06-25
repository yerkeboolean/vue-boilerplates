<template>
  <div class="table-wrapper">
    <div class="button-group">
      <button
        :disabled="selected==='все заказы'"
        @click="onSelect('все заказы')"
        class="filter-button"
      >все заказы</button>

      <button
        :disabled="selected==='активные'"
        @click="onSelect('активные')"
        class="filter-button"
      >активные</button>

      <button
        :disabled="selected==='архивные'"
        @click="onSelect('архивные')"
        class="filter-button"
      >архивные</button>
      <button
        :disabled="selected==='неоплаченные'"
        @click="onSelect('неоплаченные')"
        class="filter-button"
      >неоплаченные</button>
    </div>
    <MyTable
      v-if="selected==='активные'"
      v-bind:customers="customers.filter(function(item){ return item.status === 'Активный'})"
    />

    <MyTable
      v-else-if="selected==='архивные'"
      v-bind:customers="customers.filter(function(item){ return item.status === 'В архиве'})"
    />

    <MyTable
      v-else-if="selected==='неоплаченные'"
      v-bind:customers="customers.filter(function(item){ return item.status === 'Неоплаченный'})"
    />

    <MyTable v-else v-bind:customers="customers"/>
  </div>
</template>

<script>
import MyTable from "../components/MyTable";
import { mapGetters } from "vuex";

export default {
  name: "Table",
  components: { MyTable },
  methods: {
    onSelect(value) {
      this.selected = value;
    }
  },
  data() {
    return {
      selected: "все заказы"
    };
  },
  computed: {
    ...mapGetters({ customers: "getCustomers" })
  }
};
</script>

<style scoped>
* {
  background-color: #f8f8f8;
}
.table-wrapper {
  display: flex;
  flex-direction: column;
}
.button-group {
  text-align: left;
  margin: 2vw 0 0 3vw;
}

.filter-button {
  border: none;
  background-color: transparent;
  color: #000;
  outline: none;
  margin: 0.4vw;
  cursor: pointer;
}
.filter-button:hover,
.filter-button:disabled {
  color: #7cd7f4;
}
</style>
