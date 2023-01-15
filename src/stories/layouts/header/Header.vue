<template>
  <header>
    <div class="header__wrapper">
      <div>
        <svg
          class="header__wrapper__logo"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF" />
            <path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9" />
            <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
          </g>
        </svg>
        <h1 class="header__wrapper__heading">Acme</h1>
      </div>
      <div>
        <span class="header__wrapper__welcome-text" v-if="user"
          >Welcome, <b>{{ user.name }}</b
          >!</span
        >
        <CowButton class="header__wrapper__button" size="sm" @click="$emit('logout')" label="Log out" v-if="user" />
        <CowButton class="header__wrapper__button" size="sm" @click="$emit('login')" label="Log in" v-if="!user" />
        <CowButton primary size="sm" @click="$emit('createAccount')" label="Sign up" v-if="!user" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import CowButton from "@/stories/atoms/button/CowButton.vue";

export default {
  name: "MyHeader",

  components: { CowButton },

  props: {
    user: {
      type: Object,
      default: () => {
        return {
          user: { name: "John Doe" },
        };
      },
    },
  },

  emits: ["login", "logout", "createAccount"],
};
</script>

<style lang="scss">
$text-dark-700: #333333;
$dark-color: #000000;
.header__wrapper {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba($dark-color, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header__wrapper__logo {
    display: inline-block;
    vertical-align: top;
  }

  .header__wrapper__heading {
    font-weight: 900;
    font-size: 20px;
    line-height: 1;
    margin: 6px 0 6px 10px;
    display: inline-block;
    vertical-align: top;
  }

  .header__wrapper__button {
    margin: 0px 10px 0px 10px;
  }

  .header__wrapper__welcome-text {
    color: $text-dark-700;
    font-size: 14px;
    margin-right: 10px;
  }
}
</style>
