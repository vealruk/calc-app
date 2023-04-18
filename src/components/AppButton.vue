<template>
  <button class="btn" @click="$emit('handler')" :data-type="type">
    {{ text }}
  </button>
</template>

<script>
export default {
  emits: ['handler'],
  props: ['type', 'text']
}
</script>

<style lang="scss" scoped>

</style>
