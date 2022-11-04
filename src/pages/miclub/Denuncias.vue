<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub currentItem="/mi-club/denuncias"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home denuncias_tabs" v-if="loadedInfo">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">DECRETO 22</div>
        </div>
        <div class="tabs_denuncias centrar" style="max-width: 800px">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
          <q-tab name="presentacion" label="Presentación" />
          <q-tab name="protocolo" label="Protocolo" />
          <q-tab name="responsables" label="Responsables Institucionales" />
          <q-tab name="documentos" label="Documentos" />
          <q-tab name="denuncia" label="Denuncia" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="presentacion">
            <h6>Presentación</h6>
            <div class="hover_iframe centrar center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/eYTHofEhsvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </q-tab-panel>

          <q-tab-panel name="protocolo">
            <h6>Protocolo</h6>
            <div class="row">
              <div class="col-12" style="font-weight: bolder; margin-bottom: 10px; text-align: center !important;">
                  PREGUNTAS Y RESPUESTAS<br>
                  PROTOCOLO GENERAL DEL MINISTERIO DEL DEPORTE<br>
                  DECRETO SUPREMO N° 22 DE 21 DE SEPTIEMBRE DE 2020.
              </div>
              <span class="protocolo_pregunta">
                  1.- ¿QUÉ RELACIÓN EXISTE ENTRE LA LEY N° 21.197 Y EL PROTOCOLO GENERAL DEL MINISTERIO DEL DEPORTE?
              </span>
              <span class="protocolo_respuesta">
                  La ley N° 21.197 contra el Abuso sexual, Acoso sexual, Discriminación y Maltrato en la actividad deportiva nacional, mandató al Ministerio del Deporte la elaboración y aprobación, mediante decreto supremo, de un protocolo general para la prevención y sanción de las señaladas conductas.
              </span>
              <span class="protocolo_respuesta">
                  Cumpliendo dicho mandato legal el Ministerio del Deporte procedió a la dictación del Decreto Supremo N° 21 del 2020, el cual fue publicado en el Diario Oficial con fecha 21 de septiembre de 2020.
              </span>
              <span class="protocolo_pregunta">
                  2.- ¿QUÉ ES EL PROTOCOLO GENERAL DEL MINISTERIO DEL DEPORTE CONTRA EL ABUSO SEXUAL, ACOSO SEXUAL, DISCRIMINACIÓN Y MALTRATO EN LA ACTIVIDAD DEPORTIVA NACIONAL?
              </span>
              <span class="protocolo_respuesta">
                  El Protocolo General, que debe ser adoptado por las organizaciones deportivas, está constituido por principios y normas que se dirigen a la prevención y sanción de las conductas vulneratorias, estableciendo para ello un conjunto de obligaciones que las organizaciones deportivas, sus directorios, y sus integrantes deben cumplir, para hacer de la convivencia deportiva y del entorno deportivo, un espacio más adecuado y seguro para todos quienes la integran.
              </span>
              <span class="protocolo_pregunta">
                  3.- ¿EN QUÉ PRINCIPIOS SE BASA EL PROTOCOLO?
              </span>
              <span class="protocolo_respuesta">
                  <ul>
                      <li>1.- Inclusión de los niños, niñas y adolescentes como sujetos de derecho.</li>
                      <li>2.- Igualdad y Equidad de Género.</li>
                      <li>3.- No discriminación contra la mujer.</li>
                      <li>4.- Apoyo Efectivo.</li>
                      <li>5.- Celeridad de los procedimientos.</li>
                      <li>6.- Enfoque preventivo.</li>
                      <li>7.- No revictimización.</li>
                      <li>8.- Entorno seguro en el deporte.</li>
                      <li>9.- Gestión responsable y colaborativa de todos los entes involucrados.</li>
                      <li>10.- Reserva de los antecedentes.</li>
                      <li>11.- Debido proceso.</li>
                      <li>12.- Principio de buena fe.</li>
                      <li>13.- Nuevo estándar de seguridad deportiva.</li>
                  </ul>

              </span>
              <span class="protocolo_pregunta">
                  4.- ¿QUÉ OBJETIVOS CUMPLE EL PROTOCOLO?
              </span>
              <span class="protocolo_respuesta">
                  El protocolo persigue el establecimiento de un nuevo estándar de seguridad para la práctica de la actividad deportiva en nuestro país, cuya finalidad es proteger a deportistas, técnicos, dirigentes y trabajadores de las conductas vulneratorias, mediante la prevención y sanción de dichas conductas, brindando en ello especial cuidado de los niños, niñas y adolescentes que forman parte de la actividad deportiva y de la participación e integración de la mujer como parte fundamental del desarrollo del deporte nacional.
              </span>
              <span class="protocolo_pregunta">
                  5.- ¿QUE ORGANIZACIONES DEPORTIVAS DEBEN ADOPTAR EL PROTOCOLO?
              </span>
              <span class="protocolo_respuesta">
                  <ul>
                      <li>Todas las organizaciones deportivas de la ley N° 19.712.</li>
                      <li>Todas las organizaciones deportivas profesionales de la ley N° 20.019.</li>
                  </ul>

              </span>
              <span class="protocolo_pregunta">
                  6.- ¿EN QUÉ PLAZO SE DEBE ADOPTAR EL PROTOCOLO?
              </span>
              <span class="protocolo_respuesta">
                  En el plazo de seis meses desde la publicación del Protocolo General en el Diario Oficial. Como el Protocolo fue publicado el día 21 de septiembre de 2020, el plazo para su adopción, por parte de todas las organizaciones deportivas, es el 21 de marzo de 2021.
              </span>
              <span class="protocolo_pregunta">
                  7.- ¿COMO SE ADOPTA EL PROTOCOLO?
              </span>
              <span class="protocolo_respuesta">
                  El Protocolo se adopta en una asamblea extraordinaria citada especialmente por la organización deportiva para efectos de adoptar el Protocolo General y nombrar al Responsable Institucional, con los quórums y demás formalidades establecidas para tales casos.
              </span>
              <span class="protocolo_pregunta">
                  8.- ¿CUÁLES SON LAS OBLIGACIONES FUNDAMENTALES QUE TIENEN LAS ORGANIZACIONES DEPORTIVAS UNA VEZ ADOPTADO EL PROTOCOLO?
              </span>
              <span class="protocolo_respuesta">
                  <ul>
                      <li>Toda organización deportiva tiene el deber de difundir el presente Protocolo a través de sus órganos internos y ponerlos a disposición de todos sus integrantes en el plazo de sesenta días corridos a contar de su adopción.</li>
                      <li>Establecer Políticas institucionales contra las conductas vulneratorias y hacerla accesible a todos sus integrantes por las vías materiales o virtuales que correspondan.</li>
                      <li>Tener constituidos y operativos, sus órganos de disciplina deportiva interna.</li>
                      <li>El Directorio tiene la obligación de mantener un registro interno de los casos, y de las sanciones que se hayan aplicado en virtud de la ley N° 21.197.</li>
                      <li>Aplicar al personal que contratan, las medidas de resguardo previstas en el Protocolo General.</li>
                      <li>Establecer medidas de resguardo relativas a los espacios físicos e instalaciones deportivas institucionales.</li>
                      </ul>
              </span>
              <span class="protocolo_pregunta">
                  9.- ¿QUE SANCIONES TRAE APAREJADA LA NO ADOPCIÓN DEL PROTOCOLO?
              </span>
              <span class="protocolo_respuesta">
                  <lu>
                      <li><u>Organizaciones deportivas del artículo 32° de la ley N° 19712:</u> La no adopción del Protocolo General inhabilita a la organización deportiva para ser beneficiaria de los recursos de la ley N° 19.712.</li>
                      <li><u>Organizaciones deportivas profesionales:</u> La no adopción del Protocolo General inhabilita a la organización deportiva profesional para acceder a los beneficios y franquicias de la ley N° 20.019.</li>
                  </lu>
              </span>
              <span class="protocolo_pregunta">
                  10.- ¿QUÉ MEDIDAS PREVENTIVAS CONTIENE EL PROTOCOLO GENERAL?
              </span>
              <span class="protocolo_respuesta">
                  El Protocolo contiene un conjunto de medidas preventivas y de resguardo, dirigidas fundamentalmente a:
              </span>
              <span class="protocolo_respuesta">
                  <ul>
                      <li>El personal contratado para desempeñar labores en la institución o de personas que desempeñen actividades de voluntariado o colaboración.</li>
                      <li>Los espacios físicos e instalaciones deportivas institucionales.</li>
                  </ul>
              </span>
              <span class="protocolo_pregunta">
                      11.- ¿CUÁLES SON LAS MEDIDAS PREVENTIVAS RESPECTO DEL PERSONAL CONTRATADO POR LAS ORGANIZACIONES DEPORTIVAS Y DE LAS PERSONAS QUE DESEMPEÑEN EN ELLAS ACTIVIDADES DE VOLUNTARIADO O COLABORACIÓN?
              </span>
              <span class="protocolo_respuesta">
                  Antes de contratar a personas para que desempeñen labores en la institución, o antes de incorporar a personas en actividades de voluntariado o colaboración deportiva, tienen la obligación de recabar previamente los siguientes antecedentes personales:
              </span>
              <span class="protocolo_respuesta">
                  <ul>
                      <li>Certificado de antecedentes penales para fines especiales. Solo se podrá excluir la contratación o incorporación de la persona, cuando dichos antecedentes den cuenta de condenas por delitos que atenten contra la indemnidad sexual.</li>
                      <li>Registro de violencia intrafamiliar.</li>
                      <li>Solicitud de información, de conformidad a lo exigido en la ley Nº 20.594, referida a si la persona se encuentra afecta a la inhabilitación establecida en el artículo 39 bis del Código Penal, cuando se trate de la contratación de personas, con la finalidad de que presten servicios o colaboren en actividades que involucren una relación directa y habitual con niños, niñas y adolescentes.</li>
                      <li>Realización de una evaluación psicoelaboral por competencia.</li>
                  </ul>
              </span>
              <span class="protocolo_pregunta">
                  12.- CUALES SON LAS MEDIDAS PREVENTIVAS RESPECTO DE LOS ESPACIOS FÍSICOS E INSTALACIONES DEPORTIVAS?
              </span>
              <span class="protocolo_respuesta">
                  Son un conjunto de medidas que las organizaciones deportivas deberán adoptar progresivamente dentro del término de un año desde la adopción del Protocolo, como marco de resguardo dirigido a eliminar condiciones que favorezcan la ocurrencia de conductas vulneratorias.
              </span>
              <span class="protocolo_pregunta">
                  13.- QUIEN ES EL RESPONSABLE INSTITUCIONAL?
              </span>
              <span class="protocolo_respuesta">
                  El Responsable Institucional es un nuevo cargo, que debe ser designado en todas las organizaciones deportivas, cuya función es recepcionar las denuncias y efectuar todas las diligencias necesarias para su adecuada canalización.
              </span>
              <span class="protocolo_respuesta">
                  Según los antecedentes recopilados, establece si el hecho denunciado reviste o no caracteres de delito y deriva los antecedentes según corresponda al Ministerio Publico o las Policías, o al Tribunal de Honor de la Organización o al Comité Nacional de Arbitraje Deportivo.
              </span>
              <span class="protocolo_respuesta">
                  No es un tribunal. No establece sanciones.
              </span>
              <span class="protocolo_pregunta">
                  14.- CUANDO DEBE SER DESIGNADO EL RESPONSABLE INSTITUCIONAL?
              </span>
              <span class="protocolo_respuesta">
                  Debe ser designado en la misma asamblea extraordinaria en la cual la organización deportiva procede a la adopción del Protocolo.
              </span>
              <span class="protocolo_respuesta">
                  Toda organización deportiva tiene la obligación de designar oficialmente a dos o más personas de la institución, como responsables institucionales, uno de los cuales ejercerá el cargo como titular, y el otro u otros designados lo ejercerán como suplentes de conformidad a un orden preestablecido.
              </span>
              <span class="protocolo_pregunta">
                  15.- QUE SON LOS CANALES SEGUROS DE COMUNICACIÓN?
              </span>
              <span class="protocolo_respuesta">
                  Una vez designados los responsables institucionales, las organizaciones deportivas deben establecer y difundir para conocimiento de todos sus miembros, los canales seguros de comunicación con ellos, de forma tal que, en caso de requerirse su intervención, esta se logre de manera rápida y expedita.
              </span>
              <span class="protocolo_pregunta">
                  16.- ¿DE QUÉ FORMA PROCEDE EL RESPONSABLE INSTITUCIONAL EN CASO DE DENUNCIA?
              </span>
              <span class="protocolo_respuesta">
                  Recibida oficialmente una denuncia por conductas de acoso sexual, abuso sexual, discriminación o maltrato, el responsable institucional deberá efectuar de manera oportuna y diligente, todas las actuaciones correspondientes a los procedimientos de intervención previstos en el Protocolo, desde el momento en que haya recepcionado oficialmente una denuncia, hasta su total despacho. En dicha labor debe:
              </span>
              <span class="protocolo_respuesta">
                  <ul>
                      <li>Establecer contacto de manera rápida y expedita con él o la denunciante, sea de manera personal, telefónica, electrónica o por cualquier otro medio disponible, dentro de un plazo máximo de 48 horas desde su conocimiento de la denuncia.</li>
                      <li>Si los hechos denunciados afectan a un niño, niña o adolescente, deberá comunicar diligentemente estos hechos sus padres o tutores, estableciendo contacto con ellos de manera inmediata.</li>
                      <li>Deberá abrir un expediente y mantener registro documental respecto de cada uno de los casos denunciados.</li>
                      <li>Deberá evaluar, los antecedentes y la naturaleza de los hechos denunciados, empleando en ello sus conocimientos y experiencia, de forma de discernir si tales hechos revisten o no caracteres de delito.</li>
                      <li>Elaborar informes de las denuncias sometidas a su conocimiento, cuando ello le sea requerido.</li>
                  </ul>
              </span>
              <span class="protocolo_pregunta">
                  17.- ¿QUÉ CAMINO SIGUE UNA DENUNCIA SI ACASO LOS HECHOS QUE LA CONSTITUYEN REVISTEN CARACTERES DE DELITO?
              </span>
              <span class="protocolo_respuesta">
                  En tal caso, el responsable institucional deberá denunciar los hechos al Ministerio Público, Carabineros de Chile o la Policía de Investigaciones.
              </span>
              <span class="protocolo_respuesta">
                  Sin perjuicio de ello, debe poner tales hechos en conocimiento del directorio y del tribunal de honor de la organización.
              </span>
              <span class="protocolo_respuesta">
                  Si el denunciado resulta sancionado por los Tribunales de Justicia por casos de abuso o acoso sexuales, el Tribunal de honor deberá aplicar la sanción legal de inhabilitación a perpetuidad para que esa persona integre organizaciones deportivas.
              </span>
              <span class="protocolo_pregunta">
                  19.- ¿QUE ROL CUMPLE EL TRIBUNAL DE HONOR DE LA ORGANIZACIÓN DEPORTIVA?
              </span>
              <span class="protocolo_respuesta">
                  El Tribunal de Honor es de vital importancia para la aplicación del Protocolo ya que es el órgano que tiene competencia para resolver los expedientes de denuncia que el responsable institucional pone en su conocimiento.
              </span>
              <span class="protocolo_respuesta">
                  A la fecha de adopción del presente Protocolo, todas las organizaciones deportivas, según corresponda, deben tener constituidos y en operatividad los órganos de disciplina deportiva interna.
              </span>
              <span class="protocolo_respuesta">
                  Será considerado un incumplimiento grave de las obligaciones contempladas en el Protocolo, la no constitución y/o no funcionamiento del órgano de disciplina deportiva interna de la organización.
              </span>
              <span class="protocolo_pregunta">
                  20.- ¿QUE ES EL COMITÉ NACIONAL DE ARBITRAJE DEPORTIVO?
              </span>
              <span class="protocolo_respuesta">
                  El Comité Nacional de Arbitraje Deportivo, es un organismo colegiado de disciplina deportiva, que ejercerá la potestad disciplinaria sobre las federaciones deportivas nacionales y sobre todas las organizaciones deportivas, en materia de sanción de las conductas de acoso sexual, abuso sexual, discriminación y maltrato, en conformidad a lo establecido en la ley Nº 21.197, extendiéndose su potestad a las infracciones que se produzcan en competencias nacionales o internacionales reconocidas o autorizadas por una Federación Deportiva Nacional, o por una organización deportiva cualquiera.
              </span>
          </div>
          </q-tab-panel>

          <q-tab-panel name="responsables">
            <h6>Responsables Institucionales</h6>
              <div class="row_info_doscol">
                <ul class="info_usuario">
                  <li class="name">
                    <span>Paz Echeverria</span>
                  </li>
                  <li class="cargo">
                    <span>Directora Ejecutiva</span>
                  </li>
                  <li class="correo">
                    <span>pecheverria@chilegolf.cl</span>
                  </li>
                </ul>
                <ul class="info_usuario">
                  <li class="name">
                    <span>Paz Echeverria</span>
                  </li>
                  <li class="cargo">
                    <span>Directora Ejecutiva</span>
                  </li>
                  <li class="correo">
                    <span>pecheverria@chilegolf.cl</span>
                  </li>
                </ul>
              </div>
          </q-tab-panel>
          <q-tab-panel name="documentos">
            <h6>Documentos</h6>
            <div class="row_ilistas_pdfs">
              <div class="q-pa-md row items-start w_1200 centrar q-gutter-md">
                  <div class="box_download flex bg_white">
                      <img src="../../assets/MiClub/i-pdf.svg">
                      <div class="text">
                          <span class="bold">
                              Protocolo General para la prevención y sanción de las conductas de acoso sexual, abuso sexual, discriminación y maltrato en la actividad deportiva nacional
                            </span>
                          <a :href="info.field_descargar_archivo[0].url" target="_blank"><span>Ver o descargar</span></a>
                      </div>
                  </div>
              </div>
              <div class="q-pa-md row items-start w_1200 centrar q-gutter-md">
                  <div class="box_download flex bg_white">
                      <img src="../../assets/MiClub/i-pdf.svg">
                      <div class="text">
                          <span class="bold">Presentación Decreto Supremo 22</span>
                          <a :href="info.field_descargar_archivo[0].url" target="_blank"><span>Ver o descargar</span></a>
                      </div>
                  </div>
              </div>
              <div class="q-pa-md row items-start w_1200 centrar q-gutter-md">
                  <div class="box_download flex bg_white">
                      <img src="../../assets/MiClub/i-pdf.svg">
                      <div class="text">
                          <span class="bold">Diario Oficial Ley 21.197</span>
                          <a :href="info.field_descargar_archivo[0].url" target="_blank"><span>Ver o descargar</span></a>
                      </div>
                  </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel class="form_denuncias" name="denuncia">
            <h6>Denuncia</h6>
              <div class="fitnes_last">
                <div class="form_fitness">
                  <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                  >
                    <q-input
                        outlined
                        v-model="name"
                        ref="nameRef"
                        label="Nombres y Apellidos *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor diligencie el campo']"
                    />
                    <q-input
                        outlined
                        v-model="rut"
                        label="Rut *"
                    />
                    <q-input
                        outlined
                        v-model="telefono"
                        label="Número de contacto *"
                    />
                    <q-input outlined v-model="email" type="Correo electrónico" label="Correo electrónico *" />
                    <q-input
                        outlined
                        v-model="mensaje"
                        label="Su denuncia *"
                    />
                    <div class="text-left">
                        <q-btn outline type="submit" class="azul q-my-md bg_white_i" label="Enviar" icon-right="arrow_right_alt"/>
                    </div>
                  </q-form>
                </div>
              </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>

    </div>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'
import configServices from '../../services/config'

export default {
  name: 'Haztesocio',
  components: {
    Menumiclub
  },
  data () {
    return {
      sliders: true,
      tab: 'presentacion',
      slide: 1,
      urlSite: 'https://obt3.cl',
      name: '',
      telefono: '',
      email: '',
      mensaje: '',
      rut: ''
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
    this.getNotices()
  },
  methods: {
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailHazteSocio',
        email: this.email,
        name: this.name,
        phone: this.phone,
        mobile: this.mobile,
        civilStatus: this.civilStatus,
        birthdate: this.date,
        country: this.country,
        category: this.shape
      }
      configServices.consumerStandar(this, 'pwcc-rest/post', data, {
        callBack: (data) => {
          if (data.status) {
            _this.$swal('Hemos registrado su solicitud pronto nos contactaremos')
          } else {
            _this.$swal('Estamos presentando problemas técnicos intente nuevamente más tarde')
          }

          this.email = ''
          this.name = ''
          this.phone = ''
          this.mobile = ''
          this.civilStatus = ''
          this.date = ''
          this.country = ''
          this.shape = ''
          this.pop_form_socio = false
        }
      })
    },
    onReset () {

    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/1069?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
          _this.loadedInfo = true
        }
      })
    },
    goNotice (notice) {
      localStorage.setItem('noticeId', notice.nid)
      this.$router.push('/detalle-noticia/' + notice.title.toLowerCase().replaceAll(' ', '-'))
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/hazte-socio/json', {
        callBack: (data) => {
          _this.notices = data
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
