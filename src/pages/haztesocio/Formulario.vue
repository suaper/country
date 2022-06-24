<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">
    <q-form>
    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Antecedentes del Postulante</div>
            <div class="back"> <q-btn to="/cultura/danza" round color="white" icon="west" />Volver</div>
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
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                        <div class="sin_estilos">
                            <span class="label_strong">Apellido Completo</span>
                            <q-input
                                outlined
                                label="Apellido del Postulante*"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                         </div>
                    </div>

                    <div class="ancho50 item-1">
                        <span class="label_strong">Lugar de Nacimiento</span>
                        <q-input
                        outlined
                        label="Ciudad de nacimiento"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                    />
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">Lugar de Nacimiento</span>
                        <q-btn icon="event" class="alargar" color="primary">
                            <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="date">
                                <div class="row items-center justify-end q-gutter-sm">
                                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                                    <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-btn>
                    </div>
                    <div class="ancho50 items-1">
                        <span class="label_strong">Foto</span>
                        <q-uploader
                            url="http://localhost:4444/upload"
                            style="max-width: 300px"
                    />
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 item-2">
                        <span class="label_strong">Dirección particular*</span>
                        <div class="flexline">
                            <span class="label_normal">Calle</span>
                            <q-input
                                outlined
                                label="Américo Vespucio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                            <span class="label_normal">Nº</span>
                            <q-input
                                outlined
                                label="###"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <div class="ancho50 item-2">
                        <span class="label_strong">Departamento</span>
                        <div class="flexline">
                            <span class="label_normal">No.</span>
                            <q-input
                                outlined
                                label="Américo Vespucio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                            <span class="label_normal">Comuna</span>
                            <q-input
                                outlined
                                label="Nombre de la Comuna"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">Fono</span>
                        <q-input
                            outlined
                            label="###"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                        />
                    </div>
                    <div class="ancho50 items-1">
                        <span class="label_strong">Celular</span>
                        <q-input
                            outlined
                            label="###"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                        />
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">R.U.T. Nº</span>
                        <q-input
                            outlined
                            label="###"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                        />
                    </div>
                    <div class="ancho50 items-1">
                        <span class="label_strong">Correo Electrónico</span>
                        <q-input
                            outlined
                            label="Correo Electrónico"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                        />
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">Estado Civil</span>
                        <div class="wrp_busca_mes w_500">
                            <q-select outlined label="Seleccione" v-model="civil" options="hours"/>
                        </div>
                    </div>
                    <div class="ancho50 items-1">
                        <span class="label_strong">Profesión</span>
                        <q-input
                            outlined
                            label="Profesión"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
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
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                        <div class="sin_estilos">
                            <span class="label_strong">Apellido del Padre</span>
                            <q-input
                                outlined
                                label="Apellido del Padre"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
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
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                        <div class="sin_estilos">
                            <span class="label_strong">Apellido de la Madre</span>
                            <q-input
                                outlined
                                label="Apellido de la Madre"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                </div>

                <div class="roww">
                    <div class="ancho50 items-1">
                        <q-radio left-label v-model="sociopadre" color="orange-4" val="si" label="Es socio P.W.C.C" />
                    </div>
                    <div class="ancho50 items-1">
                        <q-radio left-label v-model="sociomadre" color="orange-4" val="si" label="Es socio P.W.C.C" />
                    </div>
                </div>

                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">Empleador</span>
                        <q-input
                            outlined
                            label="Nombre de la empresa"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                        />
                    </div>
                    <div class="ancho50 items-1">
                        <span class="label_strong">Cargo</span>
                        <q-input
                            outlined
                            label="Cargo actual"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                        />
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 item-2">
                        <span class="label_strong">Dirección particular*</span>
                        <div class="flexline">
                            <span class="label_normal">Calle</span>
                            <q-input
                                outlined
                                label="Américo Vespucio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                            <span class="label_normal">Nº</span>
                            <q-input
                                outlined
                                label="###"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <div class="ancho50 item-2">
                        <span class="label_strong">Departamento</span>
                        <div class="flexline">
                            <span class="label_normal">No.</span>
                            <q-input
                                outlined
                                label="Américo Vespucio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                            <span class="label_normal">Comuna</span>
                            <q-input
                                outlined
                                label="Nombre de la Comuna"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 items-2">
                        <span class="label_strong">Teléfonos</span>
                        <q-input
                            outlined
                            label="###"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                        />
                        <q-input
                            outlined
                            label="###"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="q-pb-xl all_width bg_amarillo view_form_cotizar">
            <div class="q-py-md w_1200 centrar">
                <div class="center text-center q-my-lg titulos">Estudios</div>
                <div class="colegios">
                    <div class="roww">
                        <div class="ancho50">
                            <span class="label_strong">Secundarios: Colegios</span>
                            <q-input
                                outlined
                                label="Nombre del Colegio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 ">
                            <span class="label_strong">Lugar</span>
                            <q-input
                                outlined
                                label="Dirección del Colegio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
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
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 item-2">
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Desde</span>
                                <q-btn icon="event" round color="primary">
                                    <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                        <div class="row items-center justify-end q-gutter-sm">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </div>
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Hasta</span>
                                <q-btn icon="event" round color="primary">
                                    <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                        <div class="row items-center justify-end q-gutter-sm">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </div>
                        </div>
                    </div>
                    <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Agregar más Colegios" icon-right="add"/>
                </div>
                <hr class="form_linea">

                <div class="universidades">
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Universitarios: Universidad</span>
                            <q-input
                                outlined
                                label="Nombre de la universidad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 item-1">
                            <span class="label_strong">Sede</span>
                            <q-input
                                outlined
                                label="Ciudad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
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
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 items-1">
                            <span class="label_strong">Título</span>
                            <q-input
                                outlined
                                label="Título que recibió"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
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
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Agregar más Universidades" icon-right="add"/>
                </div>
                <hr class="form_linea">

                <div class="post_grado">
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Post-grado / Post-título</span>
                            <q-input
                                outlined
                                label="Nombre de la universidad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 item-1">
                            <span class="label_strong">Lugar</span>
                            <q-input
                                outlined
                                label="Ciudad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
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
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 items-1">
                            <span class="label_strong">Título</span>
                            <q-input
                                outlined
                                label="Grado o título que recibió"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
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
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Agregar más Post-grados" icon-right="add"/>
                </div>
                <hr class="form_linea">
                <div class="otros_estudios">
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Otros estudios</span>
                            <q-input
                                outlined
                                label="Nombre de la Institución"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 item-1">
                            <span class="label_strong">Lugar</span>
                            <q-input
                                outlined
                                label="Ciudad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
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
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 items-1">
                            <span class="label_strong">Título obtenido</span>
                            <q-input
                                outlined
                                label="Título que recibió"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
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
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Agregar más Estudios" icon-right="add"/>
                </div>
            </div>
        </div>

        <div class="q-pb-xl all_width gris_home">
            <div class="q-py-md w_1200 centrar view_form_cotizar justify-center">
                <div class="center text-center q-my-lg titulos">Historia Ocupacional</div>
                <div class="ocupaciones">
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Empresa</span>
                            <q-input
                                outlined
                                label="Nombre de la Empresa"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 item-1">
                            <span class="label_strong">Cargo</span>
                            <q-input
                                outlined
                                label="Cargo desempeñado"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <div class="roww">
                        <div class="ancho50 item-2">
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Desde</span>
                                <q-btn icon="event" class="alargar" color="primary">
                                    <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                        <div class="row items-center justify-end q-gutter-sm">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </div>
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Hasta</span>
                                <q-btn icon="event" class="alargar" color="primary">
                                    <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                        <div class="row items-center justify-end q-gutter-sm">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </div>
                        </div>

                        <div class="ancho50 item-1">
                            <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Agregar más ocupaciones" icon-right="add"/>
                        </div>
                    </div>
                </div>
                <hr class="form_linea">

                <div class="otros_cargos">
                    <div class="center text-center q-my-lg titulos">Otros cargos o actividades</div>
                    <div class="roww">
                        <div class="ancho100 items-1">
                            <span class="label_strong">Directorios, Clases, Universidad, etc.</span>
                            <q-input
                                outlined
                                label="Directorios, Clases, Universidad, etc."
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <div class="roww">
                        <div class="ancho50 item-1">
                            <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Agregar más ocupaciones" icon-right="add"/>
                        </div>
                    </div>
                </div>
                <hr class="form_linea">

                <div class="instituciones_deportivas">
                    <div class="center text-center q-my-lg titulos">Instituciones deportivas o sociales</div>

                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Institución</span>
                            <q-input
                                outlined
                                label="Nombre de la Institución"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 item-1">
                            <span class="label_strong">Cargo Directivo</span>
                            <q-input
                                outlined
                                label="Cargo Directivo"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <div class="roww">
                        <div class="ancho50 item-2">
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Desde</span>
                                <q-btn icon="event" class="alargar" color="primary">
                                    <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                        <div class="row items-center justify-end q-gutter-sm">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </div>
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Hasta</span>
                                <q-btn icon="event" class="alargar" color="primary">
                                    <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                        <div class="row items-center justify-end q-gutter-sm">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </div>
                        </div>

                        <div class="ancho50 item-1">
                            <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Agregar más ocupaciones" icon-right="add"/>
                        </div>
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
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>

                    <div class="roww">
                        <div class="ancho100 items-1">
                            <span class="label_strong">Antecedente que usted estime importante que el comité de selección conozca</span>
                            <q-input
                                outlined
                                label="Antecedente que usted estime importante que el comité de selección conozca"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>

                    <div class="roww">
                        <div class="ancho100 items-1">
                            <span class="label_strong">Favor señale por qué desea hacerse socio del Prince of Wales Country Club</span>
                            <q-input
                                outlined
                                label="Favor señale por qué desea hacerse socio del Prince of Wales Country Club"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                </div>
                <hr class="form_linea">

                <div class="otros_cargos">
                    <div class="center text-center q-my-lg titulos">Socios Patrocinadores</div>
                    <div class="roww">
                        <div class="ancho50 items-2">
                            <span class="label_strong">Nombre Completo</span>
                            <q-input
                                outlined
                                label="Nombre del Postulante"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                            <span class="label_strong">Apellido Completo</span>
                            <q-input
                                outlined
                                label="Apellido del Postulante*"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 items-2">
                            <span class="label_strong">Nombre Completo</span>
                            <q-input
                                outlined
                                label="Nombre del Postulante"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                            <span class="label_strong">Apellido Completo</span>
                            <q-input
                                outlined
                                label="Apellido del Postulante*"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                </div>
                <div class="action_next">
                    <q-btn outline type="submit" @click="irSiguiente()"  class="azul centrar mt_10 bg_white_home" label="Continuar" icon-right="add"/>
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
      date: '2019/03/01'
    }
  },
  methods: {
    irSiguiente () {
      this.$router.push('eshijo')
    }
  }
}
</script>
