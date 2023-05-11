<script>
import axios from 'axios';
import Default from '../layouts/Default.vue';
export default {
    components: {
        Default
    },
    data() {
        return {
            name: '',
            email: '',
            message: '',
            success: false,
            errors: null,
            loading: false
        }
    },
    methods: {
        sendForm() {
            console.log('invio il form')
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,

            }
            console.log(data)
            this.loading = true
            axios.post('http://127.0.0.1:8000/api/contacts', data)
                .then(res => {
                    console.log(res.data)
                    const { success } = res.data // recuperiamo la chiave success dal nostro res.data
                    this.success = success
                    if (success) {
                        this.name = ''
                        this.email = ''
                        this.message = ''
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => { // finally ci serve in questo caso per aggiungere un loader che si sotituisce nel moemnto in cui la mail viene inviata, da un feedback all'utente e fa capire che è andata a buon fine 
                    this.loading = false
                })
        }
    }
}

</script>
<template>
    <Default>
        <div>
            <div class="container">
                <h1>Contattami</h1>
            </div>
            <div class="container ">
                <div v-if="success" class="badge text-bg-secondary">
                    Messaggio inviato con successo
                </div>
                <form @submit.prevent="sendForm">
                    <div class="row w-100 gap-2 m-0">
                        <p class="col p-0">
                            <label for="">Name</label>
                            <input v-model="name" class="form-control" type="text" name="name"
                                placeholder="Inserisci il tuo nome ">
                        </p>
                        <p class="col p-0">
                            <label for="">Email</label>
                            <input v-model="email" class="form-control" type="email" name="email"
                                placeholder="Inserisci la tua mail ">
                        </p>

                    </div>
                    <p class="col-12">
                        <label for="">Messaggio</label>
                        <textarea v-model="message" class="form-control " cols="30" rows="8" type="text" name="message"
                            placeholder="Messaggio"></textarea>
                    </p>
                    <button v-if="loading === false" class="col-1 btn btn-primary" type="submit">Invia </button>
                    <span v-else="loading">Sending....</span>
                </form>


            </div>
        </div>
    </Default>
</template>
<style></style>