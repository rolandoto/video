export const setFavorite = payload => ({

    type:"SET_FAVORITE",
    payload,
})


export const deletefavorite = payload => ({
        type: "DELETE_FAVORITE",
        payload,
})

export const loginruests = payload =>({
        type: "lOGIN_REQUEST",
        payload
})


export const logaouRequest = payload => ({
        type: "LOGAOUT",
        payload
})

export const loagouregister = payload => ({
        type: 'LOGA',
        payload
})

export const getvideo = payload => ({
        type: 'GET_VIDEO_SOURCE',
        payload
})