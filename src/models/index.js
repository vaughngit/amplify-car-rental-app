// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Videos } = initSchema(schema);

export {
  Videos
};