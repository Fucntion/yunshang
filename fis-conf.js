// 加 md5
fis.match('*.{js,css,png}', {
  useHash: true
});


fis.match('app.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
})

fis.media('qa').match('*', {
  deploy: fis.plugin('http-push', {
     receiver: 'http://ys.icloudinn.com/receiver.php',
    to: '.' // 注意这个是指的是测试机器的路径，而非本地机器
  })
})



