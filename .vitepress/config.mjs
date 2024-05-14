import { defineConfig } from 'vitepress'
//import { set_sidebar } from '../utils/set_sidebar.mjs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ver-blog/',
  title: "VernonLiu技术站",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '技能储备', items:[
        {text:'Vue',link:''}
      ] },
      { text: '扩展识海', link:''}
    ],
    sidebar:false,
    aside: "left", 
    lastUpdated: true,
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    
    search:{
        provider:'local',
        options:{
          translations:{
            button:{
              buttonText:"搜文档",
              buttonAriaLabel:"搜索文法"
            },
            modal:{
              noResultsText:"无法找到相关结果",
              resetButtonTitle:"清除查询条件",
              footer:{
                selectText:"选择",
                navigateText:"切换"
              }
            }
      
          }
        }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nonds' }
    ],
    footer:{
      copyright:"Copyright@ 2024 Vernon Liu"
    }
  }
})
