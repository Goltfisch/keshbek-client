<template>
    <div>
        <div>
            <h1 class="headline">Profile</h1>
        </div>
        <div v-if="isLoading">
            Is loading...
        </div>
        <div v-else>
            <component-form :submitHandler="submitHandler">
                <component-form-input
                    name="firstname"
                    label="Vorname"
                    v-model="profile.firstname"
                    required>
                </component-form-input>
                <component-form-input
                    name="lastname"
                    label="Nachname"
                    v-model="profile.lastname"
                    required>
                </component-form-input>
                <component-form-input
                    name="email"
                    label="Email"
                    v-model="profile.email"
                    required>
                </component-form-input>
                <component-form-input
                    name="paypalMeLink"
                    label="paypal.me Link"
                    placeholder="https://"
                    v-model="profile.paypalMeLink"
                    required>
                </component-form-input>
                <component-form-input
                    name="avatarLink"
                    label="Avatar Link"
                    placeholder="https://"
                    v-model="profile.avatarLink">
                </component-form-input>
                <template slot="button">
                    <button type="submit" name="submit">
                        Speichern
                    </button>
                </template>
            </component-form>
        </div>
    </div>
</template>

<script>
import ComponentForm from './../components/form/Form.vue';
import ComponentFormInput from './../components/form/FormInput.vue';

export default {
    data: () => ({
        isLoading: true,
        profile: {
            firstname: '',
            lastname: '',
            email: '',
            paypalMeLink: '',
            avatarLink: ''
        },
    }),
    methods: {
        submitHandler: function(e) {
            this.axios.put(process.env.VUE_APP_BASE_URI + '/user', this.profile)
            .then((response) => {
                this.$notify({
                    type: 'success',
                    title: 'Profile',
                    text: 'Profile was updated successfully!'
                });
            })
            .catch(error => {
                this.$notify({
                    type: 'error',
                    title: 'Error',
                    text: error.message
                });
            });
        }
    },
    components: {
        ComponentForm,
        ComponentFormInput
    },
    mounted() {
        this.axios.get(process.env.VUE_APP_BASE_URI + '/user', {}).then(response => {
            this.isLoading = false;
            this.profile = response.data;
        });
    },
}
</script>
