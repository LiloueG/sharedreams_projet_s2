<script setup lang="ts">
import { pb } from '../assets/backend.ts'
import { type RecordModel } from 'pocketbase'

const props = defineProps<{
  /** L'enregistrement 'complet' (id, collectionId) de PocketBase */
  record: RecordModel
  /** La valeur du nom de fichier stocké dans la colonne de PocketBase */
  filename: string
  /** La largeur aussi utilisée pour fixer la largeur d'image demandée à PocketBase */
  width?: number | string
  /** La hauteur aussi utilisée pour fixer la hauteur d'image demandée à PocketBase */
  height?: number | string
  /** Pour fixer manuellement les paramétres de redimensitionnement de PocketBase \
   * https://pocketbase.io/docs/files-handling/#file-url
   */
  thumb?: string
}>()


const src = pb.getFileUrl(props.record.expand.user, props.record.expand.user.avatar, {'thumb': '100x250'});
console.log(props.record.expand.user)

</script>
<template>
  <img :src="src" :width="width" :height="height"/>
</template>