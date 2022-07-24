<template>
  <div id="app">
    <div id="main-screen">
      <b-container fluid class="h-100">
        <router-view>

        </router-view>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss">
html, body {
  height: 100%;
}

#app {
  display: flex;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: lightcyan;
}

#main-screen {
  width: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
