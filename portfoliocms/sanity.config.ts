import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfolioCMS',

  projectId: 'ggo1whv8',
  dataset: 'idk',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
