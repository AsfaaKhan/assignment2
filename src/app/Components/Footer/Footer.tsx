import cssStyle from "./Footer.module.css"
const Footer = () => {
    return(
        <div>
            <ul className={cssStyle.footer}>
                <li className={cssStyle.item}><a href="https://github.com/AsfaaKhan" target="_blank" >GitHub</a></li>
                <li className={cssStyle.item}><a href="https://www.facebook.com/" target="_blank">FaceBook</a></li>
                <li className={cssStyle.item}><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
            </ul>
        </div>
    )

}
export default Footer