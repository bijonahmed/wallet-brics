<template>
<div>

    <!-- main part start here  -->
    <section class="main_part" style="overflow: auto; height: 90vh;">
        <div class="container-fluid">
            <center>
                <Loader />
            </center>
            <div class="col-md-12">
                <div class="banner_slider owl-carousel">
                    <div class="img_box">
                        <a href="#">
                            <img src="/images/slider_demo.jpg" class="img-fluid" loading="lazy" alt="">
                        </a>
                    </div>

                    <div class="img_box">
                        <a href="#">
                            <img src="/images/slider_demo.jpg" class="img-fluid" loading="lazy" alt="">
                        </a>
                    </div>
                </div>
                <div class="search_sec">
                    <form action="">
                        <div class="input_box">
                            <input type="text" placeholder="Search or input url" class="img-fluid">
                            <i class="search_ico fa-solid fa-magnifying-glass"></i>
                            <nuxt-link to="/wallet/scan">
                                <i class="fa-solid fa-expand scan_ico"></i>
                            </nuxt-link>
                        </div>
                    </form>
                </div>
                <div class="m_pop">
                    <div class="d-flex align-items-center m_pop_top">
                        <button class="btn_cancle active" style="color: #000;">Lists</button>

                        <button class="btn_cancle" style="color: #000;">Recently </button>
                    </div>

                    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="x_button">
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            <a href="#" class="d-flex align-items-center justify-content-between">
                                <div>
                                    <i class="fa-solid fa-file-lines"></i>
                                </div>
                                <div>
                                    <p>How to bookmark your website</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mt-3 mt_pop">
                        <button class="btn_cancle active" style="color: #000;">ETH</button>

                        <button class="btn_cancle" style="color: #000;">EOS </button>
                        <button class="btn_cancle" style="color: #000;">TRON </button>
                    </div>

                    <!-- content slider  -->
                    <div class="n_content">
                        <div class="cont_title">
                            <h6>Recommended</h6>
                            <nuxt-link to="/wallet/all-news">All</nuxt-link>
                        </div>
                        <div class="content_slider owl-carousel ">
                            <div>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/brics_umbrala_round.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/react.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/btc.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/brics_umbrala_round.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/react.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/btc.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- content slider  -->
                    <div class="n_content">
                        <div class="cont_title">
                            <h6>DeFi</h6>
                            <nuxt-link to="/wallet/all-news">All</nuxt-link>
                        </div>
                        <div class="content_slider owl-carousel ">
                            <div>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/brics_umbrala_round.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/react.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/btc.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/brics_umbrala_round.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/react.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="c_list">
                                        <div>
                                            <img src="/images/currency_icon/btc.png" class="img-fluid" loading="lazy" alt="">
                                        </div>
                                        <div>
                                            <h6>dYdX</h6>
                                            <p>The world's leading decentrallized perpetuals exchange</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <!-- footer part start here  -->
    <Footer />
    <!-- end foter part  -->
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'News',
    },
    components: {
        Loader,
        Footer
    },

    mounted() {
        // Initialize Owl Carousel
        this.$nextTick(() => {
            $(".banner_slider").owlCarousel({
                items: 1,
                dots: false,
                nav: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: false
            });
            $(".owl-carousel").owlCarousel({
                items: 1,
                dots: false,
                nav: false,
                loop: true,
            });
        });
    },

    methods: {

    }
};
</script>

<style>

</style>
