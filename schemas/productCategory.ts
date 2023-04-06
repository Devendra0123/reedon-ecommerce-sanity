export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'categoryName',
        type: 'string',
        title: 'Category Name'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        }
    },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'categoryName',
            maxLength: 90,
        }
    },
    ]
  }