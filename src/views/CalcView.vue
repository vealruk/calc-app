<template>
  <div class="calc">
    <app-screen v-model:value="value"/>
    <app-button text="Smash me" type="btn" @handler="clickBtn"/>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppScreen from '@/components/AppScreen'

export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    clickBtn () {
      this.value = 'SMASHEEED'
    }
  },
  components: { AppButton, AppScreen }
}
</script>

<style lang="">

</style>
