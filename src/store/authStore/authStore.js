
import * as Auth from '@/APIs/AUTH/AuthAPI.js'

export default {
    namespaced: true,
    
    state(){
        return{
            role: null,
            tokenID: null,
            userId: null,
            profilePic: null,
            fullname: null,
            baseNumericTime: null,
            autoLogoutNow: false,

            openLoginForm: false,
        }
    },
    mutations:{
        autoLogoutNow(state,bool){
            state.autoLogoutNow = bool
        },
        toggleLoginForm(state,bool){
            state.openLoginForm = bool
        },
        addStoreState(state,responseData){
            state.role = responseData.roles
            state.tokenID = responseData.tokenID
            state.userId = responseData.userId
            state.profilePic = responseData.profilePic
            state.fullname = responseData.fullname
            state.baseNumericTime = responseData.baseNumericTime
        },
        eraseStoreState(state){
            state.role = null;
            state.tokenID = null
            state.userId = null
            state.profilePic = null
            state.fullname = null
            state.baseNumericTime = null
        },
        addLocalStorage(_,responseData){
            console.log(responseData)
            localStorage.setItem('user',responseData.roles)
            localStorage.setItem('token',responseData.tokenID)
            localStorage.setItem('userId',responseData.userId)
            localStorage.setItem('profilePic',responseData.profilePic)
            localStorage.setItem('fullname',responseData.fullname)
            localStorage.setItem('baseNumericTime',responseData.baseNumericTime)
        },
        getLocalStorage(state){
            state.role = localStorage.getItem('user')
            state.tokenID = localStorage.getItem('token')
            state.userId = localStorage.getItem('userId')
            state.profilePic = localStorage.getItem('profilePic')
            state.fullname = localStorage.getItem('fullname')
            state.baseNumericTime = localStorage.getItem('baseNumericTime')
        },
        eraseLocalStorage(){
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('profilePic')
            localStorage.removeItem('fullname')
            localStorage.removeItem('baseNumericTime')
        },

        updateProfilePictureLocal(state,file){
            const blob = new Blob([file],{ type: file.type })
            const url = URL.createObjectURL(blob)
            localStorage.setItem('profilePic',url)
            state.profilePic = url
        }

    },
    actions:{
        async monitorTokenSpan(context){
            console.log('monitoring the token time span')
            const isLoggedIn = context.getters['authGetter']    //check if the user is logged in
            if(isLoggedIn){
                const timeNow = new Date()      //get the date now
                const numericTimeNow = timeNow.getTime()        //convert the date now into numeric
                const baseTime = context.getters['baseNumericTimeGetter']   //get the numeric time that saved on the browser when the time the user logged in
                const diff = numericTimeNow - baseTime      //get the difference of both values the time now and thes time logged in
                const minuteDiff = diff/60000   //convert into minute the difference result
                if(minuteDiff>=5){      //auto log out when the exceeds 5 minute
                    console.log("already exceeds one minute")
                    // context.commit('autoLogoutNow',true)    //show the auto logout animation
                    // await new Promise(resolve => setTimeout(resolve,1500))
                    context.commit('eraseStoreState')   //delete the state of the app
                    context.commit('eraseLocalStorage') //delete the local storage of the browser
                    context.commit('autoLogoutNow',true)   //toggle the autologout variable when the page is going to mount
                    context.commit('toggleLoginForm',true)  //open login form
                    
                }else{
                    console.log('all goods keep going!!')
                }                
            }else{
                console.log('the user is not logged in')
            }

        },
        //LOGIN REQUEST
        async login(context, credentials){
            console.log('login clicked')
            try{
               const responseData = await Auth.login(credentials);

               const timeNow = new Date()   //get the time now when log in
               const baseNumericTime = timeNow.getTime()    //convert into numeric the time now
               console.log(baseNumericTime)

                const Data = {
                    tokenID: responseData.data.token,
                    roles: responseData.data.roles,
                    userId: responseData.data.userId,
                    profilePic: responseData.data.profilePicture.url,
                    fullname: responseData.data.fullname,
                    baseNumericTime : baseNumericTime,
                }


                context.commit('addLocalStorage',Data)
                context.commit('addStoreState',Data)
                context.commit('autoLogoutNow',false)

                return responseData;

            }catch(error){
                console.log(error)
                throw error
            }
  
        },

        //SIGNUP REQUEST
        async signup(context,credentials){
            console.log('signup clicked')
            console.log(credentials)
            try{
                //change this to HTTP REQUEST
                const responseData = await Auth.signUp(credentials);

                const Data = {
                    
                    tokenID: responseData.data.token,
                    roles: responseData.data.roles,
                    userId: responseData.data.userId
                }

                context.commit('addLocalStorage',Data)
                context.commit('addStoreState',Data)

                return responseData;

            }catch(error){
                console.log(error)
                throw error
            }
  
        }
    },
    getters: {
        openLoginFormGetter(state){
            return state.openLoginForm
        },
        authGetter(state){
            // console.log(state.role)
            if(state.role && state.tokenID){
                return true
            }else{
                return false
            }
        },
        getTokenID(state){
            return state.tokenID
        },
        authorizationRoleGuest(state){
            if(state.role && state.tokenID){
                if(state.role === 'customer' || state.role === 'realtor'){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        },
        authorizationRoleStaff(state){
            if(state.role && state.tokenID){
                if(state.role === 'staff'){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        },
        authorizationRoleAdmin(state){
            if(state.role && state.tokenID){
                if(state.role === 'management'){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        },
        authorizationPersonnel(state){
            if(state.role && state.tokenID){
                if(state.role !== 'customer' && state.role !== 'realtor'){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        },
        authorizationPersonnelTEXT(state){
            if(state.role && state.tokenID){
                if(state.role === 'staff'){
                    return 'staff'
                }else if(state.role === 'management'){
                    return 'admin'
                }
            }else{
                return 'SOMETHING UNKNONW'
            }
        },

        authorizationRealtor(state){
            if(state.role && state.tokenID){
                if(state.role === 'realtor'){
                    return true
                }else{
                    return false
                }
            }
        },

        getRoleType(state){
            if(state.role && state.tokenID){
                console.log(state.role)
                return state.role
            }else{
                return undefined
            }
        },

        getUserId(state){
            if(state.userId){
                return state.userId
            }else{
                return null
            }
        },

        profilePicGetter(state){
            if(state.profilePic){
                return state.profilePic
            }else{
                return 'hahahah'
            }
        },

        fullnameGetter(state){
            return state.fullname
        },

        baseNumericTimeGetter(state){
            return state.baseNumericTime
        },

        autoLogoutNowGetter(state){
            return state.autoLogoutNow
        }
    }

}