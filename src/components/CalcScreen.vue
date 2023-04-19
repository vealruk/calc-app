<template>
  <input type="text" disabled :value="buffer">
</template>

<script>
export default {
  props: ['buffer']
}
</script>

<style>
 input {
  text-align: right;
  padding: 15px 10px 5px;
  height: 75px;
  color: #fff;
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: .05rem;
  background-color: #80FFCD;
  border: 15px solid #FB79A7;
  margin-bottom: 15px;
 }
</style>
