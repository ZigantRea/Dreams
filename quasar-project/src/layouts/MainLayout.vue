<template>

  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glava">
        <q-toolbar>

        <!-- prvi stupac -->
        <div class="col">
          <img src="../assets/LOGO.png" width="100px">
        </div>

        </q-toolbar>

        <q-tabs v-model="tab">
        <!-- <img src="../assets/2.png" width="5%"> -->

        <router-link to="/"><q-tab name="images" label="Početna"/></router-link>
        <router-link to="/galeria"><q-tab name="images" label="Galeria"/></router-link>
        <router-link to="/omeni"><q-tab name="images" label="O meni"/></router-link>
        <router-link to="/kontakt"><q-tab name="images" label="Kontakt"/></router-link>
        </q-tabs>
      </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated>
      <meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Font Awesome 5.15.1 CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <q-toolbar>
              <h6>© 2022 Rea Žigant</h6>
        </q-toolbar>
        </q-footer>

  </q-layout>
</template>

<script>

import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('images')
    }
  }
}

</script>

<style>
  a{
    text-decoration: none;
    color: inherit;

  }
  p{
    font-family:monospace;
    text-align: center;
    font-size: large;
  }

  h6{
    font-family:monospace;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;

  }

  .col{
     text-align: center;
     margin-top: 10px;
  margin-bottom: 5px;
  }

.glava{
   width: auto;
  height: auto;
}

td{
    text-align: center;
  }

</style>
