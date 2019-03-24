<template>
    <div class="form-wrapper">
        <form @submit.prevent="submitHandler">
            <slot></slot>
            <slot name="button">
                <button type="submit" name="submit" >
                    Formular abschicken
                </button>
            </slot>
        </form>
    </div>
</template>

<script>
export default{
    data() {
        return {}
    },
    props: {
        submitHandler: {
            type: Function,
            required: false,
            default: () => {}
        }
    }
}
</script>

<style></style>
