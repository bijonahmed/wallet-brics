<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <center>
                <Loader />
            </center>
            <div class="col-md-12">
                <div class="top_sbannar">
                    <div>
                        <nuxt-link to="/wallet/wallet-dashboard"><i class="fa-solid fa-angle-left"></i></nuxt-link>
                    </div>
                </div>
                <div class="scaner_section">
                    <div>

                        <div>
                            <div id="reader"></div>
                        </div>
                        <div class="d-none">
                            <div class="" style="padding: 30px">
                                <h4>Scan Result </h4>
                                <a id="result" target="_parent" class="result">
                                    Result goes here
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
export default {
    head: {
        title: 'Scan',
    },
    components: {
        Loader,
    },
    mounted() {
        var dd = document.getElementById("result");

        function onScanSuccess(qrCodeMessage) {
            var code = qrCodeMessage;
            dd.innerHTML = '<p class="result">' + qrCodeMessage + "</p>";
            dd.setAttribute("href", code);
            dd.click();
        }

        function onScanError(errorMessage) {
            // Handle Scan Error
        }

        var html5QrCodeScanner = new Html5QrcodeScanner("reader", {
            fps: 10,
            qrbox: 250
        });

        html5QrCodeScanner.render(onScanSuccess, onScanError);
    }
};
</script>
