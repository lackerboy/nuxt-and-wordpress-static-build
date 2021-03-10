<template>
  <header class="header">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo-wrap" @click="hideMenu">
        <nuxt-link exact-active-class="active" tag="div" :to="'/'">
          <img v-if="this.$colorMode.value === 'light'" :class="width > 992?'logo':'mobile-logo'" src="/svg/logo-3.svg" alt="Логотип сайта">
          <img v-if="this.$colorMode.value === 'dark'" :class="width > 992?'logo':'mobile-logo'" src="/svg/logo-4.svg" alt="Логотип сайта">
        </nuxt-link>
      </div>
      <div class="d-flex align-items-center spacer">
        <nav :class="{active: mobileMenu, menu: true}">
          <ul class="menu-list">
            <li class="menu-item" @click="hideMenu">
              <nuxt-link tag="a" active-class="active" class="menu-link" to="/categories/">
                Категории
              </nuxt-link>
            </li>
            <li class="menu-item" @click="hideMenu">
              <nuxt-link tag="a" exact-active-class="active" class="menu-link" to="/tags/">
                Тэги
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="mode-icon-wrap">
          <v-icon
            v-if="this.$colorMode.value === 'dark'"
            name="ri-sun-line"
            fill="var(--color-secondary)"
            scale="1"
            @click="selectLightMode"
          />

          <v-icon
            v-if="this.$colorMode.value === 'light'"
            name="ri-moon-line"
            fill="var(--color-secondary)"
            scale="1"
            @click="selectDarkMode"
          />
        </div>

        <div class="actions">
          <div class="burger" :class="{active: mobileMenu}" @click="toggleMenu">
            <span />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      mobileMenu: false,
      show: false
    }
  },
  computed: {
    width () {
      return this.$store.getters.getWidth
    }
  },
  mounted () {
    if (process.browser) {
      window.addEventListener('resize', this.updateWidth)
      this.updateWidth()
    }
  },
  methods: {
    toggleMenu () {
      this.mobileMenu = !this.mobileMenu
    },
    hideMenu () {
      this.mobileMenu = false
    },
    selectLightMode () {
      this.$colorMode.preference = 'light'
      setTimeout(() => {
        this.$disqus.reset()
      }, 1)
    },
    selectDarkMode () {
      this.$colorMode.preference = 'dark'
      setTimeout(() => {
        this.$disqus.reset()
      }, 1)
    },
    updateWidth () {
      this.$store.commit('SET_WIDTH', window.innerWidth)
    }
  }
}
</script>

<style lang="scss">
.container {
  height: 100%;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--bg-secondary);
  z-index: 100;
  height: 60px;
  flex-grow: 0;
  border-bottom: 1px solid rgba(171, 171, 171, 0.2);
}

.logo-wrap {
  margin-top: 4px;
  user-select: none;
  z-index: 2;
  cursor: pointer;
}

.logo {
  width: 100px;
  height: auto;
}

.mobile-logo {
  width: 80px;
  height: auto;
}

.menu {
  position: relative;
}

h2 {
  cursor: pointer;
}

ul.menu-list {
  display: flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

li.menu-item {
  position: relative;
  list-style-type: none;
  margin: 0 .5rem;
}

li a.menu-link {
  position: relative;
  text-decoration: none;
  font-size: 18px;
  color: var(--color-secondary);
}

li a.menu-link:hover {
  opacity: .8;
}

.actions {
  display: none;
  margin-left: 20px;

  span {
    margin: 0;
    padding: 0;
    font-size: 15px;
    letter-spacing: -0.4px;
  }
}

.mode-icon-wrap {
  user-select: none;
  cursor: pointer;
  z-index: 2;
}

@media (max-width: 992px) {
  header {
    height: 50px;

    .actions {
      display: block;

      .burger {
        display: block;
        position: relative;
        width: 20px;
        height: 16px;
        margin-top: -4px;
        z-index: 10;
        cursor: pointer;

        span {
          content: "";
          position: absolute;
          background-color: var(--color-secondary);
          top: 50%;
          right: 0;
          width: 90%;
          height: 2px;
        }
      }
    }

    .burger:after {
      content: "";
      position: absolute;
      background-color: var(--color-secondary);
      right: 0;
      width: 70%;
      height: 2px;
      transition: transform .4s ease 0s;
    }

    .burger:before {
      content: "";
      position: absolute;
      background-color: var(--color-secondary);
      top: 100%;
      right: 0;
      width: 70%;
      height: 2px;
      transition: transform .4s ease 0s;
    }

    .burger.active:before {
      transform: rotate(45deg);
      top: 7px;
      width: 100%;
    }

    .burger.active:after {
      transform: rotate(-45deg);
      bottom: 7px;
      width: 100%;
    }

    .burger.active span {
      transform: scale(0);
    }

    .menu {
      position: fixed;
      display: flex;
      align-items: center;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--bg-secondary);
      transition: all .4s ease 0s;
      z-index: 1;

      .menu-list {
        position: absolute;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        left: 0;
        right: 0;
        width: 100%;

        .menu-item {
          font-size: 24px;
          padding: 1rem 0;
        }
      }
    }

    .menu.active {
      top: 0;
    }
  }

  .logo {
    z-index: 2;
  }

  .number {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    top: -85%;
    right: 0;
    width: 100%;
    transition: all .4s ease 0s;
  }

  .number.active {
    top: 85%;
    transition: all .4s ease 0s;
  }
}
</style>
