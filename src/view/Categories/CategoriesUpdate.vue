<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Atualizar Categoria</h2>
    <form @submit.prevent="updateCategory" class="shadow p-4 rounded bg-light">
      <div class="mb-3">
        <label for="name" class="form-label">Nome:</label>
        <input type="text" id="name" v-model="category.name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="extra_info" class="form-label">Informação Extra:</label>
        <input type="text" id="extra_info" v-model="category.extra_info" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary w-100 mt-3">Atualizar</button>
    </form>
 
    <p v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</p>
    <p v-if="successMessage" class="alert alert-success mt-3">{{ successMessage }}</p>

    <!-- Modal de confirmação -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">Confirmar Exclusão</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Tem certeza que deseja excluir esta categoria?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger" @click="deleteCategory">Excluir</button>
          </div>
        </div>
      </div>
    </div>
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
          this.successMessage = 'Categoria atualizada com sucesso!';
          setTimeout(() => {
            this.$router.push('/Categories');
          }, 2000);
        })
        .catch(error => {
          console.error("Erro ao atualizar categoria:", error);
          this.errorMessage = "Erro ao atualizar categoria.";
        });
    },
    confirmDelete() {
      var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
      deleteModal.show();
    },
    deleteCategory() {
      axios.delete(`http://localhost:8080/api/categories/${this.$route.params.id}`)
        .then(() => {
          this.$router.push('/Categories');
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
.container {
  margin-top: 50px;
}

.card {
  padding: 20px;
  border-radius: 10px;
  background: #f8f9fa;
  border: none;
}

.card-title {
  margin-bottom: 20px;
  font-weight: bold;
  color: #007bff;
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
