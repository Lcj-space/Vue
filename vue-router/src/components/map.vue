<template>
    <div>
        <div class="map-description">
            <h2>我在这里哟学术交流随时联系我^_^</h2>
        </div>
        <baidu-map class="bm-view"  :zoom="18" ak="9w3UCQ9fjQApIUUGxwUu2YDArBsGanOG" :center="center" >
            <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                <bm-label content="我爱黑龙江大学" :labelStyle="labelStyle" :offset="offset"></bm-label>
            </bm-marker>
        </baidu-map>
    </div>

</template>

<script>
    //按需引入百度地图中的模块，如实在main.js中全局调用的话就不用这样写了
    import {BaiduMap,BmMarker,BmLabel} from 'vue-baidu-map'
    export default {
        components: {
            BaiduMap,
            BmMarker,
            BmLabel
        },
        data () {
            return {
                //126.65771686,45.77322463
                center: {lng: 126.62550686, lat: 45.71222463},
                labelStyle:{ color: 'red', fontSize : '12px'},
                offset:{width: -35 , height: 30}
            }
        }
    }
</script>

<style scoped>
    .bm-view {
        width: 960px;
        height: 300px;
        margin: 0 auto;
        margin-top: 40px;
    }
    .map-description{
        width: 960px;
        margin: 0 auto;
        text-align: center;
    }
    .map-description h2{
        color: #58B7FF;
    }
</style>
