<template>
    <div>
        <h1 class="headline">Transaktionen
            <button class="add-new-transaction" v-on:click="addNewransaction"><i class="fas fa-plus" style="color: white;"></i></button>
        </h1>
        <component-table :fields="fields" :items="items"></component-table>
    </div>
</template>

<script>
import ComponentTable from './../components/Table.vue';

const fields = [ 'Kreditor', 'Debitor', 'Menge', 'Grund', 'Datum' ]

const items = [
    { id: 1, creditor: 'Alexander', debitor: 'Ewald', amount: 500, reason: 'Du weißt Bescheid', date: '01.11.2018' },
    { id: 2, creditor: 'Nicole', debitor: 'Daniel', amount: 3.99, reason: 'Schokoriegel', date: '09.11.2018' }
]

export default {
    data() {
        return {
            fields: fields,
            items: items
        }
    },
    methods: {
        addNewransaction: function(event) {
            
        }
    },
    components: {
        ComponentTable
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
