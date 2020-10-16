<template>
  <d2-container>
    <template slot='header'>Market Data</template>
    <d2-crud-x ref='d2Crud'
    :pagination="null"
    v-bind="_crudProps"
    v-on="_crudListeners">
      <el-button slot="header" class="d2-mb-5" size="small" type="primary" @click="addRow">Add</el-button>
    </d2-crud-x>
    <crud-footer ref="footer"
                     :current="crud.page.current"
                     :size="crud.page.size"
                     :total="crud.page.total"
                     @change="handlePaginationChange"
    >
    </crud-footer>
  </d2-container>
</template>

<script>
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
export default {
  name: 'marketdatapage',
  mixins: [d2CrudPlus.crud],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    getCrudOptions () {
      return crudOptions
    },
    pageRequest (query) {
      return Promise.resolve({ code: 0, msg: 'success', data: { records: [{ symbol: 'APPL' }] } })
    }
  }
}
</script>
