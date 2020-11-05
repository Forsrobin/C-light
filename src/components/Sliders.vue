<template>
  <div style="display: flex">
    <div v-for="(animation, i) in animationData" :key="i">
      <div
        @click="changeFunction"
        :style="
          'width:' + calcWidth(animation) + 'px; background:' + animation.color
        "
        class="line"
      ></div>
      <div :style="displayMenu" class="menu">
        <button @mouseleave="stop" @mouseup="stop" @mousedown="changeDuration(0.1, i)">
          Increese duration
        </button>
        <button @mouseleave="stop" @mouseup="stop" @mousedown="changeDuration(-0.1, i)">
          Decrece duration
        </button>
        <select @change="changeColor(i)" v-model="color">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <select @change="changeAnimation(i)" v-model="animationType">
          <option value="fade">Fade</option>
          <option value="static">static</option>
          <option value="rave">Rave</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "songDuration"],
  data() {
    return {
      animationData: this.data,
      currentLength: 0,
      openMenu: false,
      interval: false,
      color: 'red',
      animationType: 'fade'
    };
  },
  computed: {
    displayMenu() {
      if (this.openMenu) {
        return { display: "block" };
      } else {
        return { display: "none" };
      }
    },
  },
  mounted() {},
  methods: {
    changeAnimation(index) {
      this.animationData[index].animationName = this.animationType
    },
    changeColor(index) {
      this.animationData[index].color = this.color
    },
    stop() {
      clearInterval(this.interval);
      this.interval = false;
    },
    changeDuration(data, index) {
      if (!this.interval) {
        this.interval = setInterval(
          () => (this.animationData[index].duration += data),
          30
        );
      }
    },
    changeFunction() {
      this.openMenu = !this.openMenu;
    },
    calcWidth(data) {
      let width = (1500 / this.songDuration) * (data.duration/1000);
      return width;
    },
  },
};
</script>

<style scoped>
.menu {
  width: 100px;
  height: 100px;
  position: absolute;
  margin-top: 5px;
  display: flex;
}

.menu button,.menu select  {
  font-size: 7pt;
  width: 100px;
  padding: 2px;
  text-align: left;
}

.slider {
  position: relative;
  width: 10px;
  height: 10px;
  top: 10px;
  transform: translateX(-5px) rotate(45deg);
  background: white;
}
.line {
  height: 20px;
  position: relative;
  top: 5px;
  background: red;
}
</style>