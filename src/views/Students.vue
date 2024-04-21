<template>
  <v-container>
      <Header />
      <v-row>
        <v-col cols="12">
          <v-data-table :items="students" :headers="headers" class="elevation-1">
            <template v-slot:item.action="{ item }">
              <td class="buttons">
                <v-btn class="fill-width custom-rounded" color="black" dark @click="editStudent(item)">Editar</v-btn>
                <v-btn class="fill-width custom-rounded" color="error" @click="deleteStudent(item)">Excluir</v-btn>
              </td>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    <v-dialog v-model="modalDelete" max-width="500">
      <v-card>
        <v-card-title>Confirmar Exclusão</v-card-title>
        <v-card-text>
          Tem certeza que deseja excluir este student?
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" @click="confirmDelete">Confirmar</v-btn>
          <v-btn @click="cancelDelete">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

import axios from 'axios';
import Header from '@/components/Header.vue'
import { checkSession } from "@/utils/middleware"
import ApiService from "@/services/API"

export default {
  data() {
    return {
      students: [],
      headers: [
        { title: 'Nome', value: 'name' },
        { title: 'RA', value: 'ra' },
        { title: 'CPF', value: 'cpf' },
        { title: 'Email', value: 'email' }, 
        { title: 'Ações', value: 'action', sortable: false }, 
      ],
      studentDelete: null,
      modalDelete: false
    };
  },
  async created() {
    await checkSession("/")
    await this.getStudents()
  },
  components:{
 
    Header
  },
  methods: {
    async getStudents() {
      const response = await new ApiService(axios).get();
      this.students = response
    },
    editStudent(student) {
      this.$router.push(`/register?id=${student.id}`);
    },
    deleteStudent(student) {
      this.studentDelete = student;
      this.modalDelete = true;

    },
    async confirmDelete() {
      await new ApiService(axios).delete(this.studentDelete.id)
      await this.getStudents()
      this.modalDelete = false;
    },
    cancelDelete() {
      this.modalDelete = false;
    },
    postStudent() {
      this.$router.push('/register');
    },
    logout() { 
      this.$router.push('/');
    }
  }
};
</script>