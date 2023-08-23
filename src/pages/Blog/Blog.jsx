import hay from '../../assets/hay.png'
import tamotoes from '../../assets/tomatoes.png'
import carrot from '../../assets/carrot.png'
import human from '../../assets/human.png'
import girl from '../../assets/girl.png'
import garbage from '../../assets/garbage.png'

import cls from  './Blog.module.scss'

const Blog = () => {
  return (
    <div>
      <div className={cls.img}>
        <img src={hay} alt="" />
        <img src={tamotoes} alt="" />
        <img src={carrot} alt="" />
        <img src={human} alt="" />
        <img src={girl} alt="" />
        <img src={garbage} alt="" />
      </div>
    </div>
  )
}

export default Blog