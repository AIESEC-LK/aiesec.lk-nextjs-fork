import '@styles/globals.css';
import React from 'react';
import Nav from '@components/Nav';
import Layout from '@components/two-column';

const RootLayout = () => {
  return (
    <html>
        <div>
            <Nav />
            <Layout/>

        </div>
    </html>
  )
}



export default RootLayout