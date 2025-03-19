import { ChangeEvent, useState } from "react";

const UserAdd = (
    {
        addHandler,
    }:{
        addHandler: (name: string) => void;
    }
) => {
    const [userName, setUserName] = useState<string>("");

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }

    const addBtnClickHander = () => {
        addHandler(userName);

        setUserName("");
    }

    return(
        <div>
            <input 
                value={userName}
                onChange={nameChangeHandler}
            />

            <button onClick={addBtnClickHander}>
                추가
            </button>
        </div>
    )
}

export default UserAdd;