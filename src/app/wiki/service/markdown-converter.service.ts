import * as Markdown from 'markdown-it'
import * as MarkdownTable from 'markdown-it-multimd-table'
import * as hljs from 'highlight.js'
import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})
export class MarkdownConverterService{
  private converter = new Markdown({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
                 hljs.highlight(lang, str, true).value +
                 '</code></pre>';
        } catch (__) {}
      }
      return '<pre class="hljs"><code>' + this.converter.utils.escapeHtml(str) + '</code></pre>';
    },
    breaks:true,
  }).use(MarkdownTable);
  render = (text) => this.converter.render(text);
  Examples = {
    Table : () => `| Sintaxe      | Descrição | Texto teste |
| ---         |  ----  |        ---|
| Cabeçalho    | Título    | Aqui está   |
| Parágrafo    | Texto     | E mais      |`,

    Headers : () => `# H1 header
## H2 header
### H3 header
#### H4 header
##### H5 header
###### H6 header`,
    Bold : () => "**Bold**\n__Bold__",
    Italic : () => "*italic*\n_italic_",
    BoldItalic : () => "***BoldItalic***\n___Emphasis Italic___",
    Sub: () => "H<sub>2</sub>O",
    Strike : () => "~~Strike~~",
    Underline : () => "<u>underline</u>",
    Link : () => `[Links](http://localhost/)

[Reference link][id/name] 

[id/name]: http://link-url/`,
    Comment : () => "[//]: # (Comment here)",
    Code : () => `ts
import { MyNumber } from 'Me';

export class Comparar {
   comparar : (value) => 10 >= value
   test(){
	console.log("Hello world!");
   }
}
var value = 4;
return new Comparar().comparar(value)`,
    Quote : () => `> this is a quote
> this is a quote
> this is a quote`,
    Image : () => "![](https://pandao.github.io/editor.md/examples/images/4.jpg)",
    Lists : () => `### Lists

#### Unordered list (-)

- Item A
- Item B
- Item C
      
#### Unordered list (*)

* Item A
* Item B
* Item C

#### Unordered list (plus sign and nested)
                
+ Item A
+ Item B
    + Item B 1
    + Item B 2
    + Item B 3
+ Item C
    * Item C 1
    * Item C 2
    * Item C 3

#### Ordered list
                
1. Item A
2. Item B
3. Item C`
  }
}
