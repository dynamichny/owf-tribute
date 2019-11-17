import Vue from "vue";
import Vuex from "vuex";

Vue.use( Vuex );

export default new Vuex.Store( {
  state: {
    currentArtist: {
      artist: "OWF",
      pic1: "head/owf.jpg",
      pic2: "bottom/owf.jpg",
      color: "#ffb27e"
    },
    owf: [
      [ {
          artist: "O.S.T.R",
          type: "Rap",
          time: "17:00",
          pic1: "head/ostr.png",
          pic2: "bottom/ostr.jpeg",
          color: "#1E3032"
        },
        {
          artist: "Dua Lipa",
          type: "Pop",
          time: "19:00",
          pic1: "head/dua.png",
          pic2: "bottom/dua.jpg",
          color: "#476379"
        },
        {
          artist: "Sam Smith",
          type: "Rap",
          time: "21:00",
          pic1: "head/sam.png",
          pic2: "bottom/sam.jpg",
          color: "#5F7394"
        },
        {
          artist: "LCD SOUNDSYSTEM",
          type: "Electronic",
          time: "23:00",
          pic1: "head/lcd.png",
          pic2: "bottom/lcd.jpg",
          color: "#413F4A"
        }
      ],
      [ {
          artist: "Taco Hemingway",
          type: "Rap",
          time: "17:00",
          pic1: "head/taco.png",
          pic2: "bottom/taco.jpeg",
          color: "#F2DF91"
        },
        {
          artist: "Tyler, The Creator",
          type: "Rap",
          time: "19:00",
          pic1: "head/tyler.png",
          pic2: "bottom/tyler.jpg",
          color: "#87B1B8"
        },
        {
          artist: "Florence + The Machine",
          type: "Pop",
          time: "21:00",
          pic1: "head/florence.jpg",
          pic2: "bottom/florence.jpg",
          color: "#F5EACE"
        },
        {
          artist: "AXWELL λ INGROSSO",
          type: "Electronic",
          time: "23:00",
          pic1: "head/axwell.jpg",
          pic2: "bottom/axwell.png",
          color: "#334040"
        }
      ]
    ],
    day: 0
  },
  mutations: {
    changeArtist( state, obj ) {
      state.currentArtist = obj;
    },
    changeDay( state, day ) {
      state.day = day;
    }
  },
  actions: {},
  modules: {}
} );