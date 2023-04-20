<template>
  <div class="container" @dblclick.prevent>
    <the-navigate />

    <router-view />
  </div>
</template>

<script>
import TheNavigate from '@/components/TheNavigate'

export default {
  data () {
    return {
      aboutList: [
        { id: '1', text: 'Convenience: Online calculators are available anytime and anywhere there is internet access. You can easily access the calculator using your computer, smartphone, or tablet.' },
        { id: '2', text: 'Variety of functions: Online calculators offer many functions that allow you to perform different types of calculations - from simple arithmetic operations to complex mathematical formulas and statistical calculations.' },
        { id: '3', text: 'Time-saving: Using online calculators can significantly save time, especially if you need to quickly perform complex calculations.' },
        { id: '4', text: 'Free of charge: Most online calculators are provided for free, making them accessible to all users.' }
      ],
      calculateButtons: [
        { id: '1', text: 'c' },
        { id: '2', text: '±' },
        { id: '3', text: '%' },
        { id: '4', text: '÷' },
        { id: '5', text: '7' },
        { id: '6', text: '8' },
        { id: '7', text: '9' },
        { id: '8', text: '×' },
        { id: '9', text: '4' },
        { id: '10', text: '5' },
        { id: '11', text: '6' },
        { id: '12', text: '−' },
        { id: '13', text: '1' },
        { id: '14', text: '2' },
        { id: '15', text: '3' },
        { id: '16', text: '+' },
        { id: '17', text: '0' },
        { id: '18', text: '←' },
        { id: '19', text: '=' }
      ]
    }
  },

  provide () {
    return {
      aboutList: this.aboutList,
      calculateButtons: this.calculateButtons
    }
  },
  components: { TheNavigate }
}

</script>

<style lang="scss">
  html {
    font-size: 20px;
  }

  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    font-size: 1rem;
    font-family: sans-serif;
    background: -webkit-linear-gradient(to right, #42275a, #734b6d);
    background: linear-gradient(to right, #42275a, #734b6d);
    background-repeat: no-repeat;
    color: #fff;
  }

  #app {
    width: 100vw;
    min-height: 100vh;
    padding-bottom: 30px;
  }

  .container {
    max-width: 600px;
    padding: 0 10px;
    margin: 0 auto;

    @media (min-width: 768px) {
      padding: 0 30px;
    }
  }

</style>
