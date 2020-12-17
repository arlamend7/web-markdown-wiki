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
  render = (text) => this.converter.render(text)
}
