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
                    <div class="top_bar_home d-flex">
                        <!-- choose wallet button  -->
                        <div class="link_home">
                            <nuxt-link to="/wallet/user/profile" class="" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class="link_home">
                            <h6>About Us </h6>
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <!-- <button type="button" class="btn_cancle">Save</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- top menu bar end here  -->

    <!-- app image part start here  -->
    <section class="app_version">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="app_v_box">
                        <div class="version_text">
                            <img src="/images/currency_icon/brics_umbrala_round.png" class="img-fluid" loading="lazy" alt="">
                            <h4>BRICS</h4>
                            <p>v1.0.0.0.0.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- app image part end here  -->

    <!-- about option part start here  -->
    <section class="ab_option">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <ul>
                        <li>
                            <a href="#">
                                <div class="ab_box">
                                    <div>
                                        <h5>Rate us</h5>
                                        <p>Please review us on Google play</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="ab_box">
                                    <div>
                                        <h5>Version History</h5>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-angle-right"></i>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="ab_box">
                                    <div>
                                        <h5>Version Update</h5>
                                    </div>
                                    <div>
                                        <!-- <i class="fa-solid fa-angle-right"></i> -->
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- about options part end here  -->

    <!-- official channel part start here  -->
    <div class="officail_channel">
        <div class="container-fluid">

            <div class="row">


                <div class="col-md-12">
                    <h5>Official channel</h5>
                    <div class="offi_channel_list">
                        <div class="row">
                            <div class="col-3">
                                <div class="channel_box">
                                    <a href="#">
                                        <img src="/images/currency_icon/brics_umbrala_round.png" class="img-fluid" loading="lazy" alt="">
                                        <h6>Official Website</h6>
                                    </a>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="channel_box">
                                    <a href="#">
                                        <img src="/images/currency_icon/brics_umbrala_round.png" class="img-fluid" loading="lazy" alt="">
                                        <h6>Official Website</h6>
                                    </a>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="channel_box">
                                    <a href="#">
                                        <img src="/images/currency_icon/brics_umbrala_round.png" class="img-fluid" loading="lazy" alt="">
                                        <h6>Official Website</h6>
                                    </a>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="channel_box">
                                    <a href="#">
                                        <img src="/images/currency_icon/brics_umbrala_round.png" class="img-fluid" loading="lazy" alt="">
                                        <h6>Official Website</h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- official channel part end here  -->
    <Footer/>

</div>
</template>


<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'About',
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