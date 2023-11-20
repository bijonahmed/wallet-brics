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
                            <nuxt-link to="/wallet/user/manage-wallet" type="button">
                                <i class="fa-chevron-left fa-solid"></i>
                            </nuxt-link>

                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Manage your identity wallet</h6>
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <a href="#help_link" type="button">
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
                <div class="layer settings_">

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer profile_">
                                <nuxt-link to="/wallet/manage/identity-information" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <img src="/images/logo_loader.png" loading="lazy" class="img-fluid" alt="">
                                        <p>Pronay</p>
                                    </div>
                                    <i class="fa-chevron-right fa-solid"></i>
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn active push_backup" @click="backupPopup">
                                    <div class="d-flex align-items-center">
                                        <p>Backup </p>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <span style="font-size: 12px;">Please backup</span>
                                        <i class="fa-chevron-right fa-solid"></i>
                                    </div>
                                </a>
                            </div>
                        </li>

                    </ul>
                    <p style="font-size: 12px;">Backup your wallet to recover your multi assets under the identity
                        wallet</p>

                    <ul style="background-color: #fff;">
                        <li>
                            <div class="_layer">
                                <nuxt-link  to="/wallet/manage/add-coin" type="button" class="_net_btn active">
                                    <div class="d-flex align-items-center">
                                        <p>Add Coin</p>
                                    </div>
                                    <i class="fa-chevron-right fa-solid"></i>
                                </nuxt-link>
                            </div>
                        </li>

                        <li>
                            <div class="_layer">
                                <a type="button" class="_net_btn active pass_h">
                                    <div class="d-flex align-items-center"  @click="passwordHint">
                                        <p>Password hint</p>
                                    </div>
                                    <i class="fa-chevron-right fa-solid"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="_layer justify-content-center">
                                <a href="" type="button" class="_net_btn active justify-content-center">
                                    <div class="d-flex align-items-center ">
                                        <p style="color: red;">Quit</p>
                                    </div>
                                    <!-- <i name="chevron-forward-outline"></i> -->
                                </a>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <!-- enter password modal part start here  -->
    <div class="pass_modal pass_id">
        <div class="p_modal">
            <form action="">
                <h6>Enter password</h6>
                <div class="in_group">
                    <input type="password" placeholder="Password" class="img-fluid" name="password" id="password-field">
                    <!-- <i toggle="password-field" class="fa-regular fa-eye toggle-password"></i> -->
                    <i toggle="#password-field" class=" fa-regular fa-eye  toggle-password"></i>
                </div>
                <div class="d-flex align-items-center justify-content-center my_modal_footer">
                    <button type="button" class="btn_cancle" @click="enterpassword">Cancel</button>
                    <button type="button" class="btn_cancle confirm_pass" @click="enterpassword">Confirm</button>
                </div>
            </form>
        </div>
    </div>
    <!-- enter password madal end here s -->

    <!--  password hint modal part start here  -->
    <div class="pass_modal pass_hint">
        <div class="p_modal">
            <form action="">
                <h6>Passwod Hint </h6>
                <div class="in_group">
                    <input type="password" placeholder="Password hint" value="Test_pass" class="img-fluid" name="hint" id="password-hint">
                    <i toggle="#password-hint" class=" fa-regular fa-eye  toggle-password"></i>
                </div>
                <div class="d-flex align-items-center justify-content-center my_modal_footer">
                    <button type="button" class="btn_cancle" @click="passwordHintCls">Cancel</button>
                    <button type="button" class="btn_cancle">Confirm</button>
                </div>
            </form>
        </div>
    </div>
    <!--  password hint madal end here s -->
    <Footer />

</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Personal Deails',
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
