export const dashboardOptions = {
  layout: {
    layout: [
      { x: 0, y: 0, w: 5, h: 15, i: '0', title: 'Overview' },
      { x: 5, y: 0, w: 4, h: 15, i: '1', title: 'Market' },
      { x: 9, y: 0, w: 3, h: 6, i: '2', title: 'Order Depth' },
      { x: 9, y: 0, w: 3, h: 9, i: '3', title: 'Chart' },
      { x: 0, y: 15, w: 6, h: 12, i: '4', title: 'P&L' },
      { x: 6, y: 15, w: 6, h: 12, i: '5', title: 'Books' }
    ],
    colNum: 12,
    rowHeight: 30,
    isDraggable: true,
    isResizable: true,
    isMirrored: false,
    verticalCompact: true,
    margin: [10, 10],
    useCssTransforms: true
  }
}
