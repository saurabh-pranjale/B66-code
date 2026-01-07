import { Link } from 'react-router-dom';
import sun from '../../public/sun.png'
import { PiShoppingCartBold } from "react-icons/pi";

const NavigationBar = () => {
  return (
    <ul style={{display:'flex',justifyContent:'space-between',alignItems:'center',boxShadow:'0px 0px 3px -1px black',padding:'0 2rem'}}>
      <Link to={'/'}>  <li style={{listStyle:'none'}}><img style={{height:'70px'}}  src={sun} alt='img' /></li> </Link>
      <Link to={'/cart'}>   <li style={{listStyle:'none'}}><PiShoppingCartBold size={34} /></li></Link>
    </ul>
  )
}

export default NavigationBar