"use strict";(self.webpackChunkbcii=self.webpackChunkbcii||[]).push([[3375,6403],{9701:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,i,o){if(t.language===a){var r=t.tokenStack=[];t.code=t.code.replace(i,(function(e){if("function"===typeof o&&!o(e))return e;for(var i,s=r.length;-1!==t.code.indexOf(i=n(a,s));)++s;return r[s]=e,i})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var i=0,o=Object.keys(t.tokenStack);!function r(s){for(var u=0;u<s.length&&!(i>=o.length);u++){var l=s[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var g=o[i],c=t.tokenStack[g],p="string"===typeof l?l:l.content,d=n(a,g),f=p.indexOf(d);if(f>-1){++i;var k=p.substring(0,f),b=new e.Token(a,e.tokenize(c,t.grammar),"language-"+a,c),m=p.substring(f+d.length),h=[];k&&h.push.apply(h,r([k])),h.push(b),m&&h.push.apply(h,r([m])),"string"===typeof l?s.splice.apply(s,[u,1].concat(h)):l.content=h}}else l.content&&r(l.content)}return s}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]},8774:(e,n,t)=>{var a=t(9701);function i(e){e.register(a),e.languages.twig={comment:/^\{#[\s\S]*?#\}$/,"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/},e.hooks.add("before-tokenize",(function(n){if("twig"===n.language){e.languages["markup-templating"].buildPlaceholders(n,"twig",/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g)}})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"twig")}))}e.exports=i,i.displayName="twig",i.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_twig.452d80ff.chunk.js.map