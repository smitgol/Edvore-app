import '../styles/globals.css';
import {ContextComponents} from "../context"

function MyApp({ Component, pageProps }) {
  return (
    <ContextComponents>
      <Component {...pageProps} />
    </ContextComponents>
  )
}

export default MyApp
