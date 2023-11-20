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
                        <div class="menu_option">
                            <button type="button" class="btn_menu" data-bs-toggle="offcanvas" data-bs-target="#choose_wallet" aria-controls="choose_wallet"><i class="fa-solid fa-bars-staggered"></i> </button>
                        </div>
                        <!-- network wallet button  -->
                        <div class="">
                            <button type="button" class="btn_menu ms-2 btn_main" data-bs-toggle="offcanvas" data-bs-target="#network_button" aria-controls="choose_wallet">Usdt <i class="fa-solid fa-caret-down"></i> </button>
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
    <section class="wallet_select main_part ">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="showed_wallet">
                        <!-- slider  -->
                        <div class="owl-carousel">
                            <div class="_coin_div intro_open">
                                <h5>BRICS</h5>
                                <p><input id="c_text" type="text" style="border: none !important; outline: 0 !important;background: transparent !important; color: #fff;" value="098sdfs0890asdf"> <button type="button" @click="copyfunctin" class="btn_copy">
                                        <i class="fa-regular fa-copy"></i>
                                    </button></p>
                                <nuxt-link to="/wallet/wallet-manage">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </nuxt-link>
                                <h6><span>$</span>0</h6>

                            </div>

                            <div class="_coin_div intro_open">
                                <h5>BRICS</h5>
                                <p><input id="c_text" type="text" style="border: none !important; outline: 0 !important;background: transparent !important; color: #fff;" value="098sdfs0890asdf"> <button type="button" @click="copyfunctin" class="btn_copy">
                                        <i class="fa-regular fa-copy"></i>
                                    </button></p>
                                <nuxt-link to="/wallet/wallet-manage">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </nuxt-link>
                                <h6><span>$</span>0</h6>

                            </div>

                            <div class="_coin_div intro_open">
                                <h5>BRICS</h5>
                                <p><input id="c_text" type="text" style="border: none !important; outline: 0 !important;background: transparent !important; color: #fff;" value="098sdfs0890asdf"> <button type="button" onclick="copyfunctin()" class="btn_copy">
                                        <i class="fa-regular fa-copy"></i>
                                    </button></p>
                                <nuxt-link to="/wallet/wallet-manage">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </nuxt-link>
                                <h6><span>$</span>0</h6>

                            </div>
                        </div>
                        <!-- shortcut section  -->
                        <div class="wallet_options">
                            <a type="button" data-bs-toggle="offcanvas" data-bs-target="#asset_modal" aria-controls="choose_wallet">
                                <i class="fa-solid fa-arrow-right-arrow-left"></i>
                                <p>Transfer</p>
                            </a>
                            <nuxt-link to="/wallet/receive">
                                <i class="fa-solid fa-download"></i>
                                <p>Receive</p>
                            </nuxt-link>

                            <a data-bs-toggle="offcanvas" data-bs-target="#buy" aria-controls="choose_wallet">
                                <i class="fa-solid fa-bag-shopping"></i>
                                <p>Buy</p>
                            </a>
                        </div>

                        <!-- token nft and defi part start here  -->
                        <section class="get_token">
                            <div class="buttons_nft">
                                <div class="d-flex align-items-center">
                                    <button type="button" class="btn_htoken active">Tokens</button>
                                    <button type="button" class="btn_htoken">NFT</button>
                                    <button type="button" class="btn_htoken">DeFi</button>
                                </div>

                                <div>
                                    <nuxt-link to="/wallet/asset/asset">
                                        <i class="fa-solid fa-plus"></i>
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="token_content mt-3">
                                <a class="text-center btn_security" data-bs-toggle="offcanvas" data-bs-target="#setings_option" aria-controls="offcanvasBottom">
                                    <h6>Get started with tokens</h6>
                                    <p>want to make the most of your wallet? <br>
                                        <span style=" text-align: center;" class="btn_get_token">Get token</span>
                                    </p>
                                </a>
                            </div>
                        </section>

                        <!-- token nft and defi part start here  -->

                        <!-- assets section part start here  -->
                        <div class="asset_part">
                            <h5>Assets</h5>
                            <ul>
                                <li>
                                    <div class="asset_content">
                                        <div style="width: 15%;">
                                            <img src="/images/currency_icon/usdt.png" loading="lazy" class="img-fluid" alt="">
                                        </div>
                                        <div style="width: 85%;">
                                            <div class="ac_top">
                                                <div>
                                                    <h4>USDT </h4>
                                                    <h6>USDT</h6>
                                                </div>
                                                <div>
                                                    <p>0</p>
                                                    <h6>$0</h6>
                                                </div>
                                            </div>
                                            <span class="m_loss">-1.17%</span> <span>$0.08</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="asset_content">
                                        <div style="width: 15%;">
                                            <img src="/images/currency_icon/litecoin.png" loading="lazy" class="img-fluid" alt="">
                                        </div>
                                        <div style="width: 85%;">
                                            <div class="ac_top">
                                                <div>
                                                    <h4>LTC </h4>
                                                    <h6>Lite coin</h6>
                                                </div>
                                                <div>
                                                    <p>0</p>
                                                    <h6>$0</h6>
                                                </div>
                                            </div>
                                            <span class="m_loss">-1.17%</span> <span>$0.08</span>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="_coin_buy bg-transparent" style="box-shadow: none;">
                                        <a href="#" class="text-center btn_security">
                                            <p>want to make the most of your wallet? <br>
                                                <span style="color: #1f9ed1; text-align: center;">Get token</span>
                                            </p>

                                        </a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- footer part start here  -->
    <Footer />
    <!-- end foter part  -->
    <!-- buy modal  -->
    <div class="offcanvas coin_select offcanvas-bottom " tabindex="-1" id="buy" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close close__" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Selec On Ranp method </h5>
            <a href="#" style="opacity: 0;"><i class="fa-solid fa-gear"></i></a>
        </div>
        <div class="offcanvas-body small pt-0">
            <div class="layer settings_">
                <ul style="background-color: #fff;">
                    <li>
                        <div class="_layer">
                            <a type="button" class="_net_btn active" data-bs-toggle="offcanvas" data-bs-target="#from_wallet" aria-controls="offcanvasBottom">
                                <div class="d-flex align-items-center">
                                    <i class="fa-regular fa-moon"></i>
                                    <p>MoonPay</p>
                                </div>
                                <i class="fa-solid fa-chevron-right"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Transfer modal  -->
    <div class="offcanvas coin_select offcanvas-bottom " tabindex="-1" id="asset_modal" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Select asset </h5>
            <!-- <a href="#" style="opacity: 0;"><i class="fa-solid fa-gear"></i></a> -->
        </div>
        <div class="offcanvas-body small pt-0">

            <div class="layer transfer_">
                <div class="in_group">
                    <input type="text" placeholder="Input token name">
                    <i class="fa-solid fa-magnifying-glass ico_search"></i>
                </div>
                <ul>
                    <li>
                        <nuxt-link to="/wallet/transfer">
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
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/wallet/transfer">
                            <div class="asset_content m-0 align-items-center">
                                <div style="width: 15%;">
                                    <img src="/images/currency_icon/eth.png" loading="lazy" class="img-fluid" alt="">
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
                        </nuxt-link>
                    </li>

                </ul>
            </div>
        </div>
    </div>

    <!-- ===================== step guide ===========================  -->
    <!-- first intro  -->
    <div class="guide_one">
        <div class="guid_text">
            <span></span>
            <p>Create and manage and switch between multichain wallets.</p>
            <button class="btn_ok m-0 ms-auto mt-2">Next</button>
        </div>
    </div>
    <!-- guide two  -->
    <div class="guide_two">
        <div class="guid_text">
            <span></span>
            <p>Switch between networks -ETH mainnet, layer 2 and EVM are supported.</p>
            <button class="btn_ok m-0 ms-auto mt-2">Next</button>
        </div>
    </div>
    <!-- guide three  -->
    <div class="guide_three">
        <div class="guid_text">
            <span></span>
            <p>Shortcuts to key wallet features make receive and transfer easy.</p>
            <button class="btn_ok m-0 ms-auto mt-2">Next</button>
        </div>
    </div>
    <!-- ==================== step guide end =============== -->
    <!-- Choose Network switch modal/Offcanvas -->
    <div class="offcanvas coin_select offcanvas-bottom " tabindex="-1" id="network_button" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" style="opacity: 0;" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Network Swich</h5>
            <a href="#"><i class="fa-solid fa-gear"></i></a>
        </div>
        <div class="offcanvas-body small pt-0">
            <div class="_tab_button">
                <button type="button" class="_tab active">Mainnet</button>
                <button type="button" class="_tab">Testnet</button>
            </div>
            <div class="layer">

                <!-- layer one  -->
                <h6>USDT layer1</h6>
                <ul>
                    <li>
                        <div class="_layer">
                            <button type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <img src="/images/currency_icon/usdt.png" class="img-fluid" loading="lazy" alt="">
                                    <p>USDT</p>
                                </div>
                                <i class="fa-solid fa-check"></i>
                            </button>
                        </div>
                    </li>
                </ul>

                <!-- layer two  -->
                <h6>USDT layer2</h6>
                <ul>
                    <li>
                        <div class="_layer">
                            <button type="button" class="_net_btn">
                                <div class="d-flex align-items-center">
                                    <img src="/images/currency_icon/usdt.png" class="img-fluid" loading="lazy" alt="">
                                    <p>USDT</p>
                                </div>
                                <i class="fa-solid fa-check"></i>
                            </button>
                        </div>
                    </li>
                    <li>
                        <div class="_layer">
                            <button type="button" class="_net_btn">
                                <div class="d-flex align-items-center">
                                    <img src="/images/currency_icon/usdt.png" class="img-fluid" loading="lazy" alt="">
                                    <p>USDT</p>
                                </div>
                                <i class="fa-solid fa-check"></i>
                            </button>
                        </div>
                    </li>
                    <li>
                        <div class="_layer">
                            <button type="button" class="_net_btn">
                                <div class="d-flex align-items-center">
                                    <img src="/images/currency_icon/usdt.png" class="img-fluid" loading="lazy" alt="">
                                    <p>USDT</p>
                                </div>
                                <i class="fa-solid fa-check active"></i>
                            </button>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>

    <!-- Choose wallet modal/Offcanvas -->
    <div class="offcanvas coin_select offcanvas-bottom" tabindex="-1" id="choose_wallet" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Select Wallet</h5>
            <nuxt-link to="/wallet/wallet-manage">Manage</nuxt-link>
        </div>
        <div class="offcanvas-body small">
            <div class="wallet_list">

                <div class="coin_list_st">
                    <ul>
                        <li>
                            <button type="button" class="w_list_btn active"><i class="fa-solid fa-bars-staggered"></i></button>
                        </li>
                        <li>
                            <button type="button" class="w_list_btn"><img src="/images/currency_icon/brics_umbrala_round.png" loading="lazy" class="img-fluid" alt=""></button>
                        </li>
                        <li>
                            <button type="button" class="w_list_btn"><img src="/images/currency_icon/btc.png" loading="lazy" class="img-fluid" alt=""></button>
                        </li>
                        <li>
                            <button type="button" class="w_list_btn"><img src="/images/currency_icon/eth.png" loading="lazy" class="img-fluid" alt=""></button>
                        </li>
                        <li>
                            <button type="button" class="w_list_btn"><img src="/images/currency_icon/usdt.png" loading="lazy" class="img-fluid" alt=""></button>
                        </li>
                        <li>
                            <button type="button" class="w_list_btn"><img src="/images/currency_icon/litecoin.png" loading="lazy" class="img-fluid" alt=""></button>
                        </li>
                        <li>
                            <button type="button" class="w_list_btn"><img src="/images/currency_icon/cardano.png" loading="lazy" class="img-fluid" alt=""></button>
                        </li>
                        <li>
                            <button type="button" class="w_list_btn "><img src="/images/currency_icon/react.png" loading="lazy" class="img-fluid" alt="">
                            </button>

                        </li>
                    </ul>
                </div>

                <div class="coin_list_name">
                    <h6>Wallet under identity</h6>
                    <ul>
                        <li>
                            <a href="#">
                                <div class="_coin_div">
                                    <h5>BRICS</h5>
                                    <p>098sdfs0890asdf</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="_coin_div">
                                    <h5>BTC</h5>
                                    <p>098sdfs0890asdf</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="_coin_div">
                                    <h5>ETH</h5>
                                    <p>098sdfs0890asdf</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <h6 class="ms-1">Hardware wallet</h6>
                            <div class="_coin_buy">
                                <a href="#">
                                    <img src="/images/currency_icon/brics_umbrala_round.png" loading="lazy" class="img-fluid" alt="">
                                    <p>Don't have one? Discover or buy </p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    </div>

    <!-- security reminder popup  -->
    <div class="popup_security">
        <div class="main_modal">
            <div class="d-flex">
                <!-- <div class="ms-auto"><button class="btn_close"><i class="fa-solid fa-x"></i></button></div> -->
            </div>
            <h2>Sequrity reminder</h2>
            <p>Backup the Mnemonic pharse to access the wallet address.</p>
            <p>The Mnemonic Phrase of your identity has not been backed up, please make sure to back it up now.</p>
            <p>The mnemonic Phrase can restore the digital assets under your digital identity,</p>
            <nuxt-link to="/wallet/manage/personal-details" class="btn_backup bacK_up">Backup now</nuxt-link>
            <button class="btn_cancle btn_close">Cancel</button>
        </div>
    </div>

    <!-- Get token button offcanvas  -->
    <div class="offcanvas offcanvas-bottom " tabindex="-1" id="setings_option" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <p class="offcanvas-title" id="offcanvasBottomLabel" style="font-size: 12px;">Settings</p>
            <p style="opacity: 0;">.</p>
        </div>
        <div class="offcanvas-body small">
            <div class="minor_fee" style="border: none;">
                <!-- <a href="#">
                    <div>
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div class="me-auto">
                        <h6>Buy</h6>

                    </div>
                    <div class="angel_">
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                </a> -->
            </div>

            <div class="minor_fee" style="border: none;">
                <nuxt-link to="/wallet/receive">
                    <div>
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                    <div class="me-auto">
                        <h6>Receive tokens from any exchange</h6>

                    </div>
                    <div class="angel_">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </nuxt-link>
            </div>
            <div class="minor_fee" style="border: none;">
                <nuxt-link to="/wallet/receive">
                    <div>
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                    <div class="me-auto">
                        <h6>Receive from another wallet </h6>

                    </div>
                    <div class="angel_">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Wallet Dashboard',
    },
    components: {
        Loader,
        Footer
    },

    mounted() {
        this.guide();
        this.sliderloader();
    },

    methods: {
        sliderloader() {
            $(".owl-carousel").owlCarousel({
                items: 1,
                margin: 5
            });
        },
        copyfunctin() {
            var copyText = document.getElementById("c_text");
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices
            navigator.clipboard.writeText(copyText.value);
        },
        guide() {
            $(".guide_one").fadeIn();
            $(".guide_one button").click(function () {
                $(".guide_one").fadeOut();
                $(".guide_two").fadeIn();
            });
            $(".guide_two button").click(function () {
                $(".guide_two").fadeOut();
                $(".guide_three").fadeIn();
            });
            $(".guide_three button").click(function () {
                $(".guide_three").fadeOut();
            });

        }
    }
};
</script>
