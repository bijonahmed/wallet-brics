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
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>
                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <h6>Notifications</h6>
                        </div>
                        <div class=" link_home">
                            <button type="button" class="btn_cancle" style="color: #000;">All Read </button>
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
                <div class="notice_btns">
                    <button type="button" class="btn_n " style="color: #000;">Transection Notice </button>
                    <button type="button" class="btn_m active" style="color: #000;">System Messages </button>
                </div>
                <!-- transection part start here  -->
                <div class="transection_part">
                    <ul>
                        <li>
                            <a type="button" class="btn_read_message" data-bs-toggle="modal" data-bs-target="#m_modal">
                                <div class="transection_box">
                                    <div class="ico_title ">
                                        <i class="fa-solid fa-check"></i>
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
                                    <!-- if message already read add class read  -->
                                    <div class="ico_title read">
                                        <i class="fa-solid fa-check"></i>
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
                </div>

                <!-- message part start here  -->
                <div class="message_part">
                    <ul>
                        <li>
                            <a type="button" class="btn_read_message" data-bs-toggle="modal" data-bs-target="#m_modal">
                                <div class="m_box">
                                    <div class="ttl_m">
                                        <h6>Lorem ipsum.</h6>
                                        <p>10-03 13:35</p>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ad earum
                                        dignissimos.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <!-- if message read then add class read  -->
                            <button type="button" class="btn_read_message" data-bs-toggle="modal" data-bs-target="#m_modal">
                                <div class="m_box read">
                                    <div class="ttl_m">
                                        <h6>Lorem ipsum.</h6>
                                        <p>10-03 13:35</p>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ad earum
                                        dignissimos.</p>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->
    <!-- footer part start here  -->
    <Footer />

    <!-- Modal -->
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
        title: 'Notification',
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
