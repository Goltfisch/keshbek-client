<template>
    <div>
        <h1 class="headline">Transaktionen
            <button class="add-new-transaction" v-on:click="addNewransaction"><i class="fas fa-plus" style="color: white;"></i></button>
        </h1>
        <table class="overview-table">
            <tr>
                <th>Kreditor</th>
                <th>Debitor</th>
                <th>Wert</th>
                <th>Grund</th>
                <th>Datum</th>
                <th>Aktion</th>
            </tr>
            <tr>
                <td>Alexander</td>
                <td>Ewald</td>
                <td>500€</td>
                <td>Du weißt Bescheid</td>
                <td>01.11.2018</td>
                <td><span>Bearbeiten</span><span>Löschen</span></td>
            </tr>
            <tr>
                <td>Nicole</td>
                <td>Daniel</td>
                <td>3,99€</td>
                <td>Schokoriegel</td>
                <td>09.10.2018</td>
                <td><span>Bearbeiten</span><span>Löschen</span></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            addNewransaction: function(event) {
                console.log('log');
            }
        }
    }
</script>

<style>
    .add-new-transaction {
        padding-top: 5px;
        text-align: center;
        width: 30px;
        height: 30px;
        background: #00aca9;
    }

    .overview-table {
        width: 80%;
        margin: 0 auto;
        background: white;
    }

    tr th:after {
        background: #a9a9a9;
        height: 2px;
        display: block;
        width: 100%;
        content: "";
    }
</style>
