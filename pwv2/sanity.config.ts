import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'pw_v2',

  projectId: 's9mbfglu',
  dataset: 'test',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
