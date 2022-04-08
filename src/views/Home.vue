<template>
  <div class="container">
    <Header />
    <form @submit.prevent="realizarBusqueda">
      <div>
        <input class="input-buscar" type="text" :placeholder="placeholder" v-model="busqueda" required>       
        <button class="btn-buscar" type="submit" :disabled="!busqueda">Buscar <font-awesome-icon :icon="['fas', 'search']"/></button><br>
        <small>Filtrar por: </small>
        <select class="filtro" v-model="criterioBusqueda" @change="realizarBusqueda">
          <option value="intitle">Titulo</option>
          <option value="inauthor">Autor</option>
        </select>
      </div>
    </form>
    <hr>
    <h4 v-if="criterio">Criterio de búsqueda: {{ criterio }}</h4>
    <LibrosResult :libros="libros"/>
    <Footer />
  </div>
</template>

<script>
import LibrosResult from '../components/LibrosResult'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default {
  name: 'Home',
  components:{
    LibrosResult, Footer, Header
  },
  data() {
    return {
      libros: [],
      busqueda: '',
      criterio: '',
      estadoCheck: false,
      criterioBusqueda: 'intitle',
      placeholder: 'Buscar por Titulo'
    }
  },
  methods:{
    checkFiltro(){
      this.placeholder === 'Buscar por Titulo' ? this.placeholder = 'Buscar por Autor': this.placeholder = 'Buscar por Titulo'
    },
    async realizarBusqueda(){
            try {

                const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.criterioBusqueda}:${this.busqueda}`);

                const data = await res.json();
                this.libros = data.items;
                this.criterio = this.busqueda;
                this.busqueda= '';
            } catch (error) {
                console.log(error);
            }
        }
  }

}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

  .container{
    margin: 0;
    padding: 0 0 80px 0;
    font-family: 'Open Sans Condensed';
    font-size: 20px;
  }
  .input-buscar{
    width: 200px;
    height: 30px;
    border: 1px solid #969393;
    border-radius: 5px;
    font-family: 'Open Sans Condensed';
    font-size: 20px;
    text-align: center;
  }
  .btn-buscar{
    margin-top: 10px;
    margin-left: 10px;
    padding: 10px 20px 10px 20px;
    background-color: #16a085;
    color: white;
    border-radius: 10px;
    border: none;
    transition: 0.3s;
    cursor: pointer
  }
  .btn-buscar:hover{
    background-color: #29c0a2;
  }
  .btn-buscar:disabled{
    margin-top: 10px;
    padding: 10px 20px 10px 20px;
    background-color: #cccccc;
    color: rgb(129, 128, 128);
  }
  .filtro{
    margin: 10px 10px 10px 10px;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    text-align-last:center;
    background: #e9e9e9;
    color: #34495E;
    cursor: pointer;
  }

</style>
