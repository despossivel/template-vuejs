<template>
  <v-container>
    <v-row>
      <v-row class="text-center">
        <v-col cols="12" sm="8" md="6" offset-sm="2" offset-md="3" class="elevation-1">
          <Logo />
          <v-form @submit.prevent="login">
            <v-text-field v-model="email" label="Email" required :rules="emailRules"
            :error-messages="emailErrors"></v-text-field>
              <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>
            <div class="buttons">
              <v-btn class="fill-width custom-rounded" color="black" dark type="submit">Entrar</v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios'
import Logo from '@/components/Logo.vue'
import ApiService from "@/services/API"
import { checkSession } from "@/utils/middleware"

export default {
  name: 'LoginPage',
  components: {
    Logo
  },
  data: () => ({
    api: null,
    email: '',
    password: '',
    emailRules: [
      value => !!value || 'O email é obrigatório',
      value => /.+@.+\..+/.test(value) || 'Email inválido'
    ],
    emailErrors: [],
  }),
  created: async () =>  await checkSession("/students"),
  methods: {
    async login() {
      try {

        if (!this.email && !this.password) return

        const response = await new ApiService(axios).login({
          email: this.email,
          password: this.password
        });

        if (response) {
          localStorage.setItem('token', response.token)
          this.$router.push('/students');
        }

      } catch (error) {
        console.error('Erro ao chamar a API:', error);
      }
    }

  },
  watch: {
    student: {
      deep: true,
      handler() { 
        this.emailErrors = [];
      }
    }
  }
}
</script>
