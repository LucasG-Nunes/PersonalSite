import {Swiper} from "swiper/react"
import {Navigation,Pagination,A11y} from "swiper"
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';

const Slider = ({settings,children}) => {
  return (
    <Swiper  modules={[Navigation,Pagination,A11y]} {...settings} >
        {children}
    </Swiper>
  )
}

export default Slider