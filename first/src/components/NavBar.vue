<template>
<nav class="main-nav">
  <router-link to="/">Projects</router-link>
  <router-link :to="{name:'AddPost'}">Add Post</router-link>
</nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.main-nav{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
a{
  text-decoration: none;
  margin-left: 10px;
  color: black;
  font-weight: bold;
}
a.router-link-active{
  border-bottom: 2px solid greenyellow;
}
</style>