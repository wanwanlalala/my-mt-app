const store = {
    namespaced:true,
    state(){
        return {
            hotPlace:[]
        }
    },
    mutations:{
        setHotPlace(state,hotPlace){
            state.hotPlace = hotPlace
        }
    },
    actions:{
        setHotPlace:({commit},hotPlace) =>{
            commit('setHotPlace',hotPlace)
        }
    }
}

export default store