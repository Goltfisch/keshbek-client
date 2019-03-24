<template>
    <div>
        <component-modal v-if="showTransactionModal" @close="onCloseTransactionModal">
            <h3 slot="header">Neue Transaktion erstellen</h3>
            <div slot="body">
                <component-form :submitHandler="onAddTransaction">
                    <component-form-input
                        name="creditorId"
                        label="Kreditor ID"
                        placeholder="1"
                        v-model="transaction.creditorId">
                    </component-form-input>
                    <component-form-input
                        name="debitorId"
                        label="Debitor ID"
                        placeholder="2"
                        v-model="transaction.debitorId">
                    </component-form-input>
                    <component-form-input
                        name="amount"
                        label="Wert"
                        v-model="transaction.amount">
                    </component-form-input>
                    <component-form-input
                        name="reason"
                        label="Grund"
                        placeholder="Essen"
                        v-model="transaction.reason">
                    </component-form-input>
                    <component-form-input
                        name="transactionDate"
                        label="Datum"
                        placeholder="01.01.2018"
                        v-model="transaction.transactionDate">
                    </component-form-input>

                    <template slot="button">
                        <button type="submit" name="submit" class="modal-default-button">
                            Hinzufügen
                        </button>
                    </template>
                </component-form>
            </div>
            <button slot="footer"></button>
        </component-modal>

        <h1 class="headline">
            Transaktionen
            <button class="add-new-transaction" v-on:click="showTransactionModal = true"><i class="fas fa-plus" style="color: white;"></i></button>
        </h1>
        <component-table v-bind="{fields, items, isLoading}"></component-table>
    </div>
</template>

<script>
import ComponentTable from './../components/Table.vue';
import ComponentModal from './../components/Modal.vue';
import ComponentForm from './../components/form/Form.vue';
import ComponentFormInput from './../components/form/FormInput.vue';

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
            showTransactionModal: false,
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
        },
        onCloseTransactionModal: function() {
            this.showTransactionModal = false;
        }
    },
    components: {
        ComponentTable,
        ComponentModal,
        ComponentForm,
        ComponentFormInput
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
        width: 100%;
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

    .form label {
        display: block;
        margin-bottom: 5px;
    }

    .form input {
        display: block;
        width: 100%;
        margin-bottom: 20px;
    }
</style>
