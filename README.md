* 场景: 一般情况下`<router-view></router-view>`并不是一下整个渲染一块，而是渲染很多块
     - 预留多个`<router-view></router-view>`坑，不同的坑坑名name不一样
     - 路由配置规则上,components为复数，{name: 组件对象}，若无name，则默认为default
     - 对比之前，渲染一个，为component:组件对象