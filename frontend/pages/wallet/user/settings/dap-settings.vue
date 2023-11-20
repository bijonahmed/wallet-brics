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
                            <h6>DApp settings</h6>
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
                <div class="layer settings_">

                    <ul>
                        <li>
                            <div class="_layer">
                                <a href="#" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>DApp Privacy Mode</p>
                                    </div>
                                    <div>
                                        <div class="checkboxes__row">
                                            <div class="checkboxes__item">
                                                <label class="checkbox style-e">
                                                    <input type="checkbox" checked>
                                                    <div class="checkbox__checkmark"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul style="background-color: #fff;">

                        <li>
                            <div class="_layer">
                                <a href="#" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p style="color: red;">Clean Up Network Cache</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul style="background-color: #fff;">

                        <li>
                            <div class="_layer">
                                <a href="#" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p style="color: red;">Disconnect the wallet from Dapps</p>
                                    </div>
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
        title: 'Dap Setting',
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
