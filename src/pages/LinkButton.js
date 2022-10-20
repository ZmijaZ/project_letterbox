import { Link } from "react-router-dom";

function LinkButton(props){

    const {link, text} = props;

    return(
        <Link to = {link}>
            <span>{text}</span>
        </Link>
    )
}

export {LinkButton}