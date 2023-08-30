import cls from './HomePages.module.scss'

const HomePages = () => {
  return (
    <>
      <div className={cls.HomePages}>
        <div className={cls.HomeSec1}>
          <div className={cls.HomeSec1Text}>
            <p>100% Natural Food</p>
            <h1>
              Choose the best <br />
              healthier way <br />
              of life
            </h1>
            <button>
              Explore Now
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className='container'>
          <div className={cls.HomeSec2}>
            <div className={cls.HomeSec2P1}>
              <div className={cls.HomeSec2P1Text}>
                <h3>Natural!!</h3>
                <h1>Get Garden <br />
                  Fresh Fruits
                </h1>
              </div>
            </div>
            <div className={cls.HomeSec2P2}>
              <div className={cls.HomeSec2P2Text}>
                <h3>Offer!!</h3>
                <h1>Get 10% off <br />
                  on Vegetables
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.HomeSec3}>
          <div className={cls.HomeSec3Text}>
            <div className={cls.HomeSec3TextP1}>
              <h3>About Us</h3>
              <h1>We Believe in Working <br />
                Accredited Farmers
              </h1>
              <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br />
                been the industry's stanpm run dendard dummy text ever since the 1500s, when an unknown <br /> printer took a galley.
              </p>
            </div>
            <div className={cls.HomeSec3TextTbls}>
              <div className={cls.HomeSec3Tb1}>
                <div className={cls.HomeSec3Tb1Img}>
                  <img src="/src/assets/Icontb1.png" alt="" />
                </div>
                <div className={cls.text1}>
                  <h5>Organic Foods Only</h5>
                  <p>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</p>
                </div>
              </div>
              <div className={cls.HomeSec3Tb2}>
                <div className={cls.HomeSec3Tb2Img}>
                  <img src="/src/assets/Icontb2.png" alt="" />
                </div>
                <div className={cls.text2}>
                  <h5>Quality Standards</h5>
                  <p>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <button>Shop Now
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className='container'>
          <div className={cls.HomeSec4}>
            <div className={cls.HomeSec4Text}>
            <h3>Categories</h3>
            <h1>Our Products</h1>
            <div className={cls.HomeSec4Prod}>
              
            </div>
            <button>Load More
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                  <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePages