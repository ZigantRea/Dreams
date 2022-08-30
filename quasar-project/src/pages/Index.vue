<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
       height="750px"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="../assets/fotke/love/DSC_5150-3.jpg" />
      <q-carousel-slide :name="2" img-src="../assets/fotke/love/DSC_7048.jpg" />
      <q-carousel-slide :name="3" img-src="../assets/fotke/kids/DSC_8312-3.jpg" />
      <q-carousel-slide :name="4" img-src="../assets/fotke/travel/DSC_8710.jpg" />
    </q-carousel>
    <h2>The best of</h2>

    <table>
  <tr>
    <td>
      <div class="container">
      <img src="../assets/fotke/love/DSC_7010.jpg" width="60%" height="100%" class="image" >
      <div class="overlay">
    <div class="text">Love</div>
  </div>
</div>
    </td>
    <td>
      <p>
        is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
         here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

      </p>
    </td>
  </tr>
  <tr>
    <td>
      <p>
        is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
         here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>

</td>
    <td><div class="container">
      <img src="../assets/fotke/kids/DSC_7849-2.jpg" width="60%" height="100%" class="image" >
      <div class="overlay">
    <div class="text">Kids</div>
  </div>
</div></td>
  </tr>
  <tr>
    <td>
      <div class="container">
      <img src="../assets/fotke/boz/DSC_1537.jpg" width="60%" height="100%" class="image" >
      <div class="overlay">
    <div class="text">X-mas</div>
  </div>
</div>
    </td>
    <td>
      <p>
        is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
         here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>

    </td>
  </tr>
</table>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>

<style>

  td{
    text-align: center;
  }

  h2{
    text-align: center;
  }

  .container{
    position: relative;
    width: 100%;
  }

  image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #987A62;
  opacity: 80%;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .5s ease;
}

.container:hover .overlay {
  width: 100%;
}

.text {
  /* white-space: nowrap; */
  color: white;
  font-size: 50px;
  /* font-family:Montserrat; */
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

</style>
