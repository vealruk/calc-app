<template>
  <div class="home">
    <h1 class="home__title">Welcome to my simple calculator!</h1>
    <p class="home__text">Here you can do simple calculations.</p>

    <div class="home__info card">
      <p>Online calculators are a convenient and easy way to quickly perform calculations on the internet. Here are a few reasons why using online calculators can be beneficial:</p>
      <ul class="home-list">
        <li class="home-list__item" v-for="about in aboutList" :key="about.text">
          {{ about.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup () {
    const aboutList = inject('lists')

    return { aboutList }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    color: rgba(32, 54, 64, 0.75);

    &__title {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 15px;
    }

    &__text {
      text-align: center;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .card {
      padding: 10px;
      background-color: #fff;
      border-radius: 10px;
    }

    &__info {
      p {
        font-weight: 600;
        font-size: .8rem;
        margin-bottom: 10px;
      }
    }

    &-list {
      padding-left: 20px;

      @media (min-width: 768px) {
        padding-left: 30px;
      }

      &__item {
        font-size: .8rem;
        font-weight: 500;
        list-style: decimal;
        margin-bottom: 5px;
      }
    }
  }
</style>
