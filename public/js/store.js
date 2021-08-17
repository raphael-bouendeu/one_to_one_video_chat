let state = {
    socketId: null,
    localStream: null,
    remoteStream: null,
    screanSharingStream: null,
    allowConnectionsFromStrangers: false,
    screenSharingActive: false,

};

export const setSocketId = (socketId) => {

    state = {
        ...state,
        socketId,
    };
    console.log(state)
};
export const setLocalStream = (localStream) => {

    state = {
        ...state,
        localStream,
    };
}

export const setAllowConnectionsFromStrangers = (allowConnectionsFromStrangers) => {
    state = {
        ...state,
        allowConnectionsFromStrangers,
    };
}

export const setScreenSharingActive = (screenSharingActive) => {
    state = {
        ...state,
        screenSharingActive,
    }
}

export const setScreanSharingStream = (screanSharingStream) => {
    state = {
        ...state,
        screanSharingStream,
    }
}

export const setRemoteStream = (remoteStream) => {
    state = {
        ...state,
        remoteStream,
    };
}

export const getState = () => {
    return state;
}