import Vue from 'vue'

import d2CrudX from 'd2-crud-x'
import { d2CrudPlus } from 'd2-crud-plus'
import { request } from '@api/service'

Vue.use(d2CrudX, { name: 'd2-crud-x' })

Vue.use(d2CrudPlus, {
  getRemoteDictFunc (url, dict) {
    return request({ // 用你项目中的http请求
      url: url,
      method: 'get'
    }).then(ret => {
      return ret.data
    })
  },
  commonOption () {
    return {
      format: {
        page: { // page接口返回的数据结构配置，
          request: {
            current: 'current',
            size: 'size'
          },
          response: {
            current: 'current', // 当前页码 ret.data.current
            size: 'size',
            total: 'total', // 总记录数 ret.data.total
            records: 'records' // 列表数组 ret.data.records
          }
        }
      },
      formOptions: {
        defaultSpan: 12 // 默认的表单 span
      },
      options: {
        height: '100%' // 表格高度100%，此时d2-crud-x外部容器必须有高度, 使用toolbar必须设置
      },
      pageOptions: {
        compact: true // 是否紧凑型页面
      },
      viewOptions: {
        disabled: false // 开启查看按钮
      }
    }
  }
})
