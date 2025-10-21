const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            hidden: false,
        }
    },
    methods: {
        hide() {
            if (this.hidden == false) {
                this.hidden = true
            }
        },
        show() {
            if (this.hidden == true) {
                this.hidden = false
            }
        }
    },
    computed: {
        fullname() {
            return firstname + ' ' + lastname
        }
    }
})
const firstname = "Private Sodoff"
const lastname = "Baldrick"
