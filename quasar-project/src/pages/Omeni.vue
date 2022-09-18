<template>
 <div class="container">

  <meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Font Awesome 5.15.1 CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="row">
        <div class="col" style=" margin: auto;">
          <h2>About me</h2>
          <!-- redak ime i br. tel -->
          <div class="row" >
            <div class="col" style="text-align: justify">
              <p>Hi,<br>
Welcome to my page.<br>
My name is Rea. I am 21 years old and I come from a small village in Istria.   Maybe just enough information to get started? What do you think? <br>
Let's continue anyway...<br>
I am a student at the "Faculty of Informatics and Digital Technologies" in Rijeka. Yes, I'm studying computer science, but I've always loved colors, tones, shadows and light.
Everything that a photographer encounters on a daily basis.I bought my first camera at the age of 14. I will never forget the feeling of happiness I felt at that moment.
Since then, my love for photography has grown more and more. And now, almost 8 years later, this hobby has turned into a business.<br>
I photograph everything, whatever I need, but I still enjoy photographing children the most. Those little uncorrupted beings give the sweetest smile. When I photograph children and I am a child with them,
that child who will always live in me gets a few minutes of freedom with them, and that makes me happy.<br>
Along with photography, traveling is also my great passion. For me, the most beautiful feeling is being in a place I have not been to before and photographing the scene in front of me.
Sometimes it is a field, sometimes the sea, sometimes people hurrying somewhere, and sometimes an old building from which you can see the passage of time. Whatever scene it is, there is that moment of infinity in my camera. <br>
<br>
And for the end… <br>
 I am a big dreamer and one of my favorite sentences is:<br>
"Some dreams are only dreamed, some come true" <br>and "dreams" is proof of that.</p>
            </div>
          </div>
<!-- -->
          <!-- ikone-->
          <div class="q-pa-md">
            <a href="https://www.instagram.com/rea_zigant/" class="fa fa-instagram" style="font-size:200%" ></a>
            <a href="https://hr-hr.facebook.com/" class="fa fa-facebook" style="font-size:200%" ></a>
          </div>
<!-- fotka -->
        </div>
        <!-- <div class="q-pa-md" style="max-width: 500px">
        <img src="../assets/fotke/DSC_1584-3.jpg" width="120%"/>
        </div> -->
        <div class="q-pa-md" style="max-width: 750px">
        <img  width="100%" src="../assets/fotke/DSC_1584-3.jpg" />
        <img  width="100%" src="../assets/fotke/DSC_1575.jpg" />
        </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'omeni'
};
</script>

<style>
p{
    text-align: center;
}
a{
    text-align: center;
}

.fa {
  padding: 30px;
  font-size: 100px;
  width: 90px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
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
