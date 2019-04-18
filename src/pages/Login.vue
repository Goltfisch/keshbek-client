<template>
        <el-row>
            <el-col :span="12">
                <div class="login-background">
                    <div class="login-wrapper">
                        <div v-if="Object.keys(this.errors).length" class="error-wrapper">
                                <el-alert
                                    v-for="(error, index) in errors"
                                    title="Fehler"
                                    type="error"
                                    :key="index">
                                    {{error}}
                                </el-alert>
                        </div>
                        <div class="login-form-wrapper">
                            <h1 class="login-headline">Rote oder blaue Pille?</h1>
                            <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm">
                                <el-form-item prop="username">
                                    <el-input placeholder="Benutzername" v-model="loginForm.username"></el-input>
                                </el-form-item>
                                <el-form-item prop="password">
                                    <el-input placeholder="Passwort" type="password" v-model="loginForm.password"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('loginForm')" plain>Anmelden</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="login-background-image">
                    <h1>Keshbek</h1>
                    <p>Get your Cash back!</p>
                </div>
            </el-col>
        </el-row>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            errors: [],
            loginFormRules: {
                username: [
                    { required: true, message: 'Bitte geben Sie einen Benutzernamen an.', trigger: 'blur' },
                    { min: 3, message: 'Der Benutzername muss mindestens 3 Zeichen lang sein.', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Bitte geben Sie ein Passwort an.', trigger: 'blur' },
                    { min: 3, message: 'Das Passwort muss mindestens 3 Zeichen lang sein.', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        submitForm(formName) {
            
            this.errors = {};
            
            const data = {
                username: this.loginForm.username,
                password: this.loginForm.password
            };

            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$auth.login({
                        data,
                        error: (e) => {
                                var code = e.response.data.code;

                                if (code == 401) {
                                    this.errors["auth"] = "Der Benutzername oder das Passwort stimmen nicht.";
                                }else {
                                    this.errors["auth"] = "Ein unbekannter Fehler ist aufgetreten.";
                                }

                                this.$forceUpdate();
                            }
                    });
                } else {
                    return false;
                }
            });
        },
    }
}
</script>

<style>

.el-row {
    background-color: #fafafe;
}

.login-background {
    position: relative;
    height: 100%;
}

.login-background .login-wrapper {
    width: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);   
}

.login-background-image {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-image: linear-gradient(
      rgba(52, 75, 99, 0.6), 
      rgba(52, 75, 99, 0.6)
    ), url('../assets/cat-login-background.jpg');
    background-position: right center;
}

.login-background-image h1 {
    font-size: 80px;
    text-align: right;
    margin: 0;
    padding: 50px 50px 0 50px;
    color: #c4ffdd;
}

.login-background-image p {
    font-size: 40px;
    text-align: right;
    margin: 0;
    padding: 0 50px 50px 50px;
    color: #c4ffdd;
}

.el-row, .el-col {
    height: 100%;
}

.el-form .el-button {
    width: 100%;
}

</style>
