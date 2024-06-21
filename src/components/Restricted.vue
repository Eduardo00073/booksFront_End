<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-lg border-danger">
          <div class="card-body text-center">
            <h5 class="card-title text-danger">Acesso Negado</h5>
            <p>Você não tem acesso a esta página. Por favor, <router-link to="/login" class="router-link">faça login</router-link>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin-top: 50px;
}

.card {
  padding: 30px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: none;
}

.card-title {
  margin-bottom: 20px;
  font-weight: bold;
}

p {
  margin-top: 10px;
  font-size: 1.1rem;
}

.router-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.router-link:hover {
  text-decoration: underline;
}

.text-danger {
  color: #dc3545 !important;
}
</style>
