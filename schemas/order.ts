
export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            name: 'orderId',
            type: 'string',
            title: 'Order ID'
        },
        {
            name: 'shippingDetails',
            title: 'Shipping Details',
            type: 'object',
            fields: [
                {
                    name: 'userId',
                    title: 'User ID',
                    type: 'string'
                },
                {
                    name: 'customerName',
                    title: 'Customer Name',
                    type: 'string'
                },
                {
                    name: 'email',
                    title: 'Customer Email',
                    type: 'string'
                },
                {
                    name: 'location',
                    title: 'Customer Location',
                    type: 'string'
                },
                {
                    name: 'contactNumber',
                    title: 'Contact Number',
                    type: 'number'
                },
            ]
        },
        {
            name: 'totalQuantity',
            title: 'Total Quantity',
            type: 'number',
        },
        {
            name: 'totalPrice',
            title: 'Total Price',
            type: 'number',
        },
        {
            name: 'deliveryCharge',
            title: 'Delivery Charge',
            type: 'number'
        },
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{ type: 'orderData' }]
        },
        {
            name: 'deliveryStatus',
            title: 'Delivery Status',
            type: 'string'
        }
    ]
}