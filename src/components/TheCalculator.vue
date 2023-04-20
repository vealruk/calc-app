<template>
  <div class="calc">
    <calc-screen v-model:buffer="buffer" />

    <div class="calc__grid">
      <calc-button v-for="btn in calculateButtons" :text="btn.text" :key="btn.id" @handler="clickBtn" />
    </div>
  </div>
</template>

<script>
import CalcScreen from './CalcScreen.vue'
import CalcButton from './CalcButton.vue'

export default {
  data () {
    return {
      value: 0,
      buffer: '0',
      prevOperator: null
    }
  },
  inject: ['calculateButtons'],
  methods: {
    clickBtn (event) {
      const $targetData = event.target.dataset

      if (isNaN($targetData.value)) {
        this.handleSymbol($targetData.value)
      } else {
        this.handleNumber($targetData.value)
      }
    },
    handleSymbol (symbol) {
      let index
      switch (symbol) {
        case 'c':
          this.value = 0
          this.buffer = '0'
          break
        case '±':
          index = String(this.buffer).indexOf('-')
          if (index === -1) {
            this.buffer = '-' + this.buffer
          } else {
            this.buffer = String(this.buffer).replace((/-\s*/), '')
          }
          break
        case '←':
          if (this.buffer.length === 1) {
            this.buffer = '0'
          } else {
            this.buffer = String(this.buffer).slice(0, this.buffer.length - 1)
          }
          break
        case '=':
          if (this.prevOperator === null) {
            return null
          }
          this.flushOperation(parseInt(this.buffer))

          this.buffer = this.value
          this.value = 0
          break
        case '%':
          if (this.buffer === '0' || this.buffer === '-0') {
            this.buffer = '0'
          } else {
            this.buffer = this.buffer / 100
          }
          break
        case '÷':
        case '×':
        case '−':
        case '+':
          this.handleMath(symbol)
          break
      }
    },
    handleMath (symbol) {
      if (this.buffer === '0') {
        return null
      }
      const intBuffer = parseInt(this.buffer)

      if (this.value === 0) {
        this.value = intBuffer
      } else {
        this.flushOperation(intBuffer)
      }

      this.prevOperator = symbol
      this.buffer = '0'
    },
    flushOperation (intBuffer) {
      if (this.prevOperator === '+') {
        this.value += intBuffer
      } else if (this.prevOperator === '−') {
        this.value -= intBuffer
      } else if (this.prevOperator === '÷') {
        this.value /= intBuffer
      } else if (this.prevOperator === '×') {
        this.value *= intBuffer
      }
    },
    handleNumber (val) {
      if (this.buffer === '0') {
        this.buffer = val
      } else if (this.buffer === '-0') {
        this.buffer = -val
      } else {
        this.buffer += val
      }
    }
  },
  components: { CalcScreen, CalcButton }
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
      grid-template-columns: repeat(4, 50px);
      grid-template-rows: repeat(5, 50px);
      justify-content: center;
      column-gap: 15px;
      row-gap: 10px;
      padding-bottom: 15px;
    }
  }
</style>
