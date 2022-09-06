<template>
    <div>
      <h1> Strato! </h1>
      <h1> {{data.text}} </h1>
      <p @click="router.push('/')">Go To Strato</p>      
    </div>
  </template>
  
  <script setup>
    const { data } = await useFetch('/api/second')
    const router = useRouter()
  </script>