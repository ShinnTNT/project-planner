<template>
  <div class="home mt-4">
    <h2>Home</h2>
    <FilterNav @filterValue="current=$event" :current="current"></FilterNav>
    <div v-for="project in filteredProjects" :key="project.id">
      <SingleProject :project="project" @delete="deleteProject" @complete="completeProject"></SingleProject>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


import SingleProject from "@/components/SingleProject";
import FilterNav from "@/components/FilterNav";
export default {
  name: 'HomeView',
  data(){
    return {
      projects:[],
      current:"all"
    }
  },
  methods:{
    deleteProject(id){
        this.projects=this.projects.filter((project)=>{
           return project.id!=id
        })
    },
    completeProject(id){
      let findProject=this.projects.find((project) => {
        return  project.id===id
      });
      findProject.complete=!findProject.complete
    }
  },
  computed: {
    filteredProjects() {
        if(this.current==='complete'){
           return this.projects.filter((p)=>{
              return p.complete
           })
        }
      if(this.current==='ongoing'){
        return this.projects.filter((p)=>{
          return !p.complete
        })
      }
      return this.projects
    }
  },
  components: {
    FilterNav,
    SingleProject

  },
  mounted() {
    fetch('http://localhost:3000/projects')
    .then((response)=>{
      return response.json()
    })
    .then((datas)=>{
      this.projects =datas
    })
    .catch((err)=>{
       console.log(err.message)
    })
  }
}
</script>
