import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import Provider from '@components/Provider';

export const metadata = {
    title: "Learning Barter",
    description: "Exchange skills",
}


const RootLayout = ({children}) => {
  return (
    <html lang="pl">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body>
        <div className="main">
            <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout;
