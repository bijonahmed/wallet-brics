<template>
<div>
    <center><Loader/></center>
    <IntroComponents /> <!-- Use the correct component tag here -->

</div>
</template>

<script>
import IntroComponents from '~/components/IntroComponents.vue';  
import Loader from '~/components/Loader.vue'; 
export default {
    components: {
        IntroComponents, 
        Loader,
    },
};
</script>
