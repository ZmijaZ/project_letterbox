import { BrowserRouter, Routes, Route} from "react-router-dom";

import { Contact } from "./Contact";
import { Home } from "./Home";
import { LinkButton } from "./LinkButton";
import { People } from "./People";

function RouteSwitch(){

    return(
        <BrowserRouter>

            {/* header */}
            <div>
                <h1><LinkButton link = '/' text = 'STORE NAME'></LinkButton>   </h1>
                <h2><LinkButton link = '/' text = 'Home'></LinkButton>   </h2>
                <h2><LinkButton link = '/people' text = 'People'></LinkButton>   </h2>
                <h2><LinkButton link = '/contact' text = 'Contact'></LinkButton>   </h2>
            </div> 

            <Routes>
                <Route path = '/' element = {<Home></Home>}></Route>
                <Route path = '/contact' element = {<Contact></Contact>}></Route>
                <Route path = '/people' element = {<People></People>}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export {RouteSwitch}