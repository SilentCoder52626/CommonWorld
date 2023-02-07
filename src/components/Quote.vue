<template>
    <div class="container text-center">
            <div id="head">
                <h1>Quotes World</h1>
            </div>

            <div class="row textArea">
                <div class="col-sm-3"></div>
                <div class="col-sm-6 well message">
                    <h3 id="quote" v-if="quote"> {{ quote.content }} <br/> - <i> {{ quote.author }}</i></h3>
                    <h3 id="quote" v-else>Generating ...</h3>
                </div>
                <div class="col-sm-3"></div>
            </div>

        <div>
            <button @click="getNewQuote" class="button">New Quotes</button>
        </div>
    </div>

    

</template>
<style scoped>

#head {
    font-family: 'Dancing Script', cursive;
    padding-top: 20px;
}

.button {
    font-family: 'Lobster', cursive;
    font-size: 30px;
    padding: 12px;
    border-radius: 12px;
    background-color: white;
    color: black;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
}

.button:hover {
    background-color: silver;
}
.message{
    background-color: #bebcba;
    

}
.textArea {
    padding-top: 30px;
    padding-bottom: 25px;

}

#quote {
    font-family: 'Droid serif', serif;
    font-style: oblique;
    color: black;
}


</style>
<script>
export default {
    data() {
        return {
            quote: null
        }
    },
    mounted() {
        fetch('https://api.quotable.io/random')
            .then((res) => res.json())
            .then((data) => this.quote = data)
            .catch(e => console.log(e.message));
    },
    methods: {
        getNewQuote() {
            fetch('https://api.quotable.io/random')
                .then((res) => res.json())
                .then((data) => this.quote = data)
                .catch(e => console.log(e.message));
        }
    }
};

</script>