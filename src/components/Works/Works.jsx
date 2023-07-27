import React, { useContext } from "react";
import "./Works.css";
import sync from "../../img/sync.png";
import solarsecure from "../../img/solarsecure.png";
import oasisinfobyte from "../../img/oasisinfobyte.png";
import codeclause from "../../img/codeclause.png";
import codealpha from "../../img/codealpha.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            During my internships at Solar Secure Systems, Oasis Infobyte, Sync Intern, 
            <br />
            CodeClause, and Code Alpha,I gained valuable experience in solar energy 
            <br />
            solutions, cybersecurity, data synchronization, software development, and 
            <br />
            technical writing. These divers opportunities enriched my skillset and
            
            <br />
            passion for technology, preparing me for future challenges in the tech industry.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={sync} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={solarsecure} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={oasisinfobyte} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={codeclause} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={codealpha} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
