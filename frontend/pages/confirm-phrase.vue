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
                            <nuxt-link to="/phrase" type="button">
                                <i class="fa-solid fa-circle-chevron-left"></i>
                            </nuxt-link>

                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <!-- <h6>Create BRICS Wallet</h6> -->
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <!-- <a href="#"><ion-icon name="help-circle-outline"></ion-icon></a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- top menu bar end here  -->

    <!-- main part start here  -->
    <section class="main_part sm_height ">
        <div class="st_part">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="create_step">
                            <div class="step_box active">
                                <h1>1</h1>
                                <p>Create identity</p>
                                <!-- <span></span> -->
                            </div>
                            <div class="step_box active">
                                <h1>2</h1>
                                <p>Secure wallet</p>
                                <span></span>
                            </div>
                            <div class="step_box active">
                                <h1>3</h1>
                                <p>Confirm secret recovery phrase</p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="backUup_phrase">
                            <h1>Confirm Secret Recovery Phrase </h1>

                            <form action="">
                                <div class="phrase_box confirn_box">
                                    <div class="code_box">
                                        <input type="text" value="pharse" disabled readonly>
                                        <p>1</p>
                                    </div>
                                    <div class="code_box">
                                        <input type="text" value="pharse" disabled readonly>
                                        <p>2</p>
                                    </div>
                                    <div class="code_box">
                                        <input type="text" value="pharse" disabled readonly>
                                        <p>3</p>
                                    </div>
                                    <div class="code_box">
                                        <input type="text" value="pharse" disabled readonly>
                                        <p>4</p>
                                    </div>
                                    <div class="code_box">
                                        <input type="text" value="pharse" disabled readonly>
                                        <p>5</p>
                                    </div>
                                    <div class="code_box">
                                        <input type="text" value="" style="outline: none; border: 1px solid #5b99fe;">
                                        <p>6</p>
                                    </div>
                                    <div class="code_box">
                                        <input type="text" value="" style="outline: none; border: 1px solid #5b99fe;">
                                        <p>7</p>
                                    </div>
                                    <div class="code_box">
                                        <input type="text" value="pharse" disabled readonly>
                                        <p>8</p>
                                    </div>
                                    <div class="code_box">
                                        <input type="text" value="pharse" disabled readonly>
                                        <p>9</p>
                                    </div>
                                    <div class="code_box">
                                        <input type="text" value="pharse" disabled readonly>
                                        <p>10</p>
                                    </div>
                                    <div class="code_box">
                                        <input type="text" value="" style="outline: none; border: 1px solid #5b99fe;">
                                        <p>11</p>
                                    </div>
                                    <div class="code_box">
                                        <input type="text" value="pharse" disabled readonly>
                                        <p>12</p>
                                    </div>
                                </div>
                                <!-- <buttton class="btn_ok push_backup" type="button">Next</buttton> -->
                                <button class="btn_ok push_backup" @click="successmessage" type="button"> Next </button>
                                <!-- if phrase correct remove "disabled" class, other wide add "disable class" -->
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- main part end here  -->

    <!-- enter password modal part start here  -->
    <div class="success_modal pass_id">
        <div class="" style="position: relative;">
            <div class="modal__icon">
                <span class="fa-solid fa-check"></span>
            </div>
            <h3 class="modal__title">
                Congratulations
            </h3>
            <p class="modal__text">
                Your settings have been successfully applied.
            </p>
            <button class="button btn_nxt">
                <span class="button__label" @click="wlletDashboard">Done</span>
            </button>
        </div>
    </div>
    <!-- enter password madal end here s -->

</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
export default {
    head: {
        title: 'Confirm Phrase',
    },
    components: {
        Loader,
    },

    mounted() {},

    methods: {
        successmessage() {
            $(".pass_id").fadeIn();
        },

        wlletDashboard() {
            if (process.client) {
                this.$router.push({
                    path: '/wallet/add-coin-start'
                });
            }

        }

    }
};
</script>
