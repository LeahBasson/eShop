<template>
     <div class="card">

<div class="card-header">
 <slot name="cardHeader"></slot>
</div>

<div class="card-body">
  <slot name="cardBody"></slot>
</div>

</div>
</template>

<script>
export default {
  name: 'CardComp' 
}
</script>

<style scoped>
  .card {
    width: 18rem;
    border-radius: 0%;
    border: 2px solid var(--alternative);
    padding: 0;
}

.card-header{
    border-bottom: 2px solid var(--alternative);
}

@media (width < 999px)
{ 
    .card{
  width: 13rem;
  margin: auto;
}
}
</style>