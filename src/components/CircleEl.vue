<template>
  <div class="circle">
    <p>HEAD</p>
    <p>LINERS</p>
  </div>
</template>

<script>
export default {
  name: "CircleEl"
};
</script>

<style scoped lang='scss'>
.circle {
  height: 70vw;
  width: 70vw;
  max-width: 420px;
  max-height: 420px;
  border: 1px solid rgb(29, 29, 29);
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  left: 0;
  right: 5%;
  bottom: 20%;
  margin: auto;
  z-index: 9999999;
}
p {
  letter-spacing: 10px;
  font-weight: 700;
  font-size: 18px;
  margin: 0 0 10px 12%;
}
</style>