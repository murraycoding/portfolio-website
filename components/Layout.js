import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="pageContent">
      <Header />
      <main className="mainContent">
        { children }
      </main>
      <Footer />
    </div>
  )
}