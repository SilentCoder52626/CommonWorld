<script>
export default {
    data() {
        return {
            IsShowMoreClicked: false
        }
    },
    props: ['ShortDescription'],
    methods: {
        ToogleShowMore() {
            if (this.IsShowMoreClicked) return this.IsShowMoreClicked = false;
            return this.IsShowMoreClicked = true;
        }
    },
}
</script>
<template>
    <p v-if="this.ShortDescription.length < 150">{{ this.ShortDescription }}</p>
    <p v-else-if="this.IsShowMoreClicked">{{ this.ShortDescription }} &nbsp; &nbsp;<b @click="ToogleShowMore()" class="link-custom">
            Show Less.</b></p>
    <p v-else>{{ this.ShortDescription.substring(0, 150) }}...&nbsp;&nbsp;<b @click="ToogleShowMore()"
            class="link-custom">Show More.</b></p>
</template>