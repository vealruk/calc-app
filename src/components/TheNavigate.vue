<template>
  <nav class="nav">
    <router-link custom to="/home" v-slot="{ navigate }">
      <img src="@/assets/img/calc.jpg" alt="calc" @click="navigate">
    </router-link>
    <div class="nav__link">
      <router-link custom to="/home" v-slot="{ navigate, href }">
       <a
         href="#"
         @click="navigate"
         :class="{'active': this.$route.path.indexOf(href) !== -1}"
        >
          Home</a>
      </router-link> |
      <router-link to="/calc">Start Calculate</router-link>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0 30px;

    img {
      border-radius: 50%;
      max-width: 60px;
      margin-bottom: 10px;
      transition: transform .1s linear;
      cursor: pointer;

      @media (pointer: fine) {
        &:hover {
          transform: scale(1.1)
        }
      }
    }

    &__link {
      a {
        text-decoration: none;
        color: inherit;
        transition: color .1s linear;

        &.active {
          text-decoration: underline;
          color: peachpuff;
        }

        @media (pointer: fine) {
          &:hover {
            color: peachpuff;
          }
        }
      }
    }
  }

</style>
