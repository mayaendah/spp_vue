<template>
    <div id="main" class="layout-horizontal">
        <header class="mb-5">
            <div class="header-top">
              <div class="container">
                <div class="logo">
                  <a href="index.html">
                    <img src="assets/images/logo/logo.svg" alt="Logo"/>
                </a>
                </div>
                <div class="header-top-right">
                  <div class="dropdown" >
                    <a
                      href="#"
                      id="topbarUserDropdown"
                      class="
                        user-dropdown
                        d-flex
                        align-items-center
                        dropend
                        dropdown-toggle
                      "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div class="avatar avatar-md2">
                        <img src="assets/images/faces/1.jpg" alt="Avatar" />
                      </div>
                      <div class="text">
                        <h6 class="user-dropdown-name">John Ducky</h6>
                        <p class="user-dropdown-status text-sm text-muted">
                          Member
                        </p>
                      </div>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end shadow-lg"
                      aria-labelledby="topbarUserDropdown"
                    >
                      <li><a class="dropdown-item" href="#">My Account</a></li>
                      <li><a class="dropdown-item" href="#">Settings</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item" href="auth-login.html"
                          >Logout</a
                        >
                      </li>
                    </ul>
                  </div>
    
                  <!-- Burger button responsive -->
                  <a href="#" class="burger-btn d-block d-xl-none">
                    <i class="bi bi-justify fs-3"></i>
                  </a>
                </div>
              </div>
            </div>
            <nav class="main-navbar">
              <div class="container">
                <ul>
                  <li class="menu-item">
                    <RouterLink to="/"  class="menu-link">
                      <i class="bi bi-grid-fill"></i>
                      <span>Dashboard</span>
                    </RouterLink>
                  </li>
    
                  <li class="menu-item has-sub">
                    <a href="#" class="menu-link">
                      <i class="bi bi-stack"></i>
                      <span>CRUD</span>
                    </a>
                    <div class="submenu">
                      <!-- Wrap to submenu-group-wrapper if you want 3-level submenu. Otherwise remove it. -->
                      <div class="submenu-group-wrapper">
                        <ul class="submenu-group">
                          <li class="submenu-item">
                            <!-- <a href="component-alert.html" class="submenu-link">Siswa</a> -->
                            <RouterLink to="/crud/siswa" class="submenu-link">Siswa</RouterLink>
                          </li>
    
                          <li class="submenu-item">
                            <RouterLink to="/crud/petugas" class="submenu-link">Petugas</RouterLink>
                          </li>
    
                          <li class="submenu-item">
                            <RouterLink to="/crud/kelas" class="submenu-link">Kelas</RouterLink>
                          </li>
    
                      
                          <li class="submenu-item">
                            <RouterLink to="/crud/spp" class="submenu-link">SPP</RouterLink>
                          </li>
    
                        </ul>
    
                       
                      </div>
                    </div>
                  </li>
    
                  <!-- <li class="menu-item active">
                    <RouterLink to="/pembayaran" class="menu-link">
                      <i class="bi bi-grid-1x2-fill"></i>
                      <span>Transaksi Pembayaran</span>
                    </RouterLink>
                    
                  </li> -->
    
                  <li class="menu-item">
                    <RouterLink to="/histori" class="menu-link">
                      <i class="bi bi-grid-1x2-fill"></i>
                      <span>History Pembayaran</span>
                    </RouterLink>
                   
                  </li>
    
                  <li class="menu-item">
                    <RouterLink to="/laporan" class="menu-link">
                        <i class="bi bi-table"></i>
                      <span>Laporan</span>
                    </RouterLink>
                   
                  </li>
                </ul>
              </div>
            </nav>
          </header>
    </div>
    
</template>