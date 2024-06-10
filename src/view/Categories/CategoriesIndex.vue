<template>
  <div class="container mt-5">
    <h2>Categorias</h2>
    <router-link to="/Categories/create" class="btn btn-primary mb-3">Adicionar Categoria</router-link>
    <div v-if="categories.length">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Informação Extra</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.name }}</td>
            <td>{{ category.extra_info }}</td>
            <td>
              <router-link :to="'/Categories/' + category.id + '/edit'" class="btn btn-sm btn-warning">Editar</router-link>
              <button @click="deleteCategory(category.id)" class="btn btn-sm btn-danger">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>Nenhuma categoria encontrada.</p>
    <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: [],
      errorMessage: ''
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
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
    deleteCategory(id) {
      axios.delete(`http://localhost:8080/api/categories/${id}`)
        .then(() => {
          this.fetchCategories();
        })
        .catch(error => {
          console.error("Erro ao excluir categoria:", error);
          this.errorMessage = "Erro ao excluir categoria.";
        });
    }
  }
};
</script>

<style scoped>
.table-hover tbody tr:hover {
  background-color: #f5f5f5;
}
</style>
