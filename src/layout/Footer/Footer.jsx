import cls from './Footer.module.scss'

const Footer = () => {
  return (
    <div className='container'>
    <div className={cls.footer}>
      <div className={cls.boxFoot}>
        <div className={cls.box1}>
          <h1>Contact Us</h1>
          <div className={cls.textBox1}>

            <h5>Email</h5>
            <p>needhelp@Organia.com</p>
            <h5>Phone</h5>
            <p>666 888 888</p>
            <h5>Address</h5>
            <p>88 road, borklyn street, USA</p>

          </div>
        </div>
        <div className={cls.line1} style={{borderLeft: "1px solid red", marginTop: "20px"}}></div>
        <div className={cls.box2}>
          <div className={cls.logoHedIcone}>
            <img src="/src/assets/Logo.png" alt="" />
            <h1>Organick</h1>
          </div>
          <div className={cls.textBox2}>
            Simply dummy text of the printing and typesetting industry. <br />
            Lorem Ipsum simply dummy text of the printing
          </div>
          <div className={cls.IconeBox2}>
            <img src="/src/assets/1.png" alt="/instagram.com" />
            <img src="/src/assets/2.png" alt="/facebook.com" />
            <img src="/src/assets/3.png" alt="/twitter.com" />
            <img src="/src/assets/4.png" alt="/pinterest.com" />
          </div>
        </div>
        <div className={cls.line2} style={{borderRight: "1px solid #D4D4D4", marginTop: "20px"}}></div>
        <div className={cls.box3}>
          <h1>Utility Pages</h1>
          <div className={cls.textBox3}>

            <p> Style Guide <br />
                404 Not Found <br />
                Password Protected <br />
                Licences <br />
                Changelog <br />
            </p>

          </div>
        </div>
        <div className={cls.box4}>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer