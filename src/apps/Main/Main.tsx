import { ReactNode } from "react";
import CSS from "./static/css/Main.module.css";

const Main = (
    {
        children
    }:{
        children?: ReactNode
    }
) => {
    return(
        <div className={CSS.l_Main_main}>
            {children}
        </div>
    )
}

export default Main;