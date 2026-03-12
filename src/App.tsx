import {Provider} from 'react-redux';

import Header from './Components/Header';
import Shop from './Components/Shop';
import Product from './Components/Product';
import { DUMMY_PRODUCTS } from './dummy-products';
import { store } from './store/Store.tsx';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
      </Provider>
  );
}

export default App;