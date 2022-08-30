<template>
<div class="row">
        <!-- prvi stupac -->
        <div class="q-pa-md" style="max-width: 500px">
        <img  width="100%" src="../assets/fotke/travel/DSC_7543.jpg"/>
        </div>

        <!-- drugi stupac -->
        <div class="col">
          <h1 style="font-size:60px">Contact me</h1>
          <!-- redak ime i br. tel -->
          <div class="row">
            <div class="col">
              <q-input
                filled
                v-model="Ime"
                label="Name*"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
            </div>

            <div class="col">
              <q-input
                filled
                v-model="brojTelefona"
                label="Mobile number*"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
            </div>
          </div>
<!-- -->
          <div class="row">
            <br>
          </div>
          <!-- preziem i ime -->
          <div class="row">
            <div class="col">
              <q-input
                filled
                v-model="prezime"
                label="Surname*"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
            </div>

            <div class="row">

            </div>

            <div class="col">
               <q-input
                filled
                v-model="mail"
                label="E-mail*"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
            </div>
          </div>
<!-- -->
          <!-- poruka-->
          <div class="col">
            <q-input
                filled
                v-model="poruka"
                label="Messige*"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <div class="row">
              <div class="row">
                <q-btn label="Send" color="primary" style="text-align: left"/>
                <q-btn label="Delete" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </div>
          </div>

        </div>
       </div>
</template>

<script>
export default {
  name: 'kontakt'
};
</script>

<style>

  .h2{
    text-align: center;
  }

  .row{
    margin: 5px;
    text-align: left;
  }

</style>
