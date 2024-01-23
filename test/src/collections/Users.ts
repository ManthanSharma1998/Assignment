import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts', 
  auth: true,
  admin: {
    useAsTitle: 'title', 
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text', 
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText', 
      required: true,
    },
  ],
};

export default Posts;
