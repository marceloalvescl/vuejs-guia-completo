<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcatenado }}</span>
        <button class="btn btn-secondary float-right">Selecionar</button>
    </li>
</template>

<script>
export default {
  props: ['filmeTitulo'],
  computed: {
      filmeTituloConcatenado() {
          return `Titulo: ${this.filmeTitulo}`
      }
  },
  created() {
    console.log('Filme titulo', this.filmeTitulo)
  }
}
</script>
