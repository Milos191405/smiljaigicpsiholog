import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faViber, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="text-center space-y-2 border-t-2 border-foreground pt-3">
      <p className="font-semibold">Smilja Igić dipl. psiholog</p>

      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://www.linkedin.com/in/smilja-igi%C4%87-16734866/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-lg sm:text-xl md:text-2xl text-foreground hover:text-blue-500 transition-all duration-300"
          />
        </a>

        <a
          href="mailto:gajins@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-lg sm:text-xl md:text-2xl text-foreground hover:text-gray-500 transition-all duration-300"
          />
        </a>

       <a
    href="viber://chat?number=%2B381638344258"
    aria-label="Viber"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon
      icon={faViber}
      className="text-lg sm:text-xl md:text-2xl text-foreground hover:text-violet-500 transition-all duration-300"
    />
  </a>

  <a
    href="https://wa.me/381638344258"
    aria-label="WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon
      icon={faWhatsapp}
      className="text-lg sm:text-xl md:text-2xl text-foreground hover:text-green-600 transition-all duration-300"
    />
  </a>
      </div>

      <div className="mt-4 text-xs text-muted-foreground space-y-1">
       <p>© "{new Date().getFullYear()}" Smilja Igić. Sva prava zadržana.</p>
        <p>Izrada sajta: 
          <a href="https://portfolio-react-f27q.onrender.com/"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:underline text-foreground">Miloš Mirković</a> </p>
      </div>
    </footer>
  );
}

export default Footer;
