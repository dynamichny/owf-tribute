<template>
  <div class="article-choose">
    <!-- <h2>Choose the day •</h2> -->
    <a href="https://orangewarsawfestival.pl/" target="_blank" class="getTickets">Get tickets!</a>
    <div class="choose">
      <button @click="changeDay(0)" :class="day == 0 ? 'active' : ''">Day 1.</button>
      <button @click="changeDay(1)" :class="day == 1 ? 'active' : ''">Day 2.</button>
    </div>
    <transition-group tag="ul" @enter="enter" @leave="leave" mode="out-in">
      <li
        v-for="event in owfData[day]"
        :key="event.artist"
        :class="currentArtist.artist == event.artist ? 'current' : ''"
        @click="updateCurrentArtist(event)"
      >
        <p>{{event.time}}</p>
        <br />
        <p>{{event.artist}}</p>
        <p class="type">{{event.type | uppercase }}</p>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { TweenMax, Back } from "gsap";
import store from "@/store/index";
export default {
  name: "RightArtistChoose",
  computed: {
    day() {
      return store.state.day;
    },
    owfData() {
      return store.state.owf;
    },
    currentArtist() {
      return store.state.currentArtist;
    }
  },
  methods: {
    changeDay(day) {
      store.commit("changeDay", day);
    },
    updateCurrentArtist(artist) {
      store.commit("changeArtist", artist);
    },
    enter(el, done) {
      if (this.day == 0) {
        TweenMax.from(el, 0.3, {
          display: "none",
          opacity: 0,
          y: "-50px",
          delay: 0.3,
          ease: Back,
          onComplete: done
        });
      } else {
        TweenMax.from(el, 0.3, {
          display: "none",
          opacity: 0,
          y: "50px",
          delay: 0.3,
          ease: Back,
          onComplete: done
        });
      }
    },
    leave(el, done) {
      if (this.day == 0) {
        TweenMax.to(el, 0.3, { opacity: 0, y: "-50", onComplete: done });
      } else {
        TweenMax.to(el, 0.3, { opacity: 0, y: "50", onComplete: done });
      }
    }
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped lang='scss'>
.article-choose {
  font-weight: bold;
  position: absolute;
  width: 50%;
  height: 45vh;
  top: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: white;
  z-index: 999;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}
h2 {
  position: absolute;
  font-size: 18px;
  margin: 0;
  top: 30px;
  left: 30px;
  font-weight: 400;
  color: rgb(206, 206, 206);
  font-family: "Montserrat", sans-serif;
}
.getTickets {
  font-family: "Montserrat", sans-serif;
  color: rgb(255, 102, 0);
  background: none;
  border: none;
  border-bottom: 2px solid rgb(255, 102, 0);
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 450px) {
    visibility: hidden;
  }
}
.choose {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 10% 0 0;
  @media (max-width: 650px) {
    flex-direction: row;
  }
  button {
    background: none;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    padding: 18px;
    color: rgb(165, 165, 165);
    transition: color 0.7s;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    @media (max-width: 400px) {
      padding: 5px 10px;
    }
    &:hover {
      color: rgb(75, 75, 75);
    }
  }
  .active {
    color: black;
  }
}

ul {
  color: rgb(172, 172, 172);
  width: 100%;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  overflow: auto;
}
li {
  cursor: pointer;
  padding: 10px;
}
.current {
  color: black;
}
</style>