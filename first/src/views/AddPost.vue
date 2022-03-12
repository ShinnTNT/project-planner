<template>
 <div>
   <h4 class="mt-4 fw-bold">Add Post</h4>
   <form @submit.prevent="addProject" class="mt-4">
     <label class="form-label text-uppercase fw-bold text-black-50">project title</label>
     <input type="text" class="form-control mb-3" v-model="title">

     <label class="form-label text-uppercase fw-bold text-black-50 mt-2">project detail</label>
     <input type="text" class="form-control mb-4" v-model="detail">

     <div class="text-center">
       <button class="btn btn-primary rounded">Add Post</button>
     </div>
   </form>
 </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      title: "",
      detail: "",
    }
  },
  methods: {
    addProject() {
       fetch('http://localhost:3000/projects',{
         method:"POST",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify({
           title:this.title,
           detail:this.detail,
           complete:false
         })
       })
      .then(()=>{
         this.$router.push({name:'home'})
      })
      .catch((err)=>{
        console.log(err.message)
      })
    }
  },
}
</script>

<style scoped>

</style>