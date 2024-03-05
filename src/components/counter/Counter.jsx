import React, { useCallback, useState } from 'react'
import css from './counter.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Counter = React.memo(() => {
    const [count, setCount] = useState(0);
    const notify = () => toast(`Вы достигли до ${count + 1}!`);


    const handleIncrement = useCallback(() => {
      setCount(count + 1);

      if(count == '9') {
        notify();
      }else if(count == '19') {
        notify();

      }else if(count == '29') {
        notify();

      }else if(count == '39') {
        notify();

      }else if(count == '49') {
        notify();

      }else if(count == '59') {
        notify();

      }else if(count == '69') {
        notify();

      }else if(count == '79') {
        notify();

      }else if(count == '89') {
        notify();

      }else if(count == '99') {
        notify();

      }

    });


    const handleDecrement = useCallback(() => {
        setCount(count - 1);

    })


  return (
    <>
    <div className={css.container}>
      <p className={css.title}>COUNTER</p>
      <div className={css.box}>
        <button className={css.button} onClick={handleIncrement}>+</button>
        <span className={css.count} >{count}</span>
        <button className={css.button} onClick={handleDecrement}>-</button>
      </div>
      <ToastContainer/>
    </div>
    </>
  
  );

});

export default Counter