import { FaEnvelope } from "react-icons/fa";
import { Sectionheadin } from "../styles/common/Sectionheadin.styled";
import {
  Contactinfo,
  Detailwrapper,
  Imagewrapper,
  StyledContact,
} from "../styles/sections/Contact.styled";

export const Contact = () => {
  return (
    <>
      <hr />
      <StyledContact id="contact">
        <Sectionheadin>
          <h1>CONTACT</h1>
        </Sectionheadin>
        <Detailwrapper>
          <Contactinfo>
            <p>
              J'aimerais que vous me contactiez. même si c'est juste pour dire
              bonjour. n'hésitez pas ! laissez-moi un message et je vous
              répondrai dans les plus brefs délais
            </p>
            <div>
              <a href="mailto:elmourhir.salaheddine@gmail.com">
                <FaEnvelope /> <span> contactez-moi </span>
              </a>
            </div>
          </Contactinfo>
          <Imagewrapper>
            <img src="./images/contact.svg" alt="contact" />
          </Imagewrapper>
        </Detailwrapper>
      </StyledContact>
    </>
  );
};
