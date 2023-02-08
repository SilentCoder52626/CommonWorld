<template>
    <nav class="navbar">
        <div class="container">
            <a class="logo" href="#"><img src="../assets/logo.svg" alt=""></a>
            <div class="pull-right">
                <input type="checkbox" id="toggler" />
                <label for="toggler" class="toggleBtnLabel"><i class="navbar-toggler-icon"></i></label>

                <div class="menu">
                    <ul class="list">
                        <li>
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about">About</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/quote">Quote</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/word-counter">Word Counter</RouterLink>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    </nav>


</template>

<script>

</script>

<style>
ul {
    margin: 0px;
    padding: 0px;
}

.navbar {
    width: 100%;
    position: relative;
    background: #202020;
    margin : 0;
}
.navbar li {
    display: inline-block;
    margin-left: 20px;
}

.navbar li:hover a {
    color: #ff5e14;
}

.navbar li a {
    font-size: 14px;
    color: #878787;
}
.logo {
    margin-right: 10px;
}

.logo img {
    width: 50px;
    padding: 15px 0;
}
.menu {
    padding: 20px 0;
}
.toggleBtnLabel{
    padding-top : 20px;
    position: fixed;
    right: 10vh;
}
.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
  position: relative;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}


#toggler,
.navbar label {
    display: none;
}

@media screen and (max-width: 600px) {
    .menu {
        width: 100%;
        max-height: 0;
        overflow: hidden;
    }

    .list {
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .navbar label {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }

    #toggler:checked~.menu {
        max-height: 100%;
    }
}
</style>