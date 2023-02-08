<script>
export default {
  data() {
    return {
      Name: "Kaman Khadka",
      Designation: "Full-Stack Developer",
      ShortDescription: "I'm a software engineer specialised in frontend and backend development for complex scalable web apps. Want to know more about me? Check out my resume."
    }
  }
}
</script>

<template>

  <div class="intro">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h2 class="model-name">{{ Name }}</h2>
          <div class="designation">{{ Designation }}</div>
          <div class="short-description">{{ ShortDescription }}</div>
          <a class="btn resume-btn">
            <span class="fa fa-arrow-circle-right"></span> View Resume
          </a>
        </div>
        <div class="col-md-5 model-img text-center">
          <img src="../assets/images/avatar-3.jpg">
        </div>
      </div>

    </div>
  </div>


</template>

<style>
.intro {
  padding: 40px 0;
  /* background-image: url("../assets/images/profile-bg-1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;  */
}

.model-name {
  font-size: 40px;
  margin-bottom: 5px !important;
  font-weight: 600;
}

.designation {
  font-size: 20px;
  font-weight: 200;
}

.short-description {
  padding: 20px 0;
  font-size: 16px;
}

.resume-btn {
  margin: 10px;
  background-color: #202020;
  color: #878787;
}

.resume-btn:hover {
  color: #ff5e14
}

.model-img img{
  --s: 300px;   /* the size of the image */
  --b: 5px;     /* the border thickness*/
  --g: 10px;    /* the gap */
  --c: #ff5e14; /* the color */
  
  width: var(--s);
  aspect-ratio: 1;
  outline: calc(var(--s)/2) solid #0009;
  outline-offset: calc(var(--s)/-2);
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50%;
}
.model-img img:hover {
  outline: var(--b) solid var(--c);
  outline-offset: var(--g);
}
</style>