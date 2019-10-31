const html = require('html')
const markdown = require('markdown')
const fs = require('fs')

exports.exec = function(req, res){
  const mdFileList = ["appeal", "history"]
  const dir = "./public/"
  const upperTxt = fs.readFileSync("./public/template/apper-html.txt", {encoding:'utf-8'})
  const lowwerTxt = fs.readFileSync("./public/template/lower-html.txt", {encoding:'utf-8'})
  for (var i = 0; i < mdFileList.length; i++) {
    console.log("Input File:" + mdFileList[i])
    var contents = fs.readFileSync(dir + mdFileList[i] + ".md", {encoding:'utf-8'})
    var output = upperTxt + html.prettyPrint(markdown.markdown.toHTML(contents)) + lowwerTxt
    var outFile = mdFileList[i] + ".html"
    console.log("Outputing File: " + outFile)
    fs.writeFileSync(dir + outFile, output, "utf-8")
  }
  console.log("Completed.")
  res.send("Completed.")
}