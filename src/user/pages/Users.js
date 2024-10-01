import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {


    const USER = [{
        id: 'u1',
        name: 'Mulan',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fnature-images..jpg&f=1&nofb=1&ipt=694ce35f1754f6f977ce82a251c95b40a94d716c5f0dcec1af4faa2c7e63f7ba&ipo=images',
        places: 3
    }];
    return <UsersList items={USER}/>;
};

export default Users;
