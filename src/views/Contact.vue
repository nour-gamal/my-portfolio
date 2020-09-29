<template>
  <div class="contact text-center">
    <h2>Contact Me</h2>
    <b-container>
      <b-row>
        <b-col
          v-scrollAnimation
          v-for="info in infos"
          :key="info.icon"
          cols="12"
          md="4"
          col="12"
        >
          <v-icon class="icon" :name="info.icon" scale="3" />
          <h4>{{ info.h4 }}</h4>
          <h5>{{ info.h5 }}</h5>
        </b-col>
      </b-row>
    </b-container>
    <form
      v-scrollAnimation
      id="gform"
      method="POST"
      class="pure-form pure-form-stacked"
      data-email="from_email@example.com"
      action="https://script.google.com/macros/s/AKfycbwiGqJfsbs286uGMmdwpFqw9LGzsYZ75dicdUWgZKdXE5I1vmE/exec"
    >
      <v-icon class="icon" name="paper-plane" scale="3" />
      <b-form-input id="name" name="name" placeholder="Name"></b-form-input>
      <b-form-input
        id="email"
        name="email"
        type="email"
        value=""
        required
        placeholder="email"
      ></b-form-input>
      <b-form-textarea
        id="message"
        name="message"
        placeholder="Leave your message"
      ></b-form-textarea>
      <button id="btn" class="btn button-success pure-button button-xlarge">
        Send
      </button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  background: rgba($color: #000000, $alpha: 0.7);
  min-height: calc(100vh - 86px - 15px);
  margin: 15px;
  margin-bottom: 0;
  border-radius: 20px;
  color: #c3c3c3;
  padding: 10px;
  h2 {
    font-family: "Pacifico", cursive;
    font-size: 50px;
    color: #ffac41;
  }
  h4 {
    color: #ffac41;
    font-weight: bolder;
  }
  form,
  section {
    border: 1px solid #ffac41;
    padding: 10px;
    border-radius: 20px;
    margin: 50px auto;
    width: 90%;
    input,
    textarea {
      display: block;
      background: transparent;
      border: 1px solid #ffac41;
      border-radius: 20px;
      padding: 10px 80px;
      color: #c3c3c3;
      margin: 10px auto;
      width: 80%;
      &::placeholder {
        text-align: center;
      }
    }
  }

  .btn {
    background-color: transparent;
    color: #ffac41;
    border: 1px solid #c3c3c3;
    border-radius: 20px;
    padding: 2px 60px;
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    &:hover {
      color: #c3c3c3;
      border: 1px solid #ffac41;
      transform: scale(1.1, 1.1);
    }
  }
  .icon {
    margin: 40px;
  }
  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.7s ease-in-out;
  }
  .enter {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
<script>
export default {
  name: "contact",
  data: function() {
    return {
      infos: [
        {
          icon: "phone",
          h4: "Call or What'sapp me on",
          h5: "01115044011",
        },
        {
          icon: "map-marker-alt",
          h4: "Location",
          h5: "6th of October City,Giza,Egypt",
        },
        {
          icon: "at",
          h4: "Email",
          h5: "nmg181963@hotmail.com",
        },
      ],
    };
  },
};
</script>
