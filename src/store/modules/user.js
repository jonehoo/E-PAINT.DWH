import {getInfo} from '@/api/user'
const actions = {
    async userInfo(context){
        await getInfo().then(r=>{
            context.commit('userInfo',r.data.data)
           })
    }
}
const mutations = {

    userInfo(state, data) {
        state.userInfo = data
    },
 
}
const state = {
    userInfo:{}
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}