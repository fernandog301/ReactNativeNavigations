import { IToken, IUserInfo} from "../inerfaces/inerface";

const url = 'https://blogapijd.azurewebsites.net';

export const createAccount = async (createUser: IUserInfo) => {
    const res = await fetch(url + '/User/AddUser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body:JSON.stringify(createUser)
    });
    if(!res.ok){
        const message = `An Error has ocurred ${res.status}`
        throw new Error(message);
    };
    const data = await res.json();


    return data


}
export const login = async (userInfo: IUserInfo) => {
    const res = await fetch(url + '/User/Login', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body:JSON.stringify(userInfo)
    });
    if(!res.ok){
        const message = `An Error has ocurred ${res.status}`
        throw new Error(message);
    };
    const data: IToken = await res.json();
    return data;

}

export const narutoFetch = async () => {
    const promise = await fetch('https://narutodb.xyz/api/character/777');
    const data = await promise.json();
    return data;
};