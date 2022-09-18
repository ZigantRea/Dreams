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
      @mouseleave="autoplay = true">
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
      <img src="../assets/fotke/love/DSC_7010.jpg" width="80%" height="100%" class="image" >
      <div class="overlay">
    <div class="text">Love</div>
  </div>
</div>
    </td>
    <td>
      <p>
        “Photography takes an instant out of time, altering life by holding it still.” <br>
        By Dorothea Lange

      </p>
    </td>
  </tr>
  <tr>
    <td>
      <p>
        “Every memory is precious. It is more precious when it is a memory of a baby’s smile.”
        <br> By Debasish Mridha
      </p>

</td>
    <td><div class="container">
      <img src="../assets/fotke/kids/DSC_7849-2.jpg" width="80%" height="100%" class="image" >
      <div class="overlay">
    <div class="text">Kids</div>
  </div>
</div></td>
  </tr>
  <tr>
    <td>
      <div class="container">
      <img src="../assets/fotke/love/DSC_9018-2.jpg" width="80%" height="100%" class="image" >
      <div class="overlay">
    <div class="text">Moment</div>
  </div>
</div>
    </td>
    <td>
      <p>
        “When you photograph people in color, you photograph their clothes. But when you photograph people in black and white, you photograph their souls!”
        <br> By Ted Grant
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
  color: white;
  font-size: 50px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

</style>
