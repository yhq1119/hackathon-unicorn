// google map
<template>
    <div>
<GmapMap
  :center="{lat: -37.7862363, lng:144.94741779999998}"
  :zoom="7"
  map-type-id="terrain"
  style="width: auto; min-height: 500px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>