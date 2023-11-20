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
                        <div class=" link_home">
                            <!-- <a href="" class="" type="button"><i name="headset-outline"></i></a> -->
                        </div>
                        <!-- network wallet button  -->
                        <div class="_tab_button t_b">
                            <nuxt-link to="/wallet/trade" type="button" class="_tab tb_m active ">Trade</nuxt-link>
                            <nuxt-link to="/wallet/market" type="button" class="_tab tb_m ">Markets</nuxt-link>
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <a class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#network_button" aria-controls="network_button">
                                <i class="fa-solid fa-ellipsis"></i>
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
                <div class="top_m_txt">
                    <div>
                        <p>24H Vol. $5.18M</p>
                    </div>
                    <div>
                        <p>Latest 200.00 USDT <i class="fa-solid fa-arrow-right"></i> 0.1284 ETH</p>
                    </div>
                </div>
                <div class="coin_value">
                    <form action="">
                        <div class="coin_exlist">
                            <div class="c_box  " type="button" data-bs-toggle="offcanvas" data-bs-target="#choose_Coin" aria-controls="choose_Coin">
                                <img src="/images/currency_icon/brics_umbrala_round.png" loading="lazy" class="img-fluid image1" alt="">
                                <h5 class="c_boxs">BRICS</h5>
                                <i class="fa-solid fa-caret"></i>
                            </div>
                            <div class="c_box" type="button" data-bs-toggle="offcanvas" data-bs-target="#choose_Coin_two" aria-controls="choose_Coin_two">
                                <img src="/images/currency_icon/usdt.png" loading="lazy" class="img-fluid" alt="">
                                <h5>USDT</h5>
                                <i class="fa-solid fa-caret"></i>
                            </div>
                            <!-- swipe button  -->
                            <button class="swipe_btn" type="button">
                                <i class="fa-solid fa-arrows-rotate"></i>
                            </button>

                        </div>
                        <div class="ammount_input">
                            <input type="number" placeholder="Pay Amount" class="img-fluid" name="" id="">
                            <input type="number" placeholder="Receive Amount" class="img-fluid" name="" id="">
                        </div>
                        <div class="r_address">
                            <input type="text" placeholder="Please enter address" class="img-fluid">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="rate_details">
                            <p>Rate <span>1 LON = 0.051515</span></p>
                            <p>Fee <span>0.03%</span></p>
                        </div>
                        <div class="coin_button">
                            <button class="btn_settings" type="button" data-bs-toggle="offcanvas" data-bs-target="#setings_option" aria-controls="offcanvasBottom">
                                <i class="fa-solid fa-gear"></i>
                            </button>
                            <button type="button" class="btn_backup">Exchange Now</button>
                        </div>
                        <div class="bonus_coin">
                            <span>TokenLon</span>
                            <a href="#">Limit Order is now on Ethereum <i class="fa-chevron-right fa-solid"></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <!-- footer part start here  -->
    <Footer/>
    <!-- end foter part  -->

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

    <!-- record   0ffcanvas-->
    <div class="offcanvas coin_select offcanvas-bottom  " tabindex="-1" id="network_button" aria-labelledby="offcanvasBottomLabel">
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
                            <nuxt-link to="/wallet/transaction" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>Transaction</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </nuxt-link>
                        </div>
                    </li>
                    <li>
                        <div class="_layer">
                            <nuxt-link to="/wallet/trade-allowance" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>Allowance Management</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </nuxt-link>
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
                            <a href="#" type="button" class="_net_btn active">
                                <div class="d-flex align-items-center">
                                    <p>Get started with my wallet</p>
                                </div>
                                <i name="chevron-forward-outline"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="_layer">
                            <a href="#" type="button" class="_net_btn active">
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
</div>
</template>



<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Trade',
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