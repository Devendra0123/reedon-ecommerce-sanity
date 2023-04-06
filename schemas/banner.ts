export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
      {
        name: 'bannerTitle',
        title: 'Banner Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Banner Image',
        type: 'image'
      },
      {
        name: 'offer',
        title: 'Offer',
        type: 'string',
      },
      {
        name: 'bannerDescription',
        title: 'Banner Description',
        type: 'string',
      },
      {
        name: 'bannerLink',
        title: 'Banner Link',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'bannerTitle',
      }
    }
  };