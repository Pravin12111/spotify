export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after finished developing
    token: 'BQDsmeXh1mI4spkmM-JswZfPHIDvwT_wGYJ1XojImF285NJWB0XxggNOQwTGEB2JFQFdUDZaDY8t83DDtSK8CLWF8l0lttqYCOJqbqx1oMrWqotvHlNP4D9vl4xkZYuwAsm-ZJDE6XkJltyOc2rEtssA02ZYGuLQElXbV5Lxyo2-wntihUTTW3c3m2TyvvMI173tQjU6XW0jTPk4L4uH'
};

export const reducer = (state,action)=>{
    console.log(action);

    switch (action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

            case 'SET_TOKEN':
                return {
                ...state,
                token: action.token
            };

            case 'SET_PLAYLISTS':
                return {
                ...state,
                playlists: action.playlists,
            };
            default:
                return state;
    }
};