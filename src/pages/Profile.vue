<template>
    <div>
        <div>
            <h1 class="headline">Profile</h1>
        </div>
        <component-form v-model="profile" v-bind="{inputs, button, submitHandler}"></component-form>
    </div>
</template>

<script>
import ComponentForm from './../components/Form.vue';

export default {
    data: () => ({
        profile: {
            firstName: 'daniel',
            secondName: undefined,
        },
        inputs: [],
        button: {}
    }),
    methods: {
        submitHandler: function(e) {
            console.log(this.profile.firstName);
            console.log(this.profile.secondName);
        }
    },
    mounted() {
        this.inputs = [
            {
                name: 'firstName',
                label: 'Vorname',
                type: 'text',
                placeholder: 'Daniel',
                model: this.profile.firstName
            },
            {
                name: 'secondName',
                label: 'Nachname',
                type: 'text',
                placeholder: 'Wolf'
            }
        ];

        this.button = {
            text: 'Speichern'
        };
    },
    components: {
        ComponentForm
    }
}
</script>
