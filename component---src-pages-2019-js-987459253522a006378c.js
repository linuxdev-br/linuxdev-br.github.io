(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{198:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(202),l=n(220),o=n(221),c=n(222),m=function(e){var t=e.children;return r.a.createElement(i.a,{theme:o.a},r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(c.a,null),t))},d=(n(223),n(38),n(224),n(225)),s=n.n(d),u=n(204),p=n(203),g=(n(207),i.c.nav.withConfig({displayName:"style__Nav",componentId:"c3bjat-0"})(["padding:1px 0;background-color:",";position:fixed;width:100%;top:0;z-index:1000;"],function(e){return e.theme.color.primary})),h=Object(i.c)(p.a).withConfig({displayName:"style__StyledContainer",componentId:"c3bjat-1"})(["display:flex;justify-content:space-between;align-items:center;"]),f=i.c.div.withConfig({displayName:"style__NavListWrapper",componentId:"c3bjat-2"})(["ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:row;",";}"],function(e){return e.mobile&&"\n        flex-direction: column;\n        margin-top: 1em;\n\n        > "+b+" {\n          margin: 0;\n          margin-top: 0.75em;\n        }\n      "}),b=i.c.li.withConfig({displayName:"style__NavItem",componentId:"c3bjat-3"})(["margin:0 0.75em;font-family:",";",";a{text-decoration:none;opacity:0.7;color:",";}&.active{a{opacity:1;}}"],function(e){return e.theme.font.secondary},function(e){return e.theme.font_size.small},function(e){return e.theme.color.black.regular}),w=i.c.div.withConfig({displayName:"style__MobileMenu",componentId:"c3bjat-4"})(["width:100%;background:",";"],function(e){return e.theme.color.primary}),v=i.c.div.withConfig({displayName:"style__Brand",componentId:"c3bjat-5"})(["font-family:",";",";"],function(e){return e.theme.font.primary},function(e){return e.theme.font_size.large}),E=i.c.div.withConfig({displayName:"style__Mobile",componentId:"c3bjat-6"})(["display:none;@media (max-width:","){display:block;}",""],function(e){return e.theme.screen.md},function(e){return e.hide&&"\n    display: block;\n\n    @media (max-width: "+e.theme.screen.md+") {\n      display: none;\n    }\n  "}),x=n(226),y=n(227),k=n.n(y);var C=[{name:"About",anchor:"#about"},{name:"Speakers",anchor:"#speakers"},{name:"Sponsors",anchor:"#sponsors"},{name:"FAQ",anchor:"#faq"},{name:"News",anchor:"news"},{name:"Jobs",anchor:"jobs"}],_=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={mobileMenuOpen:!1},t.toggleMobileMenu=function(){t.setState(function(e){return{mobileMenuOpen:!e.mobileMenuOpen}})},t.closeMobileMenu=function(){t.state.mobileMenuOpen&&t.setState({mobileMenuOpen:!1})},t.getNavList=function(e){var n=e.mobile,a=void 0!==n&&n;return r.a.createElement(f,{mobile:a},r.a.createElement(s.a,{items:C.map(function(e){return e.name.toLowerCase()}),currentClassName:"active",mobile:a,offset:-64},C.map(function(e){var n=e.name,a=e.anchor;return r.a.createElement(b,{key:n},r.a.createElement(u.a,{to:a,onClick:t.closeMobileMenu},n))})))},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.state.mobileMenuOpen;return r.a.createElement(g,this.props,r.a.createElement(h,null,r.a.createElement(v,null,r.a.createElement(u.a,{to:"/"},r.a.createElement("img",{src:k.a,alt:"linuxdev-br"}))),r.a.createElement(E,null,r.a.createElement("button",{onClick:this.toggleMobileMenu,style:{color:"black"}},r.a.createElement(x.a,null))),r.a.createElement(E,{hide:!0},this.getNavList({}))),r.a.createElement(E,null,e&&r.a.createElement(w,null,r.a.createElement(p.a,null,this.getNavList({mobile:!0})))))},a}(a.Component),S=(n(208),n(219)),I=n(206),j=n.n(I),N=n(205),A=n(209),P=n(210),M=n(211),L=n(212),F=n(213),z=n(214),T=[{icon:A.a,link:"https://github.com/linuxdev-br"},{icon:M.a,link:"https://twitter.com/linuxdevbr"},{icon:L.a,link:"https://instagram.com/linuxdevbr"},{icon:P.a,link:"https://www.youtube.com/c/linuxdevbr"},{icon:F.a,link:"https://t.me/linuxdevbr"},{icon:z.a,link:"mailto:contact@linuxdev-br.net"}],G=i.c.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1bm5dg8-0"})(["background-color:",";padding-top:96px;@media (max-width:","){padding-top:128px;}"],function(e){return e.theme.color.primary},function(e){return e.theme.screen.md}),O=i.c.div.withConfig({displayName:"Header__SocialIcons",componentId:"sc-1bm5dg8-1"})(["display:flex;img{margin:0 8px;width:24px;height:24px;}@media (max-width:","){margin-top:40px;}"],function(e){return e.theme.screen.sm}),R=i.c.figure.withConfig({displayName:"Header__Art",componentId:"sc-1bm5dg8-2"})(["width:100%;margin:0;> div{@media (max-width:","){width:100%;}}"],function(e){return e.theme.screen.md}),H=i.c.div.withConfig({displayName:"Header__Grid",componentId:"sc-1bm5dg8-3"})(["display:grid;grid-template-columns:1fr 1fr;align-items:center;grid-gap:64px;@media (max-width:","){grid-template-columns:1fr;grid-gap:80px;> ","{order:2;}}"],function(e){return e.theme.screen.md},R),W=i.c.div.withConfig({displayName:"Header__Text",componentId:"sc-1bm5dg8-4"})(["justify-self:center;@media (max-width:","){justify-self:start;}"],function(e){return e.theme.screen.md}),B=(Object(i.c)(N.a).withConfig({displayName:"Header__StyledExternalLink",componentId:"sc-1bm5dg8-5"})(["color:inherit;text-decoration:none;background-color:rgb(61,149,22);color:rgb(255,255,255);border-radius:5px;padding:10px 20px;box-shadow:rgb(31,102,0) 3px 4px;position:relative;top:1em;&:hover{color:",";}"],function(e){return e.theme.color.black.regular}),Object(i.c)(p.a).withConfig({displayName:"Header__StyledContainer",componentId:"sc-1bm5dg8-6"})(["display:flex;justify-content:space-between;align-items:center;@media (max-width:","){flex-direction:column;text-align:center;}"],function(e){return e.theme.screen.sm})),U=function(){return r.a.createElement(u.b,{query:"1204014873",render:function(e){return r.a.createElement(G,null,r.a.createElement(p.a,null,r.a.createElement(H,null,r.a.createElement(R,null,r.a.createElement(j.a,{fluid:e.art_build.childImageSharp.fluid})),r.a.createElement(W,null,r.a.createElement("h1",null,"August 2-4, 2019",r.a.createElement("br",null),"São Paulo, Brazil"),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(B,null,r.a.createElement(O,null,T.map(function(e){var t=e.icon,n=e.link;return r.a.createElement(N.a,{href:n},r.a.createElement("img",{src:t,alt:"link"}))}))))))))},data:S})},J=n(235),D=i.c.header.withConfig({displayName:"PastEdition2019__HeaderWrapper",componentId:"sc-114ltor-0"})(["background-color:#f5f5f5;padding-top:96px;padding-bottom:50px;@media (max-width:","){padding-top:128px;}"],function(e){return e.theme.screen.md}),K=i.c.figure.withConfig({displayName:"PastEdition2019__Art",componentId:"sc-114ltor-1"})(["width:100%;margin:0;border-radius:2px;border:10px solid #fff;box-shadow:2px 2px 4px #aaa;> div{@media (max-width:","){width:100%;border-radius:10px;}}"],function(e){return e.theme.screen.md}),V=i.c.div.withConfig({displayName:"PastEdition2019__Grid",componentId:"sc-114ltor-2"})(["display:grid;grid-template-columns:1fr 1fr;align-items:center;grid-gap:64px;@media (max-width:","){grid-template-columns:1fr;grid-gap:80px;> ","{order:2;}}"],function(e){return e.theme.screen.md},K),q=i.c.div.withConfig({displayName:"PastEdition2019__PhotoGrid",componentId:"sc-114ltor-3"})(["display:grid;grid-template-columns:1fr 1fr;align-items:center;grid-gap:64px;margin-top:50px;@media (max-width:","){grid-template-columns:1fr;grid-gap:80px;> ","{order:2;}}"],function(e){return e.theme.screen.md},K),Y=i.c.div.withConfig({displayName:"PastEdition2019__Text",componentId:"sc-114ltor-4"})(["justify-self:center;@media (max-width:","){justify-self:start;}"],function(e){return e.theme.screen.md}),Q=Object(i.c)(N.a).withConfig({displayName:"PastEdition2019__StyledExternalLink",componentId:"sc-114ltor-5"})(["color:inherit;text-decoration:none;background-color:rgb(61,149,22);color:rgb(255,255,255);border-radius:5px;padding:10px 20px;box-shadow:rgb(31,102,0) 3px 4px;position:relative;top:1em;&:hover{color:",";}"],function(e){return e.theme.color.black.regular}),X=function(){return r.a.createElement(u.b,{query:"2171663977",render:function(e){return r.a.createElement(D,null,r.a.createElement(p.a,null,r.a.createElement(V,null,r.a.createElement(Y,null,r.a.createElement("h1",null,"Thank you for attending!"),r.a.createElement("p",null,"There are not enough words to describe how awesome the 2019 edition was, but you can check out the pics and get the feeling of it!"),r.a.createElement("p",null,r.a.createElement(Q,{href:"https://photos.app.goo.gl/72KhU7LtxucnVoKb9"},"See photos  ➔"))),r.a.createElement(K,null,r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SFgMSS7Jis4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),r.a.createElement(q,null,r.a.createElement(K,null,r.a.createElement(j.a,{fluid:e.palco.childImageSharp.fluid})),r.a.createElement(K,null,r.a.createElement(j.a,{fluid:e.plateia.childImageSharp.fluid})),r.a.createElement(K,null,r.a.createElement(j.a,{fluid:e.happy_hour.childImageSharp.fluid})),r.a.createElement(K,null,r.a.createElement(j.a,{fluid:e.mesa.childImageSharp.fluid})))))},data:J})},Z=n(236),$=i.c.div.withConfig({displayName:"About__Grid",componentId:"sc-1un4l1t-0"})(["display:grid;grid-template-columns:3fr 2fr;grid-gap:40px;text-align:right;align-items:center;justify-items:center;margin:24px 0;"," h2{margin-bottom:16px;}@media (max-width:","){grid-template-columns:1fr;text-align:left;margin-bottom:96px;&:last-child{margin-bottom:24px;}","}"],function(e){return e.inverse&&"\n    text-align: left;\n    grid-template-columns: 2fr 3fr;\n  "},function(e){return e.theme.screen.md},function(e){return e.inverse&&"\n        "+ee+" {\n          order: 2;\n        }\n    "}),ee=i.c.figure.withConfig({displayName:"About__Art",componentId:"sc-1un4l1t-1"})(["margin:0;max-width:380px;width:100%;"]),te=function(){return r.a.createElement(u.b,{query:"279640813",render:function(e){return r.a.createElement(p.b,{id:"about"},r.a.createElement(p.a,null,r.a.createElement($,null,r.a.createElement("div",null,r.a.createElement("h2",null,"The Conference"),r.a.createElement("p",null,"Linux Developer Conference Brazil aims to take the Brazilian Linux development community to the international level. Whether you are just curious and want to understand the Linux ecosystem, someone seeking to contribute to FOSS projects, or even a seasoned collaborator, this conference is for you.")),r.a.createElement(ee,null,r.a.createElement(j.a,{fluid:e.art_masp.childImageSharp.fluid,style:{borderRadius:"10%"}}))),r.a.createElement($,{inverse:!0},r.a.createElement(ee,null,r.a.createElement(N.a,{href:"https://cfp.linuxdev-br.net/2019/schedule"},r.a.createElement(j.a,{fluid:e.art_agenda.childImageSharp.fluid,style:{borderRadius:"10%"}}))),r.a.createElement("div",null,r.a.createElement("h2",null,"Schedule"),r.a.createElement("p",null,"The conference will start with one day of workshops (limited spots – more info soon) at"," ",r.a.createElement(N.a,{href:"https://goo.gl/maps/yMqMQWPb758cG6Jw5"},"University of São Paulo(USP)")," ","on August 2 and then followed by two days of presentations and discussions at"," ",r.a.createElement(N.a,{href:"https://goo.gl/maps/umaECCj55JUo3bxh8"},"Radisson Paulista Plaza")," ","on August 3-4. See the"," ",r.a.createElement(N.a,{href:"https://cfp.linuxdev-br.net/2019/schedule"},"agenda"),".")))))},data:Z})},ne=(n(229),n(237)),ae=[{level:"diamond",sponsors:[{image:"oracle-linux.png",link:"https://www.oracle.com/br/linux/"}]},{level:"platinum",sponsors:[{image:"collabora.png",link:"https://www.collabora.com"},{image:"ibm.png",link:"https://www.ibm.com"}]},{level:"gold",sponsors:[{image:"pantacor.png",link:"https://www.pantahub.com/"}]},{level:"silver",sponsors:[{image:"microchip.png",link:"https://www.artimar.com.br/microchip-technology/"},{image:"profusion.png",link:"https://profusion.mobi"},{image:"opensuse.png",link:"https://www.opensuse.org"},{image:"toradex.png",link:"https://www.toradex.com/"}]},{level:"bronze",sponsors:[{image:"foundriesio.png",link:"https://foundries.io"},{image:"lpi.png",link:"https://lpi.org"},{image:"redhat.png",link:"https://redhat.com"},{image:"vulcanet.png",link:"https://vulcanet.com.br/"},{image:"fourlinux.png",link:"https://www.4linux.com.br/"}]},{level:"happyhour",sponsors:[{image:"google.png",link:"https://google.com"}]},{level:"partners",sponsors:[{image:"ictl.jpg",link:"https://www.ictl.org.br/"},{image:"papo-de-sysadmin.jpg",link:"https://papodesysadmin.org/"},{image:"flusp.png",link:"https://flusp.ime.usp.br/"},{image:"asl.png",link:"http://softwarelivre.org/"},{image:"psl-brasil.png",link:"http://softwarelivre.org/"},{image:"logo-dne.png",link:"https://devnaestrada.com.br/"}]}],re=i.c.div.withConfig({displayName:"Sponsors__LogoGrid",componentId:"tumecb-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:64px;justify-items:center;margin-top:96px;width:100%;a{display:flex;justify-content:center;flex-direction:column;text-align:center;width:100%;img{width:100%;}}@media (max-width:","){",";}",";"],function(e){return e.theme.screen.sm},function(e){return e.level&&"grid-template-columns: "+("diamond"===e.level?"1fr":"platinum"===e.level?"1fr":"gold"===e.level?"1fr":"happyhour"===e.level?"1fr":"1fr 1fr")},function(e){return e.level&&"grid-template-columns: "+("diamond"===e.level?"1fr":"platinum"===e.level?"1fr 1fr":"gold"===e.level?"1fr 1fr":"happyhour"===e.level?"1fr 1fr":"1fr 1fr 1fr 1fr")}),ie=Object(i.c)(p.a).withConfig({displayName:"Sponsors__StyledContainer",componentId:"tumecb-1"})(["@media (max-width:","){justify-content:center;}"],function(e){return e.theme.screen.md}),le=i.c.h2.withConfig({displayName:"Sponsors__SponsorsTitle",componentId:"tumecb-2"})(["text-transform:uppercase;background-color:#f8a12e;text-align:center;color:#fff;margin-top:4em;padding:0.2em;font-family:sans-serif;font-size:1.2em;"]),oe=function(){return r.a.createElement(u.b,{query:"3090855729",render:function(e){return r.a.createElement(p.b,{id:"sponsors"},r.a.createElement(ie,null,r.a.createElement("h1",null,"Sponsors"),ae.map(function(t){var n=t.level,a=t.sponsors;return r.a.createElement("div",{key:n},r.a.createElement(le,null,n),r.a.createElement(re,{level:n},a.map(function(t){var n=t.image,a=t.link,i=e.allFile.edges.find(function(e){return e.node.relativePath===n}).node;return r.a.createElement(N.a,{key:a,href:a},r.a.createElement(j.a,{fluid:i.childImageSharp.fluid}))})))}),r.a.createElement("br",null),r.a.createElement("p",null,"Want to sponsor? Check our"," ",r.a.createElement(N.a,{href:"https://github.com/linuxdev-br/conference-doc/raw/master/linuxdev-br_2019-sponsorship-prospectus-v1.pdf"},"sponsorship prospectus")," ","or talk to us at"," ",r.a.createElement(N.a,{href:"mailto:board@linuxdev-br.net"},"board@linuxdev-br.net"),".")))},data:ne})},ce=n(238),me=[{name:"Arnaldo Carvalho de Melo",image:"acme.jpg",title:"BPF is eating the world, dont you see?",link:"https://cfp.linuxdev-br.net/2019/talk/TQWAEX/"},{name:'John "maddog" Hall',image:"maddog.jpg",title:"Performance: Not just about speed any more",link:"https://cfp.linuxdev-br.net/2019/talk/VLWFZS/"},{name:"Hans Verkuil",image:"hans-verkuil.jpg",title:"V4L2: A Status Update",link:"https://cfp.linuxdev-br.net/2019/talk/FYSJQB/"},{name:"Eduardo Silva",image:"eduardo-silva.jpg",title:"Logging & Stream Processing on the Edge",link:"https://cfp.linuxdev-br.net/2019/talk/FV8SRD/"},{name:"Sergio Prado",image:"sergio-prado.jpg",title:"Linux kernel debugging: going beyond printk messages",link:"https://cfp.linuxdev-br.net/2019/talk/F7PJJU/"},{name:"Vagrant Cascadian",image:"vagrantupsidedown.png",title:"There and back again, reproducibly!",link:"https://cfp.linuxdev-br.net/2019/talk/VH9CCY/"},{name:"Holger Levsen",image:"holger.png",title:"There and back again, reproducibly!",link:"https://cfp.linuxdev-br.net/2019/talk/VH9CCY/"},{name:"Alexandre Oliva",image:"lxo.png",title:"Escaping the Surveillance Blackhole with Free Mobile Computing",link:"https://cfp.linuxdev-br.net/2019/talk/9NSA8J/"},{name:"Helen Koike",image:"helen-koike.jpg",title:"Graphics: An overview of DRM/KMS kernel API, main concepts and some caveats.",link:"https://cfp.linuxdev-br.net/2019/talk/RZWKKA/"},{name:"Alexandre Sousa",image:"alexandre-sousa.png",title:"Keynote: Top 5 Reasons for Accelerating Your Cloud Native DevOps with cutting edge Open Source Solutions",link:"https://cfp.linuxdev-br.net/2019/talk/HWNVRC/"},{name:"Gustavo Padovan",image:"gustavo-padovan.jpg",title:"Keynote: Linux Graphics Revolution",link:"https://cfp.linuxdev-br.net/2019/talk/KGVPUQ/"},{name:"Eduardo Habkost",image:"eduardo-habkost.jpg",title:"CPU vulnerabilities and KVM security",link:"https://cfp.linuxdev-br.net/2019/talk/SXR9M8/"},{name:"Ana Rute Mendes",image:"anarute.jpg",title:"Git without conflicts",link:"https://cfp.linuxdev-br.net/2019/talk/YEQ3GV/"},{name:"João Moreira",image:"joao-moreira.jpg",title:"Libpulp: we patched user space live patching",link:"https://cfp.linuxdev-br.net/2019/talk/VUSYEK/"},{name:"Antonio Terceiro",image:"terceiro.jpg",title:"Keynote: Introducing ICTL, Instituto de Conservação de Tecnologias Livres",link:"https://cfp.linuxdev-br.net/2019/talk/UJVCLC/"},{name:"Ricardo Salveti",image:"ricardo-salveti.png",title:"Leveraging OP-TEE as a generic HSM via PKCS#11 for secure OTA",link:"https://cfp.linuxdev-br.net/2019/talk/GU8RWJ/"},{name:"Leonardo Garcia",image:"lagg.jpg",title:"Performance on virtual machines: passing through PCI devices",link:"https://cfp.linuxdev-br.net/2019/talk/HLABXM/"},{name:"Gabriel Krisman Bertazi",image:"gabriel-krisman.jpg",title:"Ext4: A case-insensitive Linux filesystem",link:"https://cfp.linuxdev-br.net/2019/talk/A8LBW3/"},{name:"Alda Rocha",image:"alda.jpg",title:"How bias impacts what we develop",link:"https://cfp.linuxdev-br.net/2019/talk/ERGSYM/"}],de=i.c.div.withConfig({displayName:"Speakers__SpeakersGrid",componentId:"smc7z-0"})(["display:grid;grid-template-columns:repeat(auto-fill,200px);grid-template-rows:min-content;grid-gap:50px;justify-content:space-between;margin-top:72px;@media (max-width:","){justify-content:start;}@media (max-width:","){width:100%;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}@media (max-width:","){grid-gap:24px;}"],function(e){return e.theme.screen.lg},function(e){return e.theme.screen.md},function(e){return e.theme.screen.xs}),se=i.c.p.withConfig({displayName:"Speakers__Title",componentId:"smc7z-1"})(["margin-top:16px;color:",";"],function(e){return e.theme.color.black.regular}),ue=i.c.p.withConfig({displayName:"Speakers__Subtitle",componentId:"smc7z-2"})(["",";color:",";"],function(e){return e.theme.font_size.small},function(e){return e.theme.color.black.light}),pe=Object(i.c)(N.a).withConfig({displayName:"Speakers__StyledExternalLink",componentId:"smc7z-3"})(["color:inherit;text-decoration:none;font-size:2em;margin-top:1em;float:right;&:hover{color:",";}"],function(e){return e.theme.color.black.regular}),ge=function(){return r.a.createElement(u.b,{query:"4274373276",render:function(e){return r.a.createElement(p.b,{id:"speakers",accent:"secondary"},r.a.createElement(p.a,{style:{position:"relative"}},r.a.createElement("h1",null,"Featured Speakers"),r.a.createElement(de,null,me.map(function(t){var n=t.name,a=t.image,i=t.title,l=t.link,o=e.allFile.edges.find(function(e){return e.node.relativePath===a}).node;return r.a.createElement("div",null,r.a.createElement(pe,{href:l},r.a.createElement(j.a,{fluid:o.childImageSharp.fluid,alt:n,style:{borderRadius:"50%"}}),r.a.createElement(se,null,n),r.a.createElement(ue,null,i)))})),r.a.createElement(pe,{href:"https://cfp.linuxdev-br.net/2019/schedule/"},"See full agenda  ➔")))},data:ce})},he=i.c.figure.withConfig({displayName:"Where__Art",componentId:"sc-1644ve-0"})(["width:100%;margin:0;> div{@media (max-width:","){width:100%;}}"],function(e){return e.theme.screen.md}),fe=i.c.div.withConfig({displayName:"Where__Grid",componentId:"sc-1644ve-1"})(["display:grid;grid-template-columns:1fr 1fr;align-items:center;grid-gap:64px;@media (max-width:","){grid-template-columns:1fr;grid-gap:80px;> ","{order:2;}}"],function(e){return e.theme.screen.md},he),be=function(){return r.a.createElement(u.b,{query:"1204014873",render:function(e){return r.a.createElement(p.b,{id:"where",accent:"secondary"},r.a.createElement(p.a,null,r.a.createElement("h1",null,"Where"),r.a.createElement("br",null),r.a.createElement(fe,null,r.a.createElement(he,null,r.a.createElement("p",null,"August 2 at CCSL/University of São Paulo"),r.a.createElement("br",null),r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.269529770778!2d-46.73362434899728!3d-23.558761384608957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce561437311a2b%3A0x281256ef0da42272!2sCCSL+-+Centro+de+Compet%C3%AAncia+em+Software+Livre+da+Universidade+de+S%C3%A3o+Paulo!5e0!3m2!1sen!2sbr!4v1561326718902!5m2!1sen!2sbr",width:"400",height:"300",allowfullscreen:!0})),r.a.createElement(he,null,r.a.createElement("p",null,"August 3-4 at Radisson Paulista Plaza"),r.a.createElement("br",null),r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9110459369185!2d-46.648547348997134!3d-23.571638084602665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5996048af781%3A0x9856d09e924a4d99!2sRadisson+Paulista+Plaza!5e0!3m2!1sen!2sbr!4v1561326556291!5m2!1sen!2sbr",width:"400",height:"300",allowfullscreen:!0})))))},data:S})},we=i.c.figure.withConfig({displayName:"Travel__Art",componentId:"sc-1nu0pgk-0"})(["width:100%;margin:0;> div{@media (max-width:","){width:100%;}}"],function(e){return e.theme.screen.md}),ve=(i.c.div.withConfig({displayName:"Travel__Grid",componentId:"sc-1nu0pgk-1"})(["display:grid;grid-template-columns:1fr 1fr;align-items:center;grid-gap:64px;@media (max-width:","){grid-template-columns:1fr;grid-gap:80px;> ","{order:2;}}"],function(e){return e.theme.screen.md},we),function(){return r.a.createElement(u.b,{query:"1204014873",render:function(e){return r.a.createElement(p.b,{id:"travel"},r.a.createElement(p.a,null,r.a.createElement("h1",null,"Travel"),r.a.createElement("br",null),r.a.createElement("p",null,"The closest airport is São Paulo – Congonhas(CGH), it is a major hub in Brazil and also receives a few international flights. An Uber from the airport to the conference neighborhood costs about 25 BRL. However, if flying from abroad, São Paulo – Cumbica(GRU) airport is a much better option, an Uber from there to São Paulo downtown is a one hour ride and costs around 70 BRL."),r.a.createElement("br",null),r.a.createElement("h3",null,"Accomodation"),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(N.a,{href:"http://www.radissonpaulista.com.br/"}," Radisson Paulista Plaza")," is offering 15% of discount for the conference dates with the discount code AMANDA15. There are also several hotels and Airbnb options in the region. The venue for August 3-4 is 3 minutes walk from the Brigadeiro metro station (Green line).")))},data:S})}),Ee=n(239),xe=[{title:"Does linuxdev-br have a Code of Conduct? Where can I find it?",content:function(){return r.a.createElement(r.a.Fragment,null,"Yes, we do have a ",r.a.createElement("a",{href:"./code-of-conduct"}," Code of Conduct")," and all participants are required to conform to the Code of Conduct. Any kind of harrasment or unacceptable behavior is unwelcome at this event.")}},{title:"What is the Mission of the linuxdev-br conference?",content:function(){return r.a.createElement(r.a.Fragment,null,"Our ",r.a.createElement("a",{href:"./mission"},"Mission")," is to become an international meeting point in Brazil for the community and industry developing Free and Open Source Software (FOSS) for the Core of Linux systems.")}},{title:"Who is behind the linuxdev-br conference?",content:function(){return r.a.createElement(r.a.Fragment,null,"Since our first edition we are a non-profit organization with legal backing from the ",r.a.createElement(N.a,{href:"https://www.ictl.org.br/"},"Instituto para Conservação de Tecnologias Livres"),". From the community to the community.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Organizing Committee"),r.a.createElement("br",null),"Ana Rute Mendes (Collabora) - ",r.a.createElement("em",null,"Director's Director, Diversity & Inclusion"),r.a.createElement("br",null),"Bruno Dilly (ProFUSION) - ",r.a.createElement("em",null,"Finance Director"),r.a.createElement("br",null),"Gabriel F. T. Gomes (IBM) - ",r.a.createElement("em",null,"Program Director"),r.a.createElement("br",null),"Gustavo Padovan (Collabora) - ",r.a.createElement("em",null,"Executive Director"),r.a.createElement("br",null),"João Moreira -  ",r.a.createElement("em",null,"Communications Director"),r.a.createElement("br",null),r.a.createElement("br",null),"Talk to us at ",r.a.createElement(N.a,{href:"mailto:board@linuxdev-br.net"},"board@linuxdev-br.net"),".")}}],ye=function(){return r.a.createElement(p.b,{id:"faq",accent:"secondary"},r.a.createElement(p.a,null,r.a.createElement("h1",{style:{marginBottom:40}},"Frequently Asked Questions"),r.a.createElement("div",null,xe.map(function(e){var t=e.title,n=e.content;return r.a.createElement(Ee.a,{title:t,key:t},n())}))))},ke=n(228),Ce=[{icon:A.a,link:"https://github.com/linuxdev-br"},{icon:M.a,link:"https://twitter.com/linuxdevbr"},{icon:L.a,link:"https://instagram.com/linuxdevbr"},{icon:P.a,link:"https://www.youtube.com/c/linuxdevbr"},{icon:F.a,link:"https://t.me/linuxdevbr"},{icon:z.a,link:"mailto:contact@linuxdev-br.net"}],_e=i.c.div.withConfig({displayName:"Footer__SocialIcons",componentId:"r2ba8z-0"})(["display:flex;img{margin:0 8px;width:24px;height:24px;}@media (max-width:","){margin-top:40px;}"],function(e){return e.theme.screen.sm}),Se=i.c.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"r2ba8z-1"})(["background-color:",";padding:32px 0;"],function(e){return e.theme.color.primary}),Ie=(i.c.div.withConfig({displayName:"Footer__Copyright",componentId:"r2ba8z-2"})(["font-family:",";",";color:",";a{text-decoration:none;color:inherit;}"],function(e){return e.theme.font.secondary},function(e){return e.theme.font_size.small},function(e){return e.theme.color.black.regular}),i.c.figure.withConfig({displayName:"Footer__Art",componentId:"r2ba8z-3"})(["display:flex;justify-content:center;margin:0;margin-top:48px;"])),je=Object(i.c)(p.a).withConfig({displayName:"Footer__StyledContainer",componentId:"r2ba8z-4"})(["display:flex;justify-content:space-between;align-items:center;@media (max-width:","){flex-direction:column;text-align:center;}"],function(e){return e.theme.screen.sm}),Ne=function(){return r.a.createElement(u.b,{query:"1473194603",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie,null,r.a.createElement(j.a,{fluid:e.art_pot.childImageSharp.fluid,style:{width:200,maxWidth:"100%",marginBottom:16}})),r.a.createElement(Se,null,r.a.createElement(je,null,r.a.createElement(_e,null,Ce.map(function(e){var t=e.icon,n=e.link;return r.a.createElement(N.a,{href:n},r.a.createElement("img",{src:t,alt:"link"}))})))))},data:ke})};t.default=function(){return r.a.createElement(m,null,r.a.createElement(_,null),r.a.createElement(U,null),r.a.createElement(X,null),r.a.createElement(te,null),r.a.createElement(ge,null),r.a.createElement(oe,null),r.a.createElement(be,null),r.a.createElement(ve,null),r.a.createElement(ye,null),r.a.createElement(Ne,null))}}}]);
//# sourceMappingURL=component---src-pages-2019-js-987459253522a006378c.js.map