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
                            <h6>Network detection </h6>
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
                <div class="net_detection">
                    <div class="top_net_detection">
                        <h6>Application detection</h6>
                        <p>Copy the following information and paste it into your message to our support team.</p>
                    </div>
                    <ul>
                        <li>
                            <div class="net_details">
                                <h5>App version and device model</h5>
                                <p>android:2.13.3.39</p>
                            </div>
                        </li>
                        <li>
                            <div class="net_details">
                                <h5>Operation</h5>
                                <p>android 10</p>
                            </div>
                        </li>
                        <li>
                            <div class="net_details">
                                <h5>Browser</h5>
                                <p>Mojila/5.0 iuyiw343jhase rhw432hrdnfaiperqrqandefaiod f44jarfp43234 jwfrwqeroqerqw
                                    343 </p>
                            </div>
                        </li>
                        <li>
                            <div class="net_details">
                                <h5>Language</h5>
                                <p>en-US </p>
                            </div>
                        </li>
                        <li>
                            <div class="net_details">
                                <h5>IP address</h5>
                                <p>191.0142.006.005 - 105.159.186.124 - 255.255.255.0</p>
                            </div>
                        </li>
                        <li>

                        <li>
                            <div class="net_details">
                                <h5>Response time</h5>
                                <p>token.brics.token.im-738.70ms</p>
                                <p>tokenlon.brics.token.im-718.90ms</p>
                            </div>
                        </li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <section class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="f_buttons">
                        <button class="btn_backup" type="button">Copy page info</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Network Detection',
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
