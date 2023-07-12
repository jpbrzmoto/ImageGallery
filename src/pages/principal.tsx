import { FC } from "react";
import AppPrincipalBar from "../components/appbar/appbar";
import { UserProvider } from "../context/user.context";

const Principal: FC = () => {
    return (<>
        <UserProvider>
            <AppPrincipalBar />
        </UserProvider>
    </>);
}

export default Principal;