import cls from './Header.module.scss'
import { NavLink } from 'react-router-dom'

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
                <NavLink to={'/'}>
                  Home
                </NavLink>
                <NavLink to={'/page-not-found'}>
                  About
                </NavLink>
                <NavLink to={'/shop'}>
                  Shop
                </NavLink>
                <NavLink to={'/page-not-found'}>
                  Projects
                </NavLink>
                <NavLink to={'/blog'}>
                  News
                </NavLink>
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