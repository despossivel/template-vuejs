<template>
  <v-container>
    <Header />
    <v-row class="text-center" >
      <v-col cols="12" sm="8" md="6" offset-sm="2" offset-md="3" class="elevation-1">
        <v-form @submit.prevent="save">
          <v-text-field v-model="student.name" label="Nome" required></v-text-field>
          <v-text-field v-model="student.ra" label="RA" required :rules="raRules" :error-messages="raErrors" inputmode="numeric" pattern="[0-9]*"></v-text-field>
          <v-text-field v-model="student.cpf" label="CPF" required :rules="cpfRules" :error-messages="cpfErrors"></v-text-field>
          <v-text-field v-model="student.email" label="Email" required :rules="emailRules"
            :error-messages="emailErrors"></v-text-field>
          <div class="buttons">
            <v-btn class="fill-width custom-rounded" color="black" dark type="submit">Salvar</v-btn>
            <v-btn class="fill-width custom-rounded" color="error" @click="cancel">Cancelar</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import ApiService from "@/services/API"
import { checkSession } from "@/utils/middleware"

export default {
  name: 'LoginPage',
  components: {
    Header
  },
  data: () => ({

    axiosMethod: 'post',
    username: '',
    password: '',
    student: {
      id: null,
      name: '',
      ra: '',
      cpf: '',
      email: ''
    },
    raRules: [
        value => !!value || 'O RA é obrigatório',
        value => /^\d+$/.test(value) || 'RA deve conter apenas números'
    ],
    cpfRules: [
      value => !!value || 'O CPF é obrigatório',
      value => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value) || 'Formato inválido de CPF (000.000.000-00)'
    ],
    emailRules: [
      value => !!value || 'O email é obrigatório',
      value => /.+@.+\..+/.test(value) || 'Email inválido'
    ],
    raErrors: [],
    cpfErrors: [],
    emailErrors: [],

  }),
  async created() {
    await checkSession("/")
    if (this.$route.query.id) {
      const response = await new ApiService(axios).show(this.$route.query.id)
      this.student = response;
      this.axiosMethod = 'put'
    }

  },
  methods: {
    async save() {
      const { name, ra, cpf, email } = this.student
      const response = await new ApiService(axios)[this.axiosMethod]({ name, ra, cpf, email })
      if (response) {
        this.$router.push('/students');
      }
    },
    cancel() {
      this.$router.push('/students');
    },
  },
  watch: {
    student: {
      deep: true,
      handler() {
        this.raErrors = [];
        this.emailErrors = [];
        this.cpfErrors = [];

      }
    }
  }
}
</script>
