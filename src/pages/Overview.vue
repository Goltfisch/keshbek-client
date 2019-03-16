<template>
    <div>
        <component-modal v-if="showTransactionModal" @close="onCloseTransactionModal">
            <h3 slot="header">Neue Transaktion erstellen</h3>
            <div slot="body">
                <form @submit.prevent="onAddTransaction" class="form">
                    <label>Kreditor ID</label>
                    <input type="text" name="creditorId" placeholder="1" v-model="transaction.creditorId" />

                    <label>Debitor ID</label>
                    <input type="text" name="debitorId" placeholder="2" v-model="transaction.debitorId" />

                    <label>Wert</label>
                    <input type="text" name="amount" placeholder="" v-model="transaction.amount" />

                    <label>Grund</label>
                    <input type="text" name="reason" placeholder="Essen" v-model="transaction.reason" />

                    <label>Datum</label>
                    <input type="text" name="transactionDate" placeholder="01.01.2018" v-model="transaction.transactionDate" />
                </form>
            </div>
            <button slot="footer" class="modal-default-button" @click="onAddTransaction">
                Hinzufügen
            </button>
        </component-modal>

        <component-modal v-if="showEditTransactionModal" @close="onCloseEditTransactionModal">
            <h3 slot="header">Transaktion bearbeiten</h3>
            <div slot="body">
                <form @submit.prevent="onSaveTransaction" class="form">
                    <label>Kreditor ID</label>
                    <input type="text" name="creditorId" placeholder="1" v-model="transaction.creditorId" />

                    <label>Debitor ID</label>
                    <input type="text" name="debitorId" placeholder="2" v-model="transaction.debitorId" />

                    <label>Wert</label>
                    <input type="text" name="amount" placeholder="" v-model="transaction.amount" />

                    <label>Grund</label>
                    <input type="text" name="reason" placeholder="Essen" v-model="transaction.reason" />

                    <label>Datum</label>
                    <input type="text" name="transactionDate" placeholder="01.01.2018" v-model="transaction.transactionDate" />
                </form>
            </div>
            <button slot="footer" class="modal-default-button" @click="onSaveTransaction">
                Speichern
            </button>
        </component-modal>

        <h1 class="headline">
            Transaktionen
            <button class="add-new-transaction" @click="onOpenTransactionModal"><i class="fas fa-plus" style="color: white;"></i></button>
        </h1>
        <component-table :fields="fields" :items="items" :isLoading="isLoading" @openEditModal="onOpenEditModal"></component-table>
    </div>
</template>

<script>
import moment from 'moment';

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
            showTransactionModal: false,
            showEditTransactionModal: false,
        }
    },
    mounted() {
        this.axios.get('http://localhost:8000/api/transaction', {}).then(response => {
            this.isLoading = false;
            this.items = response.data;
        });
    },
    methods: {
        onOpenTransactionModal: function() {
            this.transaction = {
                creditorId: '',
                debitorId: '',
                amount: '',
                reason: '',
                transactionDate: '',
            };

            this.showTransactionModal = true;
        },
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
        onSaveTransaction: function(e) {
            this.axios.put('http://localhost:8000/api/transaction/'+this.transaction.id, this.transaction).then((response) => {
                this.transaction = {
                    creditorId: '',
                    debitorId: '',
                    amount: '',
                    reason: '',
                    transactionDate: '',
                };

                let transaction = response.data;

                this.items = this.items.map(function(item) {
                    if (item.id == transaction.id) {
                        item = transaction;
                    }
                    return item;
                });

                this.showEditTransactionModal = false;
            }).catch(error => {
                console.log('errors', error);
            });
        },
        onOpenEditModal: function(itemId) {
            this.axios.get('http://localhost:8000/api/transaction/'+itemId, {}).then((response) => {
                this.transaction = response.data;
                let transaction = response.data;
                transaction.transactionDate = moment(transaction.transactionDate.date).format('DD.MM.YYYY');
            });

            this.showEditTransactionModal = true;
        },
        onCloseTransactionModal: function() {
            this.showTransactionModal = false;
        },
        onCloseEditTransactionModal: function() {
            this.showEditTransactionModal = false;
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
