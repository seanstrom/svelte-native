!function(){"use strict";const e=["client/chunk.97076eb5.js","client/chunk.d9a0ea20.js","client/chunk.659cf27e.js","client/chunk.f8d02012.js","client/chunk.c6c4f721.js","client/chunk.ae6fac0a.js","client/chunk.b96748b2.js","client/client.1dcee58e.js"].concat(["/service-worker-index.html","CNAME","favicon.png","fonts/fira-mono/fira-mono-latin-400.woff2","fonts/overpass/overpass-latin-100.woff2","fonts/overpass/overpass-latin-300.woff2","fonts/overpass/overpass-latin-400.woff2","fonts/overpass/overpass-latin-700.woff2","fonts/roboto/roboto-latin-400.woff2","fonts/roboto/roboto-latin-400italic.woff2","fonts/roboto/roboto-latin-500.woff2","fonts/roboto/roboto-latin-500italic.woff2","global.css","icons/arrow-right.svg","icons/check.svg","icons/chevron.svg","icons/collapse.svg","icons/download.svg","icons/dropdown.svg","icons/expand.svg","icons/flip.svg","icons/fork.svg","icons/link.svg","icons/save.svg","images/svelte-android-chrome-192.png","images/svelte-android-chrome-512.png","images/svelte-apple-touch-icon.png","images/svelte-mstile-150.png","images/twitter-card.png","logo.svg","logo2.svg","logos_combined.svg","manifest.json","media/app-store.png","media/google-play.png","media/nativescript-svelte-todo.gif","media/quick-start-screenshot.png","media/tns-success.png","media/todoapp/todo-add-item.png","media/todoapp/todo-basic-design-1.png","media/todoapp/todo-basic-design-2.png","prism.css"]),o=new Set(e);self.addEventListener("install",o=>{o.waitUntil(caches.open("cache1551704721254").then(o=>o.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const o of e)"cache1551704721254"!==o&&await caches.delete(o);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&o.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1551704721254").then(async o=>{try{const s=await fetch(e.request);return o.put(e.request,s.clone()),s}catch(s){const t=await o.match(e.request);if(t)return t;throw s}}))))})}();
