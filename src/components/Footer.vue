<template>
    <footer class="footer-section">
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-left text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved <a
                                    href="http://kamankhadka.com.np">CommonWorld</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
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
    background: #151414;
    width: 100%;
    bottom: 0;
    position: relative;
}

.copyright-area {
    background: #202020;
    padding: 25px 0;
}

.copyright-text p {
    margin: 0;
    font-size: 14px;
    color: #878787;
}

.copyright-text p a {
    color: #ff5e14;
}

.footer-menu li {
    display: inline-block;
    margin-left: 20px;
}

.footer-menu li:hover a {
    color: #ff5e14;
}

.footer-menu li a {
    font-size: 14px;
    color: #878787;
}
</style>