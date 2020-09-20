<template>
  <div class="home">
    <div class="text-center">
      <img
        src="@/assets/Me.jpg"
        width="220"
        height="220"
        class="rounded-circle "
        alt="nour"
      />
    </div>

    <h1 class="ml1 text-center">
      <span class="text-wrapper">
        <span class="line line1"></span>
        <span class="letters">Web Developer</span>
        <span class="line line2"></span>
      </span>
    </h1>

    <div class="icon-container text-center">
      <a href="https://www.linkedin.com/in/nourmohamedgamal/" target="_blank">
        <v-icon class="icon li" name="brands/linkedin-in" scale="2" />
      </a>
      <a href="https://github.com/nour-gamal" target="_blank">
        <v-icon class="icon gh" name="brands/github" scale="2" />
      </a>
      <a href="https://www.facebook.com/nourmoee/" target="_blank">
        <v-icon class="icon fb" name="brands/facebook" scale="2" />
      </a>
      <a href="https://twitter.com/NourMoee/" target="_blank">
        <v-icon class="icon tw" name="brands/twitter" scale="2" />
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  padding-top: 14vh;
  padding-bottom: 14vh;

  .ml1 {
    font-weight: 700;
    font-family: "Pacifico", cursive;
    font-size: 50px;
    color: #ffac41;
  }

  img {
    border: 10px solid #c3c3c3;
    padding: 10px;
  }
  .icon-container {
    border-radius: 30px;
    display: flex;
    justify-content: center;
    margin: 30px auto;
    width: 250px;
    background: #545454;
  }
  .icon {
    margin: 10px;
    color: #c3c3c3;
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    &:hover {
      transform: scale(1.3, 1.3);
      color: #ffac41;
    }
  }
}
</style>

<script>
export default {
  name: "Home",
  components: {},
  mounted() {
    // Wrap every letter in a span
    var textWrapper = document.querySelector(".ml1 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    this.$anime
      .timeline({ loop: true })
      .add({
        targets: ".ml1 .letter",
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1),
      })
      .add({
        targets: ".ml1 .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: "-=875",
        delay: (el, i, l) => 80 * (l - i),
      })
      .add({
        targets: ".ml1",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  },
};
</script>
