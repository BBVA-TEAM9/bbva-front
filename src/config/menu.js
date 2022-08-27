const menu = [
    {
        name: 'dashboard',
        parent: null,
        child: null,
        icon: 'tachometer-alt',
        permission_code: null
    },
    {
        name: 'checkups',
        parent: true,
        child: [
            { name: 'distribution' },
            { name: 'project-mass' },
            { name: 'distribution-weighted' },
            { name: 'shopping-share' },
            { name: 'visibility' },
            { name: 'purchase' },
            { name: 'valued-purchase' },
            { name: 'price-average-moda' },
            { name: 'coexistence' },
            { name: 'multi-coexistence' },
            { name: 'summary-distribution' },
            { name: 'histogram-prices' },
            { name: 'histogram-prices-register' },
            { name: 'overlay-marks' },
            { name: 'breadth-sku-brands' }
        ],
        icon: 'folder',
        permission_code: 'VIEW_MOD_CHEQUEO_REPORT'
    },
    {
        name: 'reports',
        parent: true,
        child: [
            { name: 'vta-val-inv' },
            { name: 'dn-ssn-dp' },
            { name: 'prices' }
        ],
        icon: 'folder',
        permission_code: 'VIEW_MOD_AUDIT_REPORT'
    },

    {
        name: 'reports-internal',
        parent: true,
        child: [
            { name: 'vta-val-inv-internal' },
            { name: 'dn-ssn-dp-internal' },
            { name: 'prices-internal' }
        ],
        icon: 'chart-line',
        permission_code: 'VIEW_MOD_AUDIT_REPORT_INTERNAL'
    },
    {
        name: 'administration',
        parent: true,
        child: [
            { name: 'customer' }
        ],
        icon: 'folder',
        permission_code: 'VIEW_MOD_ADM'
    }
    /*
    {
        name:'surveys',
        parent:true,
        child:[
            { name:'survey-work-order' },
            { name:'survey-survey' },
            { name:'survey-sell-point'},
            { name:'survey-pollster' },
            { name:'survey-depuration'}
        ],
        icon:'poll'
    },
    {
        name:'maintenance',
        parent:true,
        child:[
            { name:'sell-points' },
        ],
        icon:'poll'
    } */
];

export default menu;