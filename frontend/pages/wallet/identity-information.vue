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
                            <nuxt-link to="/wallet/wallet-manage" class="" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                                <!-- <i class="fa-solid fa-chevron-left"></i></a> -->
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Identity Wallet </h6>
                        </div>
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
                <div class="layer settings_">

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer profile_">

                                <div class="">
                                    <div class="d-flex align-items-center">

                                        <p style="color: #000;">Identification</p><i class="fa-solid fa-circle-question"></i>
                                    </div>
                                    <p style="font-size: 12px;">ohsa43hdfays98er98saeransdf9werwhdnas</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer profile_">
                                <p>Profile picture</p>
                                <div class="d-flex align-items-center">
                                    <img src="/images/logo_loader.png" loading="lazy" class="img-fluid" alt="">

                                </div>

                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn active btn_id" @click="nameIdentify">
                                    <div class="d-flex align-items-center">
                                        <p>Name Your Identity </p>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <span style="font-size: 12px;">Pronay</span>
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </div>
                                </a>
                            </div>
                        </li>

                    </ul>

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn active btn_sub" @click="forSubsCribe">
                                    <div class="d-flex align-items-center">
                                        <p>Newsletter </p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </a>
                            </div>
                        </li>

                    </ul>
                    <p style="font-size: 12px;">Subscribe Brics Token News</p>

                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <!-- newsletter modal part start here  -->
    <div class="pass_modal sub_modal">
        <div class="p_modal">
            <form action="">
                <h6> Subscribe to Newsletters</h6>
                <div class="in_group">
                    <input type="text" placeholder="Email " class="img-fluid" name="" id="">
                </div>
                <p>BY agreeing to the subscription, the user agrees that BRICS policy and related parties may send
                    security recommendations, product guid, promotional information and more.</p>
                <div class="d-flex align-items-center justify-content-center my_modal_footer">
                    <button type="button" class="btn_cancle" @click="forSubCancel">Cancel</button>
                    <button type="button" class="btn_cancle" @click="forSubCancel">Confirm</button>
                </div>
            </form>
        </div>
    </div>
    <!-- newsletter madal end here s -->

    <!-- enter user name modal part start here  -->
    <div class="pass_modal name_id">
        <div class="p_modal">
            <form action="">
                <h6>Change your Identity name</h6>
                <div class="in_group">
                    <input type="text" placeholder="FullName " class="img-fluid" name="" id="">
                </div>
                <div class="d-flex align-items-center justify-content-center my_modal_footer">
                    <button type="button" class="btn_cancle" @click="forNameCancel">Cancel</button>
                    <button type="button" class="btn_cancle" @click="forNameCancel">Confirm</button>
                </div>
            </form>
        </div>
    </div>
    <!-- enter username madal end here s -->

</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
export default {
    head: {
        title: 'Identity Information',
    },
    components: {
        Loader,
    },

    mounted() {

    },

    methods: {
        nameIdentify() {
            $(".name_id").fadeIn();
        },
        forNameCancel() {
            $(".name_id").fadeOut();
        },
        forSubsCribe() {

            $(".sub_modal").fadeIn();
        },
        forSubCancel() {
            $(".sub_modal").fadeOut();
        },

    }
};
</script>
