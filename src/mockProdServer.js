import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

import menuModule from '../mock/menu';
import userModule from '../mock/user';
import crudModule from '../mock/crud'
export const setupProdMockServer = () => {
  createProdMockServer([...menuModule, ...userModule, ...crudModule]);
}
