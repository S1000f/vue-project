<template>
  <div id="nav">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/databinding">Data Binding</router-link> |
      <router-link to="/rendering">Renderings</router-link> |
      <router-link to="/template-directive">Template directive</router-link> |
      <router-link to="/event">Event</router-link> |
      <router-link to="/computed">Computed And Watch</router-link> |
      <router-link to="/apidatabinding">API data binding</router-link> |
      <router-link to="/nestedcomponent">Components</router-link> |
    </div>
    <div>
      <router-link to="/slot">Slot</router-link> |
      <router-link to="/provider">Provider / Inject</router-link> |
      <router-link to="/calc">Calculator1</router-link> |
      <router-link to="/compoCalc">Composition Calculator</router-link> |
      <router-link to="/store">Vuex</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/transition" tag="button">Transition</router-link> |
      <router-link to="/route">Router</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
