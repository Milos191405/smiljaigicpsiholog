import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faViber, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Correct import for LinkedIn
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import for the Envelope

function Footer() {
  return (
    <article className="text-center space-x-4 border-t-2 border-foreground">
      <p>Vas porodicni terapeut</p>
      
<p>Smilja Igic dipl. psiholog</p>
      
      <div className="">
   
        <a href="https://www.linkedin.com/in/smilja-igi%C4%87-16734866/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-foreground hover:text-blue-500 transition-all duration-300 text-2xl" />
        </a>

        <a href="mailto:gajins@yahoo.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="text-foreground-700 ml-4 text-2xl hover:text-gray-500 transition-all duration-300" />
        </a>

        <a>
        <FontAwesomeIcon icon={faViber} className="text-foreground-700 ml-4 text-2xl hover:text-violet-500 transition-all duration-300"  />
        </a>

        <a>
        <FontAwesomeIcon icon={faWhatsapp} className="text-foreground-700 ml-4 text-2xl hover:text-green-600 transition-all duration-300"  />
        </a>

      </div>


    </article>
  );
}

export default Footer;
