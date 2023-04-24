<template>
  <nav class="nav">
    <router-link custom to="/home" v-slot="{ navigate }">
      <button @click="navigate">
        <img src="@/assets/img/calculator.png" alt="calc">
      </button>
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
    padding: 15px 0;

    @media (min-width: 768px) {
      padding: 10px 0 30px;
    }

    button {
      border-radius: 50%;
      border: 5px solid #fff;
      margin-bottom: 10px;
      transition: transform .1s linear;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      cursor: pointer;

      img {
        max-width: 60px;
      }

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
          color: rgba(32, 54, 64, 0.75);
        }

        @media (pointer: fine) {
          &:hover {
            color: rgba(32, 54, 64, 0.75);
          }
        }
      }
    }
  }

</style>
