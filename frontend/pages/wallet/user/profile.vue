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
                        <div class=" link_home " style="opacity: 0;">

                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>My Profile</h6>
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <nuxt-link to="/wallet/user/notification" type="button">
                                <i class="fa-regular fa-bell"></i>
                            </nuxt-link>
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
                                        <i class="fa-solid fa-wallet"></i>
                                        <p>Manage your wallet</p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/user/address-book" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <i class="fa-solid fa-user"></i>
                                        <p>Address Book </p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </nuxt-link>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/user/settings/settings" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <i class="fa-solid fa-gear"></i>
                                        <p>Settings</p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </nuxt-link>
                            </div>
                        </li>

                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/user/explore" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <i class="fa-solid fa-earth-asia"></i>
                                        <p>Explore</p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer">
                                <a href="#" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <i class="fa-regular fa-clipboard"></i>
                                        <p>Support and Feedback</p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="_layer">
                                <a href="#" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <i class="fa-regular fa-pen-to-square"></i>
                                        <p>Terms of use</p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/user/about" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <i class="fa-solid fa-house"></i>
                                        <p>about</p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <!-- footer part start here  -->
    <Footer />

    <!-- Settings button offcanvas  -->
    <div class="offcanvas offcanvas-bottom " tabindex="-1" id="setings_option" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <p class="offcanvas-title" id="offcanvasBottomLabel" style="font-size: 12px;">Settings</p>
            <p style="opacity: 0;">.</p>
        </div>
        <div class="offcanvas-body small">
            <div class="minor_fee">
                <div>
                    <i name="add-circle-outline"></i>
                </div>
                <div>
                    <h6>Pay Miner fee with tokens <i name="help-circle-outline" style="cursor: pointer;"></i>
                    </h6>
                    <p>Turn on to pay with exchanged tokens and complete transections without BRICS</p>
                </div>
                <div class="checkboxes__row">
                    <div class="checkboxes__item">
                        <label class="checkbox style-e">
                            <input type="checkbox" />
                            <div class="checkbox__checkmark"></div>
                            <!-- <div class="checkbox__body">Style E</div> -->
                        </label>
                    </div>
                </div>
            </div>
            <div class="minor_fee">
                <div>
                    <i name="person-add-outline"></i>
                </div>
                <div class="me-auto">
                    <h6>Add Receiging Address </h6>

                </div>
                <div class="checkboxes__row">
                    <div class="checkboxes__item">
                        <label class="checkbox style-e">
                            <input type="checkbox" />
                            <div class="checkbox__checkmark"></div>
                            <!-- <div class="checkbox__body">Style E</div> -->
                        </label>
                    </div>
                </div>
            </div>
            <div class="minor_fee" style="border: none;">
                <a href="#">
                    <div>
                        <i name="trending-down-outline"></i>
                    </div>
                    <div class="me-auto">
                        <h6>Slippage settings</h6>

                    </div>
                    <div class="angel_">
                        <i name="chevron-forward-outline"></i>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <!-- Choose first input coin modal/Offcanvas  -->
    <div class="offcanvas coin_select offcanvas-bottom ccoin_modal" tabindex="-1" id="choose_Coin" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header pb-0 " style="display: unset;">

            <div class="d-flex align-items-center justify-content-between">
                <div class="search_coin ">
                    <input type="text" class="" placeholder="Input Token Name" name="" id="">
                    <i name="search-outline"></i>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="layer">
                <!-- layer one  -->
                <h6>Recommended</h6>
                <div class="token_rlist">
                    <div class="rt_box" data-crypto="BRICS">
                        <img src="/images/currency_icon/brics_icon.png" loading="lazy" class="img-fluid image2" alt="">
                        <p>BRICS</p>
                    </div>

                    <div class="rt_box" data-crypto="ETH">
                        <img src="/images/currency_icon/eth.png" loading="lazy" class="img-fluid" alt="">
                        <p>ETH</p>
                    </div>
                    <div class="rt_box" data-crypto="BTC">
                        <img src="/images/currency_icon/btc.png" loading="lazy" class="img-fluid" alt="">
                        <p>BTC</p>
                    </div>
                    <div class="rt_box" data-crypto="BRICS">
                        <img src="/images/currency_icon/brics_icon.png" loading="lazy" class="img-fluid" alt="">
                        <p>BRICS</p>
                    </div>

                    <div class="rt_box" data-crypto="ETH">
                        <img src="/images/currency_icon/eth.png" loading="lazy" class="img-fluid" alt="">
                        <p>ETH</p>
                    </div>
                    <div class="rt_box" data-crypto="BTC">
                        <img src="/images/currency_icon/btc.png" loading="lazy" class="img-fluid" alt="">
                        <p>BTC</p>
                    </div>
                    <div class="rt_box" data-crypto="BRICS">
                        <img src="/images/currency_icon/brics_icon.png" loading="lazy" class="img-fluid" alt="">
                        <p>BRICS</p>
                    </div>

                    <div class="rt_box" data-crypto="ETH">
                        <img src="/images/currency_icon/eth.png" loading="lazy" class="img-fluid" alt="">
                        <p>ETH</p>
                    </div>
                    <div class="rt_box" data-crypto="BTC">
                        <img src="/images/currency_icon/btc.png" loading="lazy" class="img-fluid" alt="">
                        <p>BTC</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas-body small">
            <div class="layer crypto_">
                <!-- layer two  -->
                <div class="d-flex justify-content-between">
                    <h6>All Token </h6>
                    <h6 style="font-weight: 400;">Recent Trades</h6>
                </div>
                <ul style="background-color: #fff;">
                    <li data-crypto="USDT">
                        <div class="_layer">
                            <button type="button" class="_net_btn">
                                <div class="d-flex align-items-center">
                                    <img src="/images/currency_icon/usdt.png" class="img-fluid" loading="lazy" alt="">
                                    <p>USDT</p>
                                </div>
                                <div class="_v_rate">
                                    <span>0</span>
                                    <p>$0</p>
                                </div>
                            </button>
                        </div>
                    </li>
                    <li data-crypto="ETH">
                        <div class="_layer">
                            <button type="button" class="_net_btn">
                                <div class="d-flex align-items-center">
                                    <img src="/images/currency_icon/eth.png" class="img-fluid" loading="lazy" alt="">
                                    <p>ETH</p>
                                </div>
                                <div class="_v_rate">
                                    <span>0</span>
                                    <p>$0</p>
                                </div>
                            </button>
                        </div>
                    </li>
                    <li data-crypto="LTE">
                        <div class="_layer">
                            <button type="button" class="_net_btn">
                                <div class="d-flex align-items-center">
                                    <img src="/images/currency_icon/litecoin.png" class="img-fluid" loading="lazy" alt="">
                                    <p>LTE</p>
                                </div>
                                <div class="_v_rate">
                                    <span>0</span>
                                    <p>$0</p>
                                </div>
                            </button>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>

    <!-- Choose first input coin modal/Offcanvas  -->
    <div class="offcanvas coin_select offcanvas-bottom ccoin_modal" tabindex="-1" id="choose_Coin_two" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header pb-0 " style="display: unset;">

            <div class="d-flex align-items-center justify-content-between">
                <div class="search_coin ">
                    <input type="text" class="" placeholder="Input Token Name" name="" id="">
                    <i name="search-outline"></i>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="layer">
                <!-- layer one  -->
                <h6>Recommended</h6>
                <div class="token_rlist">
                    <div class="rt_box" data-crypto="BRICS">
                        <img src="/images/currency_icon/brics_icon.png" loading="lazy" class="img-fluid image2" alt="">
                        <p>BRICS</p>
                    </div>

                    <div class="rt_box" data-crypto="ETH">
                        <img src="/images/currency_icon/eth.png" loading="lazy" class="img-fluid" alt="">
                        <p>ETH</p>
                    </div>

                </div>
            </div>
        </div>
        <div class="offcanvas-body small">
            <div class="layer crypto_">
                <!-- layer two  -->
                <div class="d-flex justify-content-between">
                    <h6>All Token </h6>
                    <h6 style="font-weight: 400;">Recent Trades</h6>
                </div>
                <ul style="background-color: #fff;">
                    <li data-crypto="USDT">
                        <div class="_layer">
                            <button type="button" class="_net_btn">
                                <div class="d-flex align-items-center">
                                    <img src="/images/currency_icon/brics_icon.png" class="img-fluid" loading="lazy" alt="">
                                    <p>BRICS</p>
                                </div>
                                <div class="_v_rate">
                                    <span>0</span>
                                    <p>$0</p>
                                </div>
                            </button>
                        </div>
                    </li>
                    <li data-crypto="USDT">
                        <div class="_layer">
                            <button type="button" class="_net_btn">
                                <div class="d-flex align-items-center">
                                    <img src="/images/currency_icon/usdt.png" class="img-fluid" loading="lazy" alt="">
                                    <p>USDT</p>
                                </div>
                                <div class="_v_rate">
                                    <span>0</span>
                                    <p>$0</p>
                                </div>
                            </button>
                        </div>
                    </li>
                    <li data-crypto="ETH">
                        <div class="_layer">
                            <button type="button" class="_net_btn">
                                <div class="d-flex align-items-center">
                                    <img src="/images/currency_icon/eth.png" class="img-fluid" loading="lazy" alt="">
                                    <p>ETH</p>
                                </div>
                                <div class="_v_rate">
                                    <span>0</span>
                                    <p>$0</p>
                                </div>
                            </button>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>

    <!-- 3dot  pages list offcanvas-->
    <div class="offcanvas coin_select offcanvas-bottom " tabindex="-1" id="network_button" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </div>
        <div class="offcanvas-body small pt-0">

            <div class="_coin_div">
                <h5>BRICS</h5>
                <p><span id="p1">098sdfs0890asdf</span></p>
                <nuxt-link to="/wallet/wallet-manage">
                    <i name="ellipsis-horizontal-outline"></i>
                </nuxt-link>
                <h6><span>$</span>0</h6>

            </div>

            <div class="layer">

                <ul>
                    <li>
                        <div class="_layer">
                            <nuxt-link to="/transaction" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>Transaction</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </nuxt-link>
                        </div>
                    </li>
                    <li>
                        <div class="_layer">
                            <a href="#" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>Allowance Management</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="_layer">
                            <a href="#" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>My Invitations</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </a>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li>
                        <div class="_layer">
                            <a href="#" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>Trade Mining</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="_layer">
                            <a href="#" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>LON Staking</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="_layer">
                            <a href="#" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>Buyback</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </a>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li>
                        <div class="_layer">
                            <a href="#" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>Leaderboard</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </a>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li>
                        <div class="_layer">
                            <a href="#" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>Quick Start</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="_layer">
                            <a href="" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>Get started with my wallet</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="_layer">
                            <a href="" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>FAQ</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </a>
                        </div>
                    </li>
                </ul>

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
            <a href="#" class="btn_backup">Backup now</a>
            <button class="btn_cancle btn_close">Cancel</button>
        </div>
    </div>
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Profile',
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
