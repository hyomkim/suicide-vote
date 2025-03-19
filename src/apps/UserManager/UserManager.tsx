import Main from "../Main/Main";
import { v4 as uuidv4 } from "uuid";
import UserAdd from "./components/UserAdd/UserAdd";
import { useState } from "react";
import { User_Interface } from "./static/interface/User.interface";
import UserCard from "./components/UserCard/UserCard";

const UserManager = () => {
    const [userList, setUserList] = useState<User_Interface[]>([]);

    const [selectedUser, setSelectedUser] = useState<User_Interface | null>(null);
    
    const addUserHandler = (name: string) => {
        setUserList((prev) => {
            const m_new_list = [...prev];

            m_new_list.push({
                name,
                id: uuidv4()
            })

            return m_new_list;
        })
    }

    const subUserHandler = (id: string) => {
        const m_finding_user = userList.find((item) => item.id === id);

        FindUser:{
            if(!m_finding_user){
                console.error("목록에서 유저 특정 실패");
                break FindUser;
            }

            if(!window.confirm(`${m_finding_user.name}(${m_finding_user.id})를 제거하시겠습니까?`)){
                break FindUser;
            }

            const m_copy_list = userList.filter((item) => item.id !== id);

            setUserList(m_copy_list);
        }
    }

    const selectHander = () => {
        if(!window.confirm("추첨을 시작하시겠습니까?")){
            return ;
        }

        // 무작위 인덱스 선택
        const m_randomIndex = Math.floor(Math.random() * userList.length);

        // 선택된 항목
        const m_randomItem = userList[m_randomIndex];

        console.log(m_randomItem);

        setSelectedUser(m_randomItem);
    }
    
    return(
        <Main>
            <UserAdd 
                addHandler={addUserHandler}
            />

            {
                userList.map((item) => {
                    return(
                        <UserCard 
                            key={item.id}
                            name={item.name}
                            removeHandler={subUserHandler.bind(null, item.id)}
                        />
                    )
                })
            }

            <button onClick={selectHander}>추첨시작</button>

            {
                selectedUser
                &&  <UserCard 
                        name={selectedUser.name}
                    />
            }
        </Main>
    )
}

export default UserManager;