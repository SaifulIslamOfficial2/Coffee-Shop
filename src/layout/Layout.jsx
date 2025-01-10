import Banner from "../component/banner/Banner"
import Cetagory from "../component/category/Cetagory"
import ProductSection from "../component/product/Product"
import InstagramSection from "../page/InstagramSection"
// import LoginPage from "../page/LoginPage"


function Layout() {
  return (
    <>
        <Banner/>
        <Cetagory/>
        <ProductSection/>
        <InstagramSection/>
        {/* <LoginPage/> */}
     
    </>
  )
}

export default Layout