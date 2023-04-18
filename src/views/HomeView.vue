<template>
  <div class="home">
    <h1 class="home__title">Welcome to my simple calculator!</h1>
    <p class="home__text">Here you can do simple calculations.</p>

    <div class="home__info">
      <div class="home__card">
        <p>Online calculators are a convenient and easy way to quickly perform calculations on the internet. Here are a few reasons why using online calculators can be beneficial:</p>
      </div>
      <ul class="home-list">
        <li class="home-list__item" v-for="about in aboutList" :key="about.id">
          {{ about.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['aboutList']
}
</script>

<style lang="scss" scoped>
  .home {
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

    &__card {
      padding: 10px;
      background-color: #fff;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    &__info {
      p {
        font-weight: 600;
        font-size: .8rem;
        color: #42275a;
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
