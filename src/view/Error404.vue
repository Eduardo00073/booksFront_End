<template>
    <div class="container text-center mt-5">
      <h1 class="display-1">Erro 404</h1>
      <h2 class="display-4">Recurso não encontrado!</h2>
      <p class="lead">Desculpe, a página que você está procurando não existe.</p>
      <router-link to="/" class="btn btn-primary mt-3">Voltar para a Página Inicial</router-link>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .container {
    padding-top: 100px;
  }
  
  h1 {
    color: #dc3545; /* Cor vermelha para destacar o erro */
  }
  
  h2 {
    color: #6c757d; /* Cor cinza para o subtítulo */
  }
  
  .lead {
    color: #495057; /* Cor para o texto adicional */
  }
  </style>
  