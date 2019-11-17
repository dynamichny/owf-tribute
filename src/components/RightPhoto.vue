<template>
  <div class="right-photo">
    <transition @enter="enter" @leave="leave" appear>
      <div class="photo" :style="styleObj" :key="currentArtist.artist"></div>
    </transition>
    <h2 class="info-text">TOR WYŚCIGÓW KONNYCH SŁUŻEWIEC, WARSAW</h2>
  </div>
</template>

<script>
import store from "@/store/index";
import gsap from "gsap";

export default {
  name: "RightPhoto",
  computed: {
    currentArtist() {
      return store.state.currentArtist;
    },
    styleObj() {
      return {
        background: `url(${this.getImgUrl()}) center center/cover no-repeat`
      };
    }
  },
  methods: {
    getImgUrl() {
      return require(`../assets/${this.currentArtist.pic2}`);
    },
    enter(el, done) {
      gsap.set(el, { visibility: "visible", zIndex: 99 });
      gsap.from(el, 1.7, {
        y: "100%",
        ease: "Expo.easeOut",
        onComplete: done
      });
    },
    leave(el, done) {
      gsap.set(el, { zIndex: -1, position: "absolute" });
      gsap.to(el, 1.7, {
        y: "-30%",
        scale: 1.25,
        ease: "Expo.easeOut",
        onComplete: done
      });
    }
  }
};
</script>

<style scoped lang='scss'>
.right-photo {
  position: absolute;
  width: 50%;
  height: 55vh;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  overflow: hidden;
  visibility: hidden;
}
.info-text {
  margin: 0;
  position: absolute;
  left: 25px;
  bottom: 25px;
  color: white;
  font-weight: 700;
  font-family: "Montserrat", "Arial";
  font-size: 16px;
  z-index: 9999999;
  display: block;
  visibility: visible;
}
.photo {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>