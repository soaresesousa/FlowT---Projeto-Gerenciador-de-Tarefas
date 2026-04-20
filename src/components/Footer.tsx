import React from 'react';

import {BsInstagram, BsGithub, BsWhatsapp} from 'react-icons/bs'

import "../styles/footer.css"

const Footer: React.FunctionComponent = () => {
  return (
  <footer>
    <div className="footer-inside">
        <p>@2026 FlowT - NetoCode, Todos os direitos reservados</p>
        <ul>
            <li><a href="#"><BsInstagram/></a></li>
            <li><a href="#"><BsGithub/></a></li>
            <li><a href="#"><BsWhatsapp/></a></li>
        </ul>
    </div>
  </footer>
  );
};

export default Footer;