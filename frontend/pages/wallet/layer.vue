<template>
<div>
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
                            <nuxt-link to="/wallet/wallet-manage" class="" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class="link_home">
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <a href="#PublicSupportFeedback" type="button">
                                <i class="fa-solid fa-circle-question"></i>
                            </a>
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
                <div class="layer_bls">
                    <h1>BRICS consensus layer BLS key</h1>
                    <div class="create_btn_design">
                        <button type="button" class="btn_create" @click="createLayer">Create</button>
                    </div>
                </div>
                <ul class="layer_txt">
                    <li>
                        You can create a key that manages the BRICS consensus layer authenticator from the key of the
                        current BRICS wallet.
                    </li>
                    <li>
                        This key can be used in Non-Custodial ETH staking services; no other usaged scenarios at this
                        time;
                    </li>
                    <li>
                        Always make a secure backup of the BRICS wallet's key;
                    </li>
                </ul>

            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <!-- identity modal  -->
    <div class="popup_security">
        <div class="main_modal" @click="firePopup">
            <div class="d-flex">
            </div>
            <!-- <h2>Sequrity reminder</h2> -->
            <p style="color: #000;">Identity is not backup, make sure that the Mnemonic of the ...</p>

            <div class="d-flex align-items-center justify-content-end">
                <button class="btn_cancle btn_close text-black">Cancel</button>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
export default {
    head: {
        title: 'Wallet Layer',
    },
    components: {
        Loader,
    },

    mounted() {

    },

    methods: {
        createLayer() {
            $(".popup_security").fadeIn();
        },
        firePopup() {

            $(".popup_security").fadeOut();
        },

    }
};
</script>
