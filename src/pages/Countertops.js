import React from "react";
import Quartz from "../components/Quartz";

import "./Countertops.css";

function Countertops(props) {
  return (
    <div className="countertops">
      <section className="countertops-info">
        <h1 className="countertops-info-h1">
          Our Choice of Material for Your Countertops is Quartz.
        </h1>
        <p className="countertops-info-p">
          A quartz surface is an innovative new product that combines natural
          quartz, one of nature's hardest materials, with high quality polymer
          resin and pigment to produce a durable yet luxurious stone surface. It
          comes dramatic colours and vibrant patterns with a more luxurious
          sheen, greater strength and resilience, minimal maintenance and solid
          value. Plus, a quartz surface gives the design flexibility you need to
          make your vision a reality. Available in 13 colours and patterns,
          quartz surfaces let you take advantage of one of the strongest and
          most durable surface materials on the market, without sacrificing
          style.
        </p>
      </section>
      <Quartz />
      <section className="countertops-partners">
        <h1 className="countertops-partners-h1">
          We love partnering with the following quartz suppliers and have their
          samples on display in our showroom.
        </h1>
        <div className="countertops-partners-links">
          <a
            className="countertops-partners-link"
            href="https://www.msisurfaces.com"
          >
            MSI
          </a>
          <a
            className="countertops-partners-link"
            href="https://kstonequartz.com/"
          >
            KSTONE
          </a>
          <a className="countertops-partners-link" href="https://tcestone.com/">
            TCE STONE
          </a>
          <a
            className="countertops-partners-link"
            href="https://www.lucentquartz.ca"
          >
            LUCENT QUARTZ
          </a>
          <a
            className="countertops-partners-link"
            href="https://www.quartzco.ca/"
          >
            CAMBRIA
          </a>
        </div>
      </section>
    </div>
  );
}

export default Countertops;
