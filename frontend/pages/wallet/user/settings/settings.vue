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
                            <h6>Settings</h6>
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

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/user/manage-wallet" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>Tuch Id</p>
                                    </div>
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
                                </nuxt-link>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <a href="#" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>Hide Balance</p>
                                    </div>
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
                                </a>
                            </div>
                        </li>
                    </ul>

                    <p style="font-size: 12px;" class="mt-3">Activation of Privacy Mode will hide asset balance</p>
                    <ul style="background-color: #fff;" class="mt-0 pt-0">
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/user/settings/language" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>Language </p>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <p>English</p>
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </div>
                                </nuxt-link>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/user/settings/currency" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>Currency </p>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <p>USD</p>
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </div>
                                </nuxt-link>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/user/settings/network" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>Network settings</p>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </div>
                                </nuxt-link>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/user/settings/dap-settings" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>DApp settings </p>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </div>
                                </nuxt-link>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/user/settings/network-detection" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>Network detection </p>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </div>
                                </nuxt-link>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->
<Footer/>
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Setting',
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
