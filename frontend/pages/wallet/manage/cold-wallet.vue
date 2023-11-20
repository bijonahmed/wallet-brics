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
                            <nuxt-link to="/wallet/add-wallet" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>

                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Import BRICS Wallet</h6>
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
                <div class="form_part">
                    <form action="">
                        <div class="in_group">
                            <label> Cold Wallet </label>
                            <textarea name="" placeholder="Enter private key" id="" cols="30" rows="3"></textarea>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <section class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="f_buttons">
                        <button class="btn_backup" type="button">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Colud Wallet',
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
