<template>
  <pannel class="infoView manager-pannel" v-auto-height="100">
    <mars-tree
      checkable
      :tree-data="treeData"
      v-model:expandedKeys="expandedKeys"
      v-model:checkedKeys="checkedKeys"
      @check="checkedChange"
    >
      <template #title="{ title }">
        <span>{{ title }}</span>
      </template>
    </mars-tree>
  </pannel>
</template>
<script lang="ts" setup>
import Pannel from "@/components/marsgis/pannel.vue"
import { ref } from "vue"
import * as mapWork from "./map.js"

const treeData = ref<any[]>([])

const expandedKeys = ref<string[]>([])

const checkedKeys = ref<string[]>([])

const layersObj: any = {}

mapWork.eventTarget.on("loadOK", () => {
  initTree()
})

const checkedChange = (keys: string[]) => {
  Object.keys(layersObj).forEach((k) => {
    const show = keys.indexOf(k) !== -1
    const layer = layersObj[k]
    layer.show = show
    if (show) {
      if (!layer.isAdded) {
        window.mapWork.map.addLayer(layer)
      }
      layer.flyTo()
    } else {
      // if (layer.isAdded) {
      //   map.removeLayer(layer)
      // }
    }
  })
}

function initTree() {
  const layers = window.mapWork.map.getLayers({
    basemaps: true, // 是否取config.json中的basempas
    layers: true // 是否取config.json中的layers
  })

  // 遍历出config.json中所有的basempas和layers
  for (let i = layers.length - 1; i >= 0; i--) {
    const layer = layers[i]
    if (layer && layer.pid === -1) {
      const node: any = {
        title: layer.name,
        key: layer.uuid,
        id: layer.id,
        pId: layer.pid,
        uuid: layer.uuid
      }
      node.children = findChild(node, layers)
      treeData.value.push(node)
      layersObj[layer.uuid] = layer
      expandedKeys.value.push(node.key)
    }
  }
}

function findChild(parent: any, list: any[]) {
  return list
    .filter((item: any) => item.pid === parent.id)
    .map((item: any) => {
      if ((item.pid = parent.id)) {
        const node: any = {
          title: item.name,
          key: item.uuid,
          id: item.id,
          pId: item.pid,
          uuid: item.uuid
        }
        layersObj[item.uuid] = item
        if (item.hasChildLayer) {
          node.children = findChild(node, list)
        }
        if (item.isAdded && item.show) {
          checkedKeys.value.push(node.key)
        }
        return node
      }
    })
}
</script>

<style scoped lang="less">
.manager-pannel {
  width: 220px;
  overflow-y: auto;
}
:deep(.ant-form-item) {
  margin-bottom: 10px;
}
</style>