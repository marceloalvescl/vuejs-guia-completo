<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcatenado }} | {{ ano }}</span>
        <button class="btn btn-secondary float-right">Selecionar</button>
    </li>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
      /*default() {
        return 'Marvel Vingadores'
      },
      validator(filmeTitulo) {
        return filmeTitulo.includes('Marvel')
      }*/
    },
    ano: {
      type: Number,
      required: true
    }
  },
  computed: {
      filmeTituloConcatenado() {
          return `Titulo: ${this.titulo}`
      }
  },
  created() {
    console.log(typeof this.titulo)
  }
}
</script>
