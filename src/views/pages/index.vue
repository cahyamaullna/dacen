<template>
  <div>
    <body class="g-sidenav-show bg-gray-100">
    <div class="position-absolute w-100 min-height-300 top-0" style="background-image: url('../srcnp/assets/dist/img/background.jpg'); background-position-y: 50%;">
        <span class="mask bg-primary opacity-6"></span>
    </div>
        <Sidebar />
      <main class="main-content position-relative border-radius-lg">
        <Navbar />
        <div class="container-fluid py-4">
            <RouterView/>
        </div>
      </main>

    </body>
  </div>
</template>

<script setup>
import Navbar from "../../components/layouts/Navbar.vue";
import Sidebar from "../../components/layouts/Sidebar.vue";
</script>

<style lang="scss" scoped></style>
