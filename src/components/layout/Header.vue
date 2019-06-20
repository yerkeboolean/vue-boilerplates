<template>
  <header>
    <h1>Boilerplates</h1>
    <div id="nav">
      <router-link to="/">Modal</router-link>|
      <router-link to="/slider">Slider</router-link>
      <router-link to="/shop">Shop</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  background: #000;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
}
header a {
  color: #fff;
  padding-right: 5px;
}
</style>