import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        libros: [],
        librosFiltrados: []
    },
    mutations: {
        setLibros(state, payload) {
            state.libros = payload;
        }
    },
    actions: {
        async fetchData({ commit }) {
            try {
                const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms');
                const data = await res.json();
                commit("setLibros", data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    modules: {}
})