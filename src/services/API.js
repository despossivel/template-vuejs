class ApiService {
    constructor(axios) {
      this.axios = axios;
      this.token = localStorage.getItem('token')
    }
  
    async login({email, password}) {
      try {
        const response = await this.axios.post(`${import.meta.env.VITE_HOST_API}/auth`, {
            email: email,
            password: password
          }).catch(e => e.response.data?.errors.map(error => alert(`${error.param}: ${error.msg}`)));

        if(!response.status === 200) return false
        return response.data

      } catch (error) {
        throw new Error('Falha no login');
      }
    }

    async get(){
        try{ 
            const response = await this.axios.get(`${import.meta.env.VITE_HOST_API}/students`, {
            headers: {
                Authorization: this.token
            }
            });
            if(!response.status === 200) return false
            return response.data
        } catch (error) {
            throw new Error('Falha ao obter');
        }
    }

    async delete(id){
        try{ 
            const response = await this.axios.delete(`${import.meta.env.VITE_HOST_API}/student/${id}`, {
                headers: {
                Authorization: this.token
                }
            });
            if(!response.status === 200) return false
            return response.data
        } catch (error) {
            throw new Error('Falha ao remover');
        }
    }
  
    async show(id){
        try{

            const response = await this.axios.get(`${import.meta.env.VITE_HOST_API}/student/${id}`, {
                headers: {
                Authorization: this.token
                }
            });

            if(!response.status === 200) return false
            return response.data[0]
        } catch (error) {
            throw new Error('Falha ao obter o registro');

        }
    }

    async post({name, ra, cpf, email}){
        try{
        const response = await this.axios.post(`${import.meta.env.VITE_HOST_API}/student`, {
            name, ra, cpf, email
          }, {
            headers: {
              Authorization: this.token
            }
          }).catch(e => e.response.data?.errors.map(error => alert(`${error.param}: ${error.msg}`)));

          if(!response.status === 200) return false
          return response.data
        } catch (error) {
            throw new Error('Falha ao criar o registro');
        }
    }

    async put({name, email}){
        try{
        const response = await this.axios.post(`${import.meta.env.VITE_HOST_API}/student`, {
            name,  email
          }, {
            headers: {
              Authorization: this.token
            }
          }).catch(e => e.response.data?.errors.map(error => alert(`${error.param}: ${error.msg}`)));

          if(!response.status === 200) return false
          return response.data
        } catch (error) {
            throw new Error('Falha ao criar o registro');
        }
    }

  }

  export default ApiService
  