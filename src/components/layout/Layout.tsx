import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
   return (
      <main>
         <Navbar />
         <main>
            {children}
         </main>
      </main>
   )
}

export default Layout