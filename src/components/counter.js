import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import StoreContext from '../contexts/store';

const CounterComponent = observer(() => {

    const {counterStore} = useContext(StoreContext);

    const handleIncrement = () => {
      counterStore.increment();
    };
  
    const handleDecrement = () => {
      counterStore.decrement();
    };
  
    return (
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <span>{counterStore.count}</span>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    );
  });
  
  export default CounterComponent;
