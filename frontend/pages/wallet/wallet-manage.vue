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
                            <nuxt-link to="/wallet/wallet-dashboard" class="" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>

                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Manage</h6>
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
                <div class="layer settings_">

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer profile_">
                                <nuxt-link to="/wallet/identity-information" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/logo_loader.png" loading="lazy" style="height: 35px; width: 35px;" class="img-fluid" alt="">
                                        <div>
                                            <p>Pronay</p>
                                            <p style="font-size: 12px;">Manage your ientity wallet</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <span style="font-size: 12px;">Please backup</span>
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </div>
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer profile_">
                                <a type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <p>Wallet Address </p>
                                            <p style="font-size: 12px;">hask4roq34h...........78asdfh</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn active w_modal" @click="w_modal">
                                    <div class="d-flex align-items-center">
                                        <p>Wallet Name </p>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <span style="font-size: 12px;">BRICS</span>
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </div>
                                </a>
                            </div>
                        </li>

                    </ul>

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer">
                                <nuxt-link to="/wallet/biometric" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>Biometric Verification</p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </nuxt-link>
                            </div>
                        </li>

                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn active pass_h" @click="exportkeystore">
                                    <div class="d-flex align-items-center">
                                        <p>Export Keystore </p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn active pass_h" @click="exportkeystore">
                                    <div class="d-flex align-items-center">
                                        <p>Export Private key </p>
                                    </div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </a>
                            </div>
                        </li>

                    </ul>

                    <ul>
                        <li>
                            <div class="_layer justify-content-center">
                                <nuxt-link to="/wallet/layer" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>Ethereum consensus layer BLS key </p>
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

    <!-- enter password modal part start here  -->
    <div class="pass_modal w_name">
        <div class="p_modal">
            <form action="">
                <h6>Wallet Name </h6>
                <div class="in_group">
                    <input type="text" placeholder="BRICS" class="img-fluid" name="password" id="password-field">
                </div>
                <div class="d-flex align-items-center justify-content-center my_modal_footer">
                    <button type="button" class="btn_cancle" @click="cancel">Cancel</button>
                    <button type="button" class="btn_cancle" @click="cancel">Confirm</button>
                </div>
            </form>
        </div>
    </div>
    <!-- enter password madal end here s -->

    <!-- enter password modal part start here  -->
    <div class="pass_modal pass_hint">
        <div class="p_modal">
            <form action="">
                <h6>Enter password</h6>
                <div class="in_group">
                    <input type="password" placeholder="Password" class="img-fluid" name="password" id="password-field">
                    <!-- <i toggle="password-field" class="fa-regular fa-eye toggle-password"></i> -->
                    <i toggle="#password-field" class=" fa-regular fa-eye  toggle-password" @click="showpassword"></i>
                </div>
                <div class="d-flex align-items-center justify-content-center my_modal_footer">
                    <button type="button" class="btn_cancle" @click="pass_hint_close">Cancel</button>
                    <button type="button" class="btn_cancle" @click="pass_hint_close">Confirm</button>
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
        title: 'Wallet Manage',
    },
    components: {
        Loader,
    },

    mounted() {

    },

    methods: {
        showpassword() {
            $(this).toggleClass("fa-eye fa-eye-slash");
            var input = $($(this).attr("toggle"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        },
        w_modal() {

            $(".w_name").fadeIn();
        },
        cancel() {

            $(".pass_modal").fadeOut();
        },
        exportkeystore() {
            $(".pass_hint").fadeIn();
        },
        pass_hint_close() {
            $(".pass_hint").fadeOut();
        }

    }
};
</script>
