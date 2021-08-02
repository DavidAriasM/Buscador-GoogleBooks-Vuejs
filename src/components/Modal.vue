<template>
    <div>
        <transition name="fade">
            <div class="modal-overlay" v-if="showModal"></div>
        </transition>
        <transition name="fade">
            <div class="modal" v-if="showModal">
                <button @click="showModal = false" class="btn-cerrar-modal">X</button>
                <h1 style="margin:0px;">{{ libro.volumeInfo.title }}</h1>
                <h3 v-if="!libro.volumeInfo.authors">
                    Autor no disponible - {{ libro.volumeInfo.publisher }}
                </h3>
                <h3 v-else style="margin:0px;">
                    <span v-for="(autor, index) in libro.volumeInfo.authors" :key="index">
                        {{ index + 1 !== libro.volumeInfo.authors.length && index + 1 !== libro.volumeInfo.authors.length-1 ? autor + ', ' : index + 1 == libro.volumeInfo.authors.length && index+1 !== 1 ? ' y ' + autor : autor }} 
                    </span> - {{ libro.volumeInfo.publisher }} 
                </h3>
                <hr>
                <div class="detalle">
                    <div v-if="libro.volumeInfo.imageLinks">
                    <img class="img-libro" :src="libro.volumeInfo.imageLinks.thumbnail"  width="150" height="250" :alt="libro.volumeInfo.title">
                    </div>
                    <div v-else>
                        <img class="img-libro" src="https://www.atlantik.cl//assets/img/no_disponible1.jpg" width="180" height="150" :alt="libro.volumeInfo.title">
                    </div>
                    <div class="ficha-tecnica">
                        <h4 style="text-align:center;">Ficha Técnica</h4>
                        <ul>
                            <li >ISBN: <em v-for="(isbn, index) in libro.volumeInfo.industryIdentifiers" :key="index">{{ isbn.type }} </em></li>
                            <li>Editorial: {{ libro.volumeInfo.publisher }}</li>
                            <li v-if="!libro.volumeInfo.categories">Categoría: Sin Categoría</li>
                            <li v-else>Categoría: <em v-for="(categoria, index) in libro.volumeInfo.categories" :key="index">{{ categoria }} </em></li>
                            <li>Idioma: <span style="text-transform:capitalize;">{{ libro.volumeInfo.language }}</span></li>
                            <li>Fecha de Publicación: {{ libro.volumeInfo.publishedDate }}</li>
                            <li>N° de páginas: {{ libro.volumeInfo.pageCount }}</li>
                        </ul>
                        <div class="btn-previo">
                            <a :href="libro.volumeInfo.previewLink" target="_blank">Previo <font-awesome-icon :icon="['fas', 'book']"/></a>
                        </div>
                        <div class="btn-comprar">
                            <a :href="libro.volumeInfo.infoLink" target="_blank">Comprar <font-awesome-icon :icon="['fas', 'shopping-basket']"/> </a>
                        </div>
                    
                    </div>
                    
                    <div class="sinopsis" v-if="libro.volumeInfo.description">
                        <p style="text-align:left;"><b>Sinópsis</b> <br><br> <em> {{ libro.volumeInfo.description }}</em></p>
                    </div>
                    <div class="sinopsis" v-else>
                        <p><b>Sinópsis</b> <br><br> No hay información de la sinopsis de este título.</p>
                    </div>  
                </div>
            </div>
        </transition>
        <button @click="showModal = true" class="btn-detalle">Ver Detalle</button>
    </div>
</template>
<script>
export default {
    data() {
        return{
            showModal: false
        }
    },
        props:{
            libro: {
                type: Object,
                required: true
            }
        }
}
</script>
<style scoped>

.modal-overlay{
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.4);
}
.modal{
    width: 60%;
    min-height: 50%;
    max-height: 90%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: white;
    padding: 5px 5px 5px 5px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    z-index: 101;
    overflow: auto;
}

.detalle{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 20px;
}
.btn-detalle{
    width: 60%;
    margin:10px auto auto auto;
    padding: 8px 20px 8px 20px;
    background-color: #e74c3c;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}
.btn-cerrar-modal{
    width: 30px;
    margin:0 auto auto auto;
    float: right;
    top: 0;
    padding: 8px 8px 8px 8px;
    background-color: #e74c3c;
    color: white;
    border-radius: 20%;
    border: none;
    cursor: pointer;
}


.btn-previo, .btn-comprar{
    width: 50%;
    margin:5px auto auto auto;
    padding: 8px 10px 8px 10px;
    border-radius: 3px;
    border: none;
    transition: 0.3s;
    bottom: 0;
    text-align: center;
}

.btn-comprar{
    background-color: #e03e2c;
}

.btn-previo{
    background-color: #16a085;
}

.btn-previo:hover{
    background-color: #29c0a2;
}
.btn-comprar:hover{
    background-color: #df3b29;
}
.btn-previo a, .btn-comprar a{
    text-decoration: none;
    color: white;
}
.ficha-tecnica{
    margin: 0px 5px 0px 5px;
    padding: 0px 10px 0px 10px;
    max-width: 20%;
    min-height: 250px;
    border: 0.5px solid #d4d4d4;
    border-radius: 2px;
    font-size: 13px;
    text-align: left;
    background-color: #e7e7e7;
}
.sinopsis{
    margin: 0px 5px 10px 5px;
    padding: 5px 20px 20px 20px; 
    max-width: 50%;
    min-height: 200px;
    max-height: 400px;
    border: 0.5px solid #d4d4d4;
    border-radius: 10px;
    font-size: 13px;
}

.sinopsis p{
    display: -webkit-box;
    -webkit-line-clamp: 15;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

@media(max-width:1300px){
    .detalle{
        justify-content: center;
    }
    .ficha-tecnica{
        max-width: 60%;
        margin-left: 0;
    }
    .sinopsis{
        max-width: 100%;
    }
}

@media(max-width:700px){

    .detalle{
        flex-direction: column;
        align-items: center;

    }
    .ficha-tecnica{
        max-width: 100%;
        margin-left: 0;
    }
    .sinopsis{
        max-width: 100%;
        margin-top: 5px;
    }
}
@media(max-width:350px){

    .ficha-tecnica, .sinopsis{
        font-size: 12px;
    }
}
</style>