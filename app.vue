<template>
  <div class="min-h-screen flex flex-col bg-backGround1">
    <!-- Header -->
    <div class="relative">
      <TheHeading></TheHeading>
    </div>
    <div class=" mt-[60px] min-h-[80vh] pb-2">
      <!-- body -->
      <NuxtPage />
    </div>
    <!-- footer -->
    <div>
      <TheFooter></TheFooter>
    </div>
  </div>
</template>
