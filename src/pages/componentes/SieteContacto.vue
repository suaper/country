 <template>
    <div class="fitnes_last">
        <div class="form_fitness w_100">
            <h6 class="title_text">Contacto</h6>
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
            >
                <q-input
                    outlined
                    v-model="name"
                    label="Nombres y Apellidos *"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-input
                    outlined
                    v-model="telefono"
                    label="Número de contacto *"
                />
                <q-input outlined v-model="email" type="Correo electrónico" label="Correo electrónico *" />
                <q-input
                    outlined
                    v-model="rut"
                    label="Seleccione la categoría *"
                />
                <div class="text-left">
                    <q-btn outline type="submit" class="azul q-my-md bg_white_i" label="Enviar" icon-right="arrow_right_alt"/>
                </div>
            </q-form>
        </div>
    </div>
</template>
