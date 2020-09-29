<template>
  <div class="services text-center">
    <h2>Services</h2>
    <b-container>
      <b-row>
        <b-col
          v-scrollAnimation
          v-for="card in cards"
          :key="card.id"
          cols="12"
          lg="4"
          sm="12"
        >
          <b-card>
            <b-img width="64" height="64" :src="card.pic" alt="img" />
            <h3>{{ card.heading }}</h3>
            <div>{{ card.paragraph }}</div>
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
    cards: [
      {
        id: 0,
        heading: "Web Development",
        paragraph:
          "I can design a responsive website for you by using HTML, CSS,BootStrap, JQuery, and JavaScript Programming Language.",
        pic: require("@/assets/services/laptop.png"),
      },
      {
        id: 1,
        heading: "Responsive Design",
        paragraph:
          " I can design a 100% responsive website for you with all devices,Tablets, and Browsers.",
        pic: require("@/assets/services/responsive.png"),
      },
      {
        id: 2,
        heading: "Creative Design",
        paragraph:
          " I can Edit your current website. Like changing the color or even adding a new content to make it seem better.",
        pic: require("@/assets/services/creative.png"),
      },
      {
        id: 3,
        heading: "Web Ideas",
        paragraph:
          "I can turn your ideas to a real projects with high quality. Beside that i can give you more ideas to make you website much better.",
        pic: require("@/assets/services/ideas.png"),
      },
      {
        id: 4,
        heading: "Retouchs",
        paragraph:
          "If you have a website and you wanna create a new design for it.So, let me tell you that I can do that easily and in perfect way.",
        pic: require("@/assets/services/retouch.png"),
      },
      {
        id: 5,
        heading: "Support",
        paragraph:
          "  Support is available if you wanna make any changes for your website.",
        pic: require("@/assets/services/support.png"),
      },
    ],
  }),
  computed: {},
  methods: {},
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
  .before-enter {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 0.7s ease-in-out;
  }
  .enter {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
