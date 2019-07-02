import Router from 'koa-router'
import axios from './utils/axios'

const router = new Router({
    prefix:'/search'
})

const sign = 'cbc9a145410c7b693e6d9a02d9df4e94'

router.get('/top',async (ctx)=>{
    const {status,data:{top}} = await axios.get(`http://117.51.155.165/search/top`,{
        params:{
            input:ctx.query.searchVal,
            city:ctx.query.city,
            sign
        }
    })

    ctx.body = {
        top:status === 200 ? top : []
    }
})

//首页，搜索框附近的热门景点
router.get('/hotPlace',async (ctx)=>{
    let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
    let {status,data:{result:hotPlace}} = await axios.get(`http://117.51.155.165/search/hotPlace`,{
        params:{
            city,
            sign
        }
    })
    
    ctx.body = {
        hotPlace:status === 200 ? hotPlace : []
    }
})

//首页，有格调
router.get('/resultsByKeywords', async (ctx) => {
    const {city, keyword} = ctx.query;
    let {
      status,
      data: {
        count,
        pois
      }
    } = await axios.get('http://117.51.155.165/search/resultsByKeywords', {
      params: {
        city,
        keyword,
        sign
      }
    })
    ctx.body = {
      count: status === 200 ? count : 0,
      pois: status === 200
        ? pois
        : []
    }
  })

  router.get('/products', async (ctx) => {
    let keyword = ctx.query.keyword || '旅游';
    let city = ctx.query.city || '深圳';
    let {
      status,
      data: {
        product,
        more
      }
    } = await axios.get('http://117.51.155.165/search/products', {
      params: {
        city,
        keyword,
        sign
      }
    })
    if(status === 200){
      ctx.body = {
        product,
        more:ctx.isAuthenticated() ? more : [],
        login:ctx.isAuthenticated()
      }
    }else{
      ctx.body = {
        product:{},
        more:ctx.isAuthenticated() ? more : [],
        login:ctx.isAuthenticated()
      }
    }
   
  })

export default router