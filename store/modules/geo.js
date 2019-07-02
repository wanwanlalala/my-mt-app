const store = {
    namespaced:true,
    state(){
        return {
            position:{}
        }
    },
    mutations:{
        setPosition(state,posi){
            state.position = posi
        }
    },
    actions:{
        setPosition:({commit},posi) => {
            commit('setPosition',posi)
        }
    }
}

export default store