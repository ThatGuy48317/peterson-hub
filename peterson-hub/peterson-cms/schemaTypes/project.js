import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Software Engineering', value: 'software' },
          { title: 'Doctoral Studies', value: 'research' },
          { title: 'Creative / Hardware', value: 'creative' },
          { title: 'AI & Automation', value: 'ai' },
        ],
        layout: 'radio'
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'link',
      title: 'External Link / Demo URL',
      type: 'url',
    }),
    defineField({
      name: 'tags',
      title: 'Tags (e.g., Python, Azure)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'date',
      title: 'Date (e.g., Jan 2026)',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status (e.g., Live Demo, Prototype)',
      type: 'string',
    }),
  ],
})