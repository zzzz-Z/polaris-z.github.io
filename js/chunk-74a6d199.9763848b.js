(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74a6d199"],{"398e":function(e,t,a){"use strict";a.r(t);var l=a("d225"),r=a("b0b4"),i=a("308d"),n=a("6bb5"),o=a("4e2b"),d=a("9ab4"),s=a("d8c6"),c=[{field:"layout",description:"表单布局",type:"horizontal | inline | vertical",default:"horizontal"},{field:"formItems",description:"Form.Item 配置项",type:"IFormItem[]",default:"-"},{field:"initialValues",description:"表单初始值数据",type:"{ }",default:"-"},{field:"labelCol",description:"统一设置 Form.Item 的 labelCol,会被 Form.Item 中同字段覆盖",type:"Col",default:"-"},{field:"wrapperCol",description:"统一设置 Form.Item 的 wrapperCol,会被 Form.Item 中同字段覆盖",type:"Col",default:"-"},{field:"itemStyle",description:"设置每一个Form.Item的布局",type:"Col",default:"-"}],p=a("e93b"),u=a("2409"),f=a("cdb5"),m=a("18ae"),b=function(e){function t(){return Object(l["a"])(this,t),Object(i["a"])(this,Object(n["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),Object(r["a"])(t,[{key:"render",value:function(){var e=arguments[0],t=[{title:"参数",dataIndex:"field"},{title:"说明",dataIndex:"description"},{title:"类型",dataIndex:"type",customRender:function(t){switch(t){case"Col":return e("a",{attrs:{target:"blank",href:"https://ant-design-vue.gitee.io/components/grid-cn/#Col"}},[t]);default:return e("span",{style:"color:#c41d7f"},[t])}}},{title:"默认值",dataIndex:"default"}];return e(f["a"],{attrs:{breadcrumb:!0}},[e(f["b"],{attrs:{title:"基础表单"}}),e(p["a"]),e("div",{style:"margin:10px auto;width:90%;"},[e(m["a"],{attrs:{name:"baseForm"}}),e(u["a"],{attrs:{columns:t,size:"middle",pagination:!1,dataSource:c}})])])}}]),t}(s["b"]);b=d["a"]([Object(s["a"])({})],b);t["default"]=b},e93b:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var l=a("f499"),r=a.n(l),i=a("c948"),n={functional:!0,render:function(e,t){var a=t.props,l=t.parent;function n(e){l.$info({title:"Gets the content from the form",content:r()(e)})}return e(i["a"],{attrs:{initialValues:a.initialValues||{},labelCol:{span:6},wrapperCol:{span:13},formItems:[{field:"title",label:"标题",placeholder:"标题"},{field:"time",label:"起止时间",el:e("a-date-picker")},{field:"doc",label:"目标描述",el:function(){return e("a-textarea",{attrs:{placeholder:"Basic usage",rows:4}})}},{field:"norm",label:"衡量标准",el:function(){return e("a-textarea",{attrs:{placeholder:"请输入衡量标准",rows:4}})}},{field:"user",placeholder:"请描述你服务的客户, name",label:e("span",["客户",e("span",{style:"color:rgba(0,0,0,.45)"},[" ( 选 填 )",e("a-tooltip",{attrs:{title:"目标服务对象"}},[e("a-icon",{style:"margin-left:5px;",attrs:{type:"info-circle"}})])])])},{field:"person",placeholder:"请描述你服务的客户, name",label:e("span",["邀评人",e("span",{style:"color:rgba(0,0,0,.45)"},["( 选 填 )"])," "])},{field:"qz",label:e("span",["权重",e("span",{style:"color:rgba(0,0,0,.45)"},["( 选 填 )"])]),el:e("span",[e("a-input",{attrs:{placeholder:"请填写"},style:"width:20%"})," %"])},{field:"mb",label:"目标公开",initialValue:"1",el:e("a-radio-group",{attrs:{name:"radioGroup"}},[e("a-radio",{attrs:{value:"1"}},["公开"]),e("a-radio",{attrs:{value:"2"}},["部分公开"]),e("a-radio",{attrs:{value:"3"}},["不公开"])])},{wrapperCol:{offset:6},el:function(t){return e("div",[e("a-button",{on:{click:function(){return n(t.getFieldsValue())}},directives:[{name:"html",value:"提交"}],attrs:{type:"primary"},style:"margin-right:20px"}),e("a-button",{directives:[{name:"html",value:"保存"}]})])}}]}})}}}}]);