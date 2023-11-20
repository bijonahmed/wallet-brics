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
                            <nuxt-link to="/wallet/user/profile" type="button">
                                <ion-icon class="fa-solid fa-chevron-left"></ion-icon>
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Address Book</h6>
                        </div>
                        <div class=" link_home">
                            <nuxt-link to="/wallet/user/add-address" type="button">
                                <ion-icon class="fa-solid fa-plus"> </ion-icon>
                            </nuxt-link>
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

            </div>
        </div>
    </section>
    <!-- main part end here  -->
    <Footer />
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Address Type',
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
