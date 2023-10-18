import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <main className='h-1/2'>
        {children}
      </main>
    </>
  )
}

export default Layout
