import {useParams} from "react-router-dom";

function UserPage() {

        const { userId } = useParams();
        return (
            <div>
                <h3>Страница конкретного пользователя {userId}</h3>
            </div>

    )
}

export default UserPage;
