<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <div class="alert alert-danger" role="alert">
          <h2 class="alert-heading">Acesso Negado</h2>
          <p>Você não tem acesso a esta página. Por favor, <router-link to="/login" class="alert-link">faça login</router-link>.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.alert {
  padding: 2rem;
  margin-top: 2rem;
}

.alert-heading {
  font-size: 1.5rem;
  font-weight: bold;
}

.alert-link {
  font-weight: bold;
}
</style>
