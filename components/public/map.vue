<template>
    <div :id="id" :style="{width:width + 'px',height:height+'px',margin:'34px auto'}"></div>
</template>
<script>
export default {
    props:{
        width:{
            type:Number,
            default(){
                return 300;
            }
        },
        height:{
            type:Number,
            default(){
                return 300;
            }
        },
        point:{
            type:Array,
            default(){
                return [114.06667,22.61667]
            }
        },
        id:{
            type:String,
            default(){
                return "";
            }
        }
    },
    data(){
        return {
            key:"65ee7044798d40c564479c13fc9c2017",
        }
    },
    async mounted(){
        let self = this;
        window.onmaploaded = () => {
            let map = new window.AMap.Map(self.id,{
                resizeEnable:true,
                zoom:11,
                center:self.point
            })

            self.map = map;

            window.AMap.plugin('AMap.ToolBar', () => {
                let toolbar = new window.AMap.ToolBar()
                map.addControl(toolbar)
                let marker = new window.AMap.Marker({
                    icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
                    position: self.point
                })
                self.marker = marker
                marker.setMap(map)
            })
        }

        const url = `https://webapi.amap.com/maps?v=1.4.10&key=${self.key}&callback=onmaploaded`
        let jsapi = document.createElement('script')
        jsapi.charset = 'utf-8'
        jsapi.src = url
        document.head.appendChild(jsapi)
    }
}
</script>
