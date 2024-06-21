<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Detalhes do Livro</h2>
    <div v-if="book">
      <div class="card">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>ID:</strong> {{ book.id }}</li>
            <li class="list-group-item"><strong>Nome:</strong> {{ book.name }}</li>
            <li class="list-group-item"><strong>Ano de Publicação:</strong> {{ book.publication_year }}</li>
            <li class="list-group-item"><strong>Ano da Edição:</strong> {{ book.edition_year }}</li>
            <li class="list-group-item"><strong>Autor:</strong> {{ book.author }}</li>
            <li class="list-group-item"><strong>ISBN:</strong> {{ book.isbn }}</li>
            <li class="list-group-item"><strong>Categoria:</strong> {{ book.categoryName }}</li>
          </ul>
        </div>
      </div>
    </div>
    <p v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</p>
    <router-link to="/Books" class="btn btn-secondary mt-3">Voltar</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      book: null,
      errorMessage: ''
    };
  },
  created() {
    this.fetchBook();
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
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

.card {
  margin-top: 20px;
}

.list-group-item {
  padding: 15px 20px;
}

h2 {
  font-weight: bold;
  color: #007bff;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}
</style>
