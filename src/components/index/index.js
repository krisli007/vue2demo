import http from 'axios'

export default {
    data () {
        return {
            carList: [],
            selected: 'A',
            carOptions: [
                { text: '以A开头的车标', value: 'A' },
                { text: '以B开头的车标', value: 'B' },
                { text: '以C开头的车标', value: 'C' },
                { text: '以D开头的车标', value: 'D' },
                { text: '以E开头的车标', value: 'E' },
                { text: '以F开头的车标', value: 'F' },
                { text: '以G开头的车标', value: 'G' },
                { text: '以H开头的车标', value: 'H' },
                { text: '以I开头的车标', value: 'I' },
                { text: '以J开头的车标', value: 'J' },
                { text: '以K开头的车标', value: 'K' },
                { text: '以L开头的车标', value: 'L' },
                { text: '以M开头的车标', value: 'M' },
                { text: '以N开头的车标', value: 'N' },
                { text: '以O开头的车标', value: 'O' },
                { text: '以P开头的车标', value: 'P' },
                { text: '以Q开头的车标', value: 'Q' },
                { text: '以R开头的车标', value: 'R' },
                { text: '以S开头的车标', value: 'S' },
                { text: '以T开头的车标', value: 'T' },
                { text: '以U开头的车标', value: 'U' },
                { text: '以V开头的车标', value: 'V' },
                { text: '以W开头的车标', value: 'W' },
                { text: '以X开头的车标', value: 'X' },
                { text: '以Y开头的车标', value: 'Y' },
                { text: '以Z开头的车标', value: 'Z' },
            ],
            qrCodeText: '',
            qrCodeImg: '',
            topNews: []
        }
    },
    watch: {
        selected() {
            this.getCars()
            console.log(this.selected);
        }
    },
    methods: {
        changeCount(count) {
            this.$store.commit('changeCount', count)
        },
        changeNum(count) {
            this.$store.commit({
                type: 'changeNum',
                count
            })
        },

        // axios
        async getCars() {
            let res = await http.get('/car/cxdq/brand', {
                params: {
                    first_letter: this.selected,
                    key: '80f23852fdd5f5772aa71d46885fd1db'
                }
            })
            this.carList = res.data.result
        },

        async getQrCode() {
            let res = await http.get('/qrcode/qrcode/api', {
                params: {
                    text: this.qrCodeText,
                    key: '3873915114fa6f573b668ba2f7fabf0e'
                }
            })
            this.qrCodeImg = res.data.result.base64_image
        },

        async getTopNews() {
            let res = await http.get('/news/toutiao/index', {
                params: {
                    type: 'top',
                    key: '783506872eba520ba7ad3fa2f8055e22'
                }
            })
            this.topNews = res.data.result.data;
        },
        toNewsDetail(url) {
            location.href = url
        }
    },
    mounted() {
        // this.getCars()
        this.getTopNews()
    },
}
