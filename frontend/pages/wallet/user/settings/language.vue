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
                            <nuxt-link to="/wallet/user/settings/settings" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Language</h6>
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <button type="button" class="btn_cancle">Save</button>
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
                <div class="layer settings_">

                    <ul style="background-color: #fff;" class="mt-0 pt-0">
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>English </p>
                                    </div>
                                    <i class="fa-solid fa-check"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn ">
                                    <div class="d-flex align-items-center">
                                        <p>Bengali </p>
                                    </div>
                                    <i class="fa-solid fa-check"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn ">
                                    <div class="d-flex align-items-center">
                                        <p>Hindi </p>
                                    </div>
                                    <i class="fa-solid fa-check"></i>
                                </a>
                            </div>
                        </li>

                    </ul>

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
        title: 'Language',
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
