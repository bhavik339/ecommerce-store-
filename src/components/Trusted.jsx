import React from "react";
import { BsApple } from "react-icons/bs";
import { SiSamsung } from "react-icons/si";
import { SiDell } from "react-icons/si";
import { SiLenovo } from "react-icons/si";
import { SiNokia } from "react-icons/si";

export const Trusted = () => {
  return (
    <section className="trustedWraper">
      <div className="trusted">
        <div className="trusted_section_title">
          <h3>Trusted By 1000+ Companies</h3>
        </div>
        <div className="trusted_section_icon">
          <div>
            <BsApple />
            <p>Apple</p>
          </div>
          <div>
            <SiSamsung />
            <p>Samsung</p>
          </div>
          <div>
            <SiDell />
            <p>Dell</p>
          </div>
          <div>
            <SiLenovo />
            <p>Lenovo</p>
          </div>
          <div>
            <SiNokia />
            <p>Nokia</p>
          </div>
        </div>
      </div>
    </section>
  );
};
