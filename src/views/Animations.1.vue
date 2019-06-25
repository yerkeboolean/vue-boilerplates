<template>
  <div>
    <div class="instablock">
      <div class="block">
        <img
          src="https://itndaily.ru/wp-content/uploads/2015/07/11376655_479893395513491_201556343_n.0.jpg"
          alt
          class="num1"
        >
      </div>
      <div class="block">
        <img
          src="https://itndaily.ru/wp-content/uploads/2015/07/11376655_479893395513491_201556343_n.0.jpg"
          alt
          class="num2"
        >
      </div>
      <div class="block">
        <img
          src="https://itndaily.ru/wp-content/uploads/2015/07/11376655_479893395513491_201556343_n.0.jpg"
          alt
          class="num3"
        >
      </div>
      <div class="block">
        <img
          src="https://itndaily.ru/wp-content/uploads/2015/07/11376655_479893395513491_201556343_n.0.jpg"
          alt
          class="num4"
        >
      </div>
      <div class="block">
        <img
          src="https://itndaily.ru/wp-content/uploads/2015/07/11376655_479893395513491_201556343_n.0.jpg"
          alt
          class="num5"
        >
      </div>
      <div class="block">
        <img
          src="https://itndaily.ru/wp-content/uploads/2015/07/11376655_479893395513491_201556343_n.0.jpg"
          alt
          class="num6"
        >
      </div>
      <div class="block">
        <img
          src="https://itndaily.ru/wp-content/uploads/2015/07/11376655_479893395513491_201556343_n.0.jpg"
          alt
          class="num7"
        >
      </div>
      <div class="block">
        <img
          src="https://itndaily.ru/wp-content/uploads/2015/07/11376655_479893395513491_201556343_n.0.jpg"
          alt
          class="num8"
        >
      </div>
      <div class="block">
        <img
          src="https://itndaily.ru/wp-content/uploads/2015/07/11376655_479893395513491_201556343_n.0.jpg"
          alt
          class="num9"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Animations",
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.instablock {
  margin: 5vw 5vw;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
}
.block {
  text-align: center;
}
img {
  width: 0;
  height: 0;
  animation: fly-in 0.33s ease-in-out;
  animation-fill-mode: forwards;
}

.num1 {
  animation-delay: 0.1s;
}
.num2 {
  animation-delay: 0.3s;
}
.num3 {
  animation-delay: 0.5s;
}
.num4 {
  animation-delay: 0.7s;
}
.num5 {
  animation-delay: 0.9s;
}
.num6 {
  animation-delay: 1.1s;
}
.num7 {
  animation-delay: 1.3s;
}
.num8 {
  animation-delay: 1.5s;
}
.num9 {
  animation-delay: 1.7s;
}

@keyframes fly-in {
  100% {
    width: 20vw;
    height: 100%;
    margin: 0;
  }
}
</style>
