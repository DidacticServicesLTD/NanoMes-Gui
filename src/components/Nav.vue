<template>


        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item NanoMes_logo" href="#">
                        NanoMes
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <router-link to="/" class="navbar-item">Home</router-link>
                        <router-link to="/data" class="navbar-item">Data</router-link>
                        <a href="http://172.21.0.1:1340/ui" class="navbar-item">Node-Red</router-link>
                        
                         <!-- <router-link to="/login" class="navbar-item">Login</router-link> -->
                    </div>
                    <!-- <div class="navbar-end">
                        <div class="navbar-item">
                        <a class="button is-light">
                            Cart
                        </a>
                        </div>
                    </div> -->
                </div>
            </div>
        </nav>

</template>




<style scoped>

    @font-face {
        font-family: 'ubuntu_titlingbold';
        src: url('/UbuntuTitling-Bold-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }

    .NanoMes_logo{
        font-family: 'ubuntu_titlingbold';
        font-size:25px;
    }

    .navbar{
        background-color: #FFCD01;
        color:#fff;
    }
    a.navbar-item{
        color: #000;
    }
</style>