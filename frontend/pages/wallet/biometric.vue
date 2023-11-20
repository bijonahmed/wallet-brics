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
                        <div class="link_home ">
                            <nuxt-link to="/wallet/wallet-manage" class="" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                                <!-- <i class="fa-solid fa-chevron-left"></i></a> -->
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Biometric Verification</h6>
                        </div>

                        <div class=" link_home">
                            <!-- <button type="button" class="btn_cancle">Save</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- top menu bar end here  -->

    <!-- main part start here  -->
    <section class="main_part ">
        <div class="container-fluid">
            <div class="col-md-12">
                <div class="ex_box" style="background-color: transparent;">
                    <div class="finger_print">
                        <i class="fa-solid fa-fingerprint"></i>
                    </div>
                    <div class="d-flex justify-content-between bio_metric" style="background-color: #fff;">
                        <h6>Tuch ID </h6>
                        <div>
                            <div class="checkboxes__row">
                                <div class="checkboxes__item">
                                    <label class="checkbox style-e">
                                        <input type="checkbox" id="check2" />
                                        <div class="checkbox__checkmark"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bio_txt">
                        <p>Introduction to biometric verification</p>
                        <p>Your wallet password will be encrypted and stored in the Keychain/ Keystore of your mobile
                            device, biometrics (fringerprint or facial) will decrypt the password for transaction
                            esecution.</p>
                        <p>Please backup the password immediately after enabling biometric verification feature. To
                            reset the password, you can reimport the wallet using Mnemonic Phrase or Private Key.</p>
                        <p>Security reminder</p>
                        <p>Please check on the security level of your mobile device's biometric verification features
                            for large assets transfer, please execute by manually inputting you password</p>
                        <p>Please refrain from enabling biometric verification shared mobile devices</p>
                        <p>Disclaimer</p>
                        <p>The security levels for biometric verification very among mobile device, users are
                            recommended to proceed with caution. BRICS token will not be held liable for any risks or
                            loss arising from vulnerabilities in the biometric verification feature.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
export default {
    head: {
        title: 'Biometric',
    },
    components: {
        Loader,
    },

    mounted() {

    },

    methods: {

    }
};
</script>
