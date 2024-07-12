const {legacy_createStore,bindActionCreators,combineReducers,applyMiddleware}=require("redux")
const {createLogger}=require('redux-logger')
const logger=createLogger()
const createstore=legacy_createStore
const CAKE_ORDERD="CAKE_ORDERD"
const CAKE_RESTORED="CAKE_RESTORED"
const ICE_CREAM_ORDERD="ICE_CREAM_ORDERD"
const ICE_CREAM_RESTORED="ICE_CREAM_RESTORED"
function order_Cake(){
    return{
    type:CAKE_ORDERD,
    qunatity:1,
    }
}
function restore_Cake(qu=1){
    return{
        type:CAKE_RESTORED,
        qunatity:qu
    }
}
function order_icecream(qu=1){
    return{
        type:ICE_CREAM_ORDERD,
        qunatity:qu,
    }
}
function restore_icecream(qu=1){
    return{
        type:ICE_CREAM_RESTORED,
        qunatity:qu
    }
}
const Initial_Cake_State={
    no_of_cakes:10
}
const Initial_Icecream_State={
    no_of_icecream:20
}
const cake_reducer=(state=Initial_Cake_State,action)=>{
    switch(action.type){
        case CAKE_ORDERD:
            return{
                ...state,
                no_of_cakes:state.no_of_cakes-1
            }
        case CAKE_RESTORED:
            return{
                ...state,
                no_of_cakes:state.no_of_cakes+action.qunatity
            }
        default:
            return state
    }

}
const ice_cream_reducer=(state=Initial_Icecream_State,action)=>{
    switch(action.type){
        case ICE_CREAM_ORDERD:
            return{
                ...state,
                no_of_icecream:state.no_of_icecream-action.qunatity
            }
        case ICE_CREAM_RESTORED:
            return{
                ...state,
                no_of_icecream:state.no_of_icecream+action.qunatity
            }
        default:
            return state
    }
}
const reducer=combineReducers({
    cake:cake_reducer,
    ice_cream:ice_cream_reducer
})
const store=createstore(reducer,applyMiddleware(logger))
const Unsub=store.subscribe(()=>{
    // console.log("pdate state",store.getState())
})
// console.log("Initial state",store.getState())
// store.dispatch(order_Cake())
// store.dispatch(order_Cake())
// store.dispatch(order_Cake())
const actions=bindActionCreators({order_Cake,restore_Cake,order_icecream,restore_icecream},store.dispatch)
// console.log(actions)
actions.order_Cake()
actions.order_Cake()
actions.restore_Cake(3)
actions.order_icecream()
actions.restore_icecream(3)
Unsub()
store.dispatch(order_Cake())
