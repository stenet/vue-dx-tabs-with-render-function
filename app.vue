<script setup lang="ts">
import 'devextreme/dist/css/dx.light.css';
</script>

<template>
  <ClientOnly>
    <div class="dx-viewport">
      <MyTab>
        <MyTabPage key="p1" title="Page 1">
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
        </MyTabPage>

        <MyTabPage key="p2" title="Page 2"> Content 2 </MyTabPage>

        <MyTabPage key="p3" title="Page 3"> Content 3 </MyTabPage>
      </MyTab>
    </div>
  </ClientOnly>
</template>
