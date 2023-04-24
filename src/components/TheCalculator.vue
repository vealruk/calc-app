<template>
  <div class="calc">
    <calc-screen v-model:value="buffer" />

    <div class="calc__grid">
      <calc-button v-for="btn in calculateButtons" :text="btn.text" :key="btn.id" :type="btn.type" @handler="clickBtn">
        {{ btn.text }}
      </calc-button>
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
      const $targetDataValue = event.target.dataset.value
      if (isNaN($targetDataValue)) {
        this.handleSymbol($targetDataValue)
      } else {
        this.handleNumber($targetDataValue)
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
            this.buffer = String(this.buffer).replace('-', '')
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
          if (this.isFullBuffer('0') || this.isFullBuffer('-0')) {
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
      if (this.isFullBuffer('0')) {
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
      if (this.isFullBuffer('0')) {
        this.buffer = val
      } else if (this.isFullBuffer('-0')) {
        this.buffer = -val
      } else {
        this.buffer += val
      }
    },
    isFullBuffer (str) {
      return this.buffer === str
    }
  },
  components: {
    CalcScreen,
    CalcButton
  }
}

</script>

<style lang="scss" scoped>
  .calc {
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 48px;
    max-width: 375px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: radial-gradient(58.27% 29.13% at 100% 100%, rgba(54, 195, 255, 0.5) 0%, rgba(54, 195, 255, 0) 100%)
      , radial-gradient(53.87% 26.93% at 22.4% -4.2%, rgba(54, 195, 255, 0.75) 0%, rgba(54, 195, 255, 0.1875) 60.09%, rgba(54, 195, 255, 0) 100%)
      , rgba(13, 31, 38, 0.9);
    backdrop-filter: blur(12px);
    border-radius: 40px;

    &__grid {
      display: grid;
      grid-template-columns: repeat(4, 69px);
      grid-template-rows: repeat(5, 60px);
      justify-content: center;
      column-gap: 20px;
      row-gap: 12px;
    }
  }

</style>
