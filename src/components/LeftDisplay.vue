<template>
  <div class="left-display">
    <h1>Orange Warsaw Festival</h1>
    <p class="info">01-02 of June</p>
    <transition @enter="enter" @leave="leave" appear>
      <div :key="currentArtist.artist" class="display" ref="dis">
        <img :src="getImgUrl()" ref="pic" />
      </div>
    </transition>
  </div>
</template>

<script>
import store from "@/store/index";
import gsap from "gsap";

export default {
  name: "LeftDisplay",
  computed: {
    currentArtist() {
      return store.state.currentArtist;
    }
  },
  methods: {
    getImgUrl() {
      return require(`../assets/${this.currentArtist.pic1}`);
    },
    enter(el, done) {
      gsap.set(el, { background: this.currentArtist.color });
      gsap.fromTo(
        el,
        1.7,
        {
          y: "100%"
        },
        {
          y: "0%",
          ease: "Expo.easeOut"
        }
      );
      gsap.fromTo(
        el.childNodes[0],
        1.7,
        {
          rotationY: "-20deg",
          rotationX: "30deg",
          x: -10
        },
        {
          rotationY: "0deg",
          rotationX: "0deg",
          x: 0,
          onComplete: done
        }
      );
    },
    leave(el, done) {
      gsap.set(el, { position: "absolute" });
      gsap.to(el, 1.7, {
        y: "-100%",
        ease: "Expo.easeOut",
        onComplete: done
      });
      gsap.fromTo(
        el.childNodes[0],
        0.5,
        {
          rotationY: "0deg",
          rotationX: "0deg",
          x: 0
        },
        {
          rotationY: "20deg",
          rotationX: "30deg",
          x: -10
        }
      );
    }
  }
};
</script>

<style scoped lang='scss'>
.left-display {
  position: absolute;
  width: 50%;
  height: 100vh;
  top: 0;
  left: 0;
  background: #b5a098;
  box-sizing: border-box;
  overflow: hidden;
}
.display {
  height: 100%;
  width: 100%;
}
img {
  width: 60%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
h1 {
  position: absolute;
  top: 25px;
  left: 5%;
  color: white;
  text-decoration: none;
  font-size: 18px;
  z-index: 999999;
  margin: 10px;
}
.info {
  position: fixed;
  margin: 0;
  bottom: 10%;
  left: -34px;
  color: black;
  transform: rotate(270deg);
  font-weight: 700;
  font-family: "Montserrat", "Arial";
  font-size: 20px;
  z-index: 99999;
}
</style>