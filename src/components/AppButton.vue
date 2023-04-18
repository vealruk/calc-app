<template>
  <button
    class="btn"
    @click="$emit('handler')"
    :data-type="type"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  emits: ['handler'],
  props: ['type', 'text']
}
</script>

<style lang="scss">
  .btn {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-weight: 600;
    font-size: 1.4rem;
    background-color: rgba(192, 192, 192, 0.51);
    color: #fff;
    cursor: pointer;
  }
</style>
