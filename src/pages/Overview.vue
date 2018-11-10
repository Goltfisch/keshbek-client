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
        return {
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
