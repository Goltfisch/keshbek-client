<template>
    <div class="input-group">
        <label v-if="this.label" :for="this.name">{{this.label}}</label>
        <input :type="this.type" :name="this.name" :value="this.value" :placeholder="this.placeholder" @input="handleInput" />
    </div>
</template>

<script>
export default{
    data() {
        return {}
    },
    props: {
        name: {
            type: String,
            required: true
        },
        label: {
            type: String
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: [String, Number],
            required: false
        },
        placeholder: {
            type: [String, Number],
            required: false
        }
    },
    methods: {
        handleInput: function(event) {
            this.$emit('input', event.target.value);
        }
    }
}
</script>

<style></style>
