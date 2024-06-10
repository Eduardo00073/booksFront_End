<template>
  <div class="container">
    <h2 class="my-4">Lista de Livros</h2>
    <div class="text-end mb-3">
      <router-link to="/Books/create" class="btn btn-primary">Adicionar Livro</router-link>
    </div>
    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
    <div v-else>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Autor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td>{{ book.id }}</td>
            <td>{{ book.name }}</td>
            <td>{{ book.author }}</td>
            <td>
             
              <router-link :to="`/Books/${book.id}/edit`" class="btn btn-warning btn-sm">Editar</router-link>
              <button @click="deleteBook(book.id)" class="btn btn-danger btn-sm">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      errorMessage: ''
    };
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      axios.get('http://localhost:8080/api/books')
        .then(response => {
          this.books = response.data._embedded.booksDtoList;
        })
        .catch(error => {
          console.error("Erro ao buscar livros:", error);
          this.errorMessage = "Erro ao buscar livros.";
        });
    },
    deleteBook(id) {
      axios.delete(`http://localhost:8080/api/books/${id}`)
        .then(response => {
          this.fetchBooks();
        })
        .catch(error => {
          console.error("Erro ao excluir livro:", error);
          this.errorMessage = "Erro ao excluir livro.";
        });
    }
  }
};
</script>

<style scoped>
.table th, .table td {
  vertical-align: middle;
}
</style>
