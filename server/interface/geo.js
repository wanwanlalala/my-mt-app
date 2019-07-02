import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({
    prefix:'/geo'
});

const sign = 'cbc9a145410c7b693e6d9a02d9df4e94'

router.get('/getPosition',async (ctx)=>{
    let {
        status,
        data:{
            province,
            city
        }
    } = await axios.get(`http://117.51.155.165/geo/getPosition?sign=${sign}`)

    if(status === 200){
        ctx.body = {
            province,
            city
        }
    }else{
        ctx.body = {
            province:'',
            city:''
        }
    }
})

router.get('/getMenu',async (ctx)=>{
    const {status,data:{menu}} = await axios.get(`http://117.51.155.165/geo/menu?sign=${sign}`)
    if(status === 200){
        ctx.body = {
            menu
        }
    }else{
        ctx.body = {
            menu:[]
        }
    }
})


router.get('/province',async (ctx)=>{
    let {status,data:{province}} = await axios.get(`http://117.51.155.165/geo/province?sign=${sign}`)

    if(status === 200){
        ctx.body = {
            province
        }
    }else{
        ctx.body = {
            province:[]
        }
    }
})

router.get('/province/:id',async (ctx)=>{
    let {status,data:{city}} = await axios.get(`http://117.51.155.165/geo/province/${ctx.params.id}?sign=${sign}`)

    if(status === 200){
        ctx.body = {
            city
        }
    }else{
        ctx.body = {
            city:[]
        }
    }
})

router.get('/city',async (ctx) =>{
    let {status,data:{city}} = await axios.get(`http://117.51.155.165/geo/city?sign=${sign}`)

    if(status === 200){
        ctx.body = {
            city
        }
    }else{
        ctx.body = {
            city:[]
        }
    }
})

router.get('/hotCity',async (ctx) =>{
    let {status,data:{hots}} = await axios.get(`http://117.51.155.165/geo/hotCity?sign=${sign}`)
    if(status === 200){
        ctx.body = {
            hotCity:hots
        }
    }else{
        ctx.body = {
            hotCity:[]
        }
    }
})
export default router