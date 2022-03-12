<template>
 <h3 class="fw-bold mt-5">Edit Project</h3>
  <form @submit.prevent="updateProject" class="mt-5">
    <label class="form-label text-uppercase fw-bold text-black-50">project title</label>
    <input type="text" class="form-control mb-3" v-model="title">

    <label class="form-label text-uppercase fw-bold text-black-50 mt-2">project detail</label>
    <input type="text" class="form-control mb-4" v-model="detail">

    <div class="text-center">
      <button class="btn btn-primary rounded" @click="">Update Project</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "EditProject",
  props:['id'],
  data() {
    return {
      title: "",
      detail: "",
    }
  },
  methods: {
    updateProject() {
      fetch('http://localhost:3000/projects/'+this.id,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          title:this.title,
          detail:this.detail
        })
      })
      .then(()=>{
         this.$router.push({name:'home'})
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects/'+this.id)
    .then((response)=>{
        return response.json()
    })
     .then((datas)=>{
       this.title=datas.title;
       this.detail=datas.detail
     })
    .catch((err)=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>