import cssStyle from "./Section.module.css"

const Section =(props: any)=>{
return(

        <section>
            <div className={cssStyle.hero_section}>{props.name}
            <h2 className={cssStyle.btn}>{props.btn}</h2>
            </div>
            
        </section>
    
)
}
export default Section