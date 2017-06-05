
    <template>
        <div id="home">
            <MyInfo></MyInfo>
            <Work></Work>
            <Skill></Skill>
            <MyMap></MyMap>
            <MyFooter></MyFooter>
        </div>
    </template>
    <script>

        import MyInfo from  './BasicInformation.vue'
        import Skill from  './Skill.vue'
        import MyFooter from  './footer.vue'
        import MyMap from  './map.vue'
        import Work from  './works.vue'
        export default {
            name: 'home',
            components: {
                MyInfo,
                Skill,
                MyFooter,
                MyMap,
                Work
            }

        }
    </script>