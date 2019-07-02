import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({
    prefix:'/categroy'
})

let sign = 'cbc9a145410c7b693e6d9a02d9df4e94';

router.get('/crumbs',async (ctx)=>{
    let {status,data:{areas,types}} = await axios.get(`http://117.51.155.165/categroy/crumbs`,{
        params:{
            city:ctx.query.city.replace('市','') || '深圳',
            sign
        }
    })

    ctx.body = {
        areas:status === 200 ?areas : [],
        types:status === 200 ? types :[]
    }
})

export default router;