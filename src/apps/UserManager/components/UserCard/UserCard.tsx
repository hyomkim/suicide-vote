import { MouseEventHandler } from "react";
import CSS from "./static/UserCard.module.css";

const UserCard = (
    {
        name,
        removeHandler
    }:{
        name: string;
        removeHandler?: MouseEventHandler<HTMLButtonElement>;
    }
) => {
    return(
        <div className={CSS.l_UserCard_main}>
            <div>
                {name}
            </div>
            {
                removeHandler
                &&  <button onClick={removeHandler}>
                        제거
                    </button>
            }
        </div>
    )
}

export default UserCard;