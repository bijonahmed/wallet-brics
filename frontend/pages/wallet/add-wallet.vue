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
                            <nuxt-link to="/wallet/user/manage-wallet" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>

                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Add Wallet</h6>
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
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn" data-bs-toggle="offcanvas" data-bs-target="#add_settings" aria-controls="add_settings">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/currency_icon/btc.png" class="img-fluid" loading="lazy" alt="">
                                        <div>
                                            <p>BTC</p>
                                            <p class="c_name">Bitcoin</p>
                                        </div>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn" data-bs-toggle="offcanvas" data-bs-target="#add_settings" aria-controls="add_settings">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/currency_icon/eth.png" class="img-fluid" loading="lazy" alt="">
                                        <div>
                                            <p>ETH</p>
                                            <p class="c_name">Ethereum</p>
                                        </div>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn" data-bs-toggle="offcanvas" data-bs-target="#add_settings" aria-controls="add_settings">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/currency_icon/react.png" class="img-fluid" loading="lazy" alt="">
                                        <div>
                                            <p>ATOM</p>
                                            <p class="c_name">Cosmos</p>
                                        </div>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <!-- add options offcanvas  -->
    <div class="offcanvas coin_select offcanvas-bottom " tabindex="-1" id="add_settings" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">BitCoin</h5>
            <div style="opacity: 0;">null</div>
        </div>
        <div class="offcanvas-body small add_w_option">
            <div class="minor_fee" style="border: none;">
                <nuxt-link to="/wallet/manage/create-wallet">
                    <div>
                        <i class="fa-solid fa-wallet"></i>
                    </div>
                    <div class="me-auto">
                        <h6>Create Wallet</h6>
                        <p>Don't have a wallet yet, click create</p>

                    </div>
                    <div class="angel_">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </nuxt-link>
            </div>

            <h6>Important wallet </h6>
            <div class="minor_fee" style="border: none;">
                <nuxt-link to="/wallet/manage/import-wallet">
                    <div>
                        <i class="fa-solid fa-file-lines"></i>
                    </div>
                    <div class="me-auto">
                        <h6>Mnemonic </h6>
                        <p>The mnemonic is composed of words and separated by spaces</p>

                    </div>
                    <div class="angel_">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </nuxt-link>
            </div>

            <div class="minor_fee" style="border: none;">
                <nuxt-link to="/wallet/manage/private-key">
                    <div>
                        <i class="fa-solid fa-key"></i>
                    </div>
                    <div class="me-auto">
                        <h6>Private key </h6>
                        <p>Plaintext private key </p>

                    </div>
                    <div class="angel_">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </nuxt-link>
            </div>

            <div class="minor_fee" style="border: none;">
                <nuxt-link to="/wallet/manage/key-store">
                    <div>
                        <i class="fa-solid fa-store"></i>
                    </div>
                    <div class="me-auto">
                        <h6>Keystore </h6>
                        <p>Encrypted private key JSON file </p>

                    </div>
                    <div class="angel_">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </nuxt-link>
            </div>

            <div class="minor_fee" style="border: none;">
                <nuxt-link to="/wallet/manage/cold-wallet">
                    <div>
                        <i class="fa-solid fa-cloud"></i>
                    </div>
                    <div class="me-auto">
                        <h6>Cold Wallet</h6>
                        <p>Use witn offline wallets to form a safer cold wallet</p>

                    </div>
                    <div class="angel_">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
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
