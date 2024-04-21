<template>
    <header>
      <v-app-bar-title>
        <Logo />
      </v-app-bar-title>
      <div class="header-buttons">
        <v-btn v-if="$route.path !== '/register'" class="fill-width custom-rounded" color="black" dark @click="postStudent()">Cadastrar</v-btn>
        <v-btn class="fill-width custom-rounded" color="black" dark @click="logout()">Sair</v-btn>
      </div>
    </header>
</template>
<script>
import Logo from './Logo.vue';

export default {
  name: 'HeaderA',
  components:{
    Logo
  }, 
  methods: {
    postStudent() {
      this.$router.push('/register');
    },
    logout() { 
      this.$router.push('/');
    }
  }
}
</script>
<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding: 8px;
  }
</style>
