<template>
    <div class="container">
        <el-dialog
            title="Neue Transaktion erstellen"
            :visible.sync="showTransactionModal"
            width="30%">
                <el-form label-position="left" ref="transactionAddForm" :model="transaction" label-width="100px" :rules="transactionAddRules">
                    <el-form-item label="Kreditor" prop="creditorId">
                        <el-select v-model="transaction.creditorId" placeholder="Wer gab?">
                            <el-option label="Alexander Wolf" value="1"></el-option>
                            <el-option label="Daniel Wolf" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Debitor" prop="debitorId">
                        <el-select v-model="transaction.debitorId" placeholder="Wem wurde gegeben?">
                            <el-option label="Alexander Wolf" value="1"></el-option>
                            <el-option label="Daniel Wolf" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Betrag" prop="amount">
                        <el-input v-model="transaction.amount" placeholder="Wieviel wurde gegeben?"></el-input>
                    </el-form-item>
                    <el-form-item label="Grund" prop="reason">
                        <el-input v-model="transaction.reason" placeholder="Warum wurde gegeben?"></el-input>
                    </el-form-item>
                    <el-form-item label="Datum" prop="transactionDate">
                        <el-date-picker
                            v-model="transaction.transactionDate"
                            type="date"
                            format="dd.MM.yyyy"
                            value-format="dd.MM.yyyy"
                            placeholder="Wann wurde gegeben?">
                        </el-date-picker>
                    </el-form-item>
                </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="showTransactionModal = false;">Abbrechen</el-button>
                <el-button type="primary" @click="onAddTransaction('transactionAddForm')">Speichern</el-button>
            </span>
        </el-dialog>
        <!-- <component-modal v-if="showTransactionModal" @close="onCloseTransactionModal">
            <h3 slot="header">
                <el-page-header content="Neue Transaktion erstellen"></el-page-header>
            </h3>
            <div slot="body">
                <component-form :submitHandler="onAddTransaction">
                    <component-form-input
                        name="creditorId"
                        label="Kreditor ID"
                        placeholder="1"
                        required
                        v-model="transaction.creditorId">
                    </component-form-input>
                    <component-form-input
                        name="debitorId"
                        label="Debitor ID"
                        placeholder="2"
                        required
                        v-model="transaction.debitorId">
                    </component-form-input>
                    <component-form-input
                        name="amount"
                        label="Wert"
                        required
                        v-model="transaction.amount">
                    </component-form-input>
                    <component-form-input
                        name="reason"
                        label="Grund"
                        placeholder="Essen"
                        required
                        v-model="transaction.reason">
                    </component-form-input>
                    <component-form-input
                        name="transactionDate"
                        label="Datum"
                        placeholder="01.01.2018"
                        required
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
        </component-modal> -->

        <component-modal v-if="showEditTransactionModal" @close="onCloseEditTransactionModal">
            <h3 slot="header">Transaktion bearbeiten</h3>
            <div slot="body">
                <component-form :submitHandler="onSaveTransaction">
                    <component-form-input
                        name="creditorId"
                        label="Kreditor ID"
                        placeholder="1"
                        required
                        v-model="transaction.creditorId">
                    </component-form-input>
                    <component-form-input
                        name="debitorId"
                        label="Debitor ID"
                        placeholder="2"
                        required
                        v-model="transaction.debitorId">
                    </component-form-input>
                    <component-form-input
                        name="amount"
                        label="Wert"
                        required
                        v-model="transaction.amount">
                    </component-form-input>
                    <component-form-input
                        name="reason"
                        label="Grund"
                        placeholder="Essen"
                        required
                        v-model="transaction.reason">
                    </component-form-input>
                    <component-form-input
                        name="transactionDate"
                        label="Datum"
                        placeholder="01.01.2018"
                        required
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
            <el-button @click="onOpenTransactionModal" icon="el-icon-plus" type="success" circle></el-button>
            <button class="generate-demo-data" @click="onGenerateDemoData"><i class="fas fa-database"></i></button>
        </h1>
        <el-table
            :data="items"
            stripe
            style="width: 100%">
                <el-table-column
                    prop="creditor"
                    label="Kreditor">
                </el-table-column>
                <el-table-column
                    prop="debitor"
                    label="Debitor">
                </el-table-column>
                <el-table-column
                    prop="amount"
                    label="Betrag">
                </el-table-column>
                <el-table-column
                    prop="reason"
                    label="Grund">
                </el-table-column>
                <el-table-column
                    prop="transactionDate"
                    label="Datum"
                    :formatter="dateFormatter">
                </el-table-column>
                <el-table-column
                    label="Aktionen"
                    align="right">
                    <template slot-scope="scope">
                        <el-button
                            circle
                            icon="el-icon-edit"
                            @click="onOpenEditModal(scope.$index, scope.row)"></el-button>
                        <el-button
                            circle
                            icon="el-icon-delete"
                            type="danger"
                            @click="onDeleteClick(scope.$index, scope.row)"></el-button>
                    </template>
                </el-table-column>
        </el-table>
    </div>
</template>

<script>
import moment from 'moment';

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
            transactionAddRules: {
                creditorId: [
                    { required: true, message: 'Bitte wählen Sie einen Kreditor aus.', trigger: 'change' }
                ],
                debitorId: [
                    { required: true, message: 'Bitte wählen Sie einen Debitor aus.', trigger: 'change' }
                ],
                amount: [
                    { required: true, message: 'Bitte tragen Sie einen Betrag ein.', trigger: 'blur' },
                    { min: 0, message: 'Der Betrag darf nicht negativ sein', trigger: 'change' },
                ],
                reason: [
                    { required: true, message: 'Bitte tragen Sie einen Grund ein.', trigger: 'blur' }
                ],
                transactionDate: [
                    { 
                        type: 'date', 
                        required: true, 
                        message: 'Bitte wählen Sie ein Datum aus.', 
                        trigger: 'change', 
                        transform(value) {
                            let transactionDate = new Date(moment(value, 'DD.MM.YYYY').format('YYYY-MM-DD'));

                            if(moment(transactionDate).isValid()) {
                                return transactionDate;
                            } else {
                                return value;
                            }
                        }
                    }
                ]
            }
        }
    },
    mounted() {
        this.axios.get(process.env.VUE_APP_BASE_URI + '/transaction', {}).then(response => {
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
        onAddTransaction: function(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.axios.post(process.env.VUE_APP_BASE_URI + '/transaction', this.transaction).then((response) => {
                        this.items.push(response.data);
                        this.transaction = {
                            creditorId: '',
                            debitorId: '',
                            amount: '',
                            reason: '',
                            transactionDate: '',
                        };

                        this.showTransactionModal = false;

                        this.$notify({
                            type: 'success',
                            title: 'Transaction',
                            text: 'Transaction was inserted successfully!'
                        });

                    }).catch(error => {
                        console.log('errors', error);

                        this.$notify({
                            type: 'error',
                            title: 'Error',
                            text: error.message
                        });
                    });     
                } else {
                    return false;
                }
            });
        },
        onSaveTransaction: function(e) {
            this.axios.put(process.env.VUE_APP_BASE_URI + '/transaction/'+this.transaction.id, this.transaction).then((response) => {
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

                this.$notify({
                    type: 'success',
                    title: 'Transaction',
                    text: 'Transaction was saved successfully!'
                });

                this.showEditTransactionModal = false;
            }).catch(error => {
                console.log('errors', error);

                this.$notify({
                    type: 'error',
                    title: 'Error',
                    text: error.message
                });
            });
        },
        onOpenEditModal: function(index, row) {
            let itemId = row.id;

            this.axios.get(process.env.VUE_APP_BASE_URI + '/transaction/'+itemId, {}).then((response) => {
                this.transaction = response.data;
                let transaction = response.data;
                transaction.transactionDate = moment(transaction.transactionDate.date).format('DD.MM.YYYY');
            }).catch(error => {
                console.log('errors', error);

                this.$notify({
                    type: 'error',
                    title: 'Error',
                    text: error.message
                });
            });

            this.showEditTransactionModal = true;
        },
        onCloseEditTransactionModal: function() {
            this.showEditTransactionModal = false;
        },
        onDeleteClick: function (index, row) {
            let itemId = row.id;

            this.axios.delete(process.env.VUE_APP_BASE_URI + '/transaction/'+itemId).then((response) => {
                if(response) {
                    this.items = this.items.filter(function(item) {
                        return item.id !== itemId;
                    });

                    this.$notify({
                        type: 'success',
                        title: 'Transaction',
                        text: 'Transaction was deleted successfully!'
                    });
                }
            }).catch(error => {
                console.log('errors', error);
                
                this.$notify({
                    type: 'error',
                    title: 'Error',
                    text: error.message
                });
            });
        },
        onGenerateDemoData: function () {
            this.axios.get(process.env.VUE_APP_BASE_URI + '/transaction/demo/', {}).then((response) => {

                    console.log('added demo data');
                    
                    this.$notify({
                        type: 'success',
                        title: 'Demodata',
                        text: 'Demodata was inserted successfully!'
                    });
                
            }).catch(error => {
                console.log('errors', error);

                this.$notify({
                    type: 'error',
                    title: 'Error',
                    text: error.message
                });
            });
        },
        dateFormatter: function(row, column) {
            return moment(row).format('DD.MM.YYYY');
        }
    },
    components: {
        ComponentModal,
        ComponentForm,
        ComponentFormInput
    }
}
</script>

<style>
    
</style>
