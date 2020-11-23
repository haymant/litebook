<template>
  <div>
    <el-tooltip
      effect="dark"
      content="Place Order"
      placement="bottom">
      <el-button
        class="d2-ml-0 d2-mr btn-text can-hover"
        type="text"
        @click="dialogVisible = true">
        <d2-icon
          name="edit"
          style="font-size: 16px"/>
      </el-button>
    </el-tooltip>
    <el-dialog
      title="Place Order"
      width="=800px"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <d2-order-form/>
      <el-button round @click="placeOrder">Submit</el-button>
    </el-dialog>
  </div>
</template>

<script>
import orderForm from '../panel-order'
import { mapActions } from 'vuex'

export default {
  components: {
    'd2-order-form': orderForm
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    ...mapActions('d2admin/trade', [
      'placeOrder'
    ]),
    placeOrder () {
      return this.placeOrder({ sessionId: this.sessionId })
    }
  }
}
</script>
