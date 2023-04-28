
export default{
    name: 'diario',
    component: () => import(/* webpackChunkName: "diario" */'@/modulos/diario/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "diario-no-entrey" */'@/modulos/diario/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "diario-no-entrey" */'@/modulos/diario/views/EntryView.vue'),
        }
    ]
}