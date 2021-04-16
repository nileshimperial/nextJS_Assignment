const intitialState={
    data: 1,
};
const counterReducer=(state=intitialState,action)=>{
    switch(action.type){
        case 'CASE_1':{
            return {
                ...state,
                data: action.payload
            }
        }
        case 'CASE_2':{
            return {
                ...state,
                data: action.payload
            }
        }
        default:{
            return state;
        }
    }
}
export default counterReducer;