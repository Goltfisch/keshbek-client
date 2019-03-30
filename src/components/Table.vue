<template>
    <div v-if="isLoading">
        Loading ...
    </div>
    <div v-else>
        <table class="table">
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
                    <td>{{ item.amount | currency }}</td>
                    <td>{{ item.reason }}</td>
                    <td>{{ formatDate(item.transactionDate) }}</td>
                    <td>
                        <span v-on:click="$emit('openEditModal', item.id)"><i class="far fa-edit"></i></span> |
                        <span v-on:click="$emit('onDeleteClick', item.id)"><i class="far fa-trash-alt"></i></span>
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

<style>
    .table {
        width: 100%;
        margin: 0 auto;
        background: white;
        border-radius: 5px;
        border: 1px solid rgba(34,36,38,.15);
        border-spacing: 0;
        border-collapse: separate;
    }

    .table tr th {
        padding: 11px;
        text-align: left;
        background-color: #f9fafb;
        color: rgba(0,0,0,.87);
        border-left: 1px solid rgba(34,36,38,.1);

    }

    .table tr th:first-child {
        border-left: 0;
        border-radius: 5px 0 0 0;
    }

    .table tr th:last-child {
        border-left: 0;
        border-radius: 0 5px 0 0;
    }

    .table tr td {
        padding: 11px;
        text-align: left;
        border-left: 1px solid rgba(34,36,38,.1);
        border-top: 1px solid rgba(34,36,38,.1);
    }

    .table tr td:first-child {
        border-left: 0;
    }

    .far {
        cursor: pointer;
    }

</style>
