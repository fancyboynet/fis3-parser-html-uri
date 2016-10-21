module.exports = function (content, file, opt) {
  // 只对 html 类文件进行处理
  if (!file.isHtmlLike){
    return content;
  }
  // Buffer转换
  if(content instanceof Buffer){
    content = content.toString('utf-8');
  }
  var name = opt.name || '__uri';
  var lang = fis.compile.lang;
  return content.replace(new RegExp(name + '\\((.*?)\\)', 'ig'), function(all, value) {
    return lang.uri.wrap(value);
  });
};
