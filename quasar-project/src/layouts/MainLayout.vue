<template>

  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glava">
        <q-toolbar>
        <div class="col">
          <router-link to="/"><q-tab name="images"/>
          <img src="../assets/LOGO.png" width="100px">
        </router-link>
        </div>
        </q-toolbar>

        <q-tabs v-model="tab">
        <!-- <router-link to="/"><q-tab name="images" label="Home"/></router-link> -->
        <router-link to="/galerija"><q-tab name="images" label="Gallery"/></router-link>
        <router-link to="/omeni"><q-tab name="images" label="About me"/></router-link>
        <router-link to="/kontakt"><q-tab name="images" label="Kontact"/></router-link>
        <router-link to="/novo"><q-tab name="images" label="Cloud"/></router-link>
        </q-tabs>
      </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated>
      <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <q-toolbar>
          <h7>© 2022 Rea Žigant</h7>
          <p v-for="n in 145" :key="n">&nbsp;</p>
          <a href="https://www.instagram.com/rea_zigant/" class="fa fa-instagram" style="font-size:100%"></a>
          <a href="https://hr-hr.facebook.com/" class="fa fa-facebook" style="font-size:100%" ></a>
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

  h7{
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

  .fa {
  padding: 10px;

  text-align: left;
  text-decoration: none;
}

.fa:hover {
    opacity: 0.7;
}

.fa-instagram {
  background: #987A62;
  color: white;
}
.fa-facebook {
  background: #987A62;
  color: white;
}

</style>
