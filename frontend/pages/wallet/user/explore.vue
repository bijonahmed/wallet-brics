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
                            <nuxt-link to="/wallet/user/profile" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Explore</h6>
                        </div>

                        <div class=" link_home">
                            <!-- <button type="button" class="btn_cancle">Save</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- top menu bar end here  -->

    <!-- main part start here  -->
    <section class="main_part ">
        <div class="container-fluid">
            <div class="col-md-12">
                <div class="ex_plore">
                    <h6>Explore</h6>
                    <p>Experience new features in advance and turn them on or off at any time.</p>
                </div>
                <div class="ex_box">
                    <div class="d-flex justify-content-between">
                        <h6>Lite</h6>
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
                        Experience lite low-cost, fast transfer, feature, which can be experienced on the Assets page once it is turned on.
                    </p>
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
        title: 'Explore',
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
