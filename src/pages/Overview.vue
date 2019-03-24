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
                        required="true"
                        v-model="transaction.creditorId">
                    </component-form-input>
                    <component-form-input
                        name="debitorId"
                        label="Debitor ID"
                        placeholder="2"
                        required="true"
                        v-model="transaction.debitorId">
                    </component-form-input>
                    <component-form-input
                        name="amount"
                        label="Wert"
                        required="true"
                        v-model="transaction.amount">
                    </component-form-input>
                    <component-form-input
                        name="reason"
                        label="Grund"
                        placeholder="Essen"
                        required="true"
                        v-model="transaction.reason">
                    </component-form-input>
                    <component-form-input
                        name="transactionDate"
                        label="Datum"
                        placeholder="01.01.2018"
                        required="true"
                        v-model="transaction.transactionDate">
                    </component-form-input>

                    <template slot="button">
                        <button type="submit" name="submit" class="modal-default-button">
                            Hinzufügen
                        </button>
                    </template>
                </component-form>
            </div>
            <div slot="footer"></div>
        </component-modal>

        <component-modal v-if="showEditTransactionModal" @close="onCloseEditTransactionModal">
            <h3 slot="header">Transaktion bearbeiten</h3>
            <div slot="body">
                <component-form :submitHandler="onSaveTransaction">
                    <component-form-input
                        name="creditorId"
                        label="Kreditor ID"
                        placeholder="1"
                        required="true"
                        v-model="transaction.creditorId">
                    </component-form-input>
                    <component-form-input
                        name="debitorId"
                        label="Debitor ID"
                        placeholder="2"
                        required="true"
                        v-model="transaction.debitorId">
                    </component-form-input>
                    <component-form-input
                        name="amount"
                        label="Wert"
                        required="true"
                        v-model="transaction.amount">
                    </component-form-input>
                    <component-form-input
                        name="reason"
                        label="Grund"
                        placeholder="Essen"
                        required="true"
                        v-model="transaction.reason">
                    </component-form-input>
                    <component-form-input
                        name="transactionDate"
                        label="Datum"
                        placeholder="01.01.2018"
                        required="true"
                        v-model="transaction.transactionDate">
                    </component-form-input>

                    <template slot="button">
                        <button type="submit" name="submit" class="modal-default-button">
                            Speichern
                        </button>
                    </template>
                </component-form>
            </div>
            <div slot="footer"></div>
        </component-modal>

        <h1 class="headline">
            Transaktionen
            <button class="add-new-transaction" @click="onOpenTransactionModal"><i class="fas fa-plus" style="color: white;"></i></button>
            <button class="generate-demo-data" @click="onGenerateDemoData"><i class="fas fa-database"></i></button>
        </h1>
        <component-table v-bind="{fields, items, isLoading}" @openEditModal="onOpenEditModal" @onDeleteClick="onDeleteClick"></component-table>
    </div>
</template>

<script>
import moment from 'moment';

import ComponentTable from './../components/Table.vue';
import ComponentModal from './../components/Modal.vue';
import ComponentForm from './../components/form/Form.vue';
import ComponentFormInput from './../components/form/FormInput.vue';

const fields = [ 'Kreditor', 'Debitor', 'Betrag', 'Grund', 'Datum' ]

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
        },
        onDeleteClick: function (itemId) {
            this.axios.delete('http://localhost:8000/api/transaction/'+itemId).then((response) => {
                if(response) {
                    this.items = this.items.filter(function(item) {
                        return item.id !== itemId;
                    });
                }
            }).catch(error => {
                console.log('errors', error);
            });
        },
        onGenerateDemoData: function () {
            this.axios.get('http://localhost:8000/api/transaction/demo/', {}).then((response) => {
                if(response) {
                    console.log('added demo data');
                }
            }).catch(error => {
                console.log('errors', error);
            });
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
