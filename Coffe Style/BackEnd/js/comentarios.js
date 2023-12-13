const { createApp } = Vue

  createApp({
    data() {
      return {
        url:"http://4li3ntr3x.pythonanywhere.com/comentarios",
        comentarios:[],
        error:false,
        cargando:true
      }
    },
    created() {
        this.fetchData(this.url)
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.comentarios = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(producto) {
            const url = 'http://4li3ntr3x.pythonanywhere.com/comentarios/' + comentario;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        }


    },
    



  }).mount('#app')