<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-Plannogram">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Update Plannogram</h1>
                    <p class="mt5 mb20 tc-green">Increase the visibility of promotional product in our store highlights</p>
                </div>
            </div>
            <hr class="uline-grey">

            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Background Image</label>
                </div>
                <div class="w80 relative">
                    <input class="hidden" type="file" id="upload-file" />
                    <!-- <img class="cursor-pointer" src="../../assets/icons/addPhoto.svg" alt="" @click="upload_file()"> -->
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Plannogram Name</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Input your username"
                    >
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Broadcast Schedule</label>
                </div>
                <div class="w80">
                    <!-- <input
                        class="form-text"
                        type="text"
                        placeholder="Pilih hari"
                    > -->
                    <select class="form-select">
                        <option disabled selected>Pilih hari</option>
                        <option value="1">Senin</option>
                        <option value="2">Selasa</option>
                        <option value="3">Rabu</option>
                        <option value="3">Kamis</option>
                        <option value="3">Jumat</option>
                        <option value="3">Sabtu</option>
                        <option value="3">Minggu</option>
                    </select>
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid From</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukkan Tanggal"
                    >
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid Until</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukkan Tanggal"
                    >
                </div>
            </div>

            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">List Product</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="..."
                    >
                </div>
            </div>

            <div class="flex mt30">
                <router-link to="/list-plannogram">
                    <button class="bt-submit-green">Update Plannogram</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'detail-plannogram'
}
</script>