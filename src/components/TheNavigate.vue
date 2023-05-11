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

<style lang="scss" scoped>
  .nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    color: rgba(32, 54, 64, 0.75);

    @media (min-width: 768px) {
      padding: 10px 30px;
    }

    button {
      border-radius: 50%;
      border: 5px solid #fff;
      margin-right: 10px;
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
        font-size: .9rem;

        @media (min-width: 330px) {
          font-size: inherit;
        }

        &.active {
          text-decoration: underline;
        }

        @media (pointer: fine) {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

</style>
