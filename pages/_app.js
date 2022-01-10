import '../styles/globals.css'
// Basic
import '../styles/base/normalize.css'
import '../styles/base/colors.css'
import '../styles/base/typography.css'
import '../styles/base/boxes.css'
// General
import '../styles/general/body.css'
import '../styles/general/box-sizing.css'
import '../styles/general/headings.css'
import '../styles/general/images.css'
import '../styles/general/links.css'
// Components
import '../styles/components/nav.css'
import '../styles/components/footer.css'
import '../styles/components/containers.css'
import '../styles/components/buttons.css'
import '../styles/components/github-corner.css'
//Utilities
import '../styles/utilities/visibility.css'
import '../styles/utilities/text.css'
//
import NavBar from '/components/shared/NavBar'
import Footer from '/components/shared/Footer'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className={router.pathname === "/" ? "main-bg" : undefined}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
