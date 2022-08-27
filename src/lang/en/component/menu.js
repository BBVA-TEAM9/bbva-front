const menuLang = [
    {
        name:'dashboard',
        label:'Dashboard'
    },
    {
        name:'reports',
        label:'Reportes',
        child:[
            {
                name:'presence',
                label:'VTA / INV / VAL / DROT'
            },
            {
                name:'dn-ssn-dp',
                label:'DN / SSN'
            },
            {
                name:'purchase-presence',
                label:'% Distribución Ponderada'
            },
            {
                name:'purchase-weighted-share',
                label:'Share de Compras'
            },
            {
                name:'visibility',
                label:'% Visibilidad'
            },
            {
                name:'purchase-all',
                label:'% Compra'
            },
            {
                name:'purchase-valued',
                label:'% Compra Valorizada'
            },
            {
                name:'prices',
                label:'Precios Promedios y Moda'
            },
            {
                name:'coexistence',
                label:'Convivencias'
            },
            {
                name:'multicoexistence',
                label:'Multi Convivencias'
            },
            {
                name:'resume-presence',
                label:'Resumen Distribución'
            },
            {
                name:'histogram',
                label:'Histograma de precios'
            },
            {
                name:'amplitude-depth',
                label:'Sobreposición de marcas'
            },
            {
                name:'amplitude-sku',
                label:'Amplitud de SKU/MARCAS'
            }
        ]
    },
    {
        name:'logout',
        label:'Cerrar Sesión'
    }
]

export default menuLang