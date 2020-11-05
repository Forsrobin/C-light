<template>
  <div>
    <div v-for="(ledCounter, i) in led" :key="i" class="led"></div>
  </div>
</template>

<script>
export default {
  props: ["led", "sliderData", "playAnimation"],
  data() {
    return {
      animationData: this.sliderData,
      numLeds: this.led,
      timer: undefined,
    };
  },
  mounted() {},
  watch: {
    playAnimation: function (newVal, oldVal) {
      if (newVal) {
        this.startAnimation();
      } else {
        console.log("Stop");
        clearInterval(this.timer);
        this.numLeds = 0
        this.numLeds = this.led
      }
    },
  },
  methods: {
    startAnimation() {
      this.sliderData.forEach((element, index) => {
        this.timer = setTimeout(() => {
          console.log(element.duration);
          if (element.animationName == "fade") {
            this.fade(element.color, element.animationTime);
          } else if (element.animationName == "static") {
            this.static(element.color);
          }
        }, index * (this.sliderData[index].duration));
      });
    },
    // Fade
    fade(color, time) {
      var x = document.getElementsByClassName("led");
      x.forEach((element, i) => {
        setTimeout(() => {
          element.style.background = color;
        }, i * (time / this.led));
      });
    },
    //Static
    static(color) {
      var x = document.getElementsByClassName("led");
      x.forEach((element, i) => {
        element.style.background = color;
      });
    },
  },
};
</script>

<style scoped>
.led {
  width: 30px;
  height: 30px;
  margin: 1px;
  background: black;
  display: inline-flex;
}
</style>