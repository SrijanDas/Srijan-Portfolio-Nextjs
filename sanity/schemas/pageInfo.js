import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'backgroundInformation',
      title: 'Background Information',
      type: 'text',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    }),
  ],
})
