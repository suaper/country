const datosConfiguracion = {
  apiUrl: 'https://obt3.cl/administrador/',
  mensajeErrorServer: 'Tenemos problemas en nuestro sistemas :( por favor envianos un pantallazo de este mensaje para seguir mejorando',
  mensajeNoInternet: 'Tenemos problemas en nuestro sistemas :( por favor envianos un pantallazo de este mensaje para seguir mejorando',
  user: 'pwcc_api',
  password: 'Pwcc2022'
}

const configService = {
  consumerStandar: (componente, endpoind, datosJson, opciones) => {
    componente.$q.loading.show()
    var basicAuth = 'Basic ' + btoa(datosConfiguracion.user + ':' + datosConfiguracion.password)

    componente.$axios.post(datosConfiguracion.apiUrl + endpoind, datosJson, {
      headers: { Authorization: basicAuth }
    })
      .then((response) => {
        console.log(response)
        if (typeof response.data !== 'object') {
          componente.$q.notify({
            color: 'red-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Ha ocurrido un error intente más tarde'
          })
        } else if (typeof response.data === 'object') {
          if (opciones.callBack !== undefined) {
            opciones.callBack(response.data)
          }
        } else {
          componente.$q.notify({
            color: 'red-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: datosConfiguracion.mensajeErrorServer
          })
        }
        componente.$q.loading.hide()
      })
      .catch((error) => {
        console.log(error)
        componente.$q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: datosConfiguracion.mensajeNoInternet
        })
        componente.$q.loading.hide()
      })
  },
  loadData: (componente, endpoind, opciones, headers) => {
    componente.$q.loading.show()
    var basicAuth = 'Basic ' + btoa(datosConfiguracion.user + ':' + datosConfiguracion.password)
    componente.$axios.get(datosConfiguracion.apiUrl + endpoind, { headers: { Authorization: basicAuth, Accept: 'application/json', 'Content-Type': 'application/json' } })
      .then((response) => {
        if (response.data === '0') {
          componente.$q.notify({
            color: 'red-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: response.data.mensaje
          })
        } else if (response.data !== '') {
          if (opciones.callBack !== undefined) {
            opciones.callBack(response.data)
          }
        } else {
          componente.$q.notify({
            color: 'red-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: datosConfiguracion.mensajeErrorServer
          })
        }
      })
      .catch((error) => {
        console.log(error)
        componente.$q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: datosConfiguracion.mensajeNoInternet
        })
        componente.$q.loading.hide()
      })
  }
}

export default configService
