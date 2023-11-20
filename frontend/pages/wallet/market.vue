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
                            <a href="scan.html" class="" type="button">
                                <i class="fa-solid fa-headphone"></i>
                            </a>
                        </div>
                        <!-- network wallet button  -->
                        <div class="_tab_button t_b">
                            <nuxt-link to="/wallet/trade" type="button" class="_tab tb_m ">Trade</nuxt-link>
                            <nuxt-link to="/wallet/market" type="button" class="_tab tb_m active">Markets</nuxt-link>
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <a data-bs-toggle="collapse" href="#search_" role="button" aria-expanded="false" aria-controls="search_" type="button">
                                <i class="fa-solid fa-magnifying-glass"></i>
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
                <div class="collapse" id="search_">
                    <div class="s_collapse">
                        <form action="">
                            <input type="text" placeholder="Input token name" name="" id="">
                            <button type="button">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <div class="market_buttons">
                    <button class="m_filter active">Watchlist</button>
                    <button class="m_filter">Market Value</button>
                    <button class="m_filter">DeFi</button>
                </div>
                <div class="">
                    <table class="table mb-0">
                        <thead>
                            <tr>
                                <th>Market Value</th>
                                <th>Price</th>
                                <th>Change</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="table_list">
                    <table class="table">

                        <tbody>
                            <tr data-bs-toggle="offcanvas" data-bs-target="#chart_graph" aria-controls="offcanvasBottom">
                                <td>
                                    <h6>REP</h6>
                                    <p>#42 <span>$5.65M</span></p>
                                </td>
                                <td>
                                    $0.514365
                                </td>
                                <td>
                                    <div class="alert alert-danger px-2 py-1" style="width: fit-content;"> -5.23%</div>
                                </td>
                            </tr>
                            <tr data-bs-toggle="offcanvas" data-bs-target="#chart_graph" aria-controls="offcanvasBottom">
                                <td>
                                    <h6>SUKU</h6>
                                    <p>#42 <span>$5.65M</span></p>
                                </td>
                                <td>
                                    $0.514365
                                </td>
                                <td>
                                    <div class="alert alert-success px-2 py-1" style="width: fit-content;"> 5.23%</div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <!-- footer part start here  -->
    <Footer />
    <!-- end foter part  -->

    <div class="offcanvas coin_select offcanvas-bottom" tabindex="-1" id="chart_graph" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close text-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <h5 class="offcanvas-title text-black" id="offcanvasBottomLabel">BTC </h5>
            <div>
                <button type="button" class="btn_wishlist active">
                    <i class="fa-regular fa-star"></i>
                </button>
            </div>
        </div>
        <div class="offcanvas-body small">

            <div class="">
                <table class="table">

                    <tbody>
                        <tr data-bs-toggle="offcanvas" data-bs-target="#chart_graph" aria-controls="offcanvasBottom">
                            <td>
                                <h6>REP</h6>
                                <p>#42 <span>$5.65M</span></p>
                            </td>
                            <td>
                                $0.514365
                            </td>
                            <td>
                                <div class="alert alert-danger px-2 py-1" style="width: fit-content;"> -5.23%</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="d_filter">
                <button type="button" class="">1D</button>
                <button type="button">1W</button>
                <button type="button">1M</button>
                <button type="button">1year</button>
                <button type="button">All</button>
            </div>

            <div class="l_chart">
                <canvas id="myChart"></canvas>
            </div>
            <div class="">
                <table class="table">

                    <tbody>
                        <tr data-bs-toggle="offcanvas" data-bs-target="#chart_graph" aria-controls="offcanvasBottom">
                            <td>
                                <h6>REP</h6>
                                <p>#42 <span>$5.65M</span></p>
                            </td>
                            <td>
                                $0.514365
                            </td>
                            <td>
                                <div class="alert alert-danger px-2 py-1" style="width: fit-content;"> -5.23%</div>
                            </td>
                        </tr>
                        <tr data-bs-toggle="offcanvas" data-bs-target="#chart_graph" aria-controls="offcanvasBottom">
                            <td>
                                <h6>REP</h6>
                                <p>#42 <span>$5.65M</span></p>
                            </td>
                            <td>
                                $0.514365
                            </td>
                            <td>
                                <div class="alert alert-danger px-2 py-1" style="width: fit-content;"> -5.23%</div>
                            </td>
                        </tr>
                        <tr data-bs-toggle="offcanvas" data-bs-target="#chart_graph" aria-controls="offcanvasBottom">
                            <td>
                                <h6>REP</h6>
                                <p>#42 <span>$5.65M</span></p>
                            </td>
                            <td>
                                $0.514365
                            </td>
                            <td>
                                <div class="alert alert-danger px-2 py-1" style="width: fit-content;"> -5.23%</div>
                            </td>
                        </tr>
                        <tr data-bs-toggle="offcanvas" data-bs-target="#chart_graph" aria-controls="offcanvasBottom">
                            <td>
                                <h6>REP</h6>
                                <p>#42 <span>$5.65M</span></p>
                            </td>
                            <td>
                                $0.514365
                            </td>
                            <td>
                                <div class="alert alert-danger px-2 py-1" style="width: fit-content;"> -5.23%</div>
                            </td>
                        </tr>
                        <tr data-bs-toggle="offcanvas" data-bs-target="#chart_graph" aria-controls="offcanvasBottom">
                            <td>
                                <h6>REP</h6>
                                <p>#42 <span>$5.65M</span></p>
                            </td>
                            <td>
                                $0.514365
                            </td>
                            <td>
                                <div class="alert alert-danger px-2 py-1" style="width: fit-content;"> -5.23%</div>
                            </td>
                        </tr>
                        <tr data-bs-toggle="offcanvas" data-bs-target="#chart_graph" aria-controls="offcanvasBottom">
                            <td>
                                <h6>REP</h6>
                                <p>#42 <span>$5.65M</span></p>
                            </td>
                            <td>
                                $0.514365
                            </td>
                            <td>
                                <div class="alert alert-danger px-2 py-1" style="width: fit-content;"> -5.23%</div>
                            </td>
                        </tr>
                        <tr data-bs-toggle="offcanvas" data-bs-target="#chart_graph" aria-controls="offcanvasBottom">
                            <td>
                                <h6>REP</h6>
                                <p>#42 <span>$5.65M</span></p>
                            </td>
                            <td>
                                $0.514365
                            </td>
                            <td>
                                <div class="alert alert-danger px-2 py-1" style="width: fit-content;"> -5.23%</div>
                            </td>
                        </tr>
                        <tr data-bs-toggle="offcanvas" data-bs-target="#chart_graph" aria-controls="offcanvasBottom">
                            <td>
                                <h6>REP</h6>
                                <p>#42 <span>$5.65M</span></p>
                            </td>
                            <td>
                                $0.514365
                            </td>
                            <td>
                                <div class="alert alert-danger px-2 py-1" style="width: fit-content;"> -5.23%</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        title: 'Market',
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
