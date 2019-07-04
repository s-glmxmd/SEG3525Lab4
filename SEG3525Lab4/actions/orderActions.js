export const createOrder = (items, total) => ({
    type: 'CREATE_ORDER',
    payload: {
      items,
      total,
    },
  });