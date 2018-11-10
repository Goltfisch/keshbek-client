<template>
    <div>
        <h1 class="headline">Transaktionen
            <button class="add-new-transaction" v-on:click="onAddTransaction"><i class="fas fa-plus" style="color: white;"></i></button>
        </h1>
        <div>
            <form @submit="onAddTransaction">
                <label>Kreditor ID</label></br>
                <input type="text" name="creditorId" placeholder="1" v-model="transaction.creditorId" /></br></br>

                <label>Debitor ID</label></br>
                <input type="text" name="debitorId" placeholder="2" v-model="transaction.debitorId" /></br></br>

                <label>Wert</label></br>
                <input type="text" name="amount" placeholder="" v-model="transaction.amount" /></br></br>

                <label>Grund</label></br>
                <input type="text" name="reason" placeholder="Essen" v-model="transaction.reason" /></br></br>

                <label>Datum</label></br>
                <input type="text" name="transactionDate" placeholder="01.01.2018" v-model="transaction.date" /></br></br>
            </form>
        </div>
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
            items: items,
            transaction: {
                creditorId: '',
                debitorId: '',
                amount: '',
                reason: '',
                date: '',
            }
        }
    },
    methods: {
        onAddTransaction: function(e) {
            e.preventDefault();

            console.log('this.transaction', this.transaction);

            this.axios.post('http://localhost:8000/transaction', this.transaction).then((response) => {
                console.log(response);
            });

            // async created() {
            //     const response = await axios.get('http://localhost:8000/transactions')
            //     this.transactions = response.data
            // }
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
