export const crudOptions = {
  searchOptions: { disabled: true },
  columns: [
    {
      title: 'Symbol',
      key: 'symbol',
      width: '100',
      form: {
        rules: [{ required: true, message: 'Please input symbol.' }]
      }
    },
    {
      title: 'Trade Px',
      key: 'px',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Trade Qty',
      key: 'qty',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Trade Exch',
      key: 'exch',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Bid Exch',
      key: 'bidexch',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Bid Px',
      key: 'bidpx',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Bid Qty',
      key: 'bidqty',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Offer Exch',
      key: 'offerexch',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Offer Px',
      key: 'offerpx',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Offer Qty',
      key: 'offerqty',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Open',
      key: 'open',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'High',
      key: 'high',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Low',
      key: 'low',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Close',
      key: 'close',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    },
    {
      title: 'Volume',
      key: 'volume',
      width: '100',
      form: {
        addDisabled: true,
        editDisabled: true
      }
    }
  ]
}
