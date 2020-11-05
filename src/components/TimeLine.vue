<template>
  <div>
    <div class="timelineWrapper">
      <!-- Topbar -->
      <div class="topbar">
        <div class="item">
          <i class="fas fa-download"></i>
          <p>Save</p>
        </div>
        <div class="item">
          <i class="fas fa-upload"></i>
          <p>Load</p>
        </div>
        <div class="item">
          <i class="fas fa-plus-circle"></i>
          <p>New</p>
        </div>
        <div class="item">
          <i class="fas fa-music"></i>
          <p>Upload music</p>
        </div>
        <div @click="play" class="item">
          <i class="fas fa-play"></i>
          <p>Play</p>
        </div>
        <div @click="pause" class="item">
          <i class="fas fa-pause"></i>
          <p>Pause</p>
        </div>
        <div @click="stop" class="item">
          <i class="fas fa-stop"></i>
          <p>Stop</p>
        </div>
      </div>
      <!-- Layer bar -->
      <div class="layerBar">
        <div class="item">
          <i class="fas fa-plus-circle"></i>
          <p>Ad layer</p>
        </div>
        <div @click="updateMusic" class="item">
          <i class="fas fa-pen"></i>
          <p>Update music</p>
        </div>
        <div @click="testAnimation" class="item">
          <i class="fas fa-play"></i>
          <p>Play animation</p>
        </div>
      </div>
      <!-- music layer -->
      <div class="musicLayer">
        <div class="layerOptions"></div>
        <div class="layerTimeLine">
          <av-waveform
            ref="audio"
            :canv-width="1500"
            audio-src="/music/test.mp3"
            :playtime="true"
          ></av-waveform>
        </div>
      </div>
      <!-- Layer -->
      <div v-if="songDuration != undefined" class="layer">
        <div class="layerOptions"><p>Ardiono #1</p></div>
        <div class="layerTimeLine">
          <Sliders :data="sliderData" :songDuration="songDuration" />
        </div>
      </div>
      <div v-else>
        <p style="padding: 20px; background: white" @click="updateMusic">
          Update music
        </p>
      </div>
      <Led :led="20" :sliderData="sliderData" :playAnimation="playAnimation" />
    </div>
  </div>
</template>

<script>
import Sliders from "../components/Sliders";
import Led from "../components/Led";
export default {
  components: {
    Sliders,
    Led,
  },
  data() {
    return {
      songDuration: undefined,
      playAnimation: false,
      sliderData: [
        {
          duration: 2000,
          color: "red",
          animationName: "fade",
          animationTime: 4000,
        },
        {
          duration: 6000,
          color: "blue",
          animationName: "static",
        },
        {
          duration: 5000,
          color: "green",
          animationName: "fade",
          animationTime: 3000,
        },
      ],
    };
  },
  methods: {
    play() {
      this.$refs.audio.audio.play();
      this.playAnimation = true;
    },
    pause() {
      this.$refs.audio.audio.pause();
    },
    stop() {
      this.playAnimation = false;
      this.$refs.audio.audio.pause();
      this.$refs.audio.audio.currentTime = 0;
    },
    testAnimation() {
      this.playAnimation = true;
    },
    updateMusic() {
      this.songDuration = this.$refs.audio.audio.duration;
    },
  },
  created() {},
};
</script>

<style scoped>
.musicLayer {
  display: flex;
  height: 145px;
}

.musicLayer div {
  background: none;
}

.layer {
  width: 100%;
  display: flex;
  color: white;
}

.layerOptions {
  width: 200px;
  height: 30px;
  background: #333;
  margin: 5px;
  border-radius: 3px;
}
.layerTimeLine {
  width: 1500px;
  height: 30px;
  background: #333;
  margin: 5px;
  border-radius: 3px;
}

.item {
  color: white;
  display: flex;
  padding: 5px;
  background: #333;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.layerBar {
  position: relative;
  width: 100%;
  display: flex;
  padding: 5px;
  background: #333;
  height: auto;
}

.item p {
  margin-left: 5px;
  font-size: 9pt;
  line-height: 16px;
}
.timelineWrapper {
  width: 100%;
  position: relative;
  background: rgb(71, 71, 71);
  height: auto;
  margin-top: 20px;
}
.topbar {
  position: relative;
  width: 100%;
  display: flex;
  padding: 5px;
  background: #222;
  height: auto;
}
</style>