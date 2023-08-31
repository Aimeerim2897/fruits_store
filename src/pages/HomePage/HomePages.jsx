import cls from './HomePages.module.scss'
import ProductCard from '../../components/ui/ProductCard/ProductCard'
import NewsCard from '../../components/NewsCard/NewsCard'
import list from "../../assets/haya.png"
import pomidor from "../../assets/tomatoe.png"
import SubscribeBanner from '../../components/ui/SubscribeBanner/SubscribeBanner'


const userIcon = (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3161 1.45446C11.4741 0.516515 10.298 0 9 0C7.69504 0 6.51512 0.51339 5.67701 1.44553C4.82983 2.38793 4.41705 3.66873 4.51397 5.05176C4.70608 7.78031 6.71848 9.99994 9 9.99994C11.2815 9.99994 13.2905 7.78076 13.4856 5.05265C13.5838 3.68212 13.1684 2.404 12.3161 1.45446ZM16.6152 19.9999H1.38482C1.18547 20.0026 0.988051 19.9594 0.806921 19.8734C0.625791 19.7874 0.46551 19.6609 0.337738 19.503C0.0564959 19.1561 -0.0568664 18.6825 0.0270736 18.2035C0.392256 16.1133 1.53194 14.3575 3.32323 13.1249C4.91463 12.0307 6.93049 11.4285 9 11.4285C11.0695 11.4285 13.0854 12.0312 14.6768 13.1249C16.4681 14.3571 17.6077 16.1129 17.9729 18.203C18.0569 18.682 17.9435 19.1557 17.6623 19.5026C17.5345 19.6606 17.3743 19.7872 17.1931 19.8732C17.012 19.9592 16.8146 20.0025 16.6152 19.9999Z" fill="#7EB693" />
  </svg>
)

const arrowIcon = (
  <svg className={cls.arrowIcon} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
    <path d="M9.47592 6.12891L12.8705 9.19342L9.47592 12.2579M12.399 9.19342H5.51562" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
  </svg>


)

const Rachi = (
  <h3 className={cls.rachi}>By Rachi Card</h3>
)
const text = (
  <p className={cls.text}>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</p>
)
const more = (
  <h3 className={cls.more}>Read More</h3>
)
const nov = (
  <h3 className={cls.nov}> 25 <br /> Nov</h3>
)


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
                <div className={cls.HomeSec4Prod1}>
                  <ProductCard lastIndex={8} />
                  <div className={cls.HmSc4Pr2}>
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
          </div>
        </div>
        <div className={cls.HomeSec5}>
          <div className={cls.HomeSec5Text}>
            <div className={cls.TextBox}>
              <h3>Testimonial</h3>
              <h1>What Our Customer Saying?</h1>
              <div className={cls.HomeSec5Hero}>
                <img src="/src/assets/ImageHmSc5Hr.png" alt="" />
                <div className={cls.stars}>
                  <img src="/src/assets/Star11.svg" alt="" />
                </div>
                <div className={cls.HomeSec5HeroText}>
                  <h5>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy <br /> text of the printing and typesetting industry. Lorem Ipsum has been.</h5>
                  <h4>Sara Taylor</h4>
                  <p>Consumer</p>
                </div>
              </div>
            </div>
            <div className={cls.HomeSec5Boxes}>
              <div className={cls.Boxi}>
                <div>
                  <h2>100%</h2> <span>Organic</span>
                </div>
              </div>
              <div className={cls.Boxi}>
                <div>
                  <h2>285</h2> <span>Active Product</span>
                </div>
              </div>
              <div className={cls.Boxi}>
                <div>
                  <h2>350+</h2> <span>Organic Orchads</span>
                </div>
              </div>
              <div className={cls.Boxi}>
                <div>
                  <h2>25+</h2> <span>Years of Farming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.HomeSec6}>
          <div className={cls.displ}>
            <div className={cls.HomeSec6Text}>
              <div>
                <h3>Offer</h3>
                <h1>We Offer Organic For You</h1>
              </div>
              <div className={cls.veg}>
                <button className={cls.btn1}>View All Product
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                    <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={cls.HomeSec6boxes}>
              <ProductCard lastIndex={4} />
            </div>
          </div>
        </div>
        <div className={cls.HomeSec7}>
          <div className={cls.HomeSec7b}>
            <div className={cls.HomeSec7Text}>
              <div className={cls.HomeSec7TextBox}>
                <h3>Eco Friendly</h3>
                <h1>Econis is a Friendly <br /> Organic Store</h1>
                <div className={cls.HomeSec7InfoBoxes}>
                  <div className={cls.HomeSec7InfoBox}>
                    <h4>Start with Our Company First</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p>
                  </div>
                  <div className={cls.HomeSec7InfoBox}>
                    <h4>Learn How to Grow Yourself</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p>
                  </div>
                  <div className={cls.HomeSec7InfoBox}>
                    <h4>Farming Strategies of Today</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.HomeSec8}>
          <div className={cls.HomeSec8Content}>
            <div className={cls.ContBox}>
              <div className={cls.ContBox1}>
                <button>Organic Juice</button>
              </div>
              <div className={cls.ContBox2}>
                <button>Organic Food</button>
              </div>
              <div className={cls.ContBox3}>
                <button>Nuts Cookis</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={cls.HomeSec9}>
            <div>
            <div className={cls.HomeSec9Text}>
              <div>
              <h3>News</h3>
              <h1>Discover weekly content about  <br /> organic food, & more</h1>
              </div>
              <div className={cls.veg}>
                <button>More News
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                    <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              </div>
            <div className={cls.newsContentWrap}>
              <div className={cls.flex}>
                <div className={cls.HomeSec9box}>
                  <NewsCard bgImg={list} >
                    <div className={cls.newsDate}>
                      {nov}
                    </div>
                    <div className={cls.newsContent}>
                      {userIcon}
                      {Rachi}
                      <h2 className={cls.info}>The Benefits of Vitamin D & How to Get It</h2>
                      {text}
                      {more}
                      {arrowIcon}
                    </div>
                  </NewsCard>
                  <NewsCard bgImg={pomidor} >
                    <div className={cls.newsDate}>
                      {nov}
                    </div>
                    <div className={cls.newsContent}>
                      {userIcon}
                      {Rachi}
                      <h2 className={cls.info}>Our Favorite Summertime Tomato</h2>
                      {text}
                      {more}
                      {arrowIcon}
                    </div>
                  </NewsCard>
                </div>
              </div>
            </div>
            </div>
          </div>
        <SubscribeBanner/>
        </div>
      </div>
    </>
  )
}

export default HomePages