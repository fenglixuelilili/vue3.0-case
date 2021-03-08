<template>
  <div class="prize" :class="{ current: active === index }">
    <img :src="filterjp.img" alt="">
    <span>{{filterjp.name}}</span>
  </div>
</template>
<script>
export default {
  props: {
    filterjp: {
      default: {}
    },
    active: {
      type: Number
    },
    index: {
      type: Number
    }
  },
  setup(props) {
    console.log(props)
  }
}
</script>
<style lang="less" scoped>
  .prize{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #39f365;
    img{
      width: 50%;
      margin-bottom: 15px;
    }
    span{
      font-size: 20px;
      color: #fff;
    }
  }
  .current{
    background-color: #8520fe;
  }
</style>