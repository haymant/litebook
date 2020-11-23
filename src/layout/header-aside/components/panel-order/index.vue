<template>
  <el-form label-width="120px" label-position="top">
    <el-row :gutter="20">
      <el-col :span="5">
        <el-form-item label="Broker">
          <el-select v-model="broker" placeholder="broker">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="Side">
          <el-select v-model="side" placeholder="side">
            <el-option
              v-for="item in sides"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="Quantity">
          <el-input-number
            v-model="qty"
            :step="100"
            :min="100"
            :max="10000"
          ></el-input-number>
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <el-form-item label="Symbol">
          <el-input placeholder="symbol" v-model="symbol"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="Type">
          <el-select v-model="type" placeholder="type">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="Price">
          <el-input-number
            v-model="px"
            :step="0.01"
            :precision="3"
            :min="0.001"
            :max="10000"
          ></el-input-number>
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="TIF">
          <el-select v-model="tif" placeholder="TIF">
            <el-option
              v-for="item in tifs"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5">
        <el-form-item label="Maturity">
          <el-date-picker
            v-model="maturity"
            type="month"
            placeholder="Pick a month"
          >
          </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="Account">
          <el-input placeholder="account" v-model="account"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="Iceberg">
          <el-input placeholder="" v-model="iceberg"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="5">
        <el-form-item label="Strategy">
          <el-select v-model="strategy" placeholder="strategy">
            <el-option
              v-for="item in strategys"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item label="Strategy Parameters">
          <d2-vjson-editor
            v-model="sArgs"
            :plus="false"
            height="400px"
          />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20"> </el-row>
  </el-form>
</template>

<script>
import VJsoneditor from 'v-jsoneditor'
export default {
  components: {
    'd2-vjson-editor': VJsoneditor
  },
  data () {
    return {
      options: [
        {
          value: 'ibkr',
          label: 'IBKR'
        }
      ],
      sides: [
        {
          value: 'buy',
          label: 'Buy'
        },
        {
          value: 'sell',
          label: 'Sell'
        }
      ],
      types: [
        {
          value: 'limit',
          label: 'Limit'
        },
        {
          value: 'market',
          label: 'Market'
        }
      ],
      tifs: [
        {
          value: 'day',
          label: 'Day'
        }
      ],
      strategys: [
        {
          value: 'vwap',
          label: 'VWAP'
        }
      ],
      broker: '',
      side: '',
      qty: 100,
      symbol: '',
      type: '',
      px: 0.01,
      tif: 'Day',
      maturity: '',
      account: '',
      iceberg: '',
      strategy: '',
      sArgs: { period: '1' }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
