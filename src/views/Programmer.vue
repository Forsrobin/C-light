<template>
  <div class="pageWrapper">
    <div class="musicProgrammer">
      <TimeLine />
      <!-- <button @click="checkTime">Tets</button>
      <canvas id="test"></canvas> -->
    </div>
  </div>
</template>

<script>
import TimeLine from "../components/TimeLine";
import AudioVisual from 'vue-audio-visual'
import Wave from "@foobar404/wave"
let wave = new Wave();

export default {
  components: {
    TimeLine,
  },
  // data() {
  //   return {
  //     media: null,
  //     value: 1
  //   };
  // },
  // methods: {
  //   getCurrentTime() {
  //     return (this.$refs.audio.audio.currentTime);
  //   },
  //   getDuration() {
  //     return (this.$refs.audio.audio.duration);
  //   },
  //   checkTime() {
  //     console.log(this.$refs.audio.audio.currentTime);
  //     console.log(this.$refs.audio.audio.duration);
  //   }
  // },
  // mounted() {
  //   console.log(this.$refs.audio.audio);
  // },
};
</script>

<style scoped>
.musicProgrammer {
  width: 1920px;
  margin: auto;
}
</style>