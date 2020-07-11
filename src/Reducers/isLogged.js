// Ini adalah komponen untuk reducer yang digunakan untuk mengganti mode dark/light
// Apabila dijalankan oleh actions, maka akan merubah state awalnya (dari false -> true, dan sebaliknya)

const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'CHANGE':
            return !state;
        default:
            return state
    }
}

export default loggedReducer