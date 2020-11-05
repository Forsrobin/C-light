<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Programmer">Programmer</router-link>
    </div>
    
    <router-view/>
  </div>
</template>

<style>
* {
  margin:0;
  padding:0;
}
body {
  background: #333;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  padding:10px 0;
  background: rgb(38, 1, 63);
}

#nav a {
  margin: 0 10px;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

#nav a.router-link-exact-active {
  color: rgb(115, 37, 167);
  border-bottom:  1px solid rgb(88, 23, 131);
}
.pageWrapper {
  width: 100%;
  height: auto;
}

</style>
