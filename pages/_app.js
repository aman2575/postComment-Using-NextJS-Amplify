import '../styles/globals.css'
import '../configureAmplify'
import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function MyApp({ Component, pageProps }) {
  
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      
    </div>
  )
}
