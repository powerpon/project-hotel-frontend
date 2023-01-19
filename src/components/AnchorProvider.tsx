import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";

interface PropTypes{
    children: JSX.Element;
}

function AnchorProvider(props: PropTypes){
    const {pathname, hash} = useLocation();
    useEffect(() =>{
        const element = document.getElementById(hash.replace("#", ""));
        setTimeout(() => {
            window.scrollTo({
                behavior: element ? "smooth" : "auto",
                top: element ? element.offsetTop : 0
            });
        }, 100)
    }, [pathname, hash]);
    return(
        props.children
    );
}

export default AnchorProvider;