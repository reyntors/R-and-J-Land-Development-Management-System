export default{

    namespaced: true,
    state(){
        return{
            listInquiries:[
                {
                    id: 1,
                    name: "Karl Borromeo",
                    email: "lrakborromeo@gmail.com",
                    subject: "Submitted BIR TIN Request Form",
                    message: "w fd asf ser fkarr ahhaa rewq fd asf ser fkarr ahhaa rewq vvur w fd asf ser fkarrw fd asf ser fkarr",
                    date: '2023-10-3'
                  },
                  {
                    id: 2,
                    name: "Reynard Torculas",
                    email: "reyntorsTorks@gmail.com",
                    subject: "Ruequest Reservation",
                    message: "fsdaf we af ewr w fd asf ser fkarr ahhaa rewq ",
                    date: '2023-10-1'
                  },
                  {
                    id: 3,
                    name: "Jhaerix Borromeo",
                    email: "borromeoJhaerix@gmail.com",
                    subject: "Inquiry",
                    message: "hello po I am interfdfdfs",
                    date: '2023-9-30'
                  },
            ]
        }
    },

    mutations:{

    },

    actions: {

    },

    getters: {
        listInquiriesGetter(state){
            return state.listInquiries
        }
    }
}