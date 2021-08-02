<template>
        <div class="libros"> 
            <div v-if="libro.volumeInfo.imageLinks" class="img-seccion">
                <div>
                    <div class="ebook" v-if="libro.saleInfo.isEbook">EBOOK</div>
                    <div class="sin-ebook" v-else></div>
                    <div class="pdf" v-if="libro.accessInfo.pdf.isAvailable">PDF</div>
                </div>
                 <img :src="libro.volumeInfo.imageLinks.thumbnail"  width="100" height="150" alt="">
            </div>
            <div v-else>
                <img src="https://www.atlantik.cl//assets/img/no_disponible1.jpg" width="180" height="150" :alt="libro.volumeInfo.title">
            </div> 
            <div class="contenido">
                <p v-if="!libro.volumeInfo.title"><b>Título no Disponbile</b></p>
                <p v-else><b>{{ libro.volumeInfo.title }}</b></p>
                <span v-if="!libro.volumeInfo.authors">
                    Autor no disponible
                </span>
                <span v-else>
                    Por 
                    <span v-for="(autor, index) in libro.volumeInfo.authors" :key="index">
                        <em>
                            {{ index + 1 !== libro.volumeInfo.authors.length && index + 1 !== libro.volumeInfo.authors.length-1 ? autor + ', ' : index + 1 == libro.volumeInfo.authors.length && index+1 !== 1 ? ' y ' + autor : autor }}
                        </em>
                    </span>
                </span><br>
                <div v-if="libro.volumeInfo.averageRating">
                    <div class="rating" v-for="(star, index) in Math.round(libro.volumeInfo.averageRating)" :key="index">
                        &#9733;
                    </div> 
                        {{ libro.volumeInfo.ratingsCount}} 
                        <font-awesome-icon :icon="['fas','user']" :style="{ color: '#34495E' }" size="xs"/>
                </div>
                <div v-else>
                    <small> Sin Valoraciones </small>
                </div>
            </div>
            <Modal :libro="libro"/>
        </div>
</template>
<script>
import Modal from '../components/Modal'
export default {
    components:{
        Modal
    },
    props:{
        libro:{type:Object, required:true}
    }
}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

.contenido{
    text-transform: capitalize;
    font-family: 'Open Sans Condensed';
    font-size: 18px;
}
.contenido p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.libros{
    border:2px solid #d5d5d5; 
    width:200px; 
    max-height:500px;
    display: inline-block;
    margin-left: auto;
    margin-right: 20px;
    padding-bottom:10px ;
    border-radius: 5px;
    box-shadow: 3px 2px 2px 1px rgba(3, 3, 3, 0.3);
    background: white;
    margin-top: 10px;
}
.img-seccion{
    display: flex;
}
.ebook{
    width: 50px;
    height: 20px;
    background: #25aa8f;
    color: white;
    font-size: 13px;
    padding-top: 5px;
    text-align: center;
}
.sin-ebook{
    width: 50px;
    background: #fff;
}
.pdf{
    width: 50px;
    height: 20px;
    background: #E74C3C;
    color: white;
    font-size: 13px;
    padding-top: 5px;
    text-align: center;
}

.rating{
    color: #fbc531;
    display: inline-block;
    justify-content: center;
    font-size: 20px;
}
</style>