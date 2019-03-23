<template>
    <div>
        <div>
            <h1 class="headline">Profile</h1>
        </div>
        <component-form :submitHandler="submitHandler">
            <component-form-input name="firstName" label="Vorname" placeholder="Daniel" v-model="profile.firstName"></component-form-input>
            <component-form-input name="secondName" label="Nachname" placeholder="Wolf" v-model="profile.secondName"></component-form-input>

            <template slot="button">
                <button type="submit" name="submit">
                    Speichern
                </button>
            </template>
        </component-form>
    </div>
</template>

<script>
import ComponentForm from './../components/form/Form.vue';
import ComponentFormInput from './../components/form/FormInput.vue';

export default {
    data: () => ({
        profile: {
            firstName: undefined,
            secondName: undefined,
        },
    }),
    methods: {
        submitHandler: function(e) {
            console.log(this.profile.firstName);
        }
    },
    components: {
        ComponentForm,
        ComponentFormInput
    }
}
</script>
