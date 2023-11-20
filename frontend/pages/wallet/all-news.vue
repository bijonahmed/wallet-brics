<template>
<div>
    <!-- top menu bar start here  -->
    <section class="top_bar">
        <div class="container-fluid">
            <div class="row">
                <center>
                    <Loader />
                </center>
                <div class="col-md-12">
                    <div class="top_bar_home ">

                        <div class=" link_home ">
                            <nuxt-link to="/wallet/news">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>
                        </div>

                        <div class=" link_home">
                            <h6>dYdX</h6>
                        </div>

                        <div class=" link_home">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- top menu bar end here  -->

    <!-- main part start here  -->
    <section class="main_part">
        <div class="container-fluid">
            <div class="col-md-12">
                <div class="content_slider ">
                    <div>
                        <a href="#">
                            <div class="c_list">
                                <div>
                                    <img src="/images/currency_icon/brics_icon.png" class="img-fluid" loading="lazy" alt="">
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
                                    <img src="/images/currency_icon/brics_icon.png" class="img-fluid" loading="lazy" alt="">
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
    </section>
    <!-- main part end here  -->
    <Footer />

</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'All News',
    },
    components: {
        Loader,
        Footer
    },

    mounted() {

    },

    methods: {

    }
};
</script>

<style>

    </style>
