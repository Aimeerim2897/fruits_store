


import './NewsCard.scss'
const NewsCard = (props) => {
  const { bgImg , children } = props
  return (
    <div
      className='news-card'
      style={{
        width: 677,
        height: 589,
        backgroundImage: `url(${bgImg})`
      }}
    >

      {children}
    </div>
  )
}

export default NewsCard