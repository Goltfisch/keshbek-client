<template>
    <div>
        <form @submit="onLogin">
            <label>Username</label></br>
            <input type="text" name="_username" placeholder="Username" v-model="login._username" /></br></br>
            <label>Password</label></br>
            <input type="password" name="_password" placeholder="Password" v-model="login._password" /></br></br>
            <button>Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                login: {
                    _username: '',
                    _password: ''
                },
                authFaild: false
            }
        },
        methods: {
            onLogin: function(e) {
                e.preventDefault();
                
                const data = {
                    username: this.login._username, 
                    password: this.login._password
                };

                this.$auth.login({
                    data,
                    error: (e) => {
                        console.log(e);
                        console.log('error');
                    }
                })
            }
        }
    }
</script>
