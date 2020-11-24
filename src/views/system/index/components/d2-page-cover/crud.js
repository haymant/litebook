export const orderOptions = {
  searchOptions: { disabled: true },
  columns: [
    {
      title: 'OrdID',
      key: 'ordId',
      width: '100',
      form: {
        rules: [{ required: true, message: 'Please input symbol.' }]
      }
    },
    {
      title: 'Broker',
      key: 'broker',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Px',
      key: 'px',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Qty',
      key: 'qty',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    }
  ]
}
