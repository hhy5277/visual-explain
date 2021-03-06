<template>
  <div class="dft-container">
    <div class="left-panel">
      <div>
        <textarea ref="treeJsonCode" v-model="treeJsonCode"></textarea>
      </div>
      <div>
        <textarea ref="dftCode" v-model="dftCode"></textarea>
      </div>
    </div>

    <div class="right-panel">
      <div class="viz-panel">
        <div id="tree-viz"></div>
        <div id="array-viz"></div>
      </div>
      <div class="control-panel">
        <v-btn @click="startDft">Start DFT</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import TreeEditor from './TreeEditor.vue'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import TreeViz from './tree-viz'
// import ArrayViz from './array-visual'
import ArrayViz from './array-viz'

const dftCode = `export class Dft {
  constructor(rootNode, stepCallback) {
    this.rootNode = rootNode
    this.stepCallback = stepCallback
  }

  start() {
    if (!this.rootNode || !this.stepCallback) {
      return
    }
    const stack = [this.rootNode]
    while (stack.length !== 0) {
      const curNode = stack.pop()
      this.stepCallback(curNode)
      curNode.childrenNodes.forEach(element => {
        stack.push(element)
      })
    }
  }
}`

const treeJsonCode = `{
  "value": 1,
  "childrenNodes": [
    {
      "value": 2,
      "childrenNodes": [
        {
          "value": 4,
          "childrenNodes": []
        },
        {
          "value": 5,
          "childrenNodes": []
        }
      ]
    },
    {
      "value": 3,
      "childrenNodes": [
        {
          "value": 6,
          "childrenNodes": []
        },
        {
          "value": 7,
          "childrenNodes": []
        }
      ]
    }
  ]
}
`

export default {
  name: 'DftExplain',
  components: { 'tree-editor': TreeEditor, 'array-viz': ArrayViz },
  data() {
    return {
      treeJsonCode,
      dftCode,
      jsonCodeMirror: null,
      dftCodeMirror: null,
      arrayViz: null,
      treeViz: null
    }
  },
  methods: {
    initCodeMirror() {
      this.jsonCodeMirror = CodeMirror.fromTextArea(this.$refs.treeJsonCode, {
        mode: 'javascript',
        lineNumbers: true
      })
      this.dftCodeMirror = CodeMirror.fromTextArea(this.$refs.dftCode, {
        mode: 'javascript',
        lineNumbers: true,
        readOnly: true
      })
    },
    startDft() {
      const rootNode = JSON.parse(this.jsonCodeMirror.getValue())
      this.treeViz = new TreeViz(rootNode, 'tree-viz')
      this.treeViz.start()
      this.arrayViz = new ArrayViz([]).domId('array-viz').toText(d => d.value)
      this.arrayViz.start()
      this.treeViz.stack(this.arrayViz).dft()
    }
  },
  mounted() {
    this.initCodeMirror()
  }
}
</script>
<style lang="less">
.dft-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  #update-action-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 100;
  }

  .left-panel {
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;

    > div {
      position: relative;
      width: 100%;
      height: 50%;

      textarea {
        width: 100%;
        height: 100%;
      }

      .CodeMirror {
        width: 100%;
        height: 100%;
        padding: 16px;
        font-family: 'Courier New', Courier, monospace;

        .CodeMirror-code {
          text-align: left;
        }
      }
    }
  }
}
.right-panel {
  width: 50%;
  height: 100%;

  .viz-panel {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;

    #tree-viz {
      width: 65%;
      height: 100%;
    }

    #array-viz {
      width: 35%;
      height: 100%;
    }
  }

  .control-panel {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
