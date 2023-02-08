<template>
    <footer class="footer-section">
        <div class="container">

            <div class="copyright-text pull-left">
                <p>Copyright &copy; 2023, All Right Reserved <a href="http://kamankhadka.com.np">CommonWorld</a></p>
            </div>

            <div class="pull-right">
                <div class="footer-menu">
                    <ul>
                        <li>
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#">Terms</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#">Privacy</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#">Policy</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
</template>

<style>
ul {
    margin: 0px;
    padding: 0px;
}

.footer-section {
    background: #202020;
    width: 100%;
    bottom: 0;
    position: relative;
}


.copyright-text p {
    margin: 0;
    font-size: 14px;
    color: #878787;
    padding: 20px 0;

}

.copyright-text p a {
    color: #ff5e14;
}

.footer-menu li {
    display: inline-block;
    margin-left: 20px;
}

.footer-menu {
    padding: 20px 0;
}

.footer-menu li:hover a {
    color: #ff5e14;
}

.footer-menu li a {
    font-size: 14px;
    color: #878787;
}
</style>