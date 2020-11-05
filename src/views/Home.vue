<template>
  <div>
    <button @click="stopMusic">Stop music</button>
    <div @click="changeColor(255,0,0)" style="background:red" class="ledItem">
      <p>Red</p>
    </div>
    <div @click="sendFunction(sliderData)" style="background:blue" class="ledItem">
      <p>Custom animation</p>
    </div>
  </div>
</template>

<style scoped>
.ledItem {
  cursor: pointer;
  color: white;
  padding: 10px;
}
</style>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      audio: undefined,
      sliderData: [
        {
          duration: 3000,
          animationName: "clear",
        },{
          duration: 500,
          color: {
            red: 255,
            green: 0,
            blue: 0
          },
          animationName: "colorWipeLeftRight",
          animationTime: 500,
        },{
          duration: 3000,
          animationName: "clear",
        },{
          duration: 500,
          color: {
            red: 0,
            green: 255,
            blue: 0
          },
          animationName: "colorWipeRightLeft",
          animationTime: 500,
        }
      ],
    };
  },

  created() {
    this.audio = new Audio('/music/test.mp3');
    window.onbeforeunload = () => {
      this.$socket.emit("leave");
    },

    this.sockets.subscribe('arduinoChangeColor', (data) => {
        console.log(data);
    });

  },

  watch: {},

  methods: {
    stopMusic() {
      this.audio.pause();
      this.audio.currentTime = 0;
    },
    sendFunction(data) {
      this.audio.play();
      this.volume = 0.2
      this.$socket.emit("displayAnimation", { function: 'custom', data});
    },
    changeColor(r,g,b) {
        this.$socket.emit("changeColor", { function: 'static', color: {r,g,b}});
    },

  },
};
</script>
