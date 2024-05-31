import { MyContextProvider } from '../contexts/myContext';

function Shopping({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}

export default Shopping;