<template>
  <div id="app">
    <LeftDisplay />
    <RightArtistChoose />
    <RightPhoto />
    <CircleEl />
  </div>
</template>

<script>
import LeftDisplay from "@/components/LeftDisplay.vue";
import RightArtistChoose from "@/components/RightArtistChoose.vue";
import RightPhoto from "@/components/RightPhoto.vue";
import CircleEl from "@/components/CircleEl.vue";

export default {
  name: "app",
  components: {
    LeftDisplay,
    RightArtistChoose,
    RightPhoto,
    CircleEl
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto:300,400,700&display=swap");
body {
  font-family: "Montserrat", "Arial";
  margin: 0;
}
</style>
