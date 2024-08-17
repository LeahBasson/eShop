import { createStore } from 'vuex'
import axios from 'axios'
import { toast }  from 'vue3-toastify'
// import { applyToken } from 'service/AuthenticateUser.js'
// import { useCookies } from 'vue3-cookies'
import 'vue3-toastify/dist/index.css'

// const { cookies } = useCookies()
const apiURL = 'https://eshop-in2f.onrender.com/'
export default createStore({
  state: {
    users: null,
    user: null,
    products : null,
    product : null,
    recentProducts: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) { 
      state.users = value
    },
    setUser(state, value) { 
      state.user = value
    },
    setProduct(state, value) { 
      state.product = value
    },
    setProducts(state, value) { 
      state.products = value
    },
    setRecentProducts(state, value) { 
      state.recentProducts = value
    }
  },
  actions: {
    async recentProducts(context) {
      try {
        //First option
        // const  { results, msg } = await (await axios.get(`${apiURL} product/recent`)).data  //sending a response
        //Second option
        const res = await axios.get(`${apiURL}product/recent`) 
        const {results, msg} = await res.data
        if(results) {
          context.commit('setRecentProducts', results)
        } else {
          toast.error(`${ msg }`)  , {  //its going to be success if the request was successful. Its style
            autoClose: 2000
          }  //Used to display an error message
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
      }
    },
    async setProducts(context) {
      try {
        const res = await axios.get(`${apiURL}product`) 
        const {results, msg} = await res.data
        if(results) {
          context.commit('setProducts', results)
        } else {
          toast.error(`${ msg }`)  , {  //its going to be success if the request was successful. Its style
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          }  // Toast is used to display an error message
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
      }
    },
    async fetchProducts(context, id) {
      try {
        const { result , msg} = await (await axios.get(`${apiURL}product/${id}`)).data
        if(result) {
          context.commit('setProduct', result)
        } else {
          toast.error(`${ msg }`)  , {  //its going to be success if the request was successful. Its style
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          }  // Toast is used to display an error message
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
      }
    }  
  },
  modules: {
  }
})
