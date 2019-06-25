<template>
  <div id="table-wrap">
    <div class="tbl-content">
      <table cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr class="table-header">
            <td class="title">#</td>
            <td class="title">ФИО</td>
            <td class="title">Дата и время заказа</td>
            <td class="title">Кол-во</td>
            <td class="title">Цена</td>
            <td class="title">Адрес</td>
            <td class="title">Номер телефона</td>
            <td class="title">Эл. почта</td>
            <td class="title">Статус заказа</td>
          </tr>
        </thead>
        <tbody>
          <tr :key="customer.id" v-for="(customer, index) in customers">
            <td class="title">{{index+1}}</td>
            <td>{{customer.name}}</td>
            <td>{{customer.dateOrder}}</td>
            <td>{{customer.quantity}}</td>
            <td>{{customer.price}}</td>
            <td>{{customer.address}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.email}}</td>
            <td v-if="customer.status ==='Активный'" style="color: #03AA00">{{customer.status}}</td>
            <td v-else-if="customer.status ==='В архиве'" style="color: #3900B1">{{customer.status}}</td>
            <td
              v-else-if="customer.status ==='Неоплаченный'"
              style="color: #FF0000"
            >{{customer.status}}</td>
            <td v-if="customer.archived === false">
              <button class="delete-button button">Удалить</button>
            </td>
            <td v-if="customer.archived === true">
              <button class="archive-button button">Архивировать</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  props: { customers: Object }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
#table-wrap {
  border: 1px dotted #000;
  border-radius: 0 10px 10px 10px;
  overflow-x: auto;
  margin: 2vw;
}

.table-header td {
  padding-bottom: 2vw;
}

.tbl-content {
  padding: 2vw;
}
/* basic styling */
table {
  width: fit-content;
  max-width: 100%;
  table-layout: fixed;
  margin: auto;
  border-collapse: collapse;
  display: block;
  height: 300px;
  white-space: nowrap;
}
td {
  padding: 1.5vw 1vw;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #000;
}

.button {
  border: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}

.archive-button {
  color: #3900b1;
}
.archive-button:hover {
  color: #8952ff;
}

.delete-button {
  color: #ff0000;
}
.delete-button:hover {
  color: #7a0202;
}

.title {
  color: #939393;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
</style>
