<template>
  <div class="row container">
    <div class="col-4 col-xl-4">
      <div class="card">
        <div class="card-header">
          <h4>Transaksi Pembayaran SPP</h4>
          <div class="row">
            <!-- <div class="col">
              <b>Tanggal</b>
              <select id="dob" class="form-select" v-model="pilihTanggal">
                <option v-for="tgl in tgls" :key="tgl">{{ tgl }}</option>
              </select>
            </div>
            <div class="col">
              <b>Tahun</b>
              <select id="dob" class="form-select" v-model="pilihTahun">
                <option v-for="year in years" :key="year">{{ year }}</option>
              </select>
            </div> -->
          </div>
        </div>
        <div class="col-8">
          <!-- <input type="number" min="1900" max="2099" step="1" value="2016" /> -->
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover table-lg">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Bulan</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(dataBulan, index) in dataBulans"
                  :key="dataBulan.id"
                >
                  <td class="col-auto">
                    <div class="d-flex align-items-center">
                      <p class="font-bold ms-3 mb-0">{{ index + 1 }}</p>
                    </div>
                  </td>
                  <td class="col-auto">
                    <p class="mb-0">
                      {{ dataBulan.nama_bulan }}
                    </p>
                  </td>
                  <td class="col-auto">
                    <p>
                      <button
                        class="btn btn-primary btn-sm"
                        @click="bayar(dataBulan.id)"
                        >
                        <!-- :disabled="btnDisabled.includes(dataBulan.id)"
                      > -->
                        Bayar
                      </button>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <button class="btn btn-success block" @click="prosesBayar()">
              Proses Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- col 2 -->
    <div class="col-8 col-xl-8">
      <div class="card">
        <div class="card-header">
          <h4>Kartu SPP</h4><br>
          <div class="row">
            <div class="col" style="text-align:center;">
              <b>NIS</b>
             <h6 class="mt-2">{{nis}}</h6>
            </div>
            <div class="col" style="text-align:center;">
              <b>Nama</b>
             <h6 class="mt-2">{{nama}}</h6>
            </div>
            <div class="col" style="text-align:center;">
              <b>Kelas</b>
             <h6 class="mt-2">{{kelas}}</h6>
            </div>
            <div class="col" style="text-align:center;">
             <b>Jurusan</b>
               <h6 class="mt-2">{{jurusan}}</h6>
            </div>
          </div>
        </div>
        <div class="col-8">
          <!-- <input type="number" min="1900" max="2099" step="1" value="2016" /> -->
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover table-lg">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Tanggal</th>
                  <th>Bulan</th>
                  <th>SPP</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(dataBayarsiswa, index) in dataBayarsiswas"
                  :key="dataBayarsiswa.id"
                >
                  <td class="col-auto">
                    <div class="d-flex align-items-center">
                      <p class="font-bold ms-3 mb-0">{{ index + 1 }}</p>
                    </div>
                  </td>
                  <td class="col-auto">
                    <p class="mb-0">
                      {{ dataBayarsiswa.tgl_bayar }}
                    </p>
                  </td>
                  <td class="col-auto">
                    <p class="mb-0">
                      {{ dataBayarsiswa.nama_bulan }}
                    </p>
                  </td>
                  <td class="col-auto">
                    <p class="mb-0">
                      {{ dataBayarsiswa.nominal }}
                    </p>
                  </td>
                  <td class="col-auto">
                    <p>
                      <button
                        class="btn btn-danger btn-sm"
                        @click="hapusBayar(dataBayarsiswa.id)"
                       
                      >
                        Hapus
                      </button>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <button class="btn btn-success block" @click="prosesBayar()">
              Proses Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,  onBeforeMount, computed, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const dataBulans = ref([]);
const dataSiswas = ref({});
const dataBayarsiswas = ref([]);
const pilihTahun = ref("");
const pilihTanggal = ref("");

const spp = ref([]);
const sppDiBayar = ref([]);
const totalBayar = ref(0);
const idSPP=ref("")

const id_siswa = ref("");
const nis = ref("");
const nama = ref("");
const kelas = ref("");
const jurusan = ref("");
const tahunbayar = ref("");
const tglBayar = ref("");


var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth() + 1;

var yyyy = today.getFullYear();
  // if (dd < 10) {
  //   dd = '0' + dd;
  // }
  // if (mm < 10) {
  //   mm = '0' + mm;
  // }
  // var today = dd + '/' + mm + '/' + yyyy;

tglBayar.value=today.toLocaleString();
let tgl=tglBayar.value;console.log(tgl);

tahunbayar.value=yyyy;

// tahunbayar.value=tgl.substring(5,9);console.log(tahunbayar.value);


//kode otomatis untuk kode bayar
// kode_bayar.value = "SPP" + Math.floor(Math.random() * (9999 - 1111 + 1) + 1111);
 id_siswa.value = `${route.params.id}`;

onBeforeMount(() => {
  getBulan();
 
 
});
onMounted(()=>{
  getSiswa();
  getTampilSpp();
})

  

//get list bulan
const getBulan = async () => {
  await axios
    .get("/getbulan")
    .then((response) => {
      console.log(response.data.data);
      dataBulans.value = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

//get data siswa
const getSiswa = async () => {
  await axios
    .get(`/getinfosiswa/${route.params.id}`)
    .then((response) => {
      console.log(response.data.data);
      dataSiswas.value = response.data.data;
      nama.value=dataSiswas.value[0].nama
      nis.value=dataSiswas.value[0].nis
      kelas.value=dataSiswas.value[0].nama_kelas
      jurusan.value=dataSiswas.value[0].kompetensi_keahlian
      
    })
    .catch((error) => {
      console.log(error);
    });
};

const getTampilSpp=async()=>{
 
  let tahun=tahunbayar.value; console.log(tahun);
  let idSiswa=id_siswa.value; console.log(idSiswa);

  await axios
    .get(`/tampilbayarspp/${route.params.id}/${tahun}`)
    
    .then((response) => {
      console.log(response.data);
      dataBayarsiswas.value=response.data.data
      
     
    })
    .catch((error) => {
      console.log(error);
    });
  
};

// list tahun
// const years = computed(() => {
//   return Array.from({ length: 2030 - 2020 }, (value, index) => 2021 + index);
// });

//list tanggal
// const tgls = computed(() => {
//   return Array.from({ length: 31 - 0 }, (value, index) => 1 + index);
// });

// pilih bulan bayar spp
const bayar = async (id) => {
  // console.log(pilihTahun.value);
 
    let idbulan=parseInt(id);
    let idSiswa=parseInt(dataSiswas.value[0].id);
    let tahun=tahunbayar.value;
  
    axios
      .get(`/caribayarspp/${idbulan}/${idSiswa}/${tahun}`)
      .then((res) => {
        console.log(res);
       
        if(res.data.pesan==='data di temukan'){
          alert(res.data.pesan)
        }else{
           //get spp perbulan
           spp.value = dataSiswas.value[0].nominal;
          //memasukan spp perbulan ke array
          sppDiBayar.value.push(spp.value);
          //sum spp yang di bayarkan
          totalBayar.value = sppDiBayar.value.reduce(
            (total, item) => total + item,
            0
          );

          const formData = new FormData();
              // formData.append('id_user',title.value);
              formData.append("id_siswa", id_siswa.value);
              formData.append("tgl_bayar", tglBayar.value);
              formData.append("id_bulan", id);
              formData.append("thn_bayar", tahunbayar.value);
              formData.append("id_spp", dataSiswas.value[0].id_spp);
              formData.append("jumlah_bayar", totalBayar.value);
              for (const value of formData.values()) {
                console.log(value);
              }
          axios
            .post('/detailsimpanspp',formData)
            .then((res) => {
              console.log(res);
              alert(res.data.pesan);
              getTampilSpp();
              
            })
            .catch((err) => {
              console.log(err);
            });
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
};

const hapusBayar=async(id)=>{
   axios
      .delete(`/hapusbayar/${id}`)
      .then((res) => {
        console.log(res);
        // splice posts
        const index = dataBayarsiswas.value.findIndex(byr => byr.id === id) // find the post index
        if (~index) {
        // if the post exists in array
        dataBayarsiswas.value.splice(index, 1)
        }
        alert("Proses hapus pembayaran SPP  berhasil");
      })
      .catch((error) => {});
}

const prosesBayar = async (id) => {
  if (!pilihTahun.value && !pilihTanggal.value) {
    alert("tanggal dan tahun tidak boleh kosong");
  } else {
    const formData = new FormData();
    // formData.append('id_user',title.value);
    formData.append("id_siswa", dataSiswa.value.id);
    formData.append("tgl_bayar", pilihTanggal.value);
    formData.append("tahun_bayar", pilihTahun.value);
    formData.append("id_spp", dataSiswa.value.spp.id);
    formData.append("id_detail_bayar",  dataSiswa.value.detail_bayar.id);
    formData.append("totalDibayar", totalBayar.value);

    for (const value of formData.values()) {
      console.log(value);
    }

    // axios
    //   .post("/prosessimpanspp", formData)
    //   .then((res) => {
    //     console.log(res);
    //     alert("Proses pembayaran SPP  berhasil");
    //   })
    //   .catch((error) => {});
  }
};


</script>

<!-- new Date().toLocaleString() -->
