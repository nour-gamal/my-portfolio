<template>
  <div class="portfolio text-center">
    <h2>Portfolio</h2>
    <b-container fluid class="mt-4">
      <div v-if="plusPage" class="plusPage">
        <div class="innerContent">
          <div v-for="info in infos" :key="info.id">
            <v-icon
              @click="
                (plusPage = !plusPage),
                  (infos[0].status = false),
                  (infos[1].status = false),
                  (infos[2].status = false),
                  (infos[3].status = false)
              "
              class="icon"
              name="times-circle"
              scale="2"
            />
            <div v-if="info.status">
              <h2>{{ info.name }}</h2>
              <b-img
                width="150"
                height="150"
                rounded="circle"
                :src="info.icon"
              ></b-img>
              <div class="framebox">
                <h3>Project informations:</h3>
                <div>
                  Category :<span>{{ info.cat }}</span>
                </div>
                <div>
                  Project date :<span>{{ info.date }} </span>
                </div>

                <div>
                  Project URL :<a :href="info.url" target="_blank">
                    {{ info.url }}</a
                  >
                </div>
              </div>
              <div class="framebox">
                <h3>Technolgies used:</h3>
                <div v-for="tech in info.techUsed" :key="tech">{{ tech }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-row class="mainPage">
        <b-col
          v-scrollAnimation
          v-for="info in infos"
          :key="info.id"
          cols="12"
          lg="4"
          sm="12"
          class="mb-2"
          id="container"
        >
          <b-img thumbnail fluid :src="info.pic" alt="Image" class="image">
          </b-img>
          <div id="overlay">
            <h2 class="imgHead">{{ info.name }}</h2>
            <a :href="info.url" target="_blank">
              <v-icon class="icon" name="eye" scale="2" />
            </a>
            <v-icon
              @click="(plusPage = !plusPage), (info.status = true)"
              class="icon plus "
              name="plus"
              scale="2"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style lang="scss" scoped>
.portfolio {
  background: rgba($color: #000000, $alpha: 0.7);
  min-height: calc(100vh - 86px - 15px);
  margin: 15px;
  margin-bottom: 0;
  border-radius: 20px;

  h2 {
    color: #ffac41;
    font-family: "Pacifico", cursive;
    font-size: 50px;
  }
  a {
    text-decoration: none;
  }

  .image {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    opacity: 1;
    backface-visibility: hidden;
    margin-bottom: 20px;
  }
  #overlay {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    text-align: center;
  }
  #container:hover .image {
    opacity: 0.3;
  }

  #container:hover #overlay {
    opacity: 1;
  }
  .imgHead {
    color: #fff;
    font-size: 25px;
    font-weight: bolder;
    cursor: pointer;
    color: #ffac41;
  }
  .icon {
    color: #c3c3c3;
    margin: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2, 1.2);
      color: #ffac41;
    }
  }
  .plusPage {
    backdrop-filter: blur(20px);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;

    .icon {
      position: absolute;
      top: 10px;
      right: 10px;
      &:hover {
        color: red;
        transform: scale(1, 1);
      }
    }
    .innerContent {
      color: #fff;
      width: 80%;
      background: #000;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 60px;
      padding: 20px;
      .framebox {
        border: 1px solid #ffac41;
        padding: 10px;
        border-radius: 20px;
        margin-bottom: 10px;
        margin-top: 20px;

        h3 {
          color: #c3c3c3;
        }
        div {
          font-weight: bold;
          color: #ffac41;
          span,
          a {
            font-weight: lighter;
            color: #c3c3c3;
          }
        }
      }
    }
  }
  .before-enter {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 2s ease-in-out;
  }
  .enter {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
<script>
export default {
  name: "portfolio",
  data: function() {
    return {
      plusPage: false,
      infos: [
        {
          id: 0,
          name: "Axit",
          icon: require("../assets/portfolio/icons/axit.png"),
          cat: "Website",
          pic: require("../assets/portfolio/Axit.png"),
          date: "22/3/2020",
          url: "https://axitt.netlify.app/",
          techUsed: ["HTML5", "CSS3", "Javascript", "Bootstrap 3", "jQuery"],
          status: false,
        },
        {
          id: 1,
          name: "Laundry",
          icon: require("../assets/portfolio/icons/Laundry-app.png"),
          cat: "Web App",
          pic: require("../assets/portfolio/laundryApp.png"),
          date: "9/4/2020",
          url: "https://laundryapp.netlify.app/",
          techUsed: [
            "HTML5",
            "CSS3",
            "SCSS",
            "Javascript",
            "jQuery",
            "Bootstrap 4",
            "FireBase",
          ],
          status: false,
        },
        {
          id: 2,
          name: "Nour-Inc",
          icon: require("../assets/portfolio/icons/nour-inc.jpg"),
          cat: "Website",
          pic: require("../assets/portfolio/nour-inc.png"),
          date: "20/5/2020",
          url: "https://nour-inc.netlify.com/",
          techUsed: ["HTML5", "CSS3", "Javascript", "jQuery", "Bootstrap 3"],
          status: false,
        },
        {
          id: 3,
          name: "Elit-Corp",
          icon: require("../assets/portfolio/icons/elit-corp.png"),
          cat: "Website",
          pic: require("../assets/portfolio/elit-corp.png"),
          date: "27/7/2020",
          url: "https://elittecorp.netlify.app/",
          techUsed: ["HTML5", "CSS3", "Javascript", "jQuery", "Bootstrap 4"],
          status: false,
        },
      ],
    };
  },
};
</script>
