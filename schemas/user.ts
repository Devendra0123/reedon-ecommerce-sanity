export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'userName',
        title: 'UserName',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string'
      }
    ],
    preview: {
      select: {
        title: 'email',
      }
    }
  };