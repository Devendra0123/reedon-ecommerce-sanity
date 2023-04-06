export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'productDescription',
            title: 'Product Description',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'oldPrice',
            title: 'Old Price',
            type: 'number'
        },
        {
            name: 'currentPrice',
            title: 'Current Price',
            type: 'number'
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'category'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'categoryName'
                        }
                    }
                }
            ],
        },
        {
            name: 'numberOfItemInStock',
            title: 'Number of items in Stock',
            type: 'number'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'customerReview',
            title: 'Customer Review',
            type: 'array',
            of: [
                {
                    type: 'object',
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
                }
            ],
        }
    ]
}