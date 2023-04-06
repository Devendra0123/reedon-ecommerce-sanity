export default {
    name: 'orderData',
    title: 'Order Data',
    type: 'document',
    fields: [
        {
            name: 'product',
            title: 'Product',
            type: 'reference',
            to: [{ type: 'product' }],
        },
        {
            name: 'productPrice',
            title: 'Product Price',
            type: 'number'
        },
        {
            name: 'productQuantity',
            title: 'Product Quantity',
            type: 'number'
        },
    ]
}