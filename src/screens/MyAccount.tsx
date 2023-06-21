import React from "react";
import {mockUsers} from "../mock/users";
import Account from "../components/Account";

const MyAccount: React.FC = () => {
    return (
        <Account user={mockUsers[0]}/>
    );
}

export default MyAccount;

