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
                            <h6>New Address</h6>
                        </div>

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

    <!-- main part end here  -->
    <section class="main_part">
        <div class="container-fluid">
            <div class="col-md-12">
                <div class="layer_ mt-2">
                    <ul>
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/user/address-type" type="button" class="_net_btn">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/currency_icon/btc.png" class="img-fluid" loading="lazy" alt="">
                                        <div>
                                            <p>Bitcoin</p>
                                        </div>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>
                    <div class="in_group mt-2 px-2" style="background-color: #fff; border-radius: 10px;">
                        <input type="text" placeholder="Please input Address" name="" id="">
                        <input type="text" placeholder="Name" name="" id="">
                        <input type="text" placeholder="Description(Optional)" name="" id="">

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
        title: 'Address Book',
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
