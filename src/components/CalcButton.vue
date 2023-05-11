<template>
  <button :class="['btn', className]" @click="$emit('handler', $event.target)" :data-key="text">
    <slot />
  </button>
</template>

<script>
export default {
  emits: ['handler'],
  props: {
    text: {
      type: String,
      required: true
    },
    className: {
      class: String
    }
  }
}
</script>

<style lang="scss">
  .btn {
    font-size: 1.4rem;
    background: rgba(32, 54, 64, 0.75);
    backdrop-filter: blur(9px);
    border-radius: 16px;
    color: #80D9FF;
    cursor: pointer;
    transition: .1s linear;
    text-transform: uppercase;
    border: 1px solid rgba(255, 255, 255, 0.25);

    &.func {
      background: rgba(0, 70, 102, 0.75);

      @media (pointer: fine) {
        &:hover {
          background: rgba(0, 121, 179, 0.75);
        }
      }

      &:active {
        background: rgba(0, 121, 179, 0.75);
      }
    }

    @media (pointer: fine) {
      &:hover {
        background: rgba(59, 101, 119, 0.75);
      }
    }

    &:active {
      background: rgba(59, 101, 119, 0.75);
    }
  }

</style>
