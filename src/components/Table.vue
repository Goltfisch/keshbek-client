<template>
    <div v-if="isLoading">
        Loading ...
    </div>
    <div v-else>
        <table class="overview-table">
            <thead>
                <tr>
                    <th v-for="field in fields">
                        {{ field }}
                    </th>
                    <th>
                        Aktionen
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td>{{ item.creditor }}</td>
                    <td>{{ item.debitor }}</td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.reason }}</td>
                    <td>{{ item.transactionDate }}</td>
                    <td>
                        <span v-on:click="onEdit(item.id)">Bearbeiten</span> / 
                        <span v-on:click="onDelete(item.id)">Löschen</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        data() {
            return {}
        },
        props: {
            fields: {
                type: Array,
                required: true
            },
            items: {
                type: Array,
                required: true
            },
            isLoading: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            onEdit: function(rowId) {
                console.log(rowId);
            },
            onDelete: function(rowId) {
                console.log(rowId)
            }
        }
    }
</script>

<style></style>
