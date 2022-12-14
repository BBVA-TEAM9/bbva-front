const routes = [
    {
        name: 'dashboard',
        url: '/dashboard',
        localized:true
    },
    {
        name: 'vta-val-inv',
        url: '/reportes/auditoria/consumo-inventario-drot',
        localized:true
    },
    {
        name:'dn-ssn-dp',
        url:'/reportes/auditoria/distribucion-numerica-ponderada-sin-stock',
        localized:true
    },
    {
        name:'prices',
        url:'/reportes/auditoria/precio-moda-promedio',
        localized:true
    },
    {
        name: 'vta-val-inv-internal',
        url: '/reportes-interno/auditoria/consumo-inventario-drot',
        localized:true
    },
    {
        name:'dn-ssn-dp-internal',
        url:'/reportes-interno/auditoria/distribucion-numerica-ponderada-sin-stock',
        localized:true
    },
    {
        name:'prices-internal',
        url:'/reportes-interno/auditoria/precio-moda-promedio',
        localized:true
    },
    {
        name:'customer',
        url:'/administracion/customer',
        localized:true
    },
    {
        name:'distribution',
        url:'/chequeos/distribucion',
        localized:true
    },
    {
        name:'project-mass',
        url:'/chequeos/proyecto-mass',
        localized:true
    },
    {
        name:'distribution-weighted',
        url:'/chequeos/distribucion-ponderada',
        localized:true
    },
    {
        name:'shopping-share',
        url:'/chequeos/share-de-compras',
        localized:true
    },
    {
        name:'visibility',
        url:'/chequeos/visibilidad',
        localized:true
    },
    {
        name:'purchase',
        url:'/chequeos/compra',
        localized:true
    },
    {
        name:'valued-purchase',
        url:'/chequeos/compra-valorizada',
        localized:true
    },
    {
        name:'price-average-moda',
        url:'/chequeos/precio-promedio-moda',
        localized:true
    },
    {
        name:'coexistence',
        url:'/chequeos/convivencia',
        localized:true
    },
    {
        name:'multi-coexistence',
        url:'/chequeos/multi-convivencia',
        localized:true
    },
    {
        name:'summary-distribution',
        url:'/chequeos/resumen-distribucion',
        localized:true
    },
    {
        name:'histogram-prices',
        url:'/chequeos/histograma-precios',
        localized:true
    },
    {
        name:'histogram-prices-register',
        url:'/chequeos/histograma-precios-registro',
        localized:true
    },
    {
        name:'overlay-marks',
        url:'/chequeos/sobreposicion-marcas',
        localized:true
    },
    {
        name:'breadth-sku-brands',
        url:'/chequeos/amplitud-sku-marcas',
        localized:true
    },
];

export default routes;