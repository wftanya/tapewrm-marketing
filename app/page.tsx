import Link from "next/link";
import "./vhs.css";



export default function Home() {
   return (
    <main className="home">
      <div className="logo-circle">
        <img src="/tapewrm_logo5.png" alt="Logo" className="logo-image" />
      </div>

      <h1 className={`heading text-shadows`}>Tapewrm</h1>
      <h2 className="subheading text-muted">VHS shelf cataloger with spine recognition</h2>
      <nav className="spine-row">
        <Link href="/about" className="spine-link">
          <div className="vhs-spine teal">
            <span className="vhs-label-sticker">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-videotape-icon lucide-videotape"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M2 8h20"/><circle cx="8" cy="14" r="2"/><path d="M8 12h8"/><circle cx="16" cy="14" r="2"/></svg>
            </span>
            <span className="vhs-title font-fight">How it works</span>
            <span className="vhs-label">VHS</span>
            <div className="vhs-notch" />
            <div className="vhs-bottom" />
          </div>
        </Link>
        <Link href="/howto" className="spine-link">
          <div className="vhs-spine">
            <span className="vhs-label-sticker">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-library-big-icon lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>
            </span>
            <span className="vhs-title font-blade no-upper">Tips & Tricks</span>
            <span className="vhs-label">VHS</span>
            <div className="vhs-notch" />
            <div className="vhs-bottom" />
          </div>
        </Link>

        <Link href="/contribute" className="spine-link">
          <div className="vhs-spine orange">
            <span className="vhs-label-sticker">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database-search-icon lucide-database-search"><path d="M21 11.693V5"/><path d="m22 22-1.875-1.875"/><path d="M3 12a9 3 0 0 0 8.697 2.998"/><path d="M3 5v14a9 3 0 0 0 9.28 2.999"/><circle cx="18" cy="18" r="3"/><ellipse cx="12" cy="5" rx="9" ry="3"/></svg>
            </span>
            <span className="vhs-title font-t2">Contribute</span>
            <span className="vhs-label">VHS</span>
            <div className="vhs-notch" />
            <div className="vhs-bottom" />
          </div>
        </Link>

        <Link href="https://app.tapewrm.org" className="spine-link">
          <div className="vhs-spine purple">
            <span className="vhs-label-sticker">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera-icon lucide-camera"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>
            </span>
            <span className="vhs-title font-horror big-font green-font pb-20">Try it out</span>
            <div className="free-badge">FREE</div>
            <span className="vhs-label">VHS</span>
            <div className="vhs-notch" />
            <div className="vhs-bottom" />
          </div>
        </Link>
        
      </nav>

      {/* <div className="cool-btn-container">
        <a href="" className="cool-btn">
          <span className="cool-btn-text">
          Subscribe
          </span>
        </a>
        <div className="vhs-cool-notch" />
      </div> */}
    </main>
  );
}
