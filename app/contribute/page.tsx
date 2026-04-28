import Link from 'next/link'
import localFont from 'next/font/local'
import "./../vhs.css";

const symbols = localFont({
  src: './../fonts/symbols.ttf',
})

export default function Contribute() {
  return (
    <main className="vhs-back">
      {/* Title / Header strip */}
      <header className="vhs-back-header">
        <Link href="/">
          <div className="logo-circle">
            <img src="/tapewrm_logo5.png" alt="Logo" className="logo-image" />
          </div>
        </Link>
        <a className="no-underline" href="https://app.tapewrm.org" target="_blank">
          <div>
            <span className="cta">Goto</span>
            <h1 className={`heading text-shadows`}>Tapewrm</h1>
          </div>
        </a>
      </header>

      {/* Main content grid */}
      <section className="vhs-content">
        <div className="vhs-text">
          <h2>CONTRIBUTE</h2>
          <p>
            It works if you work it! Using the app is the best way to contribute to the project as it provides the photos that the OCR model needs to learn and improve. If our app helped you out, <a href="https://paypal.me/wftanns" target="_blank">a small donation to help cover the costs of hosting would be hugely appreciated.</a> 🫶
          </p>
          <p>
             Caught a bug in the app? Have an idea you want to implement? <Link href="https://github.com/wftanya/tapewrm">Open a pull request!</Link> Tapewrm is an open source project led by an overtired parent with a regular day job so help is always appreciated. Check out the GitHub repo for the code, and if you want to contribute but aren't sure how, reach out to Tom on Instagram and he'll put you onto our annotations assembly line to train V2!
          </p>
          <div className="vhs-stills">
            <Link href="https://www.instagram.com/vhs_venture/">
              <img src="./../vhsventure.jpg" alt="VHS Venture Instagram account logo" />
            </Link>
            <Link href="https://github.com/wftanya/tapewrm">
              <img src="./../github-logo.png" className="github-logo" alt="Github Logo" />
            </Link>
          </div>
        </div>
      </section>

      {/* CreditOs block */}
      <footer className="vhs-credits">
        <p>
          A WORDFOREST PRODUCTION
          STARRING: TANNS THE DEVELOPER AND TOM THE TESTER
        </p>
        <p>
          SPECIAL THANKS: PADDLEOCR • ULTRALYTICS YOLO26 • LABEL STUDIO • OPENAI • COPYRIGHT © 2026 WORDFOREST INC.
        </p>
      </footer>
    </main>
  );
}
