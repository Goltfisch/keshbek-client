<template>
    <div class="form-wrapper">
        <form @submit.prevent="submitHandler()">
            <table>
                <tr class="input-group" v-for="input in inputs">
                    <td><label :for="input.name">{{input.label}}</label></td>
                    <td><input :type="input.type" :name="input.name" :value="input.value"></td>
                </tr>
            </table>
            <button v-if="button">
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
    }
}
</script>

<style></style>
