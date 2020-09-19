<template>
  <div class="about">
    <b-container>
      <h2 class="pageHeading text-center">RESUME</h2>
      <h3 class="mainHeading">CHECK MY RESUME</h3>
      <b-row>
        <b-col cols="12" xl="6" md="12">
          <section>
            <h5 class="mainSecHeading">SUMMARY</h5>
            <h6 class="branchSecHeading">NOUR MOHAMED GAMAL</h6>
            <div class="ml-4">
              <p>
                Hi! My name is Nour GAMAL from Cairo, Egypt. I studied Software
                Engineering at HTI.<br />I Design, Develop, and Implement
                websites.I have made more than 20 projects .<br />
                I enjoy every step of the design process, from discussion and
                collaboration. I can deliver a compatible websites for different
                devices and browsers. <br />So, I am sure that you are gonna
                like my works.
              </p>
            </div>
          </section>
          <section>
            <h5 class="mainSecHeading">EDUCATION</h5>
            <h6 class="branchSecHeading">
              Higher Technological Institute (HTI)
            </h6>
            <div class="ml-4">
              <div class="date">2013 - 2018</div>
              <p>
                Bachelor’s Degree in Electrical and communication Engineering
                (GPA 3.14).
              </p>
            </div>
          </section>
        </b-col>
        <b-col cols="12" xl="6" col="12">
          <section>
            <h5 class="mainSecHeading">PROFESSIONAL EXPERIENCE</h5>
            <h6 class="branchSecHeading">Skills</h6>
            <div class="ml-4">
              <b-container>
                <b-row>
                  <b-col class="reg-col" cols="12" xl="6" col="12">
                    <label class="label-lg-10">HTML / HTML5</label>
                    <label class="label-lg-30">JavaScript</label>
                    <label class="label-lg-50">Bootstrap3</label>
                    <label class="label-lg-70">SASS</label>
                    <label class="label-lg-90">Git</label>
                    <label class="label-lg-110">Ajax</label>
                    <label class="label-lg-130">Vue.js</label>
                  </b-col>
                  <b-col class="opp-col" cols="12" lg="6" col="12">
                    <label class="label-md-130 label-lg-10">CSS / CSS3</label>
                    <label class="label-md-110 label-lg-30">EcmaScript 6</label>
                    <label class="label-md-90 label-lg-50">Bootstrap4</label>
                    <label class="label-md-70 label-lg-70">jQuery</label>
                    <label class="label-md-50 label-lg-90">GitHub</label>
                    <label class="label-md-30 label-lg-110">Json</label>
                    <label class="label-md-10 label-lg-130">Vuetify</label>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </section>
          <section>
            <h5 class="mainSecHeading">Personal informatiom</h5>
            <b-container>
              <b-row>
                <b-col cols="12" xl="6" col="12">
                  <div class="subtext">
                    Address: <span>6th of october.</span>
                  </div>
                  <div class="subtext">Phone: <span>01115044011.</span></div>
                  <div class="subtext">Birthday: <span>22/1/1995.</span></div>
                  <div class="subtext">Age <span>25.</span></div>
                </b-col>
                <b-col cols="12" xl="6" col="12">
                  <div class="subtext">Gender: <span>Male.</span></div>
                  <div class="subtext">
                    Military status: <span>Completed.</span>
                  </div>
                  <div class="subtext">
                    Social status: <span>Completed.</span>
                  </div>
                  <div class="subtext">
                    Hiring status: <span>Available.</span>
                  </div>
                </b-col>
                <div class="mx-auto">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1utwyYk0o21KxNq-HtpbAD38jAVrFpOYT/view?usp=sharing"
                  >
                    <button class="btn  m-2 px-3">Download CV</button>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.freelancer.com/u/nourmoee"
                  >
                    <button class="btn  m-2 px-3">Hire ME</button>
                  </a>
                </div>
              </b-row>
            </b-container>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style lang="scss" scoped>
.about {
  background: rgba($color: #000000, $alpha: 0.7);
  min-height: calc(100vh - 86px - 15px);
  margin: 15px;
  margin-bottom: 0;
  border-radius: 20px;
  color: #c3c3c3;
  padding: 10px;
  section {
    border: 1px solid #ffac41;
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 10px;
  }
  .pageHeading {
    font-family: "Pacifico", cursive;
    font-size: 40px;
    color: #ffac41;
  }
  .mainHeading {
    font-weight: 700;
    padding-bottom: 40px;

    color: #aaaaaa;
    &::after {
      margin-left: 10px;
      content: "";
      display: inline-block;
      width: 80px;
      transform: translate(0, -10px);
      height: 2px;
      background-color: #ffac41;
    }
  }
  .mainSecHeading {
    font-weight: 900;
  }
  .branchSecHeading {
    color: #ffac41;
    font-weight: 600;
    font-size: 20px;
    margin-left: 10px;
    &::before {
      content: " ";
      display: inline-block;
      background: #ffac41;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 10px;
      transform: translate(0, 2px);
    }
  }
  p {
    padding: 10px;
    font-weight: 600;
  }
  .date {
    background: #555555;
    width: 110px;
    font-weight: 500;
    padding: 0 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  .reg-col,
  .opp-col {
    @for $i from 10 through 150 {
      .label-lg-#{$i} {
        font-weight: bolder;
        margin-left: 10px;
        display: block;
        &::before {
          content: "";
          display: inline-block;
          width: #{$i} + "px";
          height: 4px;
          background-color: #ffac41;
          margin-right: 10px;
          transform: translate(0, -5px);
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .opp-col {
      @for $i from 150 through 10 {
        .label-md-#{$i} {
          font-weight: bolder;
          margin-left: 10px;
          display: flex;
          &::before {
            content: "";
            display: inline-block;
            width: #{$i} + "px";
            height: 4px;
            background-color: #ffac41;
            transform: translate(0, 10px);
            margin-right: 10px;
          }
        }
      }
    }
  }
  .subtext {
    color: #ffac41;
    font-weight: bolder;
    span {
      color: #c3c3c3;
      font-weight: lighter;
    }
  }
  .btn {
    background-color: transparent;
    color: #c3c3c3;
    border: 1px solid #ffac41;
    border-radius: 20px;
    font-weight: 600;
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    &:hover {
      color: #ffac41;
      border: 1px solid #c3c3c3;
      transform: scale(1.1, 1.1);
    }
  }
  .submenu {
    ul {
      margin-bottom: 0 !important;
      li {
        cursor: pointer;
        &:hover {
          color: #ffac41;
        }
      }
    }
  }
}
</style>
