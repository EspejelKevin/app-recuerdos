import { createStore } from 'vuex'

export default createStore({
    state(){
        return {
            memories:[
                {id:1, image:"https://dam.ngenespanol.com/wp-content/uploads/2021/04/GettyImages-1208124099.jpg", title:"Viaje a japón", description:"Fue en el año 2017..."},
                {id:2, image:"https://imagenes.elpais.com/resizer/rHfSI7jDBpMohPbpUix7XV_6s2w=/414x311/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ASDIDUL2HBA7FAEDVF66UNCDNY.jpg", title:"Tercera división futbol", description:"Equipo profesional tolteca en Tula de Allende"},
                {id:3, image:"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/04/programacion-1917283.jpg", title:"Mi primer trabajo como programador", description:"Me animé a buscar trabajo en distintas plataformas"},
                {id:4, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png", title:"Mi primer amor y único", description:"Pues...sigo enamorado :)"}
            ]
        }
    },
    mutations: {
        addMemory(state, memoryData){
            state.memories.unshift(memoryData)
        }
    },
    actions: {
        addMemory(context, memoryData){
            context.commit("addMemory", memoryData)
        }
    },
    getters: {
        memories(state){
            return state.memories
        },
        memory: (state) => (id) => {
            return state.memories.find(memory => memory.id == id)
        }
    }
})