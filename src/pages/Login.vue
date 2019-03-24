<template>
    <div class="login-wrapper">
        <div v-if="Object.keys(this.errors).length" class="error-wrapper">
                <b>Folgende Probleme sind aufgetreten:</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
        </div>
        <div class="login-form-wrapper">
            <h1 class="login-headline">Keshbek Login</h1>


            <component-form :submitHandler="onLogin">
                <component-form-input
                    name="username"
                    label="Benutzer"
                    required="true"
                    v-model="login.username">
                </component-form-input>

                <component-form-input
                    name="password"
                    label="Password"
                    type="password"
                    required="true"
                    v-model="login.password">
                </component-form-input>

                <template slot="button">
                    <button type="submit" name="submit" class="login-button">
                        Anmelden
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
    data() {
        return {
            login: {
                username: '',
                password: ''
            },
            errors: []
        }
    },
    methods: {
        onLogin: function(e) {
            e.preventDefault();

            this.errors = {};

            const data = {
                username: this.login.username,
                password: this.login.password
            };

            this.$auth.login({
                data,
                error: (e) => {
                    var code = e.response.data.code;

                    if (code == 401) {
                        this.errors["auth"] = "Der Benutzername oder das Passwort stimmen nicht.";
                    }else {
                        this.errors["auth"] = "Ein ungekannter Fehler ist aufgetreten.";
                    }

                    //force update because the site wont reload automatically
                    this.$forceUpdate();
                }
            })
        }
    },
    components: {
        ComponentForm,
        ComponentFormInput
    }
}
</script>

<style>
.login-wrapper {
    height: 100%;
    width: 100%;
    background: url('../assets/login-background.jpg');
    background-size: cover;
}

.error-wrapper {
    width: 400px;
    padding: 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10%;
}

.login-headline {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 35px;
    color: #3e3e3e;
}

.login-wrapper .login-form-wrapper {
    width: 500px;
    margin: 0 auto;
    top: 50%;
    position: relative;
    transform: translateY(-50%);
    padding: 20px;
    background: rgba(255,255,255,0.4);
    -webkit-box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.login-wrapper .login-form-wrapper form {
    width: 75%;
    margin: 0 auto;
}

.login-wrapper .login-form-wrapper .required-text {
    color: black;
}

.login-label {
    font-size: 12px;
    margin-left: 20px;
    margin-bottom: 5px;
    display: block;
    color: #3e3e3e;
}

.login-input {
    display: block;
    width: calc(100% - 40px);
    height: 40px;
    border: 0;
    margin-bottom: 20px;
    padding: 0 20px;
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
    border: 1px solid white;
}

.login-input.has--error {
    border-color: #a94442;
}

.login-input:focus {
    outline: none;
}

.login-button {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background: #0a431c;
    border: none;
    margin-bottom: 15px;
    font-weight: 700;
    color: white;
    font-size: 14px;
    cursor: pointer;
}

.login-button:focus {
    outline: none;
}
</style>
