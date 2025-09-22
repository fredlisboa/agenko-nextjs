import Link from 'next/link';
import DropDown from './DropDown';
import { usePathname } from 'next/navigation';

export default function Nav({ setMobileToggle }) {
  const pathname = usePathname();

  const handleScroll = (e) => {
    const href = e.currentTarget.getAttribute('href');
    
    // Check if it's an anchor link
    if (href && href.startsWith('/#')) {
      // If on the homepage, prevent default and perform smooth scroll
      if (pathname === '/') {
        e.preventDefault();
        const targetId = href.substring(2); // Remove '/#'
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
      }
      // If not on the homepage, allow Next.js Link to handle navigation to the homepage with the hash
    } else if (href && href.startsWith('#')) { // For relative anchors on the same page (e.g., dropdowns)
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }
    setMobileToggle(false);
  };

  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/#hero" onClick={handleScroll}>Início</Link>
      </li>
      <li>
        <Link href="/#about" onClick={handleScroll}>
        Sobre
        </Link>
      </li>
      <li>
        <Link href="/#who-we-are" onClick={handleScroll}>
        Compromisso
        </Link>
      </li>
      <li className='menu-item-has-children'>
        <Link href="#" >
        A Clínica
        </Link>
          <DropDown>
            <ul>
              <li>
                <Link href="/#services" onClick={handleScroll}>
                Nossas Especialidades
                </Link>
              </li>
              <li>
                <Link href="/#process" onClick={handleScroll}>
                Nossa Jornada
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" onClick={handleScroll}>
                Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/#cases" onClick={handleScroll}>
                Casos
                </Link>
              </li>
              <li>
                <Link href="/#faq" onClick={handleScroll}>
                Perguntas & Respostas
                </Link>
              </li>
              <li>
                <Link href="/#redes-sociais" onClick={handleScroll}>
                Redes Sociais
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMobileToggle(false)}>
                Contato
                </Link>
              </li>                   
            </ul>
          </DropDown>
      </li>   
      {/* <li>
        <Link href="#blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li> */}
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contato
        </Link>
      </li>
    </ul>
  );
}
