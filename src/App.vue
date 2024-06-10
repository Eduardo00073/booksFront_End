<template>
  <div class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="https://i.ibb.co/prFsNK1/Reader-1.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
          BOOK REGISTRATION
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/Categories">CATEGORIES</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Books">BOOKS</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-4 flex-grow-1">
      <router-view />
    </div>
    <footer class="footer mt-auto py-2 bg-light">
      <div class="container text-center">
        <span>© COPYRIGHT EDUARDO JUNIOR ACÂNTARA DA SILVA & GABRIEL RAMOS LOPEZ ANDRADE 2024. DESENVOLVIDO POR EDUARDO JUNIOR ACÂNTARA DA SILVA & GABRIEL RAMOS LOPEZ ANDRADE.</span>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-brand img {
  margin-right: 10px;
}

.nav-link {
  color: #007bff !important;
  font-weight: bold;
  text-transform: uppercase;
}

.footer {
  background-color: #f8f9fa;
  border-top: 1px solid #e7e7e7;
}

.footer span {
  color: #6c757d;
  font-size: 0.8rem; /* Diminuir o tamanho da fonte */
  text-transform: uppercase;
}
</style>
