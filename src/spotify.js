//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:3000/";

const clientId = "a967e1837fb5495897324b64d1f50b55"


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


export const getTokenFromUrl = ()=>{
    return window.location.hash
    .substring(1).split('&').reduce((intital,item)=>{
        let parts = item.split("=")
        intital[parts[0]]=decodeURIComponent(parts[1])
        return intital;

    },{});
    //#accessToken=mysupersecretekey&name=pravin&a
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;