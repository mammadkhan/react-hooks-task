import { useEffect, useReducer, useRef, useState,useMemo,useCallback } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import ItemContext, { _items, _setItems } from './Context';

  
const Sum = (n) => {
  console.log('Hesablanir...');
  let s = 0;
  for (let i = 0; i <= n; i++) s += i;
  return s;
}

const App = () => {
  useEffect(() => {
    console.log('App');
  });
  
  const [items, setItems] = useReducer(_setItems, _items);
  const ref = useRef();

  const store = useMemo(()=>({ value: [items, setItems] }),[items])
  
  const [n, setN] = useState(900000000);
  const sum = useMemo(()=>Sum(n),[n]);
  const inc = useCallback(() => setN(n => n + 1),[]);
  const dec = useCallback(() => setN(n => n - 1),[]);

  const add = () => {
    const { value } = ref.current;
    setItems({ name: 'ADD', value });
    ref.current.value = '';
  }

  return (
    <ItemContext.Provider value={store}>
      <section style={{ textAlign: 'center', padding: 20, backgroundColor: 'green' }}>
      <h5>App</h5>
        <Header />
        <input ref={ref} />
        <button onClick={add}>add</button>
        <hr />
        <Content />
      <hr />
      <Footer n={n} sum={sum} inc={inc} dec={dec} />
      </section>
    </ItemContext.Provider>
  )
}

export default App
