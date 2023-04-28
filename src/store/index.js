import { createStore } from "vuex";

import diarioModule from '../modulos/diario/store/diario'

const store = createStore({
    modules: {
        diarioModule
    }
})

export default store