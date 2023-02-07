<template>
    <div class="container text-center">
        <h1>Word Counter</h1>
        <br />
        <textarea v-model="message" class="message" cols="100" rows="15" placeholder="Enter a message"></textarea>
        <p>
            <span>{{ wordCount }}</span> words |
            <span> {{ characterCount }}</span> characters
        </p>
    </div>
</template>

<style>
.message {
    border: 2px solid deepskyblue;
    border-radius: 7px;
    padding: 8px;
    margin-top: 4px;
    background-color: #BEBCBA;
    outline: none;
}
</style>

<script>

export default {
    data() {
        return {
            message: ''
        }
    },
    computed: {
        characterCount() {
            return this.message.length
        },
        wordCount() {
            let spiltedData = this.message.split(" ");
            return spiltedData.filter(a=> a != "").length;
        }
    }
};
</script>