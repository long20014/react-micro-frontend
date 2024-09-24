import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Header from './component/header/header';
import Footer from './component/footer/footer';

const App = () => (
  <div className='text-3xl mx-auto max-w-6xl'>
    <Header />
    <div className='my-10'>Home page Content</div>
    <Footer />
  </div>
);

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
