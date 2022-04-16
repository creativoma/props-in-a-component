import img1 from './images/phone-icon.png'
import img2 from './images/phone-icon.png'


export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={img1} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={img2} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}