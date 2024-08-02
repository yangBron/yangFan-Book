// md文件配置
import mdItCustomAttrs from 'markdown-it-custom-attrs'

export default {
    image: {
        lazyLoading: false
    },

    lineNumbers: true,

    config: (md) => {
        md.use(mdItCustomAttrs, 'image', {
            'data-fancybox': "gallery"
        })
    }
}