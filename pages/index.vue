<template>
    <div>
      <h1> Coder! </h1>
      <h1> {{data.text}} </h1>
      <p @click="router.push('/strato')">Go To Strato</p>      
    </div>
  </template>
  
  <script setup>
    const { data } = await useFetch('/api/general')
    const router = useRouter()
  </script>