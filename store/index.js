import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'
import search from './modules/search'

Vue.use(Vuex)
const store = () => new Vuex.Store({
    modules:{
        geo,
        home,
        search
    },
    actions:{
        async nuxtServerInit({commit},{req,app}){       //此时还拿不到dom实例，只能获取到app
            //1、获取位置
            const {status,data:{
                province,
                city
            }} = await app.$axios.get('/geo/getPosition')
                //提交vuex
            commit('geo/setPosition',status === 200 ? {city,province}:{city:'',province:''})
            
            //2、获取menu
            const {status:menuStatus,data:{menu}} = await app.$axios.get('/geo/getMenu')
            commit('home/setMenu',menuStatus === 200 ? menu:[])

            //3、搜索框相关
            //const {status:searchTop,data:{top}} = await app.$axios.get('/search/top')
            
            //3、热门搜索
            const {status:hotPlaceStatus,data:{hotPlace}} = await app.$axios.get(`/search/hotPlace`,{
                params:{
                    city:app.store.state.geo.position.city.replace('市','')
                }
            })

            commit('search/setHotPlace',hotPlaceStatus === 200 ? hotPlace.slice(0,5) :[])
        }
    }
})

export default store