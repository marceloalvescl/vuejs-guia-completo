import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    selecionarFilme(filmeSelecionado) {
      this.$emit('selecionarFilme', filmeSelecionado)
    },
    editarFilme(filmeSelecionado){
      this.$emit('editarFilme', filmeSelecionado)
    },
    atualizarFilme(filmeAtualizado){
      this.$emit('atualizarFilme', filmeAtualizado)
    },
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
