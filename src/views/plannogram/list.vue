<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Plannogram</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">manage your program</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-Plannogram">
                        <button class="bt-green">+ Add Plannogram</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Search by invoice number, name, mount..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>PLANNOGRAM NAME</th>
                            <th>BACKROUND IMAGE</th>
                            <th>BROADCAST SCHEDULE</th>
                            <th>VALID FROM</th>
                            <th>VALID UNTIL</th>
                            <th>PLANNOGRAM STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_plannogram" :key="item.id">
                            <td class="center">{{ item.plannogram_name }}</td>
                            <td class="center">
                                <!-- {{ item.background_image }} -->
                                <div v-if="item.background_image === 1">
                                    <img src="../../assets/images/FlashSale.png">
                                </div>
                                <div v-else="item.background_image === 2">
                                    <img src="../../assets/images/Ipx.png">
                                </div>
                            </td>
                            <td class="center">{{ item.Broadcast_Schedule }}</td>
                            <td class="center"><label class="label-green">{{ item.Valid_From }}</label></td>
                            <td class="center"><label class="label-green">{{ item.Valid_Until }}</label></td>
                            <td class="center">
                                <div v-if="item.Planogram_Status == 1">
                                    <label class="label-green">Active</label>
                                </div>
                                <div v-else="item.Planogram_Status == 2">
                                    <label class="label-blue">Inactive</label>
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-Plannogram">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-Plannogram">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
	name: 'list-user',
	components: {
		Menu
	},
    data(){
        return {
            list_plannogram: [
                {
                    id: "2",
                    plannogram_name: "Flash Sale Minggu ini",
                    background_image: "viowelya",
                    Broadcast_Schedule: "Senin",
                    Valid_From: "01-06-2021",
                    Valid_Until: "03-06-2021",
                    Planogram_Status: 1
                },
                {
                    id: "2",
                    plannogram_name: "Produk Terbaru",
                    background_image: "viowelya",
                    Broadcast_Schedule: "Rabu",
                    Valid_From: "01-06-2021",
                    Valid_Until: "03-06-2021",
                    Planogram_Status: 1
                }
               
            ]
        }
    }
}
</script>