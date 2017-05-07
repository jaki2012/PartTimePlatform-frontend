import Vue from 'vue'

export default {
    state: {
        loginPage: false
    },
    mutations: {
        LEAVE_LOGINPAGE: state => state.loginPage = false,
        ENTER_LOGINPAGE: state => state.loginPage = true
    },
    actions: {
        leaveLoginPage({commit}){
            commit("LEAVE_LOGINPAGE")
        },
        enterLoginPage({commit}){
            commit("ENTER_LOGINPAGE")
        }
    }
}