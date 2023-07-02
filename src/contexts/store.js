import { useContext, createContext } from 'react';
import counterStore from '../stores/counter';

const StoreContext = createContext({
  counterStore
});
 
/* Hook to use store in any functional component */
export const useStore = () => useContext(StoreContext);

export default StoreContext;
