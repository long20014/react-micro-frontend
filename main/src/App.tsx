import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Header from 'home/Header';
import Footer from 'home/Footer';
const App = () => (
  <div className='text-3xl mx-auto max-w-6xl'>
    <Suspense fallback={<span>Loading...</span>}>
      <Header />
    </Suspense>
    <div className='text-center'>
      <img
        src='https://mdbcdn.b-cdn.net/img/new/avatars/8.webp'
        className='rounded-full w-32 mb-4 mx-auto'
        alt='Avatar'
      />
      <h5 className='text-xl font-medium leading-tight mb-2'>John Doe</h5>
      <p className='text-gray-500'>Web designer</p>
    </div>
    <Suspense fallback={<span>Loading...</span>}>
      <Footer />
    </Suspense>
  </div>
);
const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
