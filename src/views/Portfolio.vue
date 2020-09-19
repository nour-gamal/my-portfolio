<template>
  <div class="portfolio text-center">
    <h2>Portfolio</h2>
    <b-container fluid class="mt-4">
      <b-row>
        <b-col cols="12" lg="4" sm="12" class="mb-2">
          <b-img
            fluid
            src="../assets/portfolio/Axit.png"
            alt="Image 2"
            class="image"
          ></b-img>
          <a href="https://axitt.netlify.app/" target="_blank">
            <button class="btn btn-success">Live preview</button>
          </a>
        </b-col>
        <b-col cols="12" lg="4" sm="12">
          <b-img
            fluid
            src="../assets/portfolio/laundryApp.png"
            alt="Image 1"
            class="image"
          >
          </b-img>
          <a href="https://laundryapp.netlify.app/" target="_blank">
            <button class="btn btn-success">Live preview</button>
          </a>
        </b-col>
        <b-col cols="12" lg="4" sm="12" class="mb-2">
          <b-img
            fluid
            src="../assets/portfolio/nour-inc.png"
            alt="Image 3"
            class="image"
          ></b-img>
          <a href="https://nour-inc.netlify.com/" target="_blank">
            <button class="btn ">Live preview</button>
          </a>
        </b-col>
        <b-col cols="12" lg="4" sm="12" class="mb-2">
          <b-img
            fluid
            src="../assets/portfolio/elit-corp.png"
            alt="Image 1"
            class="image"
          ></b-img>
          <a href="https://elittecorp.netlify.app/" target="_blank">
            <button class="btn ">Live preview</button>
          </a>
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
  .image {
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
  }
  .btn {
    display: flex;
    margin: 10px auto;
  }
}
</style>
