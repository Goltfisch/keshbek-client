<template>
    <div>
        <div>
            <h1 class="headline">Profile</h1>
        </div>
        <component-form v-bind="{inputs, button, submitHandler}"></component-form>
    </div>
</template>

<script>
import ComponentForm from './../components/Form.vue';

export default {
    data: () => ({
        inputs: [
            {
                name: 'firstName',
                label: 'Vorname',
                type: 'text',
                value: ''
            },
            {
                name: 'secondName',
                label: 'Nachname',
                type: 'text',
                value: ''
            }
        ],
        button: {
            text: 'Speichern'
        }
    }),
    methods: {
        submitHandler: () => {
            console.log('Profile-form was submitted!');
        }
    },
    components: {
        ComponentForm
    }
}
</script>
