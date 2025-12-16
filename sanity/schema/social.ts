import {defineField, defineType} from 'sanity';

export default defineType({
    name: 'social',
    type: 'document',
    title: 'Réseau social',
    fields: [
        defineField({ name: 'name', type: 'string', title: 'Nom' }),
        defineField({ name: 'image', type: 'image', title: 'Image' }),
        defineField({ name: 'url', type: 'url', title: 'URL' }),
    ]
})
