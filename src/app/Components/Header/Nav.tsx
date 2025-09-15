import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setMobileToggle(false)
  };
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="#hero" onClick={handleScroll}>Início</Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
        Sobre
        </Link>
      </li>
      <li className='menu-item-has-children'>
        <Link href="/contact" >
        Nosso(a)
        </Link>
          <DropDown>
            <ul>
              <li>
                <Link href="/" onClick={() => setMobileToggle(false)}>
                Especialidade
                </Link>
              </li>
              <li>
                <Link href="/home2" onClick={() => setMobileToggle(false)}>
                Compromisso
                </Link>
              </li>
              <li>
                <Link href="/home3" onClick={() => setMobileToggle(false)}>
                Jornada
                </Link>
              </li>            
            </ul>
          </DropDown>
      </li>   
      <li>
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contato
        </Link>
      </li>
    </ul>
  );
}
