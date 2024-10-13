import Header  from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Section from "./Components/Section/Section";

const HomePage = () => {
    return(
        <div>
            <Header></Header>
            <Section name = "This Is A travller Website" btn={<a href="./home"  className="btn" > Explore World</a>} className = "backgoundImg">
                
            </Section>
            <Footer></Footer>
        </div>
    )
}
export default HomePage


