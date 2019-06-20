<template>
  <div id="example-1">
    <button @click="show = !show" class="my-button my-real-button">Кнопка</button>

    <div class="dark-background">
      <transition name="rotate">
        <div v-if="show" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <input v-model="name" placeholder="Ваше имя" class="name-input">
              <p>{{ name }}</p>
              <button class="my-button" @click="show = false">OK</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalButton",
  data() {
    return {
      show: false,
      name: ""
    };
  }
};
</script>

<style scoped>
.my-button {
  background: aquamarine;
  border: 0;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  color: #ffffff;
}

.my-real-button:focus {
  background: #dedede;
  color: #ffffff;
}
.name-input {
  padding: 5px;
  border: none;
  border-bottom: 1px #000 solid;
}
.name-input:focus {
  border-bottom: 2px aquamarine solid;
  outline: none;
}
.rotate-enter-active {
  animation: rotate 0.3s ease-in-out;
}
.rotate-leave-active {
  animation: rotate 0.3s reverse ease-in-out;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(4deg);
  }
  200% {
    transform: rotate(8deg);
  }
  30% {
    transform: rotate(12deg);
  }
  40% {
    transform: rotate(16deg);
  }
  50% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(-4deg);
  }
  70% {
    transform: rotate(-8deg);
  }
  80% {
    transform: rotate(-12deg);
  }
  90% {
    transform: rotate(-16deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  font-family: sans-serif;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  transition: all 0.5s ease;
  font-family: sans-serif;
}
</style>
