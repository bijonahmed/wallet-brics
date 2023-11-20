<template>
<div>

    <div class="first_content">
        <div class="f_slider owl-carousel">
            <div class="">
                <img src="/images/slider_demo.jpg" class="img-fluid" loading="lazy" alt="">
            </div>
            <div class="">
                <img src="/images/slider_demo.jpg" class="img-fluid" loading="lazy" alt="">
            </div>
            <div class="">
                <img src="/images/slider_demo.jpg" class="img-fluid" loading="lazy" alt="">
            </div>
            <div class="">
                <img src="/images/slider_demo.jpg" class="img-fluid" loading="lazy" alt="">
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="log_sign">
            <div class="add_identity ">
                <nuxt-link to="/privacy-alert">
                    <div>
                        <h6>Create identity </h6>
                        <p>To open new multi-chain wallets</p>
                    </div>
                    <i class="fa-solid fa-chevron-right" style="color: #cdd0d6;"></i>
                </nuxt-link>
            </div>
            <div class="add_identity ">
                <nuxt-link to="/recover-identity" style="border: none;">
                    <div>
                        <h6>Recover identity </h6>
                        <p>To access existing wallets</p>
                    </div>
                    <i class="fa-solid fa-chevron-right" style="color: #cdd0d6;"></i>
                </nuxt-link>
            </div>
        </div>
        <a href="#" class="p_link"><i class="fa-solid fa-circle-info"></i>How to migrate from brics Token?</a>
    </div>
</div>
</template>

<script>
export default {
    name: 'IntroComponents', // Make sure the name is specified
     
    mounted() {
        // Initialize Owl Carousel
        this.$nextTick(() => {
            $(".f_slider").owlCarousel({
                loop: true,
                items: 1,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
            });
        });
    }
};
</script>
