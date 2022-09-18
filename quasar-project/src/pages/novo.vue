<template>
  <div class="q-pa-md q-gutter-md" width="100%">
    <div class="row justify-between" >

    <q-parallax :height="700" :speed="0.5"
      src="../assets/fotke/travel/Artboard 1.jpg"
    >
    <q-form @submit="submit" class="q-gutter-md">
      <div class="q-pa-md">

        <div class="q-gutter-md" style="max-width: 400px">
          <q-select filled v-model="image.category" :options="categories" label="Category" />
        </div>

        <div class="q-gutter-md" style="max-width: 400px">
          <q-file color="teal" filled v-model="image.files" multiple label="Photo" style="text-align: center;">
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>
        </div>

      </div>
      <q-btn label="Submit" type="submit" style="text-align: left" color="primary" />
    </q-form>
    </q-parallax>
    </div>
  </div>
</template>

<script>

// import { createKidsAndFamily } from 'src/firebase';
// import { reactive } from 'vue';
// import db from 'src/plugins/firebase'
import { initializeApp } from 'firebase/app';
import firebaseConfig from 'src/plugins/firebase'
import { getStorage, ref, uploadBytes } from 'firebase/storage';

initializeApp(firebaseConfig.data());
const storage = getStorage();

const categoryCollection = new Map();
categoryCollection.set('Kids and Family', 'kids-and-family');
categoryCollection.set('X-Mas', 'x-mas');
categoryCollection.set('Love', 'love');
categoryCollection.set('Komercijalno', 'komercijalno');
categoryCollection.set('Travel', 'travel');

export default {
  data () {
    return {
      image: {
        category: '',
        files: undefined
      },
      categories: [
        'Kids and Family',
        'X-Mas',
        'Love',
        'Komercijalno',
        'Travel'
      ]
    }
  },
  methods: {
    async submit () {
      try {
        for (const file of this.image.files) {
          console.log(file)
          await uploadBytes(ref(storage, categoryCollection.get(this.image.category) + '/' + file.name), file).then((snapshot) => {
            console.log('Uploaded an image!');
          });
          this.$router.push('galerija');
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>
