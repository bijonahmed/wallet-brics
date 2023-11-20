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
                        <div class=" link_home " style="width: 30px;">
                            <nuxt-link to="/wallet/wallet-dashboard">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class=" link_home" style="width: 100%;">
                            <div class="s_collapse" style="width: 100%;">
                                <form action="" class="p-0 m-0" style="width: 100%;">
                                    <input type="text" placeholder="Input token name" style="border-radius: 20px;" name="" id="">
                                    <button type="button">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </button>

                                </form>
                            </div>
                        </div>
                        <!-- scan icon button part start here  -->
                        <!-- <div class=" link_home">
                            <a href="notification.html" type="button" ><i name="notifications-outline"></i></a>
                        </div> -->
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
                                <nuxt-link to="/wallet/asset/display-asset" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>Displayed Assets</p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </nuxt-link>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/asset/my-asset" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>All My Assets </p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>

                    <!-- title  -->
                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>Popular Assets</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul style="background-color: #fff;" class="list_c">
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
        title: 'Asset',
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
