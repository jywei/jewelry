/*Copyright (c) 2014-2015 Pavel Batečko (ShiraNai7)

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

    The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software. */

"use_strict";var Shira;!function(t,i){!function(t){t.Watcher=function(e,s){this.element=e,this.options=i.extend({},t.Watcher.defaults,s)},t.Watcher.defaults={fixClass:"scroll-fix",fixTop:0,fixOffset:0,unfixOffset:0,onUpdateFixed:null,syncSize:!0,syncPosition:!0,style:!0},t.Watcher.prototype={element:null,substitute:null,options:null,fixed:!1,attached:!1,getElementX:function(t){var i=0;do i+=t.offsetLeft;while(t=t.offsetParent);return i},getElementY:function(t){var i=0;do i+=t.offsetTop;while(t=t.offsetParent);return i},fix:function(){this.substitute=i(this.element.cloneNode(!1)).css("visibility","hidden").height(i(this.element).height()).insertAfter(this.element)[0],this.options.style&&i(this.element).css("position","fixed").css("top",this.options.fixTop+"px"),i(this.element).addClass(this.options.fixClass)},updateFixed:function(){if(this.options.syncSize&&i(this.element).width(i(this.substitute).width()),this.options.syncPosition){i(window).scrollLeft(),this.getElementX(this.substitute)}null!==this.options.onUpdateFixed&&this.options.onUpdateFixed(this)},unfix:function(){i(this.substitute).remove(),this.substitute=null;var t={};this.options.syncPosition&&(t.left=""),this.options.syncSize&&(t.width=""),this.options.style&&(t.position="",t.top=""),i(this.element).css(t).removeClass(this.options.fixClass)},attach:function(){if(this.attached)throw new Error("Already attached");var t=this;this.updateEventHandler=function(){t.pulse()},i(window).scroll(this.updateEventHandler).resize(this.updateEventHandler),this.attached=!0,this.pulse()},detach:function(){if(!this.attached)throw new Error("Not attached");i(window).unbind("scroll",this.updateEventHandler).unbind("resize",this.updateEventHandler),this.attached=!1},pulse:function(){var t=i(window).scrollTop();this.fixed?t<=this.getElementY(this.substitute)+this.options.unfixOffset?(this.unfix(),this.fixed=!1):this.updateFixed():t>=this.getElementY(this.element)+this.options.fixOffset&&(this.fix(),this.fixed=!0,this.updateFixed())}},i.fn.scrollFix=function(i){var e=this[0];if(e){var s=new t.Watcher(e,i);return s.attach(),s}return!1}}(t.ScrollFix||(t.ScrollFix={}))}(Shira||(Shira={}),jQuery);