<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #2c3e50;
}

</style>
<script>
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar}
}
</script>