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
                            <nuxt-link to="/wallet/manage/personal-details" type="button">
                                <ion-icon class="fa-solid fa-chevron-left"></ion-icon>
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

                                        <p style="color: #000;">Identification</p>
                                        <ion-icon class="fa-solid fa-circle-question"></ion-icon>
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
                                    <img src="images/logo_loader.png" loading="lazy" class="img-fluid" alt="">

                                </div>

                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn active btn_id">
                                    <div class="d-flex align-items-center">
                                        <p>Name Your Identity </p>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <span style="font-size: 12px;">Pronay</span>
                                        <ion-icon class="fa-solid fa-chevron-right"></ion-icon>
                                    </div>
                                </a>
                            </div>
                        </li>

                    </ul>

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn active btn_sub">
                                    <div class="d-flex align-items-center">
                                        <p>Newsletter </p>
                                    </div>
                                    <ion-icon class="fa-solid fa-chevron-right"></ion-icon>
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
                    <button type="button" class="btn_cancle">Cancel</button>
                    <button type="button" class="btn_cancle">Confirm</button>
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
                    <button type="button" class="btn_cancle">Cancel</button>
                    <button type="button" class="btn_cancle">Confirm</button>
                </div>
            </form>
        </div>
    </div>
    <!-- enter username madal end here s -->
    <Footer />
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Identity Information',
    },
    components: {
        Loader,
        Footer
    },

    mounted() {

    },

    methods: {
        backupPopup() {
            $(".pass_id").fadeIn();
        },
        enterpassword() {
            $(".pass_modal").fadeOut();
        },
        passwordHint() {
            $(".pass_hint").fadeIn();
        },
        passwordHintCls() {
            $(".pass_hint").fadeOut();
        }
    }
};
</script>
