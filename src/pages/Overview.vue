<template>
    <div>
        <component-modal v-if="showTransactionModal" @close="onAddTransaction">
            <h3 slot="header">Neue Transaktion erstellen</h3>
            <div slot="body">
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
                    <input type="text" name="transactionDate" placeholder="01.01.2018" v-model="transaction.transactionDate" /></br></br>
                </form>
            </div>
        </component-modal>

        <h1 class="headline">
            Transaktionen
            <button class="add-new-transaction" v-on:click="showTransactionModal = true"><i class="fas fa-plus" style="color: white;"></i></button>
        </h1>
        <component-table :fields="fields" :items="items" :isLoading="isLoading"></component-table>
    </div>
</template>

<script>
import ComponentTable from './../components/Table.vue';
import ComponentModal from './../components/Modal.vue';

const fields = [ 'Kreditor', 'Debitor', 'Menge', 'Grund', 'Datum' ]

export default {
    data() {
        return {
            fields: fields,
            items: [],
            isLoading: true,
            transaction: {
                creditorId: '',
                debitorId: '',
                amount: '',
                reason: '',
                transactionDate: '',
            },
            showTransactionModal: false
        }
    },
    mounted() {
        this.axios.get('http://localhost:8000/api/transaction', {}).then(response => {
            this.isLoading = false;
            this.items = response.data;
        });
    },
    methods: {
        onAddTransaction: function(e) {
            e.preventDefault();

            this.axios.post('http://localhost:8000/transaction', this.transaction).then((response) => {
                this.items.push(response.data);
                this.transaction = {
                    creditorId: '',
                    debitorId: '',
                    amount: '',
                    reason: '',
                    transactionDate: '',
                };

                this.showTransactionModal = false;
            }).catch(error => {
                console.log('errors', error);
            });
        }
    },
    components: {
        ComponentTable, ComponentModal
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
