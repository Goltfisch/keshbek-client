<template>
    <div class="form-wrapper">
        <form @submit.prevent="submitHandler">
            <slot></slot>
            <slot name="button">
                <button type="submit" name="submit" >
                    Formular abschicken
                </button>
            </slot>
            <slot name="requiredText">
                <span class="required-text">* hierbei handelt es sich um ein Pflichtfeld.</span>
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

<style>
.form-wrapper .input-group{
	padding: 0;
	display: block;
	list-style: none;
	margin: 10px 0 0 0;
}
.form-wrapper label{
	margin:0 0 3px 0;
	padding:0px;
	display:block;
	font-weight: bold;
}
.form-wrapper input[type=text],
.form-wrapper input[type=date],
.form-wrapper input[type=datetime],
.form-wrapper input[type=number],
.form-wrapper input[type=search],
.form-wrapper input[type=time],
.form-wrapper input[type=url],
.form-wrapper input[type=email],
.form-wrapper input[type=password],
.form-wrapper textarea,
.form-wrapper select{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border:1px solid #BEBEBE;
	padding: 7px;
	margin:0px;
	-webkit-transition: all 0.30s ease-in-out;
	-moz-transition: all 0.30s ease-in-out;
	-ms-transition: all 0.30s ease-in-out;
	-o-transition: all 0.30s ease-in-out;
	outline: none;
    width: 100%;
}
.form-wrapper input[type=text]:focus,
.form-wrapper input[type=date]:focus,
.form-wrapper input[type=datetime]:focus,
.form-wrapper input[type=number]:focus,
.form-wrapper input[type=search]:focus,
.form-wrapper input[type=time]:focus,
.form-wrapper input[type=url]:focus,
.form-wrapper input[type=email]:focus,
.form-wrapper input[type=password]:focus,
.form-wrapper textarea:focus,
.form-wrapper select:focus{
	-moz-box-shadow: 0 0 8px #88D5E9;
	-webkit-box-shadow: 0 0 8px #88D5E9;
	box-shadow: 0 0 8px #88D5E9;
	border: 1px solid #88D5E9;
}

.form-wrapper button[type=submit]{
	background: #4B99AD;
	padding: 8px 15px 8px 15px;
	border: none;
	color: #fff;
    margin-top: 10px;
}
.form-wrapper button[type=submit]:hover{
	background: #4691A4;
	box-shadow:none;
	-moz-box-shadow:none;
	-webkit-box-shadow:none;
}
.form-wrapper .required{
	color: red;
}
.form-wrapper .required-text{
    display: block;
    font-size: 12px;
    color: #c3b3b3;
    margin-top: 20px;
}
</style>
