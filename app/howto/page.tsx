import Link from 'next/link'
import localFont from 'next/font/local'
import "./../vhs.css";

const symbols = localFont({
  src: './../fonts/symbols.ttf',
})

export default function HowTo() {
  return (
    <main className="vhs-back">
      {/* Title / Header strip */}
      <header className="vhs-back-header">
        <Link href="/">
          <div className="logo-circle">
            <img src="/tapewrm_logo5.png" alt="Logo" className="logo-image" />
          </div>
        </Link>
        <Link className="no-underline" href="https://app.tapewrm.org">
          <div>
            <span className="cta">Goto</span>
            <h1 className={`heading text-shadows`}>Tapewrm</h1>
          </div>
        </Link>
        <span className="vhs-rating"> RATED <span className={symbols.className}>T</span></span>
      </header>

      {/* Review quotes */}
      <section className="vhs-reviews">
        <blockquote>
          &ldquo;For best results, straighten your stacks!&rdquo;
          <span>— Fellow Enthusiast</span>
        </blockquote>

        <blockquote>
          &ldquo;I stack my tapes wide, so before I uploaded them to TAPEWRM, I just rotated them in my Gallery &rdquo;
          <span>— Clever Person</span>
        </blockquote>
      </section>

      {/* Main content grid */}
      <section className="vhs-content">
        <div className="vhs-text">
          <h2>HOW TO</h2>
          <p>
            The current iteration of the Tapewrm app is trained on shelves of roughly 100 tapes aligned in single rows of vertical standing spines.
            So if this looks like your collection, you're in luck!
            <Link href="https://app.tapewrm.org"> Just snap a photo of it and feed it to Tapewrm.</Link>
          </p>

          <div className="vhs-stills">
            <img src="./../how2.png" alt="User demonstrating how to use the app by holding phone to VHS shelf" />
          </div>

          <p>
            If Tapewrm gets stumped on a tape, the app will present you with the extracted spine and ask you to fill out the title manually with the help of live autocomplete results by TMDB (The Movie Database).
          </p>
          <div className="vhs-stills">
            <img className="larger-img" src="./../manual1.png" alt="Screengrab of app showing manual entry mode with autcomplete" />
            <img className="larger-img" src="./../manual2.png" alt="Screengrab of app showing manual entry mode with autocomplete" />
          </div>
          <p>
             Want to catalog your tapes but your shelves are more of a chaotic mess of horizontal stacks, leaning towers, and general VHS mayhem? <Link href="https://app.tapewrm.org">Try it out anyways!</Link> Your photo will help train version 2.0, which you can be notified of updates of by following <Link href="https://www.instagram.com/vhs_venture/">Tom on Instagram</Link>.
          </p>
          <div className="vhs-stills">
            <img src="./../hoard.jpg" alt="Messy room full of hoarded books and media" />
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
