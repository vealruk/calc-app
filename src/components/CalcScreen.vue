<template>
  <input type="text" :style="[`fontSize: ${fontSize}`]" disabled :value="buffer">
  <!-- <div class="screen" :style="[`fontSize: ${fontSize}`]">{{ buf }}</div> -->
</template>

<script>
import { ref, watch, toRef } from 'vue'

export default {
  props: ['buffer'],
  setup (props) {
    const fontSize = ref('3rem')
    const value = toRef(props, 'buffer')

    watch(value, val => {
      const length = val.length
      fontSize.value = `${Math.min(3, (2 / length) * 14).toFixed(1)}rem`
    })

    return {
      fontSize
    }
  }
}
</script>

<style lang="scss">
 input {
  text-align: right;
  padding: 0 10px;
  height: 75px;
  max-width: 100%;
  font-weight: 600;
  letter-spacing: .05rem;
  margin-bottom: 30px;

  &::placeholder {
      color: #fff;
  }

  &:disabled {
    background-color: transparent;
    color: #fff !important;
  }
 }
</style>
