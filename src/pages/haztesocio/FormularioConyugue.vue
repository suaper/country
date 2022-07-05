<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">
    <q-form>
    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Antecedentes del Conyugue</div>
            <div class="back"> <q-btn onclick="history.back()" round color="white" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_1200 centrar flex_escuelas flex_obras justify-center view_form_cotizar">
                <div class="roww">
                    <div class="ancho50 items-2">
                        <div class="sin_estilos">
                            <span class="label_strong">Nombre Completo</span>
                            <q-input
                                outlined
                                label="Nombre del Postulante"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.nombre"
                            />
                        </div>
                        <div class="sin_estilos">
                            <span class="label_strong">Apellido Completo</span>
                            <q-input
                                outlined
                                label="Apellido del Postulante*"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.apellido"
                            />
                         </div>
                    </div>

                    <div class="ancho50 items-1">
                    <span class="label_strong">Fecha de Matrimomio</span>
                      <q-input outlined v-model="data.matrimonio_fecha" mask="date" :rules="['date']">
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.matrimonio_fecha">
                                <div class="row items-center justify-end">
                                  <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                  </div>
                </div>

                <div class="roww">
                  <div class="ancho50 item-1">
                      <span class="label_strong">Lugar de Nacimiento</span>
                      <q-input
                      outlined
                      label="Ciudad de nacimiento"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                      v-model="data.lugar_nacimiento"
                  />
                  </div>
                    <div class="ancho50 items-1">
                      <span class="label_strong">Fecha de Nacimiento</span>
                        <q-input outlined v-model="data.cumpple" mask="date" :rules="['date']">
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="data.cumpple">
                                  <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                  </div>
                                </q-date>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">Foto</span>
                        <q-file outlined v-model="data.foto">
                          <template v-slot:prepend>
                            <q-icon name="attach_file" />
                          </template>
                        </q-file>
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 item-1">
                        <span class="label_strong">Dirección particular*</span>
                        <div class="flexline">
                            <span class="label_normal">Calle</span>
                            <q-input
                                outlined
                                label="Américo Vespucio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.calle"
                            />
                            <span class="label_normal">Nº</span>
                            <q-input
                                outlined
                                label="###"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.calle_numero"

                            />
                        </div>
                    </div>
                    <div class="ancho50 item-1">
                        <span class="label_strong">Departamento</span>
                        <div class="flexline">
                            <span class="label_normal">No.</span>
                            <q-input
                                outlined
                                label="Américo Vespucio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.departamento"

                            />
                            <span class="label_normal">Comuna</span>
                            <q-input
                                outlined
                                label="Nombre de la Comuna"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.comuna"

                            />
                        </div>
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">R.U.T. Nº</span>
                        <q-input
                            outlined
                            label="###"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                            v-model="data.rut"

                        />
                    </div>
                    <div class="ancho50 items-1">
                        <span class="label_strong">Celular</span>
                        <q-input
                            outlined
                            label="###"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                            v-model="data.celular"

                        />
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 items-2">
                        <div class="sin_estilos">
                            <span class="label_strong">Nombre del Padre</span>
                            <q-input
                                outlined
                                label="Nombre del Padre"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.nombre_padre"

                            />
                        </div>
                        <div class="sin_estilos">
                            <span class="label_strong">Apellido del Padre</span>
                            <q-input
                                outlined
                                label="Apellido del Padre"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.apellido_padre"

                            />
                        </div>
                    </div>
                    <div class="ancho50 items-2">
                        <div class="sin_estilos">
                            <span class="label_strong">Nombre de la Madre</span>
                            <q-input
                                outlined
                                label="Nombre de la Madre"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.nombre_madre"

                            />
                        </div>
                        <div class="sin_estilos">
                            <span class="label_strong">Apellido de la Madre</span>
                            <q-input
                                outlined
                                label="Apellido de la Madre"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.apellido_madre"
                            />
                        </div>
                    </div>
                </div>

                <div class="roww">
                    <div class="ancho50 items-1">
                        <q-radio left-label v-model="data.sociopadre"  color="orange-4" val="si" label="Es socio P.W.C.C" />
                    </div>
                    <div class="ancho50 items-1">
                        <q-radio left-label v-model="data.sociomadre" color="orange-4" val="si" label="Es socio P.W.C.C" />
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">Profesión</span>
                        <q-input
                            outlined
                            label="Profesión"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                            v-model="data.profesion"

                        />
                    </div>
                    <div class="ancho50 items-1">
                        <span class="label_strong">Correo Electrónico</span>
                        <q-input
                            outlined
                            label="Correo Electrónico"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                            v-model="data.email"

                        />
                    </div>
                </div>

                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">Empleador</span>
                        <q-input
                            outlined
                            label="Nombre de la empresa"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                            v-model="data.empresa"
                        />
                    </div>
                    <div class="ancho50 items-1">
                        <span class="label_strong">Cargo</span>
                        <q-input
                            outlined
                            label="Cargo actual"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                            v-model="data.cargo"
                        />
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 item-1">
                        <span class="label_strong">Dirección*</span>
                        <div class="flexline">
                            <span class="label_normal">Calle</span>
                            <q-input
                                outlined
                                label="Américo Vespucio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.direccion_empresa"
                            />
                            <span class="label_normal">Nº</span>
                            <q-input
                                outlined
                                label="###"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.direccion_no_empresa"
                            />
                        </div>
                    </div>
                    <div class="ancho50 item-1">
                        <span class="label_strong">Departamento</span>
                        <div class="flexline">
                            <span class="label_normal">No.</span>
                            <q-input
                                outlined
                                label="Américo Vespucio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.departamento_empresa"
                            />
                            <span class="label_normal">Comuna</span>
                            <q-input
                                outlined
                                label="Nombre de la Comuna"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.comuna_empresa"
                            />
                        </div>
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">Teléfonos</span>
                        <div class="sin_estilos items-2">
                            <q-input
                                outlined
                                label="###"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.telefono_empresa_1"
                            />
                            <q-input
                                outlined
                                label="###"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.telefono_empresa_2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="q-pb-xl all_width bg_amarillo view_form_cotizar">
            <div class="q-py-md w_1200 centrar">
                <div class="center text-center q-my-lg titulos">Estudios</div>
                <div class="colegios" v-for="(item, key) in colegios" :key="key">
                    <div class="roww">
                        <div class="ancho50">
                            <span class="label_strong">Secundarios: Colegios</span>
                            <q-input
                                outlined
                                label="Nombre del Colegio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="colegios[key].nombre"
                            />
                        </div>

                        <div class="ancho50 ">
                            <span class="label_strong">Lugar</span>
                            <q-input
                                outlined
                                label="Dirección del Colegio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="colegios[key].direccion"
                            />
                        </div>
                    </div>

                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Años Cursados</span>
                            <q-input
                                outlined
                                label="Digite los años cursados en este colegio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="colegios[key].years"
                            />
                        </div>

                        <div class="ancho50 item-2">
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Desde</span>
                                <q-input outlined v-model="colegios[key].desde" mask="date" :rules="['date']">
                                  <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="colegios[key].desde">
                                          <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                          </div>
                                        </q-date>
                                      </q-popup-proxy>
                                    </q-icon>
                                  </template>
                                </q-input>
                            </div>
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Hasta</span>
                                <q-input outlined v-model="colegios[key].hasta" mask="date" :rules="['date']">
                                  <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="colegios[key].hasta">
                                          <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                          </div>
                                        </q-date>
                                      </q-popup-proxy>
                                    </q-icon>
                                  </template>
                                </q-input>
                            </div>
                        </div>
                    </div>
                <hr class="form_linea">
                </div>
                <q-btn outline class="azul centrar mt_10 bg_white_home" label="Agregar más Colegios" icon-right="add" @click="addColegio()"/>

                <div class="universidades" v-for="(item, key) in universidades" :key="key">
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Universitarios: Universidad</span>
                            <q-input
                                outlined
                                label="Nombre de la universidad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="universidades[key].nombre"
                            />
                        </div>

                        <div class="ancho50 item-1">
                            <span class="label_strong">Sede</span>
                            <q-input
                                outlined
                                label="Ciudad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="universidades[key].ciudad"
                            />
                        </div>
                    </div>

                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Carrera</span>
                            <q-input
                                outlined
                                label="Carrera profesional"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="universidades[key].carrera"
                            />
                        </div>

                        <div class="ancho50 items-1">
                            <span class="label_strong">Título</span>
                            <q-input
                                outlined
                                label="Título que recibió"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="universidades[key].titulo"
                            />
                        </div>
                    </div>
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Año de titulación</span>
                            <q-input
                                outlined
                                label="Año en que recibió el título"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="universidades[key].year"
                            />
                        </div>
                    </div>
                <hr class="form_linea">
                </div>
                <q-btn outline class="azul centrar mt_10 bg_white_home" label="Agregar más Universidades" icon-right="add" @click="addUniversidad()"/>

                <div class="post_grado" v-for="(item, key) in postgrados" :key="key">
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Post-grado / Post-título</span>
                            <q-input
                                outlined
                                label="Nombre de la universidad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="postgrados[key].nombre"
                            />
                        </div>

                        <div class="ancho50 item-1">
                            <span class="label_strong">Lugar</span>
                            <q-input
                                outlined
                                label="Ciudad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="postgrados[key].ciudad"

                            />
                        </div>
                    </div>

                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Carrera</span>
                            <q-input
                                outlined
                                label="Carrera profesional"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="postgrados[key].carrera"

                            />
                        </div>

                        <div class="ancho50 items-1">
                            <span class="label_strong">Título</span>
                            <q-input
                                outlined
                                label="Grado o título que recibió"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="postgrados[key].titulo"

                            />
                        </div>
                    </div>
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Año de titulación</span>
                            <q-input
                                outlined
                                label="Año en que recibió el título"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="postgrados[key].year"
                            />
                        </div>
                    </div>
                <hr class="form_linea">
                </div>
                    <q-btn outline @click="addPostgrado()" class="azul centrar mt_10 bg_white_home" label="Agregar más Post-grados" icon-right="add"/>
                <div class="otros_estudios" v-for="(item, key) in otrosEstudios" :key="key">
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Otros estudios</span>
                            <q-input
                                outlined
                                label="Nombre de la Institución"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="otrosEstudios[key].nombre"
                            />
                        </div>

                        <div class="ancho50 item-1">
                            <span class="label_strong">Lugar</span>
                            <q-input
                                outlined
                                label="Ciudad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="otrosEstudios[key].ciudad"

                            />
                        </div>
                    </div>

                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Carrera</span>
                            <q-input
                                outlined
                                label="Carrera profesional"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="otrosEstudios[key].carrera"

                            />
                        </div>

                        <div class="ancho50 items-1">
                            <span class="label_strong">Título obtenido</span>
                            <q-input
                                outlined
                                label="Título que recibió"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="otrosEstudios[key].titulo"

                            />
                        </div>
                    </div>
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Año de titulación</span>
                            <q-input
                                outlined
                                label="Año en que recibió el título"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="otrosEstudios[key].year"

                            />
                        </div>
                    </div>
                    <hr class="form_linea" />
                </div>
                    <q-btn outline @click="addOtrosEstudios" class="azul centrar mt_10 bg_white_home" label="Agregar más Estudios" icon-right="add"/>
            </div>
        </div>

        <div class="q-pb-xl all_width gris_home">
            <div class="q-py-md w_1200 centrar view_form_cotizar justify-center">
                <div class="center text-center q-my-lg titulos">Historia Ocupacional</div>
                <div class="ocupaciones" v-for="(item, key) in ocupaciones" :key="key">
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Empresa</span>
                            <q-input
                                outlined
                                label="Nombre de la Empresa"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="ocupaciones[key].nombre"
                            />
                        </div>

                        <div class="ancho50 item-1">
                            <span class="label_strong">Cargo</span>
                            <q-input
                                outlined
                                label="Cargo desempeñado"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="ocupaciones[key].cargo"
                            />
                        </div>
                    </div>
                    <div class="roww">
                        <div class="ancho50 item-2">
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Desde</span>
                                <q-input outlined v-model="ocupaciones[key].desde" mask="date" :rules="['date']">
                                  <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="ocupaciones[key].desde">
                                          <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                          </div>
                                        </q-date>
                                      </q-popup-proxy>
                                    </q-icon>
                                  </template>
                                </q-input>
                            </div>
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Hasta</span>
                                <q-input outlined v-model="ocupaciones[key].hasta" mask="date" :rules="['date']">
                                  <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="ocupaciones[key].hasta">
                                          <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                          </div>
                                        </q-date>
                                      </q-popup-proxy>
                                    </q-icon>
                                  </template>
                                </q-input>
                            </div>
                        </div>

                    </div>
                  <hr class="form_linea">
                </div>
                <div class="ancho50 item-1">
                    <q-btn @click="addOcupacion()" outline class="azul centrar mt_10 bg_white_home" label="Agregar más ocupaciones" icon-right="add"/>
                </div>

                <div class="otros_cargos">
                    <div class="center text-center q-my-lg titulos">Otros cargos o actividades</div>
                    <div class="roww" v-for="(item, key) in otrasActividades" :key="key">
                        <div class="ancho100 items-1">
                            <span class="label_strong">Directorios, Clases, Universidad, etc.</span>
                            <q-input
                                outlined
                                label="Directorios, Clases, Universidad, etc."
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="otrasActividades[key].nombre"
                            />
                        </div>
                    </div>
                    <div class="roww">
                        <div class="ancho50 item-1">
                            <q-btn outline @click="addOtrasActividades()" class="azul centrar mt_10 bg_white_home" label="Agregar más ocupaciones" icon-right="add"/>
                        </div>
                    </div>
                </div>
                <hr class="form_linea">

                <div class="instituciones_deportivas">
                    <div class="center text-center q-my-lg titulos">Instituciones deportivas o sociales</div>
                    <div class="deportivas" v-for="(item, key) in deportivas" :key="key">
                      <div class="roww">
                          <div class="ancho50 items-1">
                              <span class="label_strong">Institución</span>
                              <q-input
                                  outlined
                                  label="Nombre de la Institución"
                                  lazy-rules
                                  :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                  v-model="deportivas[key].nombre"
                              />
                          </div>
                          <div class="ancho50 item-1">
                              <span class="label_strong">Cargo Directivo</span>
                              <q-input
                                  outlined
                                  label="Cargo Directivo"
                                  lazy-rules
                                  :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                  v-model="deportivas[key].cargo"

                              />
                          </div>
                      </div>
                      <div class="roww">
                          <div class="ancho50 item-2">
                              <div class="sin_estilo ancho50">
                                  <span class="label_strong">Desde</span>
                                  <q-input outlined v-model="deportivas[key].desde" mask="date" :rules="['date']">
                                    <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                          <q-date v-model="deportivas[key].desde">
                                            <div class="row items-center justify-end">
                                              <q-btn v-close-popup label="Close" color="primary" flat />
                                            </div>
                                          </q-date>
                                        </q-popup-proxy>
                                      </q-icon>
                                    </template>
                                  </q-input>
                              </div>
                              <div class="sin_estilo ancho50">
                                  <span class="label_strong">Hasta</span>
                                  <q-input outlined v-model="deportivas[key].hasta" mask="date" :rules="['date']">
                                    <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                          <q-date v-model="deportivas[key].hasta">
                                            <div class="row items-center justify-end">
                                              <q-btn v-close-popup label="Close" color="primary" flat />
                                            </div>
                                          </q-date>
                                        </q-popup-proxy>
                                      </q-icon>
                                    </template>
                                  </q-input>
                              </div>
                          </div>
                      </div>
                      <hr class="form_linea">
                    </div>
                    <div class="ancho50 item-1">
                      <q-btn outline @click="addDeportiva()" class="azul centrar mt_10 bg_white_home" label="Agregar más ocupaciones" icon-right="add"/>
                    </div>
                </div>
                <hr class="form_linea">
                <div class="otros_cargos">
                    <div class="center text-center q-my-lg titulos">Información adicional</div>
                    <div class="roww">
                        <div class="ancho100 items-1">
                            <span class="label_strong">Deportes que practica</span>
                            <q-input
                                outlined
                                label="Deportes que práctica"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.deporte"
                            />
                        </div>
                    </div>

                    <div class="roww">
                        <div class="ancho100 items-1">
                            <span class="label_strong">Otros intereses</span>
                            <q-input
                                outlined
                                label="Otros intereses"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                                v-model="data.antecedentes"

                            />
                        </div>
                    </div>
                </div>
                <hr class="form_linea">
                <div class="action_next">
                    <q-btn outline @click="irSiguiente()"  class="azul centrar mt_10 bg_white_home" label="Continuar" icon-right="add"/>
                    <span class="nota center">
                        * Cualquier cambio de esta información debe ser avisado al Club, dentro de 60 días.
                    </span>
                </div>
            </div>
        </div>
    </q-form>
  </q-page>
</template>

<script>

export default {
  name: 'Formulario',
  data () {
    return {
      video: false,
      detalleObras: false,
      pop_consultar: false,
      date: '2019/03/01',
      colegio: {
        nombre: '',
        direccion: '',
        years: '',
        desde: '',
        hasta: ''
      },
      colegios: [],
      itemUniversitario: {
        nombre: '',
        ciudad: '',
        carrera: '',
        titulo: '',
        year: ''
      },
      universidades: [],
      postgrados: [],
      otrosEstudios: [],
      ocupacion: {
        nombre: '',
        cargo: '',
        desde: '',
        hasta: ''
      },
      ocupaciones: [],
      otrasActividades: [
        {
          nombre: ''
        }
      ],
      deportiva: {
        nombre: '',
        cargo: '',
        desde: '',
        hasta: ''
      },
      deportivas: []
    }
  },
  created () {
    var data = localStorage.getItem('dataSocioForm')
    this.data = JSON.parse(data)
    this.data.conyugue = {}
    this.addColegio()
    this.addUniversidad()
    this.addPostgrado()
    this.addOtrosEstudios()
    this.addOcupacion()
    this.addDeportiva()
  },
  methods: {
    irSiguiente () {
      this.data.conyugue.colegios = this.colegios
      this.data.conyugue.universidades = this.universidades
      this.data.conyugue.postgrados = this.postgrados
      this.data.conyugue.otrosEstudios = this.otrosEstudios
      this.data.conyugue.ocupaciones = this.ocupaciones
      this.data.conyugue.deportivas = this.deportivas
      localStorage.setItem('dataSocioForm', JSON.stringify(this.data))
      this.$router.push('/hazte-socio/eshijo')
    },
    addColegio () {
      this.colegios.push(this.colegio)
    },
    addPostgrado () {
      this.postgrados.push(this.itemUniversitario)
    },
    addOtrosEstudios () {
      this.otrosEstudios.push(this.itemUniversitario)
    },
    addOcupacion () {
      this.ocupaciones.push(this.ocupacion)
    },
    addDeportiva () {
      this.deportivas.push(this.deportiva)
    },
    addOtrasActividades () {
      this.otrasActividades.push({ nombre: '' })
    },
    addUniversidad () {
      this.universidades.push(this.itemUniversitario)
    }
  }
}
</script>
