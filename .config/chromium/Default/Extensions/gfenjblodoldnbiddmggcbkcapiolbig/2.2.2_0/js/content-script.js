// Generated by CoffeeScript 1.7.1
(function(){var e,t,n,r,i,s;r=["gaming.youtube.com"];for(i=0,s=r.length;i<s;i++){n=r[i];if(document.location.origin.search(n)>-1)return}e=function(e){var t,n,r,i,s,o,u,a,f,l,c,h;return o=null,h=null,localStorage.getItem("musixmatch-extension")||(localStorage.setItem("musixmatch-extension",!0),localStorage.setItem("yt-html5-player-modules::subtitlesModuleData::display-settings",'{"background":"#080808","backgroundOpacity":1,"charEdgeStyle":3,"color":"#ff0","fontFamily":4,"fontSizeIncrement":3,"textOpacity":1,"windowColor":"#080808","windowOpacity":0}'),localStorage.setItem("yt-html5-player-modules::subtitlesModuleData::module-enabled",!0)),document.addEventListener("DOMContentLoaded",function(){var e;return a(),e=window.onYouTubePlayerReady,window.onYouTubePlayerReady=function(t){s(t),t.addEventListener("onStateChange",function(e){if(e===3)return u(t)});if(e)return e.call(this,arguments)}}),t=function(e){if(e.ttsurl==null)return e.cc3_module="1",e.ttsurl=""+window.location.protocol+"//extension.musixmatch.com/?res="+l(e.video_id),i(e.video_id)},s=function(e){var n,r,i,s;r={},s=[];for(n in e){i=e[n];if(typeof i!="function")continue;r[n]=i,s.push(function(n){return e[n]=function(){return n==="stopVideo"&&(o=null),n.search(/cue|load/)>-1&&arguments[0].video_id!=null&&t(arguments[0]),r[n].apply(this,arguments)}}(n))}return s},u=function(e){var t;t=e.getVideoData();if(t.ttsurl==null&&o!==t.video_id)return o=t.video_id,e.loadVideoByPlayerVars(t)},a=function(){var e;return e=setInterval(function(){var n;if(window.ytplayer!=null)return clearInterval(e),n=window.ytplayer.load,window.ytplayer.load=function(){return t(window.ytplayer.config.args),o=window.ytplayer.config.args.video_id,n()},window.ytplayer.load()},1)},n=function(){var e,t;return e=document.createElement("span"),e.id="musixmatch-logo",e.innerHTML='<a target="_blank" href="https://www.musixmatch.com/?utm_source=YouTube&utm_medium=YTsmallDwnld&utm_campaign=Youtubedwnld">\n<img width="217" src="data:image/png;base64,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" />\n</a>',(t=document.getElementById("musixmatch-logo"))!=null&&t.remove(),document.getElementById("movie_player").appendChild(e)},r=function(e){var t;return t=document.createElement("iframe"),t.src=e.replace("http:",""),t.width=1,t.height=1,document.getElementById("content").appendChild(t)},i=function(t){var i;if(t===h)return;return h=t,i=new XMLHttpRequest,i.open("get",""+window.location.protocol+"//extension.musixmatch.com/t?res="+l(t),!0),i.onload=function(){var t;if(this.responseText!=="")return chrome.runtime.sendMessage(e,{page:document.location.pathname+document.location.search,title:document.title}),n(),r(this.responseText);(t=document.getElementById("musixmatch-logo"))!=null&&t.remove()},i.send()},f=function(e){var t,n,r;r="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t=0;while(t<e)r+=n.charAt(Math.floor(Math.random()*n.length)),t++;return r},l=function(e){var t,n,r,i;i="",n=0;while(n<e.length)t=e.charCodeAt(n)+13,r=Math.floor(Math.random()*3+1),i+=t+f(r),n++;return i},c=window.XMLHttpRequest.prototype.open,window.XMLHttpRequest.prototype.open=function(){return arguments[1]=arguments[1].replace("www.youtube.com/?res=","extension.musixmatch.com/?res="),c.apply(this,[].slice.call(arguments))}},t=document.createElement("script"),t.appendChild(document.createTextNode("("+e+")('"+chrome.runtime.id+"');")),(document.body||document.head||document.documentElement).appendChild(t)}).call(this);