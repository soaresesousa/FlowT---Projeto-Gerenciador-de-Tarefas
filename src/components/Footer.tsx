import React from 'react';

import {BsInstagram, BsGithub, BsWhatsapp} from 'react-icons/bs'

import "../styles/footer.css"
import {  DiNodejsSmall, DiReact } from 'react-icons/di';
import {  SiJavascript, SiTypescript } from 'react-icons/si';

const Footer: React.FunctionComponent = () => {
  return (
  <footer>
    <div className="footer-top">
        <p>@2026 FlowT - NetoCode, Todos os direitos reservados</p>
        <ul>
            <li><a href="#"><BsInstagram/></a></li>
            <li><a href="#"><BsGithub/></a></li>
            <li><a href="#"><BsWhatsapp/></a></li>
        </ul>
    </div>
    <div className="footer-bottom">
        <div className="icons-footer">
          <DiReact />
          <DiNodejsSmall />
          <SiTypescript/>
          <SiJavascript/>
        </div>
    </div>
  </footer>
  );
};

export default Footer;