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
                            <nuxt-link to="/wallet/trade" type="button">
                                <i class="fa-chevron-left fa-solid"></i>
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Transaction records</h6>
                        </div>
                        <div class=" link_home">
                            <button type="button" class="btn_cancle" style="color: #000;font-size: 20px;" data-bs-toggle="offcanvas" data-bs-target="#setings_option" aria-controls="offcanvasBottom">
                                <i class="fa-solid fa-filter"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- top menu bar end here  -->

    <!-- main part start here  -->
    <section class="main_part bg-white">
        <div class="container-fluid">
            <div class="col-md-12">
                <!-- transection part start here  -->
                <!-- <div class="transection_part d-block">
                    <ul>
                        <li>
                            <a type="button" class="btn_read_message" data-bs-toggle="modal" data-bs-target="#m_modal">
                                <div class="transection_box">
                                    <div class="ico_title ">
                                        <i name="checkmark-outline"></i>
                                        <div>
                                            <h6>USDT: 100 $50KAEID</h6>
                                            <p>jhsadfiweqw34289nd9a8syrqwnd</p>
                                        </div>
                                    </div>
                                    <div class="date_coin">
                                        <h5>09-21- 02:45</h5>
                                        <span>Tron</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a type="button" class="btn_read_message" data-bs-toggle="modal" data-bs-target="#m_modal">
                                <div class="transection_box ">

                                    <div class="ico_title read">
                                        <i name="checkmark-outline"></i>
                                        <div>
                                            <h6>USDT: 100 $50KAEID</h6>
                                            <p>jhsadfiweqw34289nd9a8syrqwnd</p>
                                        </div>
                                    </div>
                                    <div class="date_coin">
                                        <h5>09-21- 02:45</h5>
                                        <span>Tron</span>
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div> -->

                <div class="no_data">
                    <div>
                        <img src="/images/no-data-availible-100.png" loading="lazy" class="img-fluid" alt="">
                        <p>No Data </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <!-- footer part start here  -->
    <Footer />
    <!-- end foter part  -->
    <!-- Settings button offcanvas  -->
    <div class="offcanvas offcanvas-bottom " tabindex="-1" id="setings_option" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <div class=" link_home" style="width: 100%;">
                <div class="s_collapse" style="width: 100%;">
                    <form action="" class="p-0 m-0" style="width: 100%;">
                        <input type="text" placeholder="Input token name" style="border-radius: 20px;" name="" id="">
                        <button type="button">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
            <ul style="background-color: #fff;">
                <li>
                    <div class="_layer">
                        <a type="button" class="_net_btn active">
                            <div class="d-flex align-items-center">
                                <p>All </p>
                            </div>
                            <i class="fa-solid fa-check"></i>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="_layer">
                        <a type="button" class="_net_btn ">
                            <div class="d-flex align-items-center">
                                <p>BRICS</p>
                            </div>
                            <i class="fa-solid fa-check"></i>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="_layer">
                        <a type="button" class="_net_btn ">
                            <div class="d-flex align-items-center">
                                <p>ETH</p>
                            </div>
                            <i class="fa-solid fa-check"></i>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="_layer">
                        <a type="button" class="_net_btn ">
                            <div class="d-flex align-items-center">
                                <p>USDT </p>
                            </div>
                            <i class="fa-solid fa-check"></i>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!-- Modal read message  -->
    <div class="modal fade " id="m_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="m_contents">
                        <h6>Messages titles</h6>
                        <div class="m_div">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit odio dolorem!
                                Laudantium dolore at perferendis. Aperiam vitae sequi eligendi dolor, maiores quas saepe
                                tenetur ratione? Facilis totam dicta dolores!</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center">
                    <button type="button" class="btn btn_backup" data-bs-dismiss="modal">Close</button>
                </div>
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

    },

    methods: {

    }
};
</script>
