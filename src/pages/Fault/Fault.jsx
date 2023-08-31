

import { NavLink } from 'react-router-dom'
import cls from './Fault.module.scss'

const Fault = () => {
  return (
    <div>
      <div className={cls.image}>
        <div className="container">
          <div className={cls.notFound}>
            <div className={cls['p-404']}>
              <h1 className={cls.fault}>404</h1>
              <h1 className={cls.text}>Page not found</h1>
              <p className={cls.text2}>The page you are looking for doesn't exist or has been moved</p>
              <NavLink to={"/"}>
              <button className={cls.btn}>Go to Homepage
                <svg className={cls.icon} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9.5" cy="9.71094" r="9.5" fill="#335B6B" />
                  <path d="M9.47641 6.33984L12.871 9.40436L9.47641 12.4689M12.3995 9.40436H5.51611" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fault