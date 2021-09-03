amis.define('docs/zh-CN/components/image.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Image 图片",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Image 图片",
    "icon": null,
    "order": 52,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": {\n        \"type\": \"image\",\n        \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n    }\n}\n</script></div><div class=\"markdown-body\">\n<p>也可以配置<code>name</code>属性关联上下文数据</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"data\": {\n        \"imageUrl\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n    },\n    \"body\": {\n        \"type\": \"image\",\n        \"name\": \"imageUrl\"\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E6%A0%87%E9%A2%98%E5%92%8C%E8%AF%B4%E6%98%8E\" href=\"#%E9%85%8D%E7%BD%AE%E6%A0%87%E9%A2%98%E5%92%8C%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置标题和说明</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": {\n        \"type\": \"image\",\n        \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n        \"title\": \"这是标题\",\n        \"imageCaption\": \"这是一段说明\"\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E7%BC%A9%E7%95%A5%E5%9B%BE\" href=\"#%E9%85%8D%E7%BD%AE%E7%BC%A9%E7%95%A5%E5%9B%BE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置缩略图</h2><h3><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E6%A8%A1%E5%BC%8F\" href=\"#%E6%98%BE%E7%A4%BA%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示模式</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"mode\": \"horizontal\",\n    \"data\": {\n        \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n    },\n    \"body\": [\n        {\n            \"type\": \"static-image\",\n            \"name\": \"image\",\n            \"label\": \"宽度占满\",\n            \"thumbMode\": \"w-full\"\n        },\n        {\n            \"type\": \"static-image\",\n            \"name\": \"image\",\n            \"label\": \"高度占满\",\n            \"thumbMode\": \"h-full\"\n        },\n        {\n            \"type\": \"static-image\",\n            \"name\": \"image\",\n            \"label\": \"颜色\",\n            \"label\": \"默认\",\n            \"thumbMode\": \"contain\"\n        },\n        {\n            \"type\": \"static-image\",\n            \"name\": \"image\",\n            \"label\": \"覆盖\",\n            \"thumbMode\": \"cover\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E6%AF%94%E4%BE%8B\" href=\"#%E6%98%BE%E7%A4%BA%E6%AF%94%E4%BE%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示比例</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"mode\": \"horizontal\",\n    \"data\": {\n        \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n    },\n    \"body\": [\n        {\n            \"type\": \"static-image\",\n            \"name\": \"image\",\n            \"label\": \"1比1\",\n            \"thumbRatio\": \"1:1\",\n            \"thumbMode\": \"cover\"\n        },\n        {\n            \"type\": \"static-image\",\n            \"name\": \"image\",\n            \"label\": \"4比3\",\n            \"thumbRatio\": \"4:3\",\n            \"thumbMode\": \"cover\"\n        },\n        {\n            \"type\": \"static-image\",\n            \"name\": \"image\",\n            \"label\": \"颜色\",\n            \"label\": \"16比9\",\n            \"thumbRatio\": \"16:9\",\n            \"thumbMode\": \"cover\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%94%BE%E5%A4%A7%E5%8A%9F%E8%83%BD\" href=\"#%E6%94%BE%E5%A4%A7%E5%8A%9F%E8%83%BD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>放大功能</h2><p>配置<code>&quot;enlargeAble&quot;: true</code>，鼠标移动到图片上会显示可点击图标，点击可放大展示</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": {\n        \"type\": \"image\",\n        \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n        \"enlargeAble\": true\n    }\n}\n</script></div><div class=\"markdown-body\">\n<p>可以配置<code>originalSrc</code>，来指定原图资源地址，作为放大预览的图片地址</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": {\n        \"type\": \"image\",\n        \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n        \"originalSrc\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n        \"enlargeAble\": true\n    }\n}\n</script></div><div class=\"markdown-body\">\n<p><code>enlargeTitle</code>和<code>enlargeCaption</code>可以配置放大预览中的标题和描述</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": {\n        \"type\": \"image\",\n        \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n        \"originalSrc\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\",\n        \"enlargeAble\": true,\n        \"enlargeTitle\": \"这是一个标题\",\n        \"enlargeCaption\": \"这是一段描述\"\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%AE%BD\" href=\"#%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%AE%BD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>设置高宽</h2><p>通过 <code>width</code> 和 <code>height</code> 可以设置缩率图显示的高宽</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": {\n        \"type\": \"image\",\n        \"width\": \"200px\",\n        \"height\": \"200px\",\n        \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_400,l_1,f_jpg,q_80\"\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8E%9F%E5%9B%BE%E6%A8%A1%E5%BC%8F\" href=\"#%E5%8E%9F%E5%9B%BE%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>原图模式</h2><blockquote>\n<p>since 1.2.3</p>\n</blockquote>\n<p>默认图片为缩略图模式，可以通过配置 imageMode: &quot;original&quot; 修改为原图模式，原图模式为块状展示，宽度尽可能占满。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"data\": {\n        \"imageUrl\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\"\n    },\n    \"body\": {\n        \"type\": \"image\",\n        \"imageMode\": \"original\",\n        \"name\": \"imageUrl\",\n        \"title\": \"这是标题\",\n        \"imageCaption\": \"这是一段说明\"\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E7%94%A8%E4%BD%9C-field-%E6%97%B6\" href=\"#%E7%94%A8%E4%BD%9C-field-%E6%97%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>用作 Field 时</h2><p>当用在 Table 的列配置 Column、List 的内容、Card 卡片的内容和表单的 Static-XXX 中时，可以设置<code>name</code>属性，映射同名变量</p>\n<h3><a class=\"anchor\" name=\"table-%E4%B8%AD%E7%9A%84%E5%88%97%E7%B1%BB%E5%9E%8B\" href=\"#table-%E4%B8%AD%E7%9A%84%E5%88%97%E7%B1%BB%E5%9E%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Table 中的列类型</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"table\",\n    \"data\": {\n        \"items\": [\n            {\n                \"id\": \"1\",\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n            },\n            {\n                \"id\": \"2\",\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n            },\n            {\n                \"id\": \"3\",\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n            }\n        ]\n    },\n    \"columns\": [\n        {\n            \"name\": \"id\",\n            \"label\": \"Id\"\n        },\n\n        {\n            \"name\": \"image\",\n            \"label\": \"图片\",\n            \"type\": \"image\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>List 的内容、Card 卡片的内容配置同上</p>\n<h3><a class=\"anchor\" name=\"form-%E4%B8%AD%E9%9D%99%E6%80%81%E5%B1%95%E7%A4%BA\" href=\"#form-%E4%B8%AD%E9%9D%99%E6%80%81%E5%B1%95%E7%A4%BA\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Form 中静态展示</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"data\": {\n        \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n    },\n    \"body\": [\n        {\n            \"type\": \"static-image\",\n            \"name\": \"image\",\n            \"label\": \"颜色\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td></td>\n<td>如果在 Table、Card 和 List 中，为<code>&quot;color&quot;</code>；在 Form 中用作静态展示，为<code>&quot;static-color&quot;</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 CSS 类名</td>\n</tr>\n<tr>\n<td>imageClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片 CSS 类名</td>\n</tr>\n<tr>\n<td>thumbClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片缩率图 CSS 类名</td>\n</tr>\n<tr>\n<td>height</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片缩率高度</td>\n</tr>\n<tr>\n<td>width</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片缩率宽度</td>\n</tr>\n<tr>\n<td>title</td>\n<td><code>string</code></td>\n<td></td>\n<td>标题</td>\n</tr>\n<tr>\n<td>imageCaption</td>\n<td><code>string</code></td>\n<td></td>\n<td>描述</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td><code>string</code></td>\n<td></td>\n<td>占位文本</td>\n</tr>\n<tr>\n<td>defaultImage</td>\n<td><code>string</code></td>\n<td></td>\n<td>默认显示的图片地址</td>\n</tr>\n<tr>\n<td>src</td>\n<td><code>string</code></td>\n<td></td>\n<td>缩略图地址</td>\n</tr>\n<tr>\n<td>originalSrc</td>\n<td><code>string</code></td>\n<td></td>\n<td>原图地址</td>\n</tr>\n<tr>\n<td>enlargeAble</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>支持放大预览</td>\n</tr>\n<tr>\n<td>enlargeTitle</td>\n<td><code>string</code></td>\n<td></td>\n<td>放大预览的标题</td>\n</tr>\n<tr>\n<td>enlargeCaption</td>\n<td><code>string</code></td>\n<td></td>\n<td>放大预览的描述</td>\n</tr>\n<tr>\n<td>thumbMode</td>\n<td><code>string</code></td>\n<td><code>contain</code></td>\n<td>预览图模式，可选：<code>&#39;w-full&#39;</code>, <code>&#39;h-full&#39;</code>, <code>&#39;contain&#39;</code>, <code>&#39;cover&#39;</code></td>\n</tr>\n<tr>\n<td>thumbRatio</td>\n<td><code>string</code></td>\n<td><code>1:1</code></td>\n<td>预览图比例，可选：<code>&#39;1:1&#39;</code>, <code>&#39;4:3&#39;</code>, <code>&#39;16:9&#39;</code></td>\n</tr>\n<tr>\n<td>imageMode</td>\n<td><code>string</code></td>\n<td><code>thumb</code></td>\n<td>图片展示模式，可选：<code>&#39;thumb&#39;</code>, <code>&#39;original&#39;</code> 即：缩略图模式 或者 原图模式</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "配置标题和说明",
          "fragment": "%E9%85%8D%E7%BD%AE%E6%A0%87%E9%A2%98%E5%92%8C%E8%AF%B4%E6%98%8E",
          "fullPath": "#%E9%85%8D%E7%BD%AE%E6%A0%87%E9%A2%98%E5%92%8C%E8%AF%B4%E6%98%8E",
          "level": 2
        },
        {
          "label": "配置缩略图",
          "fragment": "%E9%85%8D%E7%BD%AE%E7%BC%A9%E7%95%A5%E5%9B%BE",
          "fullPath": "#%E9%85%8D%E7%BD%AE%E7%BC%A9%E7%95%A5%E5%9B%BE",
          "level": 2,
          "children": [
            {
              "label": "显示模式",
              "fragment": "%E6%98%BE%E7%A4%BA%E6%A8%A1%E5%BC%8F",
              "fullPath": "#%E6%98%BE%E7%A4%BA%E6%A8%A1%E5%BC%8F",
              "level": 3
            },
            {
              "label": "显示比例",
              "fragment": "%E6%98%BE%E7%A4%BA%E6%AF%94%E4%BE%8B",
              "fullPath": "#%E6%98%BE%E7%A4%BA%E6%AF%94%E4%BE%8B",
              "level": 3
            }
          ]
        },
        {
          "label": "放大功能",
          "fragment": "%E6%94%BE%E5%A4%A7%E5%8A%9F%E8%83%BD",
          "fullPath": "#%E6%94%BE%E5%A4%A7%E5%8A%9F%E8%83%BD",
          "level": 2
        },
        {
          "label": "设置高宽",
          "fragment": "%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%AE%BD",
          "fullPath": "#%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%AE%BD",
          "level": 2
        },
        {
          "label": "原图模式",
          "fragment": "%E5%8E%9F%E5%9B%BE%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E5%8E%9F%E5%9B%BE%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "用作 Field 时",
          "fragment": "%E7%94%A8%E4%BD%9C-field-%E6%97%B6",
          "fullPath": "#%E7%94%A8%E4%BD%9C-field-%E6%97%B6",
          "level": 2,
          "children": [
            {
              "label": "Table 中的列类型",
              "fragment": "table-%E4%B8%AD%E7%9A%84%E5%88%97%E7%B1%BB%E5%9E%8B",
              "fullPath": "#table-%E4%B8%AD%E7%9A%84%E5%88%97%E7%B1%BB%E5%9E%8B",
              "level": 3
            },
            {
              "label": "Form 中静态展示",
              "fragment": "form-%E4%B8%AD%E9%9D%99%E6%80%81%E5%B1%95%E7%A4%BA",
              "fullPath": "#form-%E4%B8%AD%E9%9D%99%E6%80%81%E5%B1%95%E7%A4%BA",
              "level": 3
            }
          ]
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
