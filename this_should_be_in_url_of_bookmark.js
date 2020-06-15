/*
Only copy the last complete javascript line as URL for a new bookmark
in your bookmark bar. Name it something as 'Fragment url'. Now on any
webpage you can select a piece of text (complete words) and press the
new bookmarklet to create a url. In Chrome (and in the near future in
other browsers) it will highlight, then scroll to your selected text.
Great for pointing somebody to a specific line. There's some caveats:
Selection should be of at least a few complete words, it shouldn't be
be ambiguous and it should be restricted to a single parts of the web
page. You can check it after the url is copied by affirming the 'open
in new tab' question. Contact me, antonklein69 at gmail, if you like.
*/
javascript:var u=document.URL+"#:~:text="+window.getSelection().toString();navigator.clipboard.writeText(u);if(confirm("Url with text fragment is copied. Open it in new tab?")){window.open(u,"_blank")};void(0);
