import React from 'react'
import Header from '@app_train/src/component/header'
import Footer from '@app_train/src/component/footer'

export default function index() {
    return (
        <main className='d-flex flex-column min-vh-100'>
          <Header />
          <Footer />
        </main>
      );
}
