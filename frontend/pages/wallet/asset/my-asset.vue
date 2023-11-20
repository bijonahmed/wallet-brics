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
                        <!-- choose wallet button  -->
                        <div class=" link_home ">
                            <nuxt-link to="/wallet/asset/asset" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class="link_home">
                            <h6>Displayed Assets </h6>
                        </div>
                        <!-- scan icon button part start here  -->
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

                <div class="layer_">
                    <ul style="background-color: #fff; height: 80vh;" class="list_c">
                        <li>
                            <div class="_layer">
                                <button type="button" class="_net_btn">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/currency_icon/brics_umbrala_round.png" class="img-fluid" loading="lazy" alt="">
                                        <div class="text-start">
                                            <p>BRICS</p>
                                            <p style="font-size: 12px; color: #adadad;font-weight: 400;">Balance: 0</p>
                                        </div>
                                    </div>

                                </button>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <button type="button" class="_net_btn">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/currency_icon/usdt.png" class="img-fluid" loading="lazy" alt="">
                                        <div class="text-start">
                                            <p>USDT</p>
                                            <p style="font-size: 12px; color: #adadad;font-weight: 400;">Balance: 0</p>
                                        </div>
                                    </div>

                                </button>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <button type="button" class="_net_btn">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/currency_icon/eth.png" class="img-fluid" loading="lazy" alt="">
                                        <div class="text-start">
                                            <p>ETH</p>
                                            <p style="font-size: 12px; color: #adadad;font-weight: 400;">Balance: 0</p>
                                        </div>
                                    </div>

                                </button>
                            </div>
                        </li>
                        <li>

                            <div class="ex_box">
                                <div class="d-flex justify-content-between">
                                    <h6 style="font-size: 12px;">Show all available tokens </h6>
                                    <div>
                                        <div class="checkboxes__row">
                                            <div class="checkboxes__item">
                                                <label class="checkbox style-e">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__checkmark"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    By default, tokens reported as fraudulent or phishing are hidden. By enabling this
                                    option, all available tokens will be shown instead.
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    </section>
    <Footer />
    <!-- main part end here  -->
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Currency',
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
