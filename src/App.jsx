import { useState } from 'react'
import './App.css'
import mainLeft from './assets/mainImg.png';
import mainRight from './assets/mainRight.png'
import companyLogo from './assets/company_logo.svg'
import c1 from './assets/c1.svg'
import c2 from './assets/c2.svg'
import c3 from './assets/c3.svg'
import c4 from './assets/c4.svg'
import c5 from './assets/c5.svg'
import c6 from './assets/c6.svg'
import marketing from './assets/marketing-group.webp'
import money from './assets/money.jpg'
import platform from './assets/platform.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        {/* header */}
        <header className="container header_container">
          {/* header menu */}
          <div className="header-cLogo">
            <a href="#"><img src={companyLogo} alt="company_logo" /></a>
          </div>
          <div className="header-menu">
            <a href="#">Products</a>
            <a href="#">Use cases</a>
            <a href="#">Resources</a>
            <a href="#">About us</a>
          </div>
          <div className="header_log_in">
            <a href="#">Log in</a>
            <button>Request a demo</button>
          </div>
        </header>{/* header end */}

        {/* main */}
        <main className='container main_container'>
          <div className="main-info">
            <h1>Next generation</h1>
            <p>Welcome to the next generation of mobile commerce and customer engagement. Meet your mobile customers where they want to be met.</p>
            <img src={mainLeft} alt="mobile_commerce" />
          </div>
          <div className="main_img">
            <img src={mainRight} alt="location img" />
          </div>
        </main>
        {/* Section */}
        <section className='container section_first'>
          <div className="section">
            <h1>Used by industry leaders</h1>
            <div className="imgC">
              <img src={c1} alt="Pet circle logo" />
              <img src={c2} alt="Showpo logo" />
              <img src={c3} alt="DCO logo" />
              <img src={c4} alt="Nisbets logo" />
              <img src={c5} alt="HeartKids logo" />
              <img src={c6} alt="Winnin logo" />
            </div>
          </div>
        </section>
        {/* Section2 */}
        <section className="container section_second">
          <h1>Make mobile journeys easier, faster and frictionless for your clients</h1>
          <div className="section_second_cards">
            <div className="card">
              <img src={marketing} alt="marketing group img" />
              <h3>Easy to use</h3>
              <p> A complete set of tools to enable marketing teams to easily curate, personalize, contextualize, send, integrate and track campaigns - no coding required.Our software design philosophy is all about the mobile end user, in particular their preference to Tap not Type.</p>
            </div>

            <div className="card">
              <img src={money} alt="marketing group img" />
              <h3>Revenue driving</h3>
              <p> A complete set of tools to enable marketing teams to easily curate, personalize, contextualize, send, integrate and track campaigns - no coding required.Our software design philosophy is all about the mobile end user, in particular their preference to Tap not Type.</p>
            </div>

            <div className="card">
              <img src={platform} alt="marketing group img" />
              <h3>Integrated with your stack</h3>
              <p> A complete set of tools to enable marketing teams to easily curate, personalize, contextualize, send, integrate and track campaigns - no coding required.Our software design philosophy is all about the mobile end user, in particular their preference to Tap not Type.</p>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default App
