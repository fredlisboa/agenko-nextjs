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
        <Link href="#about" onClick={() => setMobileToggle(false)}>
        Sobre
        </Link>
      </li>
      <li>
        <Link href="#who-we-are" onClick={() => setMobileToggle(false)}>
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
                <Link href="#services" onClick={() => setMobileToggle(false)}>
                Nossas Especialidades
                </Link>
              </li>
              <li>
                <Link href="#process" onClick={() => setMobileToggle(false)}>
                Nossa Jornada
                </Link>
              </li>
              <li>
                <Link href="#testimonials" onClick={() => setMobileToggle(false)}>
                Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#cases" onClick={() => setMobileToggle(false)}>
                Casos
                </Link>
              </li>
              <li>
                <Link href="#faq" onClick={() => setMobileToggle(false)}>
                Perguntas & Respostas
                </Link>
              </li>
              <li>
                <Link href="#redes-sociais" onClick={() => setMobileToggle(false)}>
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