<template>
    <div class="container">
        <div class="row">
            <div class="col center">
                <router-link to="/list-user">
                    <div>
                        User<hr class="uline-green">
                    </div>
                    
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/list-product">
                    <div>
                        Product<hr class="uline-grey">
                    </div>
                    
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/list-voucher">
                    <div>
                        Voucher<hr class="uline-grey">
                    </div>
                    
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Banner<hr class="uline-grey">
                    </div>
                </router-link>
                <router-link to="/list-banner">
                    
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/list-Plannogram">
                    <div>
                        Plannogram<hr class="uline-grey">
                    </div>
                </router-link>
                <router-link to="/list-plannogram">
                    
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Article<hr class="uline-grey">
                    </div>
                </router-link>
                <router-link to="/list-article">
                    
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Notification<hr class="uline-grey">
                    </div>
                </router-link>
                <router-link to="/list-notification">
                    
                </router-link>
            </div>
            <div class="col center">
                <router-link to="/cart">
                    <div>
                        Delivery Method<hr class="uline-grey">
                    </div>
                </router-link>
                <router-link to="/list-delivery-method">
                    
                </router-link>
            </div> 
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Menu',
        data(){
            return {
                
            }
        },
    }
</script>