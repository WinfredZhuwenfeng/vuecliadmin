<template>
  <div id="app">
    <brother-a></brother-a>
    <brother-b></brother-b>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import { mapState } from 'vuex'

  const store = new Vuex({
    state:{
      count:10
    },
    mutations:{
      increment () {
        count++
      },
      reduce () {
        count--
      }
    }
  })

  new Vue({
    el:#app,
    components:{
      brotherA:{
        data () {},
        computed:{count () {return store.sate.count}}
        methods:{increment () {store.commit('increment')}},
        template:`
<div>
  <h1>brotherA {{count}}</h1>
  <button @click = 'increment'>brotherA+1</button>
</div>
        `
      },
      brotherB:{
        data () {},
        computed:{count () {return store.sate.count}}
        methods:{reduce () {store.commit('reduce')}},
        template:`
<div>
  <h1>brotherA {{count}}</h1>
  <button @click = 'reduce'>brotherA-1</button>
</div>
        `
      }
    }
  })
</script>

<style>
  
</style>
