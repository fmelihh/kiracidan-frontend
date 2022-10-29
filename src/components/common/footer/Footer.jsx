import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Sorularınız Var Mı ?</h1>
              <p>Kariyerinizi ve büyümenizi geliştirmenize yardımcı olacağız.</p>
            </div>
            <button className='btn5'>Bizimle İletişime Geçin</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Daha Fazlası İçin Yardıma İhtiyacınız Var Mı ?</h2>
              <p>Hakkımızda daha fazla bilgi almak, aklına takılan herhangi bir konuda yardım talep etmek veya burayı daha iyi bir yer haline getirmek için önerilerinizi gönderebilirsiniz.</p>

              <div className='input flex'>
                <input type='text' placeholder='Email' />
                <button>Gönder</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2022 Kiradan</span>
      </div>
    </>
  )
}

export default Footer
