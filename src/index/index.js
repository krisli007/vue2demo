export default {
    data() {
        return {
            tab: [
                {
                    text: '首页',
                    path: 'home'
                },
                {
                    text: '关于',
                    path: 'about'
                }
            ],
            currentTabIndex: 0
        }
    },
    methods: {
        switchTab(index, path) {
            if (this.currentTabIndex === index) return
            this.currentTabIndex = index
            this.$router.push(path)
        }
    },
    mounted() {
        this.$router.push(this.$route.path)
    },
}
