<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Categorias</h2>
    <router-link to="/Categories/create" class="btn btn-primary mb-3">Adicionar Categoria</router-link>
    <div v-if="categories.length">
      <table class="table table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Nome</th>
            <th>Informação Extra</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in paginatedCategories" :key="category.id">
            <td>{{ category.name }}</td>
            <td>{{ category.extra_info }}</td>
            <td class="text-center">
              <router-link :to="'/Categories/' + category.id + '/edit'" class="btn btn-sm btn-warning me-2">Editar</router-link>
              <button @click="confirmDelete(category.id)" class="btn btn-sm btn-danger">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Anterior</a>
          </li>
          <li class="page-item" :class="{ active: n === currentPage }" v-for="n in totalPages" :key="n">
            <a class="page-link" href="#" @click.prevent="changePage(n)">{{ n }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Próximo</a>
          </li>
        </ul>
      </nav>
    </div>
    <p v-else class="text-center">Nenhuma categoria encontrada.</p>
    <p v-if="errorMessage" class="text-danger text-center">{{ errorMessage }}</p>
    <p v-if="successMessage" class="alert alert-success text-center">{{ successMessage }}</p>

    <!-- Modal de confirmação -->
    <div class="modal fade" id="confirmDeleteModal" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmDeleteModalLabel">Confirmar Exclusão</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Tem certeza de que deseja excluir esta categoria?
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
      categories: [],
      errorMessage: '',
      successMessage: '',
      categoryIdToDelete: null,
      currentPage: 1,
      pageSize: 5
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.categories.length / this.pageSize);
    },
    paginatedCategories() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = this.currentPage * this.pageSize;
      return this.categories.slice(start, end);
    }
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
    confirmDelete(id) {
      this.categoryIdToDelete = id;
      const myModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
      myModal.show();
    },
    deleteCategory() {
      axios.delete(`http://localhost:8080/api/categories/${this.categoryIdToDelete}`)
        .then(() => {
          this.fetchCategories();
          this.categoryIdToDelete = null;
          const myModal = bootstrap.Modal.getInstance(document.getElementById('confirmDeleteModal'));
          myModal.hide();
          this.successMessage = "Categoria excluída com sucesso!";
          setTimeout(() => {
            this.successMessage = "";
          }, 3000);
        })
        .catch(error => {
          console.error("Erro ao excluir categoria:", error);
          this.errorMessage = "Erro ao excluir categoria.";
        });
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  }
};
</script>

<style scoped>
.table-hover tbody tr:hover {
  background-color: #f5f5f5;
}
.text-center {
  text-align: center;
}
</style>
