const store = {
    namespaced:true,
    state(){
        return {
            menu:[]
        }
    },
    mutations:{
        setMenu(state,menu){
            state.menu = menu
        }
    },
    actions:{
        setMenu:({commit},menu) =>{
            commit('setMenu',menu)
        }
    }
}

export default store