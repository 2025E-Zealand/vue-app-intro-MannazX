const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            hidden: false,
            showLastname : true,
            firstname : firstname,
            lastname : lastname,
            showStudent : true,
            studentAge : true,
            students : [
                {"firstname" : "Magnus", "lastname" : "Asker", "age" : 29},
                {"firstname" : "Vincent", "lastname" : "Arran", "age" : 25},
                {"firstname" : "Kristoffer", "lastname" : "Einarson", "age" : 27}
            ],
            mobilnr : ""
            //students : ["Magnus", "Vincent", "Kristoffer"]
        }
    },
    methods: {
        hideName() {
            if (this.hidden == false) {
                this.hidden = true
            }
        },
        showName() {
            if (this.hidden == true) {
                this.hidden = false
            }
        },
        showStudents() {
            if (this.showStudent) {
                this.showStudent = false
            }
            else {
                this.showStudent = true
            }
        },
        showStudentAges() {
            if (this.studentAge) {
                this.studentAge = false
            }
            else {
                this.studentAge = true
            }
        },
        show() {
            if (this.showLastname) {
                this.showLastname = false
            }
            else {
                this.showLastname = true
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
