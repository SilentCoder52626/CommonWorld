<template>
    <nav class="navbar">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 text-left text-lg-left">
                    <a href="#" class="logo">COMMON</a>
                </div>
                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <input type="checkbox" id="toggler" />
                    <label for="toggler"><i class="ri-menu-line"></i></label>
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
    padding: 25px 0;
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