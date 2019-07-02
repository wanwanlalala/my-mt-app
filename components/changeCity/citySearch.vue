<template>
    <div class='city-search-wrap'>
        <el-row>
            <el-col :span='10'>
                <span class='select-label'>按省份选择：</span>
                <el-select v-model="pVal" placeholder="省份" class='city-search-select'>
                    <el-option
                    v-for="item in provinces"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>

                <el-select v-model="cVal" placeholder="城市" class='city-search-select' :disabled="pVal === ''">
                    <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span='14'>
                <span class='select-label'>直接搜索：</span>
                <el-autocomplete
                    v-model="directSearchVal"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入城市中文或拼音"
                    @select="directSearch"
                    >
                </el-autocomplete>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import lodash from 'lodash'
import jspy from 'js-pinyin'
export default {
    data(){
        return {
            pVal:'',
            provinces:[],
            cities:[],
            cVal:'',
            allCities:[],
            directSearchVal:''
        }
    },
    methods:{
        async getProvince(){
            let {status,data:{province}} = await this.$axios.get('/geo/province')
            if(status === 200){
                this.provinces  = province.map(item =>{
                    return {
                        value:item.id,
                        label:item.name
                    }
                })
            }
        },
        querySearchAsync:lodash.debounce(async function(query,cb){
            let self = this;
            if(self.allCities.length > 0){
                // cb(self.allCities.filter(item=>{
                //     return item.value.indexOf(self.directSearchVal) > -1 
                // }))
                cb(self.filterCity(self.allCities))
            }else{
                let citiesPy = [];
                let {status,data:{city}} = await this.$axios.get('/geo/city')
                if(status === 200){
                    this.allCities = city.map(item => {
                        return {
                            value:item.name,
                        }
                    })

                    cb(self.filterCity(self.allCities))
                }else{
                    cb([])
                }
            }
        }),
        filterCity(cities){
            let self = this;
            let filterCities = cities.filter(item=>{
                let filterCities = item.value.indexOf(self.directSearchVal) > -1 ||
                                    jspy.getFullChars(item.value).toLowerCase().indexOf(self.directSearchVal) > -1 ||
                                    jspy.getCamelChars(item.value).toLowerCase().indexOf(self.directSearchVal) > -1
                return filterCities 
            })
            return filterCities;
        },
        directSearch(obj){
            this.directSearchVal = obj.value
        }
    },
    async mounted(){
        let {status,data:{province}} = await this.$axios.get('/geo/province')
            if(status === 200){
                this.provinces  = province.map(item =>{
                    return {
                        value:item.id,
                        label:item.name
                    }
                })
            }
    },
    watch:{
        async pVal(newVal){
            this.cVal = ''
            let finalCity;
            let {status,data:{city}} = await this.$axios.get('/geo/province/' + newVal);
            if(status === 200){
                finalCity = city.map(item=>{
                    return {
                        value:item.id,
                        label:item.name === '市辖区' ? item.province : item.name
                    }
                })

                this.cities = finalCity
            }else{
                this.cities = []
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/changeCity/citySearch.scss'
</style>

