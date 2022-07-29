import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        commonData:{

        }
    },
    mutations:{
        setCommonData(state,val){
            state.commonData=val
        }
    },
    actions:{},
    modules:{
        
    }
})