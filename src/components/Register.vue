<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-lg">
          <div class="card-body">
            <h5 class="card-title text-center mb-4">Registrar</h5>
            <form @submit.prevent="register">
              <div class="form-group mb-3">
                <label for="username">Usuário</label>
                <input type="text" class="form-control" id="username" v-model="username" required>
              </div>
              <div class="form-group mb-3">
                <label for="password">Senha</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
              <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
              <div v-if="success" class="alert alert-success mt-3">{{ success }}</div>
              <button type="submit" class="btn btn-primary w-100 mt-3">Registrar</button>
              <p class="mt-3 text-center">
                Já tem uma conta? <router-link to="/login">Login</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/config/api';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
      success: ''
    };
  },
  methods: {
    async register() {
      this.error = '';
      this.success = '';
      try {
        const response = await api.post('/api/auth/register', {
          username: this.username,
          password: this.password
        });
        console.log('Usuário registrado:', response.data);
        this.success = 'Registro realizado com sucesso! Redirecionando para a página de login...';
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      } catch (error) {
        console.error('Falha ao registrar', error.response.data);
        this.error = 'Falha ao registrar. Tente novamente.';
      }
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

.form-group {
  margin-bottom: 15px;
}

.alert {
  margin-top: 20px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>
