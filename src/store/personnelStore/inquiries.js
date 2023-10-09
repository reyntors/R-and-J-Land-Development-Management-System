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
                    date: '2023-10-3',
                    read: false,
                  },
                  {
                    id: 2,
                    name: "Reynard Torculas",
                    email: "reyntorsTorks@gmail.com",
                    subject: "Ruequest Reservation",
                    message: "fsdaf we af ewr w fd asf ser fkarr ahhaa rewq ",
                    date: '2023-10-1',
                    read: false,
                  },
                  {
                    id: 3,
                    name: "Jhaerix Borromeo",
                    email: "borromeoJhaerix@gmail.com",
                    subject: "Inquiry",
                    message: "hello po I am interfdfdfs",
                    date: '2023-9-30',
                    read: false,
                  },
                  {
                    id: 4,
                    name: "sample name",
                    email: "sampleName@gmail.com",
                    subject: "Inquiry",
                    message: "fdsaf fdsaf saf sadf sadfsad fa",
                    date: '2023-9-29',
                    read: false,
                  },
                  {
                    id: 5,
                    name: "sample name1",
                    email: "sampleNa2312me@gmail.com",
                    subject: "Inquiry",
                    message: "fdsaf fdsaf saf sadf sadfsad fa",
                    date: '2023-9-22',
                    read: true,
                  },
                  {
                    id: 6,
                    name: "Sfffdsfample name",
                    email: "sampleName@gmail.com",
                    subject: "Inquiry",
                    message: "fdsaf fdsaf saf sadf sadfsad fa",
                    date: '2023-9-20',
                    read: true,
                  },
            ]
        }
    },

    mutations:{
        setInquiriesList(){
            //
        },
        delInquiry(state,id){
            console.log('js',id)
            const index = state.listInquiries.findIndex(item => item.id === id)
            console.log(index)
            state.listInquiries.splice(index,1)
        },
        markInquiry(state,id){
            const index = state.listInquiries.findIndex(item => item.id === id)
            state.listInquiries[index].read = !state.listInquiries[index].read
        }
    },

    actions: {
        getInquiriesList(){
            //
        }

    },

    getters: {
        listInquiriesGetter(state){
            return state.listInquiries
        }
    }
}