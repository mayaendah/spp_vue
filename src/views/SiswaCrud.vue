<template>
    <div class="row">
                    
        <div class="col-12 col-xl-12 ">
          <div class="card">
            <div class="card-header">
              <h4>Data Siswa</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover table-lg">
                  <thead>
                    <tr>
                      
                      <th>NISN</th>
                      <th>NIS</th>
                      <th>Nama</th>
                      <th>Kelas</th>
                      <th>No. Hp</th>
                      <th>Alamat</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="dtsiswa in dataSiswa " :key="dtsiswa.id">
                      <td class="col-auto">
                        <div class="d-flex align-items-center">
                          <p class="font-bold ms-3 mb-0">{{dtsiswa.nisn}}</p>
                        </div>
                      </td>
                      <td class="col-auto">
                        <p class="mb-0">
                         {{ dtsiswa.nis }}
                        </p>
                      </td>
                      <td class="col-auto">
                        <p class="mb-0">
                          <router-link  :to="{name:'pembayaran',params:{id:dtsiswa.id}}">{{ dtsiswa.nama }}</router-link>
                        </p>
                      </td>
                      <td class="col-auto">
                        <p class="mb-0">
                         {{ dtsiswa.kelas.nama_kelas }}
                        </p>
                      </td>
                      <td class="col-auto">
                        <p class="mb-0">
                         {{ dtsiswa.no_tlp }}
                        </p>
                      </td>
                      <td class="col-auto">
                        <p class="mb-0">
                         {{ dtsiswa.alamat }}
                        </p>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { ref,onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";


const router = useRouter();
const dataSiswa=ref([]);
  
onMounted(async() => {
  await axios
        .get("/getsiswa")
        .then((response) => {
          console.log(response.data.data);
          dataSiswa.value=response.data.data
        })
        .catch((error) => {
          console.log(error);
        });
})

</script>