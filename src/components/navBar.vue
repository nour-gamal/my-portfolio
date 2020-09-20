<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#" id="brandname">N.</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="text-center ml-auto">
          <router-link to="/" class="pl-4">Home</router-link>
          <router-link to="/about" class="pl-4">About</router-link>
          <router-link to="/services" class="pl-4">Services</router-link>
          <router-link to="/portfolio" class="pl-4">Portfolio</router-link>
          <router-link to="/contact" class="pl-4">Contact</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style lang="scss" scoped>
#brandname {
  font-size: 30px;
  font-weight: 700;
  color: #ffac41;
  font-family: "Lobster", cursive;
}

#nav-collapse {
  font-family: "Pacifico", cursive;
}

a {
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
  color: #c3c3c3;
  &:hover {
    text-decoration: none;
    color: #ffac41;
  }
}
.router-link-exact-active {
  text-decoration: none;
  color: #ffac41;
}
</style>
