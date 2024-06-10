<template>
  <div class="container">
    <h2 class="my-4">Atualizar Livro</h2>
    <form @submit.prevent="updateBook">
      <div class="mb-3">
        <label for="name" class="form-label">Nome:</label>
        <input type="text" id="name" v-model="book.name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="publication_year" class="form-label">Ano de Publicação:</label>
        <input type="number" id="publication_year" v-model="book.publication_year" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="edition_year" class="form-label">Ano da Edição:</label>
        <input type="number" id="edition_year" v-model="book.edition_year" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="author" class="form-label">Autor:</label>
        <input type="text" id="author" v-model="book.author" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="isbn" class="form-label">ISBN:</label>
        <input type="text" id="isbn" v-model="book.isbn" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">Categoria:</label>
        <select id="category" v-model="book.categoryId" class="form-select" required>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Atualizar</button>
    </form>
    <p v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      book: {
        name: '',
        publication_year: '',
        edition_year: '',
        author: '',
        isbn: '',
        categoryId: null
      },
      categories: [],
      errorMessage: ''
    };
  },
  created() {
    this.fetchBook();
    this.fetchCategories();
  },
  methods: {
    fetchBook() {
      const bookId = this.$route.params.id;
      axios.get(`http://localhost:8080/api/books/${bookId}`)
        .then(response => {
          this.book = response.data;
        })
        .catch(error => {
          console.error("Erro ao buscar livro:", error);
          this.errorMessage = "Erro ao buscar livro.";
        });
    },
    fetchCategories() {
      axios.get('http://localhost:8080/api/categories')
        .then(response => {
          this.categories = response.data._embedded.categoriesDtoList;
        })
        .catch(error => {
          console.error("Erro ao buscar categorias:", error);
          this.errorMessage = "Erro ao buscar categorias.";
        });
    },
    updateBook() {
      axios.put(`http://localhost:8080/api/books/${this.book.id}`, this.book)
        .then(response => {
          this.$router.push('/Books');
        })
        .catch(error => {
          console.error("Erro ao atualizar livro:", error);
          this.errorMessage = "Erro ao atualizar livro.";
        });
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
