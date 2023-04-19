<template>
  <button
    class="btn"
    @click="$emit('handler', $event)"
    :data-value="text"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  emits: ['handler'],
  props: ['text']
}
</script>

<style lang="scss">
  .btn {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-weight: 600;
    font-size: 1.4rem;
    background-color: rgba(192, 192, 192, 0.6);
    color: #fff;
    cursor: pointer;
    transition: .1s linear;

    &[data-value="0"] {
      width: 115px;
      border-radius: 30px;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    @media (pointer: fine) {
      &:hover {
        background-color: rgba(192, 192, 192, 0.4);
      }
    }
    &:active {
        background-color: rgba(192, 192, 192, 0.4);
    }
  }
</style>
