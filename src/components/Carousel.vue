<template>
  <div class="carousel-view">
    <transition-group class="carousel" tag="div">
      <div v-for="slide in slides" class="slide" :key="slide.id">
        <button class="to-left-button carousel-controls__button" @click="previous"></button>
        <h4 class="slide-title">{{ slide.title }}</h4>

        <button class="to-right-button carousel-controls__button" @click="next"></button>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slides: [
        {
          title: "I am Slide A",
          id: 1
        },
        {
          title: "I am Slide B",
          id: 2
        },
        {
          title: "I am Slide C",
          id: 3
        },
        {
          title: "I am Slide D",
          id: 4
        },
        {
          title: "I am Slide E",
          id: 5
        }
      ]
    };
  },
  methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    }
  }
};
</script>

<style>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #000000;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 1;
  min-height: 25em;
}
.slide {
  flex: 0 0 100%;
  height: 800px;
  display: flex;
  justify-content: space-between;
  background-color: black;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  color: #ffffff;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
.to-left-button {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
}
.to-right-button {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5)
  );
}
.carousel-controls__button {
  color: white;
  border: none;
  position: relative;
  height: 100%;
  width: 40px;
}
</style>
