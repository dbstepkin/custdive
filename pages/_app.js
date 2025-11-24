import '../styles/globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={montserrat.variable}>
      <Component {...pageProps} />
    </div>
  )
}

