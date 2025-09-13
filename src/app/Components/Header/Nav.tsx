import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link href="/">Início</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/" onClick={() => setMobileToggle(false)}>
              Início 1
              </Link>
            </li>
            <li>
              <Link href="/home2" onClick={() => setMobileToggle(false)}>
              Início 2
              </Link>
            </li>
            <li>
              <Link href="/home3" onClick={() => setMobileToggle(false)}>
              Início 3
              </Link>
            </li>            
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link href="#">Páginas</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
               Nossa Equipe
              </Link>
            </li>            
            <li>
              <Link href="/team/team-details" onClick={() => setMobileToggle(false)}>
                Detalhes
              </Link>
            </li>             
            <li>
              <Link href="/pricing" onClick={() => setMobileToggle(false)}>
              Preço
              </Link>
            </li> 
            <li>
              <Link href="/faq" onClick={() => setMobileToggle(false)}>
              Perguntas e Respostas
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

      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Serviços
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
                Detalhes
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link href="/project" onClick={() => setMobileToggle(false)}>
        Projeto
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/project" onClick={() => setMobileToggle(false)}>
              Projeto
              </Link>
            </li>          
            <li>
              <Link href="/project/project-details" onClick={() => setMobileToggle(false)}>
              Detalhes
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> 
      
      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog Com Barra Lateral
              </Link>
            </li>                         
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Detalhes
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contato
        </Link>
      </li>
    </ul>
  );
}
