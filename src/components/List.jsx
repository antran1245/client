import { useNavigate } from "react-router-dom";

export default function List(props) {
    const {title, _id } = props.item
    let navigate = useNavigate();
    const linkDetail = () => {
        navigate(`/${_id}`)
    }
    return(
        <div className="product-listing">
            <p onClick={linkDetail}>{title}</p>
        </div>
    );
}