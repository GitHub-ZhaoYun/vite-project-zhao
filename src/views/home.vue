<script setup>
const text = ref('Edit me');
const checkedNames = ref(['Jack'])
</script>

<template>
    <input v-model="text"> {{ text }}
    <br/>
</template>

<style scoped>

</style>
