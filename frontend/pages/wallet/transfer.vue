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
                            <nuxt-link to="/wallet/wallet-dashboard" class="" type="button">
                                <i class="fa-chevron-left fa-solid"></i>
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class="link_home">
                            <h6>ETH Transfer</h6>
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <nuxt-link to="/wallet/scan" class="" type="button">
                                <i class="fa-solid fa-qrcode"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- top menu bar end here  -->

    <!-- home content part start here  -->
    <section class="wallet_select">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="tr_money">
                        <h6>To</h6>
                        <input type="text" placeholder="Transfer address ">
                        <h6>amount</h6>
                        <input type="number" placeholder="0">
                        <input type="text" placeholder="Memo" name="" id="">
                        <h6>Minor fee</h6>
                        <div class="fee_list">
                            <h6>Estimated range <span>Refresh in 7s</span> </h6>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5>$0.16 ~ $0.20</h5> <a href="">Standard <i class="fa-chevron-right "></i></a>
                            </div>
                            <p>0.000116~0.0001209ETH</p>
                            <div class="alert alert-primary d-flex align-items-center justify-content-between mt-2 p-2" style="font-size: 12px;">
                                <p class="m-0">Gas Station, recharge your gas quickly</p>
                                <i class="fa-chevron-right "></i>
                            </div>
                            <div class="d-flex justify-content-center align-items-center">
                                <a href="advance.html">Advance <i class="fa-chevron-right  "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="f_buttons">
                        <button class="btn_backup" type="button">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
export default {
    head: {
        title: 'Wallet Transfer',
    },
    components: {
        Loader,
    },

    mounted() {
  
    },

    methods: {
       
    }
};
</script>