const s={};function d(n=s){let e=null;const o=Vue.ref(null);function l(){if(o.value)return e=MonacoEditor.editor.create(o.value,{model:MonacoEditor.editor.createModel("",n.language),minimap:{enabled:!0},multiCursorModifier:"ctrlCmd",scrollbar:{verticalScrollbarSize:8,horizontalScrollbarSize:8},lineNumbers:"on",tabSize:2,fontSize:16,autoIndent:"advanced",automaticLayout:!0,language:n.language,renderLineHighlight:"gutter",folding:!0,roundedSelection:!1,foldingHighlight:!0,foldingStrategy:"indentation",showFoldingControls:"always",disableLayerHinting:!0,emptySelectionClipboard:!1,selectionClipboard:!1,codeLens:!0,scrollBeyondLastLine:!1,colorDecorators:!0,accessibilitySupport:"on",lineNumbersMinChars:5,...n}),e}async function a(){var t;await((t=e==null?void 0:e.getAction("editor.action.formatDocument"))==null?void 0:t.run())}function r(t){Vue.nextTick(()=>{i(MonacoEditor.editor.EditorOption.readOnly)&&u({readOnly:!1}),e==null||e.setValue(t),setTimeout(async()=>{await a()},10)})}function u(t){e==null||e.updateOptions(t)}function i(t){return e==null?void 0:e.getOption(t)}function c(){return e}return Vue.onBeforeUnmount(()=>{e&&e.dispose()}),{monacoEditorRef:o,createEditor:l,getEditor:c,updateVal:r,updateOptions:u,getOption:i,formatDoc:a}}const f=Vue.defineComponent({__name:"index",props:{language:{},value:{},readonly:{type:Boolean,default:!1}},setup(n){const{value:e,language:o,readonly:l}=n,{monacoEditorRef:a,createEditor:r}=d({language:o,value:e,readOnly:l});return Vue.onMounted(()=>{a.value&&r()}),(u,i)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"border-[2px] border-cyan-400 flex-1 rounded-md overflow-auto",ref_key:"monacoEditorRef",ref:a},null,512))}}),p=Vue.defineComponent({__name:"scss-page",setup(n){return(e,o)=>(Vue.openBlock(),Vue.createBlock(f,{language:"scss",value:"html{}"}))}}),m=Vue.createElementVNode("div",{class:"text-2xl mb-6"},"Scss 转 CSS(未完成)",-1),g={class:"shadow-2xl border rounded-xl w-full h-full max-w-[1440px] p-4 flex gap-4"},_=Vue.defineComponent({__name:"index",setup(n){const e=Vue.ref("");return(o,l)=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[m,Vue.createElementVNode("div",g,[Vue.createVNode(p,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a)},null,8,["modelValue"])])],64))}});export{_ as default};
