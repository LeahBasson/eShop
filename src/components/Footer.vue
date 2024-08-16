<template>
    <div class="container-fluid">
        <div class="row">
            <p class="lead">
                Skin Oasis <span >&copy; {{ cYear }} </span>
            </p>
        </div>
    </div>
</template>

<script>
  export default {
      name: "FooterComp",
      data(){
          return{
              cYear: new Date().getUTCFullYear()
          }
      }
  }
  </script>