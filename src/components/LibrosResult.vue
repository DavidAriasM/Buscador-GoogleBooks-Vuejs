<template>
    <div class="libros-lista">
        <Libro v-for="(libro, index) in libros" :key="index" :libro="libro"/>
    </div>
</template>
<script>
import Libro from '../components/Libro'
export default {
    props:{
        libros:{type:Array, required: true}
    },
    components:{
        Libro
    }
}
</script>
<style scoped>
</style>