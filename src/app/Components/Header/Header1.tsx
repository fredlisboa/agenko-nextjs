"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
export default function Header1({ variant }: any) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string>("");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky('');
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 cs_style_1 header_sticky_style1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_main_header">
        <div className="container">
        <div className="cs_main_header_in">
          {/* -- START: Left Side (Logo) -- */}
          <div className="cs_main_header_left">
            <Link className="cs_site_branding" href="/">
              <Image src="/assets/images/creative-agency/logo/sd-curto.svg" alt="img" width={85} height={85} />
            </Link>
          </div>
          {/* -- END: Left Side (Logo) -- */}

          {/* -- START: Center (Mobile CTA Button) -- */}
          <div className="cs_main_header_center">
            {/* Mobile CTA Button - visible on mobile, hidden on desktop */}
            <div className="main-button mobile-cta-btn d-lg-none">
              <Link href="/contact" className="theme-btn style-one mobile-cta">
                <span className="text-flip">
                    <span className="text">AVALIAÇÃO GRATUITA</span>
                    <span className="text">AVALIAÇÃO GRATUITA</span>
                </span>
              </Link>
            </div>
          </div>
          {/* -- END: Center (Mobile CTA Button) -- */}

          {/* -- START: Right Side (Desktop CTA and Mobile Hamburger) -- */}
          <div className="cs_main_header_right">
            {/* Desktop CTA */}
            <div className="header-btn d-none d-lg-block">
              <Link href="/contact" className="theme-btn style-one">
                  <span className="text-flip">
                      <span className="text">AGENDAR AVALIAÇÃO GRATUITA</span>
                      <span className="text">AGENDAR AVALIAÇÃO GRATUITA</span>
                  </span>
              </Link>                  
            </div>
            
            {/* Mobile Hamburger Menu Container */}
            <div className="cs_nav cs_primary_font fw-medium">
              <span
                className={
                  mobileToggle
                    ? 'cs-munu_toggle cs_teggle_active'
                    : 'cs-munu_toggle'
                }
                onClick={() => setMobileToggle(!mobileToggle)}
              >
                <span></span>
              </span>
              <Nav setMobileToggle={setMobileToggle} />
            </div>
          </div>
          {/* -- END: Right Side (Desktop CTA and Mobile Hamburger) -- */}
        </div>
        </div>
      </div>
    </header>

    </div>

  );
}