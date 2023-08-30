import cls from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='hedContainer'>
        <div className={cls.header}>
          <div className={cls.boxHed}>
            <div className={cls.logoHed}>
              <div className={cls.logoHedIcone}>
                <img src="/src/assets/Logo.png" alt="" />
                <h1>Organick</h1>
              </div>
              <div className={cls.menuHedText}>

                <Link to={'/'}>
                  Home
                </Link>
                <Link to={'/'}>
                  About
                </Link>
                <Link to={'/'}>
                  Shop
                </Link>
                <Link to={'/'}>
                  Projects
                </Link>
                <Link to={'/'}>
                  News
                </Link>
              </div>
            </div>
            <div className={cls.activeHed}>
              <div className={cls.searchBtn}>
                <input type="text" />
                <img src="/src/assets/Search Icon.png" alt="" />
              </div>
              <div className={cls.cartHed}>
                <div>
                  <img src="/src/assets/Cart Icon.png" alt="" />
                  <p>
                    Cart (0)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header