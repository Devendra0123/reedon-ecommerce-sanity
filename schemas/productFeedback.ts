export default {
    name: 'productFeedback',
    title: 'Product Feedback',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Customer Name'
        },
        {
            name: 'comment',
            type: 'string',
            title: 'Comment'
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Rating'
        }
    ]
  };