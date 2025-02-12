
import Section from "./Components/Section/Section";


const HomePage = () => {
    return(
        <div>
            <Section  name = "This Is A Demo Website" btn={<a href="./home"  className="btn" > Explore World</a>} className = "backgoundImg">  
            </Section>
        </div>
    )
}
export default HomePage


