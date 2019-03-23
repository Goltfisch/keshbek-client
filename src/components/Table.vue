<template>
    <div v-if="isLoading">
        Loading ...
    </div>
    <div v-else>
        <table class="overview-table">
            <thead>
                <tr>
                    <th v-for="field in fields" :key="field">
                        {{ field }}
                    </th>
                    <th>
                        Aktionen
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.creditor }}</td>
                    <td>{{ item.debitor }}</td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.reason }}</td>
                    <td>{{ formatDate(item.transactionDate) }}</td>
                    <td>
                        <span v-on:click="$emit('openEditModal', item.id)">Bearbeiten</span> / 
                        <span v-on:click="$emit('onDeleteClick', item.id)">Löschen</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import moment from 'moment';

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
        formatDate: function(dateObject) {
            return moment(dateObject.date).format('DD.MM.YYYY');
        }
    }
}
</script>

<style></style>
