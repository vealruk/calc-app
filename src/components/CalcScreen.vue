<template>
  <input type="text" disabled :value="value">
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="scss">
 input {
  text-align: right;
  padding: 0 10px;
  height: 75px;
  color: #fff;
  font-weight: 600;
  font-size: 3rem;
  letter-spacing: .05rem;
  margin-bottom: 60px;

  &:disabled {
    background-color: transparent;
  }
 }
</style>
