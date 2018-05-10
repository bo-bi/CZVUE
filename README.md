* mint-ui
  - 饿了么出品，PC端: element-ui,移动端: mint-ui
  - 引入mint-ui
    import MintUi from 'mint-ui';
    引入样式
    import 'mint-ui/lib/style.css';
  - 注意:
        - 如果是全部安装的方式
           + 1.在template中可以直接使用组件标签
           + 2.针对这种用法： Toast('提示声明'); 则需要在script中声明，也就是说按需引入
