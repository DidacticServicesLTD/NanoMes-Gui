<template>
  <div class="container has-text-centered">

          <!-- <h1 class="title">NanoMes</h1> -->
          <br><br><br><br>
          <div class="hex">NanoMes</div>
          <br><br><br><br><br><br>
          <h2 class="subtitle"><b>An</b> <i>itsy bitsy teenie weenie yellow </i> <b>Manufacturing Execution System</b></h2>
          <br><br><br>
          <a href="https://didacticservices.co.uk"> <h2 class="light">made with <i class="las la-heart"></i> by DSL</h2> </a>



  </div>
</template>

<script>
</script>



<style scoped>



@font-face {
    font-family: 'ubuntu_titlingbold';
    src: url('/UbuntuTitling-Bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}


.light{
  color:#aaa;
  transition: 0.3s;
}
.light:hover{
    color:#666;
    cursor: pointer;
}


.hex:before {
    content: " ";
    width: 0; height: 0;
    border-bottom: 60px solid #FFCD00;
    border-left: 104px solid transparent;
    border-right: 104px solid transparent;
    position: absolute;
    top: -60px;
    left:0px
}

.hex {
    font-family: 'ubuntu_titlingbold';
    margin-top: 0px;
    width: 208px;
    height: 120px;
    background-color: #FFCD00;
    position: relative;
    margin:0 auto;
    font-size:40px;
    padding-top:30px;
    font-weight:bold;
}

.hex:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -60px;
    left:0px;
    border-top: 60px solid #FFCD00;
    border-left: 104px solid transparent;
    border-right: 104px solid transparent;
}
</style>