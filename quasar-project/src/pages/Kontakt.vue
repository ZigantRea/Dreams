<template>
  <div class="row">
          <!-- prvi stupac -->
          <div class="q-pa-md" style="max-width: 500px">
          <img  width="100%" src="../assets/fotke/love/DSC_7105-3.jpg"/>
          </div>
          <!-- drugi stupac -->
          <div class="col">
            <q-form @submit="submit" class="q-gutter-md" style="width: 100%">
            <h1 style="font-size:60px">Contact me</h1>
            <!-- redak ime i br. tel -->
            <div class="row">
              <div class="col">
                <q-input
                filled
                v-model="kontakt.naslov"
                label="Title*"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type title']"
              />
              </div>
              <div class="col">
              </div>
            </div>
  <!-- -->
            <div class="row">
              <br>
            </div>
            <!-- preziem i ime -->
            <div class="row">
              <div class="col">
              </div>
              <div class="row">
                </div>
              <div class="col">
              </div>
            </div>
  <!-- -->
            <!-- poruka-->
            <div class="col">
              <q-input
                filled
                v-model="kontakt.poruka"
                label="Messige*"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type messige']"
              />
                <div class="row">
                <div class="row">
                  <q-btn label="Send" color="primary" style="text-align: left" type="submit" />
                <q-btn label="Delete" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </div>
            </div>
          </q-form>
          </div>
         </div>
  </template>
<script>
export default {
  name: 'kontakt',
  data () {
    return {
      kontakt: {
        naslov: '',
        poruka: ''

      }
    }
  },
  methods: {
    submit () {
      console.log(this.kontakt)
      window.open('mailto:fotke.rea@gmail.com?subject=' + this.kontakt.naslov + '&body=' + this.kontakt.poruka)
    }
  }

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
