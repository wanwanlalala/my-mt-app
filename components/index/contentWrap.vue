<template>
    <div class='content-wrap'>
        <div class='nav'>
            <dl @mouseover="over">
                <dt class='title'>有格调</dt>
                <dd
                    :class="{active:kind==='all'}"
                    kind="all"
                    keyword="景点">全部</dd>
                <dd
                    :class="{active:kind==='part'}"
                    kind="part"
                    keyword="美食">约会聚餐</dd>
                <dd
                    :class="{active:kind==='spa'}"
                    kind="spa"
                    keyword="丽人">丽人SPA</dd>
                <dd
                    :class="{active:kind==='movie'}"
                    kind="movie"
                    keyword="电影">电影演出</dd>
                <dd
                    :class="{active:kind==='travel'}"
                    kind="travel"
                    keyword="旅游">品质出游</dd>
                </dl>
        </div>
        <div class='content clearfix'>
            <ul>
                <li class='content-item' v-for='(item,idx) of list[kind]' :key='idx'>
                    <img :src="item.img">
                    <div class='name'>{{item.title}}</div>
                    <div class='desc'>{{item.desc}}</div>
                    <div class='price'>￥<em>{{ item.price }}</em><span>/起</span></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            kind:'all',
            list: {
                all: [],
                part: [],
                spa: [],
                movie: [],
                travel: []
            }
        }
    },
    mounted:async function(){
        let self = this
        this.kind = 'all'
        let {status,data:{count,pois}} = await self.$axios.get('/search/resultsByKeywords',{
            params:{
                city:self.$store.state.geo.position.city.replace("市",""),
                keyword:'景点'
            }
        })
    
        if(status===200&&count>0){
        let r= pois.filter(item=>item.photos.length).map(item=>{
                return {
                    title:item.name,
                    desc:item.type.split(';')[0],
                    price:item.biz_ext.cost||'暂无',
                    img:item.photos[0].url,
                    url:'//abc.com'
                }
            })
            self.list[self.kind]=r.slice(0,9)
        }else{
            self.list[self.kind]=[]
        }
    },
    methods:{
        over:async function(event){
            let dom = event.target
            let self = this
            this.kind = dom.getAttribute('kind')
            let keyword = dom.getAttribute('keyword')
            if(!keyword){
                return
            }
            
            let {status,data:{count,pois}} = await self.$axios.get('/search/resultsByKeywords',{
                params:{
                    city:self.$store.state.geo.position.city.replace("市",""),
                    keyword:keyword
                }
            })

            if(status===200&&count>0){
            let r= pois.filter(item=>item.photos.length).map(item=>{
                    return {
                        title:item.name,
                        desc:item.type.split(';')[0],
                        price:item.biz_ext.cost||'暂无',
                        img:item.photos[0].url,
                        url:'//abc.com'
                    }
                })
                self.list[self.kind]=r.slice(0,9)
            }else{
                self.list[self.kind]=[]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/index/contentWrap.scss';
</style>

