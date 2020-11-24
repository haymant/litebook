<template>
  <d2-container>
    <d2-crud-x ref='d2Crud'
    v-bind="_crudProps"
    v-on="_crudListeners">
    </d2-crud-x>
  </d2-container>
</template>

<script>
import { d2CrudPlus } from 'd2-crud-plus'
import { mapState } from 'vuex'

export default {
  name: 'ordertable',
  mixins: [d2CrudPlus.crud],
  props: ['options', 'getData'],
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    ...mapState('d2admin', {
      sessionId: state => state.user.info.sessionId
    })
  },
  methods: {
    getCrudOptions () {
      return this.options
    },
    pageRequest (query) {
      return this.getData()
    }
  }
}
</script>
