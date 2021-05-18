<template>
    <article class="message">
    <div class="message-header" @click="toggleExpand">
        <p>{{title}}</p>
        <p>{{!expanded ? '-' : '+' }}</p>
    </div>
    <div class="message-body" v-if="expanded">
    
        <div>
            <prism-editor class="my-editor" v-model="json_message" :highlight="highlighter" line-numbers></prism-editor>
        </div>
    
    </div>
    </article>
</template>

<script>
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-dark.css'; // import syntax highlighting styles

export default {
    props : ['message','title'],
    data() {
        return {
            expanded : false
        }
    },
    methods : {
        toggleExpand(){
            this.expanded = !this.expanded
        },
        highlighter(code) {
            return highlight(code, languages.js); // languages.<insert language> to return html with markup
        }

    },
    computed : {
        json_message : {
            get(){
                return JSON.stringify(this.message, null, 2)
            },
            set(val){
                this.$emit('updateMessage', val)
            }
        }
    }
}
</script>


<style>
  /* required class */
  .my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }

  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
  }
</style>