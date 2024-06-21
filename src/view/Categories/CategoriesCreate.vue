<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Adicionar Categoria</h2>
    <form @submit.prevent="createCategory" class="shadow p-4 rounded bg-light">
      <div class="mb-3">
        <label for="name" class="form-label">Nome:</label>
        <input type="text" id="name" v-model="category.name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="extra_info" class="form-label">Informação Extra:</label>
        <input type="text" id="extra_info" v-model="category.extra_info" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Adicionar</button>
    </form>
    <p v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</p>
    <p v-if="successMessage" class="alert alert-success mt-3">{{ successMessage }}</p>
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
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    createCategory() {
      this.errorMessage = '';
      this.successMessage = '';
      axios.post('http://localhost:8080/api/categories', this.category)
        .then(response => {
          this.successMessage = 'Categoria adicionada com sucesso!';
          setTimeout(() => {
            this.$router.push('/Categories');
          }, 2000);
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
.container {
  margin-top: 50px;
}

.form-label {
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.alert {
  margin-top: 20px;
}
</style>
