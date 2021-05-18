<template>

  <!-- <div class="SystemInfo">
    <h1>This is an SystemInfo page</h1>
  </div> -->

  <h1 class="h1 title">System Info </h1>

  <nav class="level">
  <div class="level-item has-text-centered level-item-dark">
    <div>
      <p class="heading">IP Address</p>
      <p class="title"> 172.21.0.101 </p>
    </div>
  </div>
    <div class="level-item has-text-centered level-item-yellow">
    <div>
      <p class="heading">GUI</p>
      <p class="title"> :1337 </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">API (HTTP)</p>
      <p class="title"> :1338 </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">API (UDP)</p>
      <p class="title"> :1339 </p>
    </div>
  </div>

</nav>




<div class="content">

  <delim></delim>

  <h1>About</h1>
  <p>
    Nanomes, is a small, but powerful MES system, designed to interface with both physical and simulated systems <br>
    It is capable of placing and managing orders to a system, showing the current state of the product, and also showing historical data.<br><br>
    The system is designed to be easy to modify, so can be tailored to a wide range of use cases
     
    The Application is comprised of two parts, a front-end <b>GUI</b> and a back-end <b>API</b> <br><br> 
  </p>

  <delim></delim>

  <div class="columns">
    <div class="column">

      <h3>GUI</h3>
      <p> 
        The <b>GUI</b> is the graphical front end of the system. ( It is the part you are looking at right now! )  <br>
        From the front-end, we are able to see, update, edit or delete data in the system. This is the way by which most users will interact with the MES. <br>
        Because the front-end of NanoMes is built using web technologies, it is avaliable from the computers web browser, or any connected mobile or tablet.
      </p>

    </div>
    <div class="column">

      <img src="http://localhost:1337/browser_gui.png">

    </div>
  </div>


    <delim></delim>


   <div class="columns">
    <div class="column">

      <h3>API (HTTP)</h3>
      <p> 
        The <b>API</b> is the data-driven back end of the system. <br>
        The <b>GUI</b> talks to the <b>API</b>, in order to get information about the current orders, station status, or database information <br><br>
        For example, we can draw a pretty message box on our GUI, using data from our API:<br><br>
      </p>

    </div>
    <div class="column">

<pre class="code">{
&nbsp;&nbsp;"name": "Hello",
&nbsp;&nbsp;"message": "Hello (api), NanoMes"
}</pre>



      <article class="message is-warning">
          <div class="message-header">
            <p>Hello</p>
          </div>
          <div class="message-body">
            Hello (api), NanoMes
          </div>
        </article>

    </div>
  </div>


    <delim></delim>

  

    <div class="columns">
      <div class="column">

          <h3>API (UDP)</h3>
          <p> 
            To allow the communication between NanoMes and PLC's, there is also a UDP API Avaliable.<br>
            The UDP API can expose any properties of the API over UDP, but is less detailed than the HTTP API<br>
            Message/Response strings should not exceed 256 charecters
            The UDP API is acyclic
          </p>

      </div>
      <div class="column">  
        <p>
          Message from PLC to API : <br>
          <pre class="code"><b>#command</b>=getStationInfo<b>#station-uuid</b>=13e516d5-b496-4503-a55a-453d4daecfe5</pre>
          Response from API to PLC : <br>
          <pre class="code"><b>#station_name</b>=Distribution<b>#station_ipaddress</b>=172.21.1.1<b>#station_status</b>=1</pre>
        </p>
      </div>
    </div>

    
    <delim></delim>

    <h3>API (UDP) Expanded</h3>
    <div>
      #command=getStationInfo#station_uuid=example-uuid
    </div>
  
</div>
  




</template>


<style scoped>

.code{
  background-color: #444;
  color:#fff;
  border-radius:3px;
}

.level-item{
  background-color: #ccc;
  margin:10px;
  padding:10px;
  border-radius: 5px;
}

.level-item-dark{
  background-color: #333;
}
.level-item-yellow{
  background-color: #FFCD00;
}

.level-item-dark .title{
  color:#fff !important;
}
.level-item-dark .heading{
  color:#fff !important;
}

delim{
  background-color: #ccc;
  height:1px;
  width:100%;
  display: inline-block;
  margin:30px;
}

</style>