<template>
  <div class="services text-center">
    <h2>Services</h2>
    <b-container>
      <b-row>
        <b-col cols="12" lg="4" sm="12">
          <b-card align="center" justify="center">
            <b-img width="64" height="64" src="../assets/laptop.png" />
            <h3>Web Development</h3>
            <div>
              I can design a responsive website for you by using HTML, CSS,
              BootStrap, JQuery, and JavaScript Programming Language.
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4" sm="12">
          <b-card align="center" justify="center">
            <b-img width="64" height="64" src="../assets/responsive.png" />
            <h3>Responsive Design</h3>
            <div>
              I can design a 100% responsive website for you with all devices,
              Tablets, and Browsers.
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4" sm="12">
          <b-card align="center" justify="center">
            <b-img width="64" height="64" src="../assets/creative.png" />
            <h3>Creative Design</h3>
            <div>
              I can Edit your current website. Like changing the color or even
              adding a new content to make it seem better.
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4" sm="12">
          <b-card align="center" justify="center">
            <b-img width="64" height="64" src="../assets/ideas.png" />
            <h3>Web Idea</h3>
            <div>
              I can turn your ideas to a real projects with high quality. Beside
              that i can give you more ideas to make you website much better.
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4" sm="12">
          <b-card align="center" justify="center">
            <b-img width="64" height="64" src="../assets/retouch.png" />
            <h3>Retouch</h3>
            <div>
              If you have a website and you wanna create a new design for it.
              So, let me tell you that I can do that easily and in perfect way.
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4" sm="12">
          <b-card align="center" justify="center">
            <b-img width="64" height="64" src="../assets/support.png" />
            <h3>Support</h3>
            <div>
              Support is available if you wanna make any changes for your
              website.
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Service",
  components: {},
  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
.services {
  background: rgba($color: #000000, $alpha: 0.7);
  min-height: calc(100vh - 86px - 15px);
  margin: 15px;
  margin-bottom: 0;
  border-radius: 20px;
  h2 {
    font-family: "Pacifico", cursive;
    font-size: 50px;
    color: #ffac41;
  }
  .card {
    margin: 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background-color: #363636;
    box-shadow: 10px 10px 20px #000;
    border-radius: 25px;
    h3 {
      margin: 20px;
      color: #ffac41;
    }
    &:hover {
      transform: scale(1.05, 1.05);
    }
    div {
      color: #c3c3c3;
    }
  }
}
</style>
