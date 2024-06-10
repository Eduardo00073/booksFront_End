<template>
    <div class="container text-center mt-5">
      <h1 class="display-4">Book Registration</h1>
      <p class="lead">
        Bem-vindo ao sistema de cadastro de livros e categorias. Esta plataforma permite que você adicione e organize seus livros favoritos de maneira eficiente e intuitiva.
      </p>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="feature-box">
            <img src="https://i.ibb.co/prFsNK1/Reader-1.png" alt="Cadastro de Livros" class="feature-icon">
            <h3>Cadastro de Livros</h3>
            <p>Adicione novos livros ao seu acervo, com informações detalhadas como título, autor, ano de publicação e ISBN.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feature-box">
            <img src="https://i.ibb.co/prFsNK1/Reader-1.png" alt="Organização por Categorias" class="feature-icon">
            <h3>Organização por Categorias</h3>
            <p>Classifique seus livros em categorias específicas para facilitar a organização e a busca dentro do sistema.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feature-box">
            <img src="https://i.ibb.co/prFsNK1/Reader-1.png" alt="Gerenciamento Fácil" class="feature-icon">
            <h3>Gerenciamento Fácil</h3>
            <p>Atualize, edite ou remova livros e categorias com facilidade, mantendo seu acervo sempre atualizado.</p>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .container {
    padding-top: 50px;
  }
  
  h1 {
    color: #007bff; /* Cor azul para o título */
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  p.lead {
    color: #6c757d; /* Cor cinza para a descrição */
    font-size: 1.25rem;
    margin-bottom: 40px;
  }
  
  .feature-box {
    text-align: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    transition: transform 0.3s;
  }
  
  .feature-box:hover {
    transform: translateY(-10px);
  }
  
  .feature-icon {
    width: 100px;
    height: 100px;
    margin-bottom: 15px;
  }
  
  h3 {
    color: #343a40; /* Cor para os subtítulos */
    margin-bottom: 15px;
  }
  
  p {
    color: #6c757d; /* Cor para o texto das features */
  }
  </style>
  