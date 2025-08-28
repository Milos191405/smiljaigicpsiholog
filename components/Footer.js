import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faViber, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="text-center space-y-2 border-t-2 border-foreground pt-3">
      <p>Vaš Psihoterapeut</p>
      <p className="font-semibold">Smilja Igić dipl. psiholog</p>
      
      <div>
        <a
          href="https://www.linkedin.com/in/smilja-igi%C4%87-16734866/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-foreground hover:text-blue-500 transition-all duration-300 text-2xl"
          />
        </a>

        <a
          href="mailto:gajins@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-foreground-700 hover:text-gray-500 transition-all duration-300 text-2xl"
          />
        </a>

        <a href="#" className="ml-4" aria-label="Viber">
          <FontAwesomeIcon
            icon={faViber}
            className="text-foreground-700 hover:text-violet-500 transition-all duration-300 text-2xl"
          />
        </a>

        <a href="#" className="ml-4" aria-label="WhatsApp">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-foreground-700 hover:text-green-600 transition-all duration-300 text-2xl"
          />
        </a>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Smilja Igić. Sva prava zadržana.</p>
        <p>Izrada sajta: Miloš Mirković</p>
      </div>
    </footer>
  );
}

export default Footer;
