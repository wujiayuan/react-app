const defaultState={
    listdata:[]
}

const dataReducer=(state=defaultState,action)=>{
    const {type,payload} =action;
    switch(type){
        case "UPDATE":
             return {...state,listdata:[...payload]}
        default:
             return state
    }
}

export default  dataReducer