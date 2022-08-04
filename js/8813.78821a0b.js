"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[8813],{78144:(e,t,a)=>{a.r(t),a.d(t,{default:()=>je});var s=function(){var e=this,t=e._self._c;return e.selectedSchema?t("div",{staticClass:"fieldContainer"},[e.showDataTypeChooser?t("div",{staticClass:"dataTypeChooser"},[t("select",{attrs:{name:"dataType",disabled:!e.editable},domProps:{value:e.selectedType},on:{input:e.onSelectType}},[e.selectableTypes.length>1?e._l(e.selectableTypes,(function(a){return t("optgroup",{key:a.name,attrs:{label:a.name}},e._l(a.types,(function(a){return t("option",{key:a.dataType(),domProps:{value:a.dataType()}},[e._v(e._s(e._f("dataTypeTitle")(a)))])})),0)})):e._l(e.selectableTypes[0].types,(function(a){return t("option",{key:a.dataType(),domProps:{value:a.dataType()}},[e._v(e._s(e._f("dataTypeTitle")(a)))])}))],2)]):e._e(),!e.isItem&&e.selectedSchema.description()?t("div",{staticClass:"description"},[t("i",{staticClass:"fas fa-info-circle"}),t("Description",{attrs:{description:e.selectedSchema.description(),compact:!0}})],1):e._e(),t("ParameterDataType",{attrs:{editable:e.editable,parameter:e.parameter,schema:e.selectedSchema,context:e.context,parent:e.parent},on:{changeType:e.setSelected,reset:e.resetValue},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}})],1):e._e()},i=[],r=a(58661),n=a(28954),o=a(65096),l=a.n(o),u=a(52590),d=null;class c extends n.JsonSchemaValidator{static create(e){return null===d&&(d=new c(e)),d}constructor(e){super(),this.store=e,this.setFileFormats(this.store.getters.fileFormats)}async validateBandName(e){return e.length>0}async validateEpsgCode(e){if(await this.store.dispatch("editor/loadEpsgCodes"),this.store.state.editor.epsgCodes[e])return!0;throw new(l().ValidationError)([{message:"Invalid EPSG code '"+e+"' specified."}])}async validateCollectionId(e){if(this.store.state.collections.filter((t=>t.id===e)).length>0)return!0;throw new(l().ValidationError)([{message:"Collection with id '"+e+"' doesn't exist."}])}async validateFilePath(e){if(this.store.getters["files/getById"](e))return!0;throw new(l().ValidationError)([{message:"File at '"+e+"' doesn't exist."}])}async validateInputFormatOptions(e){throw"Not supported"}async validateOutputFormatOptions(e){throw"Not supported"}async validateJobId(e){if(this.store.getters["jobs/getById"](e))return!0;throw new(l().ValidationError)([{message:"Job with id '"+e+"' doesn't exist."}])}async validateUri(e){if(e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/))return!0;throw new(l().ValidationError)([{message:"URI is invalid"}])}async validateUdfCode(e){if(e.match(/(\r|\n)/))return!0;throw new(l().ValidationError)([{message:"UDF Code is invalid"}])}async validateUdfRuntime(e){if(e in this.store.state.udfRuntimes)return!0;throw new(l().ValidationError)([{message:"UDF runtime '"+e+"' is not supported."}])}async validateUdfRuntimeVersion(e){if(u.Versions.validate(e))return!0;throw new(l().ValidationError)([{message:"UDF runtime version '"+e+"' is not a valid version number."}])}}var p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"fieldEditorContainer"},[e.isResult?[t("div",{staticClass:"fieldValue externalData fromNode"},[t("span",[e._v("Output of "),t("tt",[e._v("#"+e._s(e.state.from_node))])],1)]),"array"===e.nativeParameterType?t("button",{attrs:{type:"button"},on:{click:function(t){return e.convertToArray()}}},[t("i",{staticClass:"fas fa-list"}),e._v(" Convert to array")]):e._e()]:"raster-cube"===e.type||"vector-cube"===e.type?t("div",{staticClass:"fieldValue description"},[t("i",{staticClass:"fas fa-exclamation-circle"}),t("p",[e._v('This parameter can only be set by creating a connection between an "Output" / "Result" and this parameter in the Visual Model.')])]):e.isPgParameter?[t("div",{staticClass:"fieldValue externalData fromArgument"},[t("span",[e._v("Value of process parameter "),t("tt",[e._v(e._s(e.state.from_parameter))])],1)]),"array"===e.nativeParameterType?t("button",{attrs:{type:"button"},on:{click:function(t){return e.convertToArray()}}},[t("i",{staticClass:"fas fa-list"}),e._v(" Convert to array")]):e._e()]:"undefined"===e.type?t("div",{staticClass:"description"},[t("i",{staticClass:"fas fa-info-circle"}),t("p",[e._v("No value is set.")])]):"null"===e.type?t("div",{staticClass:"description"},[t("i",{staticClass:"fas fa-info-circle"}),t("p",[e._v("This is set to "),t("strong",[t("tt",[e._v("null")])],1),e._v(", which is usually used as placeholder for no-data values or a default value.")])]):e.isSelection?t("SelectBox",{key:e.type,attrs:{type:e.type,editable:e.editable,schema:e.schema,context:e.dependency},on:{onDetails:e.onSelectDetails},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):e.isTemporal?t("TemporalPicker",{key:e.type,attrs:{type:e.type,editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"bounding-box"===e.type?t("MapAreaSelect",{key:e.type,staticClass:"areaSelector",attrs:{editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"geojson"===e.type?t("GeoJsonEditor",{key:e.type,staticClass:"geoJsonEditor",attrs:{editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"process-graph"===e.type?t("Editor",{staticClass:"callbackEditor",attrs:{editable:e.editable,parent:e.parent,parentSchema:e.schema,showDiscoveryToolbar:!0,defaultValue:e.editorDefaultValue},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"output-format-options"===e.type||"input-format-options"===e.type?t("FileFormatOptionsEditor",{ref:"fileFormatOptionsEditor",attrs:{type:e.type,format:e.dependency},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"budget"===e.type?t("Budget",{attrs:{editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"duration"===e.type?t("Duration",{attrs:{editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"kernel"===e.type?t("Kernel",{attrs:{editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"udf-code"===e.type?t("TextEditor",{staticClass:"fieldValue textarea",attrs:{id:e.name,editable:e.editable,language:e.dependency},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"commonmark"===e.type?t("TextEditor",{staticClass:"fieldValue textarea",attrs:{id:e.name,editable:e.editable,language:"markdown"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"wkt2-definition"===e.type||"proj-definition"===e.type?t("TextEditor",{staticClass:"fieldValue textarea",attrs:{id:e.name,editable:e.editable},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"json"==e.type?t("TextEditor",{staticClass:"fieldValue textarea",attrs:{id:e.name,editable:e.editable,language:"json"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):"boolean"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],staticClass:"fieldValue",attrs:{type:"checkbox",name:e.name,disabled:!e.editable},domProps:{checked:Array.isArray(e.state)?e._i(e.state,null)>-1:e.state},on:{change:function(t){var a=e.state,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&(e.state=a.concat([r])):n>-1&&(e.state=a.slice(0,n).concat(a.slice(n+1)))}else e.state=i}}}):"integer"===e.type||"number"===e.type?t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.state,expression:"state",modifiers:{number:!0}}],staticClass:"fieldValue",attrs:{type:"number",min:e.numericMin,max:e.numericMax,step:e.numericStep,name:e.name,disabled:!e.editable},domProps:{value:e.state},on:{input:function(t){t.target.composing||(e.state=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}):"url"===e.type||"uri"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],staticClass:"fieldValue",attrs:{type:"url",name:e.name,disabled:!e.editable},domProps:{value:e.state},on:{input:function(t){t.target.composing||(e.state=t.target.value)}}}):"object"===e.nativeType||"array"===e.nativeType?t("ObjectEditor",{attrs:{editable:e.editable,parameter:e.parameter,schema:e.schema,isObject:"object"===e.nativeType,context:e.context},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],staticClass:"fieldValue",attrs:{type:"text",name:e.name,disabled:!e.editable},domProps:{value:e.state},on:{input:function(t){t.target.composing||(e.state=t.target.value)}}})],2)},m=[],h=a(37787),f=function(){var e=this,t=e._self._c;return t("div",{class:{editor:!0,array:!e.isObject,object:e.isObject}},[t("div",{staticClass:"buttons"},[e.editable?t("button",{staticClass:"addBtn",attrs:{type:"button",disabled:e.count>=e.maxCount},on:{click:function(t){return e.add()}}},[t("i",{staticClass:"fas fa-plus"}),e._v(" Add")]):e._e(),t("FullscreenButton",{attrs:{element:()=>this.$el}})],1),e.elements.length?t("draggable",{attrs:{handle:".mover"},model:{value:e.elements,callback:function(t){e.elements=t},expression:"elements"}},e._l(e.elements,(function(a,s){return t("div",{key:a.id,staticClass:"fieldValue element"},[t("div",{staticClass:"row"},[t("label",{staticClass:"fieldLabel"},[e.isObject&&(a.prop.title||a.prop.required)?[e._v(e._s(a.prop.title||a.key))]:e.isObject?t("input",{directives:[{name:"model",rawName:"v-model",value:a.key,expression:"e.key"}],attrs:{type:"text",disabled:!e.editable},domProps:{value:a.key},on:{input:function(t){t.target.composing||e.$set(a,"key",t.target.value)}}}):[e._v(e._s(s+1))]],2),t("ParameterDataTypes",{attrs:{editable:e.editable,parameter:e.elementSchema(s,a.key),isItem:!0,context:e.context},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"e.value"}}),e.editable&&!a.prop.required?t("button",{staticClass:"deleteBtn",attrs:{disabled:e.count<=e.minCount,type:"button"},on:{click:function(t){return e.remove(s)}}},[t("i",{staticClass:"fas fa-trash"})]):e._e(),t("button",{directives:[{name:"show",rawName:"v-show",value:e.editable&&!e.isObject,expression:"editable && !isObject"}],staticClass:"mover",attrs:{type:"button"}},[t("i",{staticClass:"fas fa-arrows-alt"})])],1),a.prop.description?t("div",{staticClass:"row"},[t("div",{staticClass:"description"},[t("i",{staticClass:"fas fa-info-circle"}),t("Description",{attrs:{description:a.prop.description,compact:!0}})],1)]):e._e()])})),0):t("div",{staticClass:"empty description"},[t("i",{staticClass:"fas fa-info-circle"}),e.isObject?[e._v(" Object is empty")]:[e._v(" Array is empty")]],2)],1)},y=[],b=a(9980),v=a.n(b),g=a(79856),x=a(70937);const w={name:"ObjectEditor",components:{draggable:v(),Description:g["default"],FullscreenButton:x.Z,ParameterDataTypes:()=>Promise.resolve().then(a.bind(a,78144))},props:{parameter:Object,editable:{type:Boolean,default:!0},schema:Object,value:{},isObject:{type:Boolean,default:!1},context:{}},data(){return{elements:[]}},computed:{count(){return r.Z.size(this.elements)},maxCount(){return(this.isObject?this.schema.schema.maxProperties:this.schema.schema.maxItems)||Number.MAX_VALUE},minCount(){return(this.isObject?this.schema.schema.minProperties:this.schema.schema.minItems)||0},prefill(){let e=this.schema.schema;if(this.isObject&&r.Z.isObject(e.properties)){let t=[];for(let a in e.properties){let s=!1;Array.isArray(e.required)&&e.required.includes(a)&&(s=!0),t.push(Object.assign({name:a,required:s},e.properties[a]))}return t}return!this.isObject&&this.minCount>0?[...Array(this.minCount).keys()].map((e=>({name:e}))):[]},newValue(){if(this.isObject){let e={};for(let t of this.elements)e[t.key]=t.value;return e}return this.elements.map((e=>e.value))}},watch:{newValue:{deep:!0,handler(e){this.$emit("input",e)}},value:{immediate:!0,handler(e){if(this.newValue!==e)if(this.elements=[],0===r.Z.size(e)&&this.prefill.length>0)for(let t of this.prefill)this.add(t.name,void 0,t);else if(e&&"object"===typeof e)for(let t in e)this.add(t,e[t])}}},methods:{elementSchema(e,t=null){let a=u.ProcessUtils.getElementJsonSchema(this.schema.schema,t||e),s=new u.ProcessSchema(a);return this.schema.parent instanceof u.ProcessSchema&&(s.refs=this.schema.parent.refs||[]),s},add(e=null,t,a={}){let s={id:String(this.elements.length),value:t};this.isObject&&(s.key=e||"unnamed"+this.elements.length),s.prop=a,"undefined"===typeof s.value&&("undefined"!==typeof a.default?s.value=a.default:s.value=this.elementSchema(this.elements.length,s.key).default),this.elements.push(s)},remove(e){this.elements.splice(e,1)}}},T=w;var _=a(1001),C=(0,_.Z)(T,f,y,!1,null,"4763cdea",null);const S=C.exports;var P=function(){var e=this,t=e._self._c;return t("div",{staticClass:"datatypeEditor budget"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hasBudget,expression:"hasBudget"}],attrs:{type:"checkbox",disabled:!e.editable},domProps:{checked:Array.isArray(e.hasBudget)?e._i(e.hasBudget,null)>-1:e.hasBudget},on:{change:function(t){var a=e.hasBudget,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&(e.hasBudget=a.concat([r])):n>-1&&(e.hasBudget=a.slice(0,n).concat(a.slice(n+1)))}else e.hasBudget=i}}}),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.amount,expression:"amount",modifiers:{number:!0}}],attrs:{type:"number",min:"0.00",max:e.max,step:"0.01",disabled:!e.hasBudget||!e.editable},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(" "+e._s(e.capabilities.currency())+" ")])},j=[];const E={name:"Budget",computed:{...r.Z.mapState(["userInfo"]),...r.Z.mapGetters(["capabilities"]),max(){return this.userInfo.budget>0?this.userInfo.budget:Number.MAX_VALUE}},props:{value:{type:Number,default:null},editable:{type:Boolean,default:!0}},data(){return{hasBudget:"number"===typeof this.value,amount:this.value}},watch:{hasBudget(){this.updateData()},amount(){this.updateData()}},methods:{updateData(){this.$emit("input",this.hasBudget&&!Number.isNaN(this.amount)?this.amount:null)}}},k=E;var O=(0,_.Z)(k,P,j,!1,null,null,null);const V=O.exports;var B=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:e.id}},[t("ProgressControl",{ref:"progress",attrs:{map:e.map}}),t("TextControl",{attrs:{text:e.help,map:e.map}})],1)},D=[],Z=a(12766),F=a(92420),A=a(63432),N=a(28641),I=a(47539),M=a(45281);const $={name:"MapAreaSelect",mixins:[Z.Z],components:{TextControl:M.Z},props:{value:{type:[Object,Array],default:()=>null}},data(){let e=null;return r.Z.isObject(this.value)&&"west"in this.value&&"south"in this.value&&"east"in this.value&&"north"in this.value?e=[this.value.west,this.value.south,this.value.east,this.value.north]:Array.isArray(this.value)&&value.length>=4&&(e=this.value),{interaction:null,extent:e}},computed:{returnAsObject(){return!Array.isArray(this.value)},projectedExtent(){return this.extent?(0,A.$A)(this.extent,"EPSG:4326",this.map.getView().getProjection()):null},bbox(){return r.Z.extentToBBox(this.extent)},help(){return this.extent?"Click inside the bounding box to remove it.":"Click on the map to add a bounding box."}},methods:{update(e){e.extent?this.extent=(0,A.$A)(e.extent,this.map.getView().getProjection(),"EPSG:4326"):this.extent=null,this.$emit("input",this.returnAsObject?this.bbox:this.extent)},ensureValidExtent(e){return e?[Math.max(e[0],-180),Math.max(e[1],-90),Math.min(e[2],180),Math.min(e[3],90)]:e},async renderMap(){let e=!1!==r.Z.isBboxInWebMercator(this.bbox);await this.createMap(e?"EPSG:3857":"EPSG:4326"),this.addBasemaps();let t=e=>{if(!this.editable)return!1;if("singleclick"===e.type){if(!this.extent){let t=this.map.getSize().map((e=>.2*e)),a=this.map.getView().calculateExtent(t),s=[a[2]-a[0],a[3]-a[1]],i=[e.coordinate[0]-s[0],e.coordinate[1]-s[1],e.coordinate[0]+s[0],e.coordinate[1]+s[1]];return this.interaction.setExtent(i),!1}(0,N.jE)(this.projectedExtent,...e.coordinate)&&(this.interaction.setExtent(null),this.interaction.vertexOverlay_.getSource().clear(),this.interaction.vertexFeature_=null)}else if(this.interaction.handlingDownUpSequence||this.interaction.snapToVertex_(e.pixel,e.map))return!0;return!1};if(this.interaction=new F.Z({extent:this.projectedExtent,condition:t,boxStyle:(0,I.yF)(),pixelTolerance:15}),this.editable&&this.interaction.on("extentchanged",this.update),this.map.addInteraction(this.interaction),this.projectedExtent){var a=this.getFitOptions(this.editable?10:33);this.map.getView().fit(this.projectedExtent,a)}}}},R=$;var J=(0,_.Z)(R,B,D,!1,null,null,null);const U=J.exports;var G=function(){var e=this,t=e._self._c;return t("Tabs",{ref:"tabs",staticClass:"geojson-editor",attrs:{id:"geojson-tabs",position:"bottom"}},[t("Tab",{attrs:{id:"map",name:"Map",icon:"fa-map",selected:!0},on:{show:e.showMap}},[t("GeoJsonMapEditor",{ref:"map",attrs:{editable:e.editable,value:e.value},on:{input:e.commit}})],1),t("Tab",{attrs:{id:"source",name:"Code",icon:"fa-code"},on:{show:e.showCode}},[t("TextEditor",{ref:"sourceEditor",attrs:{editable:e.editable,value:e.value,id:"geojson-texteditor",language:"json"},on:{input:e.commit}})],1)],1)},L=[],q=a(79842),z=a(45518),Y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"geojson-map-editor",attrs:{id:e.id}},[t("ProgressControl",{ref:"progress",attrs:{map:e.map}})],1)},W=[],X=a(24832),K=a(43086),H=a(6002),Q=a(34023),ee=a(65561),te=a(29169),ae=a(4143);const se={name:"GeoJsonMapEditor",mixins:[Z.Z,X.Z],props:{value:{type:Object,default:null}},data(){return{geoJsonLayer:null}},methods:{async renderMap(){let e=!0;if(this.value){let t=this.createGeoJsonSource(this.value),a=t.getExtent();(0,N.xb)(a)||(e=!1!==r.Z.isBboxInWebMercator(r.Z.extentToBBox(a)))}if(await this.createMap(e?"EPSG:3857":"EPSG:4326"),this.addBasemaps(),this.editable?this.geoJsonLayer=this.geoJsonEditor(e?this.value:source):this.geoJsonLayer=this.addGeoJson(e?this.value:source),this.editable){var t=()=>this.$emit("input",this.getGeoJson());this.geoJsonLayer.getSource().on("change",t)}},geoJsonEditor(e){var t=this.addGeoJson(e),a=new Q.Z;this.map.addControl(a);var s=new te.Z({source:t.getSource(),interactions:{Info:!1,DrawHole:!1,Offset:!1,Split:!1}});a.addControl(s);var i=new ae.Z;this.map.addInteraction(i),i.on("undo",(e=>{"addfeature"===e.action.type&&(s.getInteraction("Select").getFeatures().clear(),s.getInteraction("Transform").select())}));var r=new Q.Z({group:!0,controls:[new ee.Z({html:'<i class="fas fa-undo-alt"></i>',title:"Undo",handleClick:()=>i.undo()}),new ee.Z({html:'<i class="fas fa-redo-alt"></i>',title:"Redo",handleClick:()=>i.redo()})]});return a.addControl(r),this.map.addInteraction(new H.Z({source:t.getSource()})),t},getGeoJson(){var e=new K.Z,t=this.geoJsonLayer.getSource().getFeatures(),a=[];for(var s in t)a.push(e.writeFeatureObject(t[s],{dataProjection:"EPSG:4326",featureProjection:this.map.getView().getProjection()}));return 0===a.length?null:1===a.length?!a[0].properties&&a[0].geometry?a[0].geometry:a[0]:{type:"FeatureCollection",features:a}}}},ie=se;var re=(0,_.Z)(ie,Y,W,!1,null,null,null);const ne=re.exports;var oe=a(2591);const le={name:"GeoJsonEditor",components:{GeoJsonMapEditor:ne,Tab:z["default"],Tabs:q["default"],TextEditor:oe.Z},props:{editable:{type:Boolean,default:!0},value:{type:Object,default:null}},data(){return{}},methods:{showMap(){this.$refs.map.renderMap()},showCode(){this.$refs.sourceEditor.updateState()},commit(e){this.$emit("input",e)}}},ue=le;var de=(0,_.Z)(ue,G,L,!1,null,null,null);const ce=de.exports;var pe=a(51155);const me={name:"ParameterDataType",mixins:[h.Z],components:{ObjectEditor:S,Budget:V,MapAreaSelect:U,GeoJsonEditor:ce,TextEditor:oe.Z,Editor:()=>Promise.all([a.e(8945),a.e(2535)]).then(a.bind(a,38318)),FileFormatOptionsEditor:()=>a.e(1595).then(a.bind(a,21595)),ParameterDataTypes:()=>Promise.resolve().then(a.bind(a,78144)),Duration:()=>a.e(3207).then(a.bind(a,73207)),Kernel:()=>a.e(5186).then(a.bind(a,55186)),SelectBox:()=>a.e(3829).then(a.bind(a,93829)),TemporalPicker:()=>a.e(8247).then(a.bind(a,58247))},props:{parameter:Object,editable:{type:Boolean,default:!0},schema:Object,value:{},context:{},parent:{}},data(){return{state:this.value}},computed:{type(){return this.schema.dataType()},nativeType(){return this.schema.nativeDataType()},nativeParameterType(){return this.parameter.nativeDataType()},editorDefaultValue(){if("process-graph"===this.type){if("undefined"!==typeof this.parameter.default)return this.parameter.default;if(this.parameter.nullable())return null}},isTemporal(){return"date"===this.type||"time"===this.type||"date-time"===this.type||"temporal-interval"===this.type||"year"===this.type},isSelection(){switch(this.type){case"collection-id":case"job-id":case"file-path":case"file-paths":case"epsg-code":case"input-format":case"openeo-datatype":case"output-format":case"service-type":case"billing-plan":case"udf-runtime":case"udf-runtime-version":return!0;case"band-name":return!!this.dependency;default:return this.schema.isEnum()}},name(){return this.parameter.name+(Array.isArray(this.parameter.value)?"[]":"")},isResult(){return Boolean(r.Z.isObject(this.state)&&this.state.from_node&&1===r.Z.size(this.state)&&this.schema.schema.isRef)},isPgParameter(){return Boolean(r.Z.isObject(this.state)&&this.state.from_parameter&&1===r.Z.size(this.state)&&this.schema.schema.isRef)},numericMin(){return"number"===typeof this.schema.minimum?this.schema.minimum:""},numericMax(){return"number"===typeof this.schema.maximum?this.schema.maximum:""},numericStep(){return"number"===typeof this.schema.multipleOf?this.schema.multipleOf:"integer"===this.type?1:"any"},newValue(){if("number"===this.type){var e=Number.parseFloat(this.state);return Number.isNaN(e)?null:e}if("integer"===this.type){e=Number.parseInt(this.state);return Number.isNaN(e)?null:e}if("null"===this.type)return null;if("string"===typeof this.state&&this.state.length>0&&("any"===this.type||"mixed"===this.type)){e=Number(this.state);return Number.isNaN(e)?this.state:e}return this.state},dependency(){switch(this.type){case"output-format-options":case"input-format-options":return this.getValueFromOtherParameterByDataType(this.type.replace("-options",""));case"udf-runtime-version":case"udf-code":return this.getValueFromOtherParameterByDataType("udf-runtime");case"band-name":return this.getValueFromOtherParameterByDataType("collection-id");case"array":if("band-name"===pe.Z.arrayOf(this.schema))return this.getValueFromOtherParameterByDataType("collection-id");default:return}}},watch:{value(e){e!==this.newValue&&(this.state=this.value)},newValue(e){this.$emit("input",e)},dependency(e,t){"undefined"!==typeof t&&e!==t&&this.$emit("reset")}},methods:{getValueFromOtherParameterByDataType(e){if(r.Z.isObject(this.context)&&r.Z.isObject(this.context.schemas)&&r.Z.isObject(this.context.values))for(let t in this.context.schemas){let a=this.context.schemas[t];if(r.Z.isObject(a)&&a.dataType()===e)return this.context.values[t]}},convertToArray(){this.state=[this.state],this.$emit("input",this.state),this.$emit("changeType","array")},onSelectDetails(){"collection-id"===this.type&&this.emit("showCollection",this.state)}}},he=me;var fe=(0,_.Z)(he,p,m,!1,null,"8fd3ae18",null);const ye=fe.exports;var be=a(10058),ve=a(25108);const ge=["Basics","References","Spatial","Temporal","File and Folders","Resources","CRS","UDF","Other"],xe=e=>e&&"object"===typeof e?r.Z.deepClone(e):e,we=()=>(new Date).toISOString().replace(/\.\d+/,""),Te=[{subtype:"undefined",title:"No Value",const:void 0,not:{},group:"Basics"},{type:"null",const:null,group:"Basics"},{type:"string",default:"",group:"Basics"},{type:"integer",default:0,group:"Basics"},{type:"number",default:0,group:"Basics"},{type:"boolean",default:!1,group:"Basics"},{type:"array",default:[],group:"Basics"},{type:"object",default:{},group:"Basics",properties:{from_node:{not:{}},from_parameter:{not:{}}}},{type:"string",subtype:"date-time",format:"date-time",title:"Date and Time",group:"Temporal",default:()=>we()},{type:"string",subtype:"date",format:"date",title:"Date only",group:"Temporal",default:()=>we().substring(0,10)},{type:"string",subtype:"time",format:"time",title:"Time only",group:"Temporal",default:()=>we().substring(11)},{type:"string",subtype:"year",title:"Year only",group:"Temporal"},{type:"array",subtype:"temporal-interval",title:"Temporal interval",group:"Temporal"},{type:"array",subtype:"temporal-intervals",title:"Temporal intervals (multiple)",group:"Temporal",default:[]},{type:"object",subtype:"geojson",title:"GeoJSON",group:"Spatial"},{type:"object",subtype:"bounding-box",title:"Bounding Box",group:"Spatial"},{type:"string",subtype:"band-name",title:"Band",group:"Resources"},{type:"string",subtype:"collection-id",title:"Collection",group:"Resources"},{type:"string",subtype:"job-id",title:"Batch Job",group:"Resources"},{type:"string",subtype:"udf-code",title:"UDF Source Code",group:"UDF",default:""},{type:"string",subtype:"udf-runtime",title:"UDF Runtime",group:"UDF"},{type:"string",subtype:"udf-runtime-version",title:"UDF Runtime Version",group:"UDF",any:!1},{type:"integer",subtype:"epsg-code",title:"EPSG Code (CRS)",group:"CRS"},{type:"string",subtype:"proj-definition",title:"PROJ defintiion (CRS)",group:"CRS",default:""},{type:"string",subtype:"wkt2-definition",title:"WKT2 defintiion (CRS)",group:"CRS",default:""},{type:"array",subtype:"file-path",title:"File path",group:"File and Folders"},{type:"array",subtype:"file-paths",title:"File paths (multiple)",group:"File and Folders",default:[]},{type:"string",subtype:"uri",format:"uri",title:"URI / URL",group:"File and Folders"},{type:"string",subtype:"output-format",title:"Export file format",group:"File and Folders"},{type:"object",subtype:"output-format-options",title:"Export file format parameters",group:"File and Folders",any:!1},{type:"string",subtype:"input-format",title:"Import file format",group:"File and Folders"},{type:"object",subtype:"input-format-options",title:"Import file format parameters",group:"File and Folders",any:!1},{type:"object",subtype:"process-graph",title:"Custom Process"},{tyoe:"object",subtype:"json-schema",title:"Data Type (JSON Schema)",any:!1},{subtype:"json",title:"JSON",noAutoDetect:!0}],_e={type:"object",additionalProperties:!1,properties:{from_node:{type:"string"},from_parameter:{type:"string"}}},Ce={name:"ParameterDataTypes",mixins:[h.Z],components:{Description:g["default"],ParameterDataType:ye},props:{parameter:{type:Object,default:()=>new u.ProcessParameter({})},editable:{type:Boolean,default:!0},value:{},isItem:{type:Boolean,default:!1},context:{},parent:{}},data(){return{state:void 0,selectedType:null,selectedNativeType:null,selectedSchema:null,jsonSchemaValidator:c.create(this.$store)}},filters:{dataTypeTitle(e){if(e.schema&&!e.schema.title){let t=Te.find((t=>t.subtype===e.schema.subtype||t.type===e.schema.type));if(t&&t.title)return t.title}return e.title()}},async created(){await this.detectType()},computed:{refSchemas(){if(!Array.isArray(this.parameter.refs))return{};let e={};for(let t of this.parameter.refs){let a;t.from_node?(a="from_node:"+t.from_node,e[a]=new u.ProcessDataType({type:"object",group:"References",subtype:a,isRef:"from_node",from_node:t.from_node,title:"Output of #"+t.from_node,required:["from_node"],properties:{from_node:{type:"string",const:t.from_node}},default:t,additionalProperties:!1})):t.from_parameter&&(a="from_parameter:"+t.from_parameter,e[a]=new u.ProcessDataType({type:"object",group:"References",subtype:a,isRef:"from_parameter",from_parameter:t.from_parameter,title:'Value of process parameter "'+t.from_parameter+'"',required:["from_parameter"],properties:{from_parameter:{type:"string",const:t.from_parameter}},default:t,additionalProperties:!1}))}return e},showDataTypeChooser(){return r.Z.size(this.allowedTypes)>1},allowedTypes(){let e={};if("any"===this.parameter.dataType())Object.assign(e,this.supportedTypes);else for(let t of this.parameter.schemas){let a=t.dataType();e[a]=t}return Object.assign(e,this.refSchemas),e},supportedTypes(){let e={};for(let t of Te){if(!1===t.any)continue;let a=t.subtype||t.type,s=Object.assign({},be.API_TYPES[a],t);e[a]=new u.ProcessDataType(s,this.parameter)}return e},selectableTypes(){let e={};for(let a in this.allowedTypes){let t=this.allowedTypes[a],s=t.group();Array.isArray(e[s])?e[s].push(t):e[s]=[t]}let t=ge.map((t=>({name:t,types:e[t]||[]}))).filter((e=>0!==e.types.length));return t}},watch:{value:{immediate:!0,handler(e){e!==this.state&&("undefined"!==typeof e||this.allowedTypes.undefined?this.state=e:this.state=xe(this.parameter.default))}},state:{deep:!0,handler(e){this.$emit("input",e)}},selectedType(e){this.$emit("schemaSelected",this.supportedTypes[e])}},methods:{async isValueInvalid(e,t){let a=r.Z.deepClone(t);"array"===a.type&&r.Z.isObject(a.items)&&(a.items={oneOf:[a.items,_e]});let s=await this.jsonSchemaValidator.validateValue(e,a);return s.length>0},async getTypeForValue(e,t){var a=[];for(var s of e)try{if(await this.isValueInvalid(t,s.schema))continue;a.push(s.dataType())}catch(i){}return a},async detectType(){let e=Object.keys(this.allowedTypes),t="undefined"===typeof this.state;if(0===e.length)await this.setSelected("json");else if(1===e.length)await this.setSelected(e[0],t);else if(t)if(this.allowedTypes.undefined)await this.setSelected(this.allowedTypes.undefined,!1);else{let t=e.filter((e=>"null"!==e));await this.setSelected(t[0],!0)}else{let e=Object.values(this.allowedTypes).filter((e=>!e.schema.noAutoDetect)),t=await this.getTypeForValue(e,this.state);if(0===t.length)await this.setSelected("json");else if(1===t.length)await this.setSelected(t[0]);else{t.includes("integer")&&t.includes("number")&&(t=t.filter((e=>"integer"!==e))),!r.Z.isRef(this.state)&&t.length>1&&ve.warn("A parameter is ambiguous. Potential types: "+t.join(", ")+". Value: "+JSON.stringify(this.state));let e=t.findIndex((e=>be.NATIVE_TYPES.includes(e)));-1===e&&(e=0),await this.setSelected(t[e])}}},async onSelectType(e){await this.setSelected(e.target.value,!0)},resetValue(){this.state=xe(this.parameter.default),this.detectType()},async setSelected(e,t=!1){let a=e;if(e instanceof u.ProcessDataType?(this.selectedSchema=e,this.selectedType=e.dataType(),a=e.nativeDataType()):(this.selectedSchema=this.allowedTypes[e]?this.allowedTypes[e]:this.supportedTypes[e],this.selectedType=e),t){if("number"===typeof this.state&&"string"===a)this.state=String(this.state);else if("string"===typeof this.state&&"integer"===a){if(this.state.match(/^([+-]?\d+)$/)){let e=Number.parseInt(this.state,10);Number.isNaN(e)||(this.state=e)}}else if("string"===typeof this.state&&"number"===a){let e=Number.parseFloat(this.state);Number.isNaN(e)||(this.state=e)}if(this.selectedSchema.isNull())this.state=null;else if("undefined"!==typeof this.selectedSchema.const)this.state=this.selectedSchema.const;else if(this.selectedSchema.isEnum()&&1===this.selectedSchema.getEnumChoices().length)this.state=this.selectedSchema.getEnumChoices()[0];else{let e=xe(this.selectedSchema.default());try{("undefined"===typeof this.state||await this.isValueInvalid(this.state,this.selectedSchema))&&(this.state=e)}catch(s){this.state=e}}}}}},Se=Ce;var Pe=(0,_.Z)(Se,s,i,!1,null,null,null);const je=Pe.exports},45281:(e,t,a)=>{a.d(t,{Z:()=>d});var s=function(){var e=this,t=e._self._c;return e.texts.length>0?t("div",{staticClass:"ol-unselectable ol-control value",class:{pointer:e.texts.length>1},on:{click:e.toggle}},[e._v(" "+e._s(e.current)+" ")]):e._e()},i=[],r=a(89518);const n={name:"TextControl",mixins:[r.Z],data(){return{i:0}},computed:{texts(){return Array.isArray(this.text)?this.text:"string"===typeof this.text&&this.text.length>0?[this.text]:[]},current(){return 0===this.texts.length?"":this.texts[this.i%this.text.length]}},props:{text:{text:[String,Array],default:""}},methods:{toggle(){this.i++}}},o=n;var l=a(1001),u=(0,l.Z)(o,s,i,!1,null,"fe2bcd86",null);const d=u.exports},73466:(e,t,a)=>{a.d(t,{Z:()=>c});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal",style:{"z-index":e.zIndex},on:{mousedown:e.backgroundClose}},[t("div",{ref:"container",staticClass:"modal-container",style:e.style},[t("header",{staticClass:"modal-header",on:{mousedown:e.startMove}},[e._t("header",(function(){return[t("h2",[e._v(e._s(e.title))]),t("span",{staticClass:"close",on:{click:e.close}},[t("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),t("main",{staticClass:"modal-content"},[e._t("default")],2),t("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])])},i=[],r=a(37787),n=a(58661);const o={name:"Modal",mixins:[r.Z],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...n.Z.mapState("editor",["hightestModalZIndex"]),style(){let e={width:this.width};return this.minWidth&&(e["min-width"]=this.minWidth),Array.isArray(this.position)&&(e.position="absolute",e.left=this.position[0]+"px",e.top=this.position[1]+"px"),e}},watch:{show:{immediate:!0,handler(e){e?this.open():this.close()}}},methods:{...n.Z.mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(e){"H2"!==e.target.tagName&&(this.dragPosition=[e.clientX,e.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),e.preventDefault(),e.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(e){e.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-e.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-e.clientY)],this.dragPosition=[e.clientX,e.clientY]},escCloseListener(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},backgroundClose(e){e.target===this.$el&&this.close()}}},l=o;var u=a(1001),d=(0,u.Z)(l,s,i,!1,null,null,null);const c=d.exports},88813:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=function(){var e=this,t=e._self._c;return t("Modal",{attrs:{show:e.show,minWidth:"60%",width:"90%",title:e.title},on:{closed:function(t){return e.$emit("closed")}},scopedSlots:e._u([{key:"default",fn:function(){return[0===e.parameters.length?t("p",[e._v("No editable parameters available.")]):t("form",{attrs:{id:"parameterModal"},on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[e._l(e.parameters,(function(a,s){return t("div",{directives:[{name:"show",rawName:"v-show",value:e.toggleParamVisibility(a),expression:"toggleParamVisibility(param)"}],key:s,staticClass:"fieldRow"},[t("label",{class:{fieldLabel:!0,highlight:a.name===e.selectParameter,info:a.info}},[e._v(" "+e._s(e.displayLabel(a))+" "),a.info||a.optional?e._e():t("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]),a.description?t("div",{staticClass:"description"},[t("Description",{attrs:{description:a.description}})],1):e._e()]),a.info?e._e():t("ParameterDataTypes",{ref:a.name,refInFor:!0,attrs:{editable:e.editable,parameter:a,context:e.context,parent:e.parent},on:{schemaSelected:function(t){return e.updateType(a,t)}},model:{value:e.values[a.name],callback:function(t){e.$set(e.values,a.name,t)},expression:"values[param.name]"}}),!a.info&&a.unspecified?t("button",{staticClass:"deleteBtn",attrs:{title:"Delete unspecified parameter",type:"button"},on:{click:function(t){return e.deleteParam(s)}}},[t("i",{staticClass:"fas fa-trash"})]):e._e()],1)})),t("button",{staticStyle:{display:"none"},attrs:{type:"submit"}})],2)]},proxy:!0},e.$listeners.save?{key:"footer",fn:function(){return[t("div",{staticClass:"footer"},[t("button",{staticClass:"save",on:{click:e.save}},[e._v("Save")])])]},proxy:!0}:null],null,!0)})},i=[],r=a(58661),n=a(73466),o=a(79856),l=a(78144);const u={name:"ParameterModal",components:{Modal:n.Z,Description:o["default"],ParameterDataTypes:l["default"]},props:{title:{type:String},parameters:{type:Array},data:{type:Object},editable:{type:Boolean,default:!0},selectParameter:{type:String,default:null},parent:{type:Object,default:null}},data(){return{show:!0,values:r.Z.deepClone(this.data),schemas:{}}},computed:{context(){return{values:this.values,schemas:this.schemas,parameters:this.parameters}}},mounted(){this.$nextTick((()=>this.setSelected()))},methods:{toggleParamVisibility(e){return!e||!e.toggledBy||!!this.context.values[e.toggledBy]},deleteParam(e){let t=this.parameters[e].name;this.$delete(this.parameters,e),this.$delete(this.schemas,t),this.$delete(this.values,t)},updateType(e,t){this.$set(this.schemas,e.name,t)},displayLabel(e){return"string"===typeof e.label&&e.label.length>0?e.label:r.Z.prettifyString(e.name)},save(){try{this.$emit("save",this.values),this.show=!1}catch(e){r.Z.exception(this,e)}},componentforParameter(e){return e&&Array.isArray(this.$refs[e])&&this.$refs[e][0]?this.$refs[e][0]:null},setSelected(e=0){let t;this.selectParameter?t=this.componentforParameter(this.selectParameter):this.parameters.length>0&&(t=this.componentforParameter(this.parameters[0].name)),t&&(t.$el&&t.$el.scrollIntoView?(this.selectParameter&&t.$el.scrollIntoView(),this.setInputFocus(t.$el)):e<10&&setTimeout((()=>this.setSelected(++e)),250))},setInputFocus(e,t=0){if(e.querySelector){let t=e.querySelector('input:not([type="hidden"]):not([disabled]):not([class~="multiselect__input"]), button:not([disabled]), textarea:not([disabled]), select:not([disabled]), datalist:not([disabled])');t&&t.focus()}else t<10&&setTimeout((()=>this.setInputFocus(e,++t)),250)}}},d=u;var c=a(1001),p=(0,c.Z)(d,s,i,!1,null,"294756d2",null);const m=p.exports},10058:(e,t,a)=>{a.r(t),a.d(t,{API_TYPES:()=>i,NATIVE_TYPES:()=>r});var s=a(58661);const i=s.Z.resolveJsonRefs(a(66027)).definitions,r=["string","integer","number","boolean","array","object"]}}]);
//# sourceMappingURL=8813.78821a0b.js.map