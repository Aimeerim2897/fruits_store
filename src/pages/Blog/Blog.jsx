import bgNews from '../../assets/News.png'

import list from "../../assets/haya.png"
import pomidor from "../../assets/tomatoe.png"
import carrot from "../../assets/carrot.png"
import human from "../../assets/human.png"
import girl from "../../assets/girl.png"
import garbages from "../../assets/garbages.png"

import MainBackground from '../../components/ui/MainBackground/MainBackground'
import NewsCard from '../../components/NewsCard/NewsCard'
import cls from './Blog.module.scss'
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

const Blog = () => {
  return (
    <div>
      <MainBackground backgroundImage={bgNews}> Recent  News </MainBackground>
      <div className="container">
        <div className={cls.newsContentWrap}>
          <div className={cls.flex}>
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
          <div className={cls.flex}>
            <NewsCard bgImg={carrot} >
              <div className={cls.newsDate}>
                {nov}
              </div>
              <div className={cls.newsContent}>
                {userIcon}
                {Rachi}
                <h2 className={cls.info}>Benefits of Vitamin C & How to Get It</h2>
                {text}
                {more}
                {arrowIcon}
              </div>
            </NewsCard>

            <NewsCard bgImg={human} >
              <div className={cls.newsDate}>
                {nov}
              </div>
              <div className={cls.newsContent}>
                {userIcon}
                {Rachi}
                <h2 className={cls.info}>Research More Organic Foods</h2>
                {text}
                {more}
                {arrowIcon}
              </div>


            </NewsCard>
          </div>
          <div className={cls.flex}>
            <NewsCard bgImg={girl} >
              <div className={cls.newsDate}>
                {nov}
              </div>
              <div className={cls.newsContent}>
                {userIcon}
                {Rachi}
                <h2 className={cls.info}>Everyday Fresh Fruites</h2>
                {text}
                {more}
                {arrowIcon}
              </div>

            </NewsCard>
            <NewsCard bgImg={garbages} >
              <div className={cls.newsDate}>
                {nov}
              </div>
              <div className={cls.newsContent}>
                {userIcon}
                {Rachi}
                <h2 className={cls.info}>Don’t Use Plastic Product! it’s Kill Nature</h2>
                {text}
                {more}
                {arrowIcon}
              </div>
            </NewsCard>
          </div>

        </div>
        <div className="subscribe">
          <SubscribeBanner />
        </div>
      </div>
    </div>
  )
}

export default Blog