<template>
  <div class="container mt-5">
    <h2>Atualizar Categoria</h2>
    <form @submit.prevent="updateCategory">
      <div class="mb-3">
        <label for="name" class="form-label">Nome:</label>
        <input type="text" id="name" v-model="category.name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="extra_info" class="form-label">Informação Extra:</label>
        <input type="text" id="extra_info" v-model="category.extra_info" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Atualizar</button>
    </form>
    <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
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
  created() {
    this.fetchCategory();
  },
  methods: {
    fetchCategory() {
      const categoryId = this.$route.params.id;
      axios.get(`http://localhost:8080/api/categories/${categoryId}`)
        .then(response => {
          this.category = response.data;
        })
        .catch(error => {
          console.error("Erro ao buscar categoria:", error);
          this.errorMessage = "Erro ao buscar categoria.";
        });
    },
    updateCategory() {
      axios.put(`http://localhost:8080/api/categories/${this.$route.params.id}`, this.category)
        .then(() => {
          this.$router.push('/Categories');
        })
        .catch(error => {
          console.error("Erro ao atualizar categoria:", error);
          this.errorMessage = "Erro ao atualizar categoria.";
        });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
