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
                            <nuxt-link to="/wallet/manage/personal-details" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>

                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Add Coin</h6>
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
                <div class="layer">
                    <ul>
                        <li class="">
                            <div class="_layer">
                                <a type="button" class="active add_c">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/currency_icon/btc.png" class="img-fluid" loading="lazy" alt="">
                                        <div>
                                            <p>BTC</p>
                                            <p class="c_name">Bitcoin</p>
                                        </div>
                                    </div>
                                    <i class="fa-solid fa-check"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <a type="button" class=" add_c">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/currency_icon/eth.png" class="img-fluid" loading="lazy" alt="">
                                        <div>
                                            <p>ETH</p>
                                            <p class="c_name">Ethereum</p>
                                        </div>
                                    </div>
                                    <i class="fa-solid fa-check"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <a type="button" class=" add_c">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/currency_icon/react.png" class="img-fluid" loading="lazy" alt="">
                                        <div>
                                            <p>ATOM</p>
                                            <p class="c_name">Cosmos</p>
                                        </div>
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

    <section class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="f_buttons" style="margin-bottom: 80px;">
                        <p>Please add coins under the identity wallet ( multiple choise).</p>
                        <button class="btn_backup" type="button">Confirm</button>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Add Coin',
    },
    components: {
        Loader,
        Footer
    },

    mounted() {
        this.loadingselect();
    },

    methods: {
        successmessage() {
            $(".pass_id").fadeIn();
        },
        loadingselect() {

            $(".loader").fadeOut();
            $(".add_c").click(function () {
                $(this).addClass('active');
            });
        },

    }
};
</script>
