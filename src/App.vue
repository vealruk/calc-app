<template>
  <TheNavigate />

  <div className="container" @dblclick.prevent>
    <!-- Таким образом можно сохранить стейт в роутере -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.fullPath"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import TheNavigate from '@/components/TheNavigate'
import { provide, reactive } from 'vue'

export default {
  setup () {
    const aboutList = reactive([
      { text: 'Convenience: Online calculators are available anytime and anywhere there is internet access. You can easily access the calculator using your computer, smartphone, or tablet.' },
      { text: 'Variety of functions: Online calculators offer many functions that allow you to perform different types of calculations - from simple arithmetic operations to complex mathematical formulas and statistical calculations.' },
      { text: 'Time-saving: Using online calculators can significantly save time, especially if you need to quickly perform complex calculations.' },
      { text: 'Free of charge: Most online calculators are provided for free, making them accessible to all users.' }
    ])

    const calculateButtons = reactive([
      { text: 'c', className: 'func' },
      { text: '±', className: 'func' },
      { text: '%', className: 'func' },
      { text: '÷', className: 'func' },
      { text: '7' },
      { text: '8' },
      { text: '9' },
      { text: '×', className: 'func' },
      { text: '4' },
      { text: '5' },
      { text: '6' },
      { text: '−', className: 'func' },
      { text: '1' },
      { text: '2' },
      { text: '3' },
      { text: '+', className: 'func' },
      { text: '0' },
      { text: '.' },
      { text: '←' },
      { text: '=', className: 'func' }
    ])

    provide('buttons', calculateButtons)
    provide('lists', aboutList)
  },
  components: { TheNavigate }
}

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600;700&display=swap');

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
    font-family: Inter, sans-serif;
    font-weight: 700;
    color: #fff;
  }

  #app {
    width: 100vw;
    min-height: 100vh;
    padding-bottom: 30px;
    background-image: url('./assets/img/bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container {
    max-width: 600px;
    padding: 110px 10px 0;
    margin: 0 auto;

    @media (min-width: 768px) {
      padding: 110px 30px 0;
    }
  }

</style>
