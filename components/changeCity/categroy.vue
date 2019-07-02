<template>
    <div class='categroy-wrap'>
        <dl class='categroy-nav'>
            <dt class='title'>按拼音首字母选择：</dt>
            <dd class='nav-item' v-for='item of pinyinList' :key='item'>
                <a :href="'#city' + item" class='item-link'>{{item}}</a>
            </dd>
        </dl>
        <div class='categroy-cont clearfix'>
            <dl class='city-nav' v-for='item of cityList' :key='item.title'>
                <dt class='first-letter'><span class='circle'>{{item.title}}</span></dt>
                <dd class='city-item' :id="'city' + item.title.toUpperCase()">
                    <nuxt-link 
                        v-for='(ite,idx) of item.city' 
                        :key='idx'
                        to='/meituan'
                        class='item-link'
                    >
                        {{ite}}
                    </nuxt-link>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
import jspy from 'js-pinyin'
export default {
    data(){
        return{
            pinyinList:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityList:[]
        }
    },
    async mounted(){
        let {status,data:{city}} = await this.$axios.get('/geo/city')
        let firstLetter,charCode,obj = {}     //拼音首字母

        city.forEach(item => {
            firstLetter = jspy.getFullChars(item.name).toLocaleLowerCase().slice(0,1)
            charCode = firstLetter.charCodeAt(0)
            if(charCode > 96 && charCode < 123){
                if(obj[firstLetter]){
                    obj[firstLetter].push(item.name)
                }else{
                    obj[firstLetter] = []
                    obj[firstLetter].push(item.name)
                }
            }
        });
        let tempCity = []
        for(let [k,v] of Object.entries(obj)){
            tempCity.push({
                title:k,
                city:v
            })
        }

        tempCity.sort(function(a,b){
            return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })

        this.cityList = tempCity
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/changeCity/categroy.scss'
</style>