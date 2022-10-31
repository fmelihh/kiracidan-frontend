import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Bir Sonraki Evini Araştır "
            subtitle="İstediğniz Şehirde Bulunan Evleri Bulun."
          />

          <form className="flex">
            <div className="box">
              <span>Konum</span>

              <input type="text" placeholder="Konum" />
            </div>
            <div className="box">
              <span>Bina Tipi</span>
              <input type="text" placeholder="Bina Tipi" />
            </div>
            <div className="box">
              <span>Fiyat</span>
              <input type="text" placeholder="Fiyat" />
            </div>
            <div className="box">
              <h4>Filtrele</h4>
            </div>
            <button className="btn1">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
