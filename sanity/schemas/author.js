export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the person',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
            hotspot: true
          }
      },
      {
        name: 'bio',
        type: 'text',
        title: 'Biography'
      }
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'slug.current',
        media: 'image'
      }
    }
  }