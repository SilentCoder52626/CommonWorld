<template>
    <section class="page_404">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-12 text-center">
                        <div class="four_zero_four_bg">
                            <h1 class="text-center ">OFFLINE</h1>
                        </div>
                        <div class="contant_box_404">
                            <h3 class="h2">
                                Look's like you're offline.
                            </h3>
                            <p>Oops! Please check your connection and try again.</p>
                            <a href="" class="link_404">Go to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Offline',
    mounted() {
        this.setOnlineListener()
    },
    methods: {
        setOnlineListener() {
            window.addEventListener('online', this.onlineListener)
        },
        onlineListener() {
            this.$store.commit('setOnlineStatus', true)

            const targetPath = window.location.href.replace(window.location.origin, '')
            const currentPath = this.$route.fullPath
            if (targetPath != currentPath) this.$router.replace(targetPath)
        }
    },
    beforeDestroy() {
        window.removeEventListener('online', this.onlineListener)
    }
}
</script>
<style>
.page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: 'Arvo', serif;
}

.page_404 img {
    width: 100%;
}

.four_zero_four_bg {
    background-image: url('../assets/images/offline.gif');
    height: 400px;
    background-position: center;
}


.four_zero_four_bg h1 {
    font-size: 80px;
}

.four_zero_four_bg h3 {
    font-size: 80px;
}

.link_404 {
    color: #fff !important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;
}

.contant_box_404 {
    margin-top: -50px;
}</style>