<template>
    <div class="form-wrapper">
        <form @submit.prevent="submitHandler">
            <table>
                <tr class="input-group" v-for="input in inputs">
                    <td><label :for="input.name">{{input.label}}</label></td>
                    <td><input :type="input.type" :name="input.name" :value="input.value" :placeholder="input.placeholder" @input="handleInput"></td>
                </tr>
            </table>
            <button v-if="button" :class="button.class">
                {{button.text}}
            </button>
        </form>
    </div>
</template>

<script>
export default{
    data() {
        return {}
    },
    props: {
        inputs: {
            type: Array,
            required: true
        },
        button: {
            type: Object,
            required: false
        },
        submitHandler: {
            type: Function,
            required: false,
            default: () => {}
        }
    },
    methods: {
        handleInput: function(event) {
            var data = {};

            this.inputs.forEach(function(input, key) {
                data[input.name] = document.getElementsByName(input.name)[0].value;
            });

            this.$emit('input', data);
        }
    }
}
</script>

<style></style>
