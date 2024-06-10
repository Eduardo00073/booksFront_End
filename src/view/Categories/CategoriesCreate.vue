<template>
  <div class="container">
    <h2 class="my-4">Adicionar Categoria</h2>
    <form @submit.prevent="createCategory">
      <div class="mb-3">
        <label for="name" class="form-label">Nome:</label>
        <input type="text" id="name" v-model="category.name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="extra_info" class="form-label">Informação Extra:</label>
        <input type="text" id="extra_info" v-model="category.extra_info" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Adicionar</button>
    </form>
    <p v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      category: {
        name: '',
        extra_info: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    createCategory() {
      axios.post('http://localhost:8080/api/categories', this.category)
        .then(response => {
          this.$router.push('/Categories');
        })
        .catch(error => {
          console.error("Erro ao adicionar categoria:", error);
          this.errorMessage = "Erro ao adicionar categoria.";
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
