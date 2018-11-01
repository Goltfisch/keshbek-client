<template>
    <div>
        <h1 class="headline">Transaktionen<div class="add-transaction-wrapper"><img src="../assets/add.svg" /></div></h1>
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
    }
</script>

<style>
    .add-transaction-wrapper {
        width: 24px;
        height: 24px;
        text-align: center;
        background: #00aca9;
        display: inline-block;
        margin-left: 10px;
        position: relative;
        top: 4px;
    }

    .add-transaction-wrapper img {
        width: 14px;
        position: relative;
        top: -7px;
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
