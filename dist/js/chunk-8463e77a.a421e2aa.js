(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8463e77a"],{"1d90":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-detail"},[a("div",{staticClass:"article_detail_wrap"},[a("div",{staticClass:"article_introduce"},[a("div",{staticClass:"articleTitle"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"articleBaseInfo"},[a("span",{staticClass:"time"},[a("i",{staticClass:"el-icon-date"}),t._v(" 发布于 "+t._s(t.time)+" ")]),a("span",{staticClass:"category"},[t._v(" • "),a("i",{staticClass:"el-icon-folder"}),t._v(" "+t._s(t.category)+" • ")]),a("span",{staticClass:"page_view"},[a("i",{staticClass:"el-icon-view"},[t._v(" "+t._s(t.page_view)+"次围观")])])]),a("div",{staticClass:"articleSubMessage"},[t._v(t._s(t.sub_message))])]),a("md-preview",{attrs:{contents:t.htmlContent}})],1)])},i=[],c=a("dba6"),n=a("2423"),l=a("2095"),r={name:"detail-article",components:{"md-preview":c["a"]},data:function(){return{title:"",time:"",category:"",page_view:"",sub_message:"",htmlContent:""}},methods:{getArticleDetail:function(){var t=this,e=this.$router.currentRoute.query.id;Object(n["a"])(e).then((function(e){var a=e.data[0],s=new Date(a.created_time);t.title=a.title,t.time=Object(l["c"])(s),t.category=a.category,t.page_view=a.page_view,t.sub_message=a.sub_message,t.htmlContent=a.html_content})).catch((function(e){t.$message.error({message:e})}))}},created:function(){this.getArticleDetail()}},o=r,u=(a("d6c1"),a("2877")),d=Object(u["a"])(o,s,i,!1,null,"1b4c969f",null);e["default"]=d.exports},d6c1:function(t,e,a){"use strict";var s=a("e7a3"),i=a.n(s);i.a},e7a3:function(t,e,a){}}]);
//# sourceMappingURL=chunk-8463e77a.a421e2aa.js.map