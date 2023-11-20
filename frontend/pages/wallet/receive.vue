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
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class="link_home">
                            <h6>Receive </h6>
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <!-- <button type="button" class="btn_cancle">Save</button> -->
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
                    <div class="qr_code invite-page" id="inviteCode">
                        <p>Only supports Ethereum assets(ERC20)</p>
                        <img src="/images/qr.png" class="img-fluid" loading="lazy" alt="">
                        <div class="text-center">
                            <h6>Wallet Address</h6>
                            <p> <input type="text" id="c_text" value="oiyqw3786shdas876qhgq87dsfy8qyefd8yfq" style="outline:0 !important; border: none;" readonly></p>

                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <button type="button" class="btn_cancle" style="color: #000;">
                                <i class="fa-regular fa-share-from-square"></i>Share
                            </button>

                            <button type="button" class="btn_cancle copy" @click="copyfunctin" id="copied" style="color: #000;">
                                <i class="fa-regular fa-copy"></i>Copy
                            </button>

                            <button type="button" class="btn_cancle" style="color: #000;" data-bs-toggle="offcanvas" data-bs-target="#asset_modal" aria-controls="offcanvasBottom">
                                <i class="fa-solid fa-ellipsis"></i>
                            </button>
                        </div>
                    </div>
                    <div class="layer settings_">
                        <ul style="background-color: #fff;">
                            <li>
                                <div class="_layer">
                                    <a type="button" class="_net_btn active" data-bs-toggle="offcanvas" data-bs-target="#from_wallet" aria-controls="offcanvasBottom">
                                        <div class="d-flex align-items-center">
                                            <i class="fa-regular fa-clipboard"></i>
                                            <p>How to receive from another wallet?</p>
                                        </div>
                                        <i class="fa-chevron-right fa-solid"></i>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="_layer">
                                    <a type="button" class="_net_btn active" data-bs-toggle="offcanvas" data-bs-target="#exchanged" aria-controls="offcanvasBottom">
                                        <div class="d-flex align-items-center">
                                            <i class="fa-regular fa-clipboard"></i>
                                            <p>How to receive from from exchanges?</p>
                                        </div>
                                        <i class=" fa-solid fa-chevron-right"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- how to receive  -->
    <div class="offcanvas coin_select offcanvas-bottom" tabindex="-1" id="from_wallet" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button style="opacity: 0;">..</button>
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">How to receive from other wallets?</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
            <div class="steps_">
                <h6>Steps (in another wallets app)</h6>
                <ul>
                    <li>
                        Select send (or Transfer in some wallets).
                    </li>
                    <li>
                        Select The Token and want to send.
                    </li>
                    <li>
                        Enter your token wallet address as the recipient or scan the wallet QR code that appears in the
                        token app.
                    </li>
                    <li>
                        select the network that matches your Token wallet address.
                    </li>
                    <li>
                        Enter anount, confirm send and find the token in your Toen wallet.
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- how to exchanged -->
    <div class="offcanvas coin_select offcanvas-bottom " tabindex="-1" id="exchanged" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button style="opacity: 0;">..</button>
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">How to receive from from exchanges?</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
            <div class="steps_">
                <h6>Steps (in another exchange app)</h6>
                <ul>
                    <li>
                        Select the token you want to withdraw.
                    </li>
                    <li>
                        Enter your Token wallet address as the recipient or scan the wallet QR code that appears in the
                        Token app..
                    </li>
                    <li>
                        select the network that matches your Token wallet address.
                    </li>
                    <li>
                        Enter anount, confirm send and find the token in your Toen wallet.
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- select token modal  -->
    <div class="offcanvas coin_select offcanvas-bottom " tabindex="-1" id="asset_modal" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close close__" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Select Token </h5>
            <a href="#" style="opacity: 0;"><i class="fa-solid fa-gear"></i></a>
        </div>
        <div class="offcanvas-body small pt-0">

            <div class="layer transfer_">
                <div class="in_group">
                    <input type="text" placeholder="Input token name">
                    <i class="fa-solid fa-magnifying-glass ico_search"></i>
                </div>
                <ul>
                    <li>
                        <a class="pass_h">
                            <div class="asset_content m-0 align-items-center">
                                <div style="width: 15%;">
                                    <img src="/images/currency_icon/usdt.png" loading="lazy" class="img-fluid" alt="">
                                </div>
                                <div style="width: 85%;">
                                    <div class="ac_top align-items-center" style="border: none;">
                                        <div>
                                            <h4 class="mt-2">USDT </h4>
                                        </div>
                                        <div>
                                            <p>0</p>
                                            <h6>$0</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="pass_h">
                            <div class="asset_content m-0 align-items-center">
                                <div style="width: 15%;">
                                    <img src="images/currency_icon/eth.png" loading="lazy" class="img-fluid" alt="">
                                </div>
                                <div style="width: 85%;">
                                    <div class="ac_top align-items-center" style="border: none;">
                                        <div>
                                            <h4 class="mt-2">ETH </h4>
                                        </div>
                                        <div>
                                            <p>0</p>
                                            <h6>$0</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </div>

    <!-- enter password modal part start here  -->
    <div class="pass_modal pass_hint">
        <div class="p_modal">
            <form action="">
                <h6>Enter Amount</h6>
                <div class="in_group">
                    <input type="text" placeholder="Enter Amount" class="img-fluid" name="hint" id="password-hint">

                </div>
                <div class="d-flex align-items-center justify-content-center my_modal_footer">
                    <button type="button" class="btn_cancle">Cancel</button>
                    <button type="button" class="btn_cancle">Confirm</button>
                </div>
            </form>
        </div>
    </div>
    <!-- enter password madal end here s -->

</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
export default {
    head: {
        title: 'Receive',
    },
    components: {
        Loader,
    },
    methods: {
        copyfunctin() {
            var copyText = document.getElementById("c_text");
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices
            navigator.clipboard.writeText(copyText.value);
        },

    },

}
</script>
