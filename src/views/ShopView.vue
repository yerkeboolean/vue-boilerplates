<template>
  <div class="goods">
    <div v-bind:key="good.id" v-for="good in allGoods">{{good.name}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShopView",
  computed: mapGetters(["allGoods"])
};
</script>

<style scoped>
</style>
