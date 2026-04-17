import Link from 'next/link'
import localFont from 'next/font/local'
import "./../vhs.css";

const symbols = localFont({
  src: './../fonts/symbols.ttf',
})



export default function About() {
  return (
    <main className="vhs-back">
      <header className="vhs-back-header">
        <Link href="/">
          <div className="logo-circle">
            <img src="/tapewrm_logo5.png" alt="Logo" className="logo-image" />
          </div>
        </Link>
        <a target="_blank" href="https://app.tapewrm.org" className="no-underline">
          <div>
            <span className="cta">Goto</span>
            <h1 className={`heading text-shadows`}>Tapewrm</h1>
          </div>
        </a>
        <span className="vhs-rating"> RATED <span className={symbols.className}>T</span></span>
      </header>

      {/* Review quotes */}
      <section className="vhs-reviews">
        <blockquote>
          &ldquo;My local video store hates to see me and my TAPEWRM coming!&rdquo;
          <span>— Local reseller</span>
        </blockquote>

        <blockquote>
          &ldquo;No more accidentally buying tapes I already own! TAPEWRM cataloged my collection in less than 12 parsecs* &rdquo;
          <span>— Physical media enthusiast</span>
        </blockquote>
      </section>

      {/* Main content grid */}
      <section className="vhs-content">
        <div className="vhs-text">
          <h2>About</h2>
          <p>
            The Tapewrm project is an initiative born out of a passion for VHS collecting and a desire to make cataloging easier.
            The tool uses the power of OCR (Optical Character Recognition) trained against hundreds of photos of VHS shelves to identify and extract the titles of tapes from photos of your collection.
      
          </p>

          <div className="vhs-stills">
            <img src="./../about1.png" alt="YOLO annotated VHS shelf" />
          </div>
          <p>
             Simply snap a photo of your VHS shelf and let Tapewrm do the rest as it extracts individual spines, reads the titles and consults with AI to cleanup
            any OCR errors, with the option to organize everything into a neat digital catalog that you can copy, paste, sort, and share as you please.
            <a href="https://app.tapewrm.org" target="_blank">Try it out!</a>
          </p>
          <div className="vhs-stills">
            <img className="larger-img" src="./../about4-portrait.png" alt="Screengrab of app showing shelf image upload" />
            <img className="larger-img" src="./../about2-portrait.png" alt="Screengrab of app showing results display" />
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
        <p className="vhs-legal">
          *exaggerated claim, your mileage may vary based on the size and organization of your collection, and the quality of your photos. For best results, tidy up your shelf and snap a clear photo of it with good lighting!
        </p>
      </footer>

    </main>
  );
}
