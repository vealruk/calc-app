<template>
  <div class="calc">
    <app-screen v-model:value="value"/>

    <div class="calc__grid">
      <app-button
        text="С"
        type="btn"
        @handler="clickBtn($event)"
      />
      <app-button
        text="&#177;"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="%"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="&#247;"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="7"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="8"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="9"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="&#215;"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="4"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="5"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="6"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="&#8722;"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="1"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="2"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="3"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="+"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="0"
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="."
        type="btn"
        @handler="clickBtn"
      />
      <app-button
        text="="
        type="btn"
        @handler="clickBtn"
      />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppScreen from '@/components/AppScreen'

export default {
  data () {
    return {
      value: 0
    }
  },
  methods: {
    clickBtn (event) {
      console.log(event)
      this.value = 'SMASHEEED'
    }
  },
  components: { AppButton, AppScreen }
}
</script>

<style lang="scss">
  .calc {
    margin: 0 auto;
    max-width: 300px;
    background-color: #FFA998;
    border: 10px solid #A68CFF;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;

    &__grid {
      display: grid;
      grid-template-columns: repeat(4, auto);
      grid-template-rows: repeat(5, auto);
      justify-items: center;
      row-gap: 10px;
      padding-bottom: 15px;
    }
  }
</style>
