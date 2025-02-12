import cssStyle from "./Section.module.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Section =(props: any)=>{
return(

        <section className={cssStyle.hero_section}>
            <div>{props.name}
            <h2 className={cssStyle.btn}>{props.btn}</h2>
            </div>
            
        </section>
    
)
}
export default Section