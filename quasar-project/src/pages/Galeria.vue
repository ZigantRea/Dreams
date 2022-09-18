<template>
<div class="container">
  <div v-for="category in this.images" :key="category.name">
    <h4>{{ category.name }}</h4>

    <div class="row">
      <div v-for="url in category.header" :key="url" class="col">
        <q-img :src="url"/>
      </div>
    </div>

    <q-carousel
      swipeable
      animated
      v-model="slide"
      arrows
      thumbnails
      infinite
      v-if="category.carousel.length > 0"
    >
      <q-carousel-slide v-for="(url, i) in category.carousel" :key="i" :name="i" :img-src="url" class="column no-wrap" />

    </q-carousel>

  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import { initializeApp } from 'firebase/app'
import firebaseConfig from 'src/plugins/firebase'
import { getStorage, ref as sref, listAll, getDownloadURL } from 'firebase/storage'

initializeApp(firebaseConfig.data());
const storage = getStorage();

const categoryCollection = new Map();
categoryCollection.set('Kids and Family', 'kids-and-family');
categoryCollection.set('X-Mas', 'x-mas');
categoryCollection.set('Love', 'love');
categoryCollection.set('Komercijalno', 'komercijalno');
categoryCollection.set('Travel', 'travel');

let allImages = [];

function getAllImages () {
  allImages = [];
  for (const category of categoryCollection.keys()) {
    listAll(sref(storage, categoryCollection.get(category)))
      .then(async (res) => {
        const obj = {
          name: category,
          header: [],
          carousel: []
        }

        for (const [i, itemRef] of res.items.entries()) {
          const url = await getDownloadURL(sref(storage, itemRef.fullPath))

          if (i < 3) {
            obj.header.push(url)
          } else {
            obj.carousel.push(url)
          }
        }
        if (obj.header.length > 0) { allImages.push(obj) }
      })
  }
  console.log(allImages)
  allImages.sort((a, b) => (a.name > b.name) ? 1 : -1)
}

export default {
  setup () {
    return {
      slide: ref(0)
    }
  },
  data () {
    return {
      images: allImages
    }
  },
  beforeCreate () {
    getAllImages()
  }
  // name: 'galeria'
};
</script>

<style>

h4 {
   font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
}

.container {
   padding: 10px;
    max-width: 85%;
    margin: 0 auto;
    display: grid;
    grid-gap: 5px;
}

.col {
  padding: 10px;
    max-width: 98%;
    margin: 0 auto;
    display: grid;
    grid-gap: 5px;
}

</style>
