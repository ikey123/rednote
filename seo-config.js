// 网站配置
const seoConfig = {
    enableSitemap: true,
    generateRobotsTxt: true,
    enableStructuredData: true,
    domain: 'rednote.download',
    priorityPages: {
        'index.html': 1.0,
        'download/ios.html': 0.9,
        'download/android.html': 0.9,
        'download/apk.html': 0.9,
        'guide/verification.html': 0.8
    },
    keywordGroups: {
        primary: [
            'rednote download',
            'RedNote app download',
            'xiaohongshu download'
        ],
        platform: [
            'RedNote iOS download',
            'RedNote Android download',
            'RedNote APK download',
            'RedNote web version'
        ],
        support: [
            'RedNote verification code',
            'RedNote login help',
            'RedNote download guide'
        ],
        locations: [
            'download RedNote US',
            'RedNote international version',
            'RedNote English app'
        ]
    },
    urlStructure: {
        download: '/download/{platform}',
        guide: '/guide/{topic}',
        help: '/help/{category}'
    }
};

// URL 规范化配置
const canonicalUrls = {
    base: 'https://rednote.download',
    alternates: {
        'en-US': 'https://rednote.download',
        'zh-CN': 'https://rednote.download/zh',
        'ja-JP': 'https://rednote.download/ja'
    }
};

// 内容分发配置
const contentDelivery = {
    imageOptimization: true,
    lazyLoading: true,
    cacheControl: {
        html: '3600',
        assets: '86400',
        images: '604800'
    }
}; 