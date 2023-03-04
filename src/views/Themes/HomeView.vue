<script>
import Config from "/config.json"
import ShortDescriptionView from "../../components/description.vue"
import "../../assets/css/style.css"
export default {
  data() {
    return {
      ConfigData: Config,
      PersonaInformation: null,
      ServicesInfo: null,
      ProjectsInfo: null,
      EducationInfo: null,
      ExperienceInfo: null,
      BlogData: null,
      ContactData: {
        Name: "",
        Email: "",
        Subject: "",
        Message: ""
      },
      IsReadMoreClicked: false
    }
  },
  computed: {
    GithubFetchLink() {
      return "https://api.github.com/users/" + this.ConfigData.GithubUserName + "/repos";
    },
    DevToFetchLink() {
      return "https://dev.to/api/articles?username=" + this.ConfigData.DevToUserName;
    },
    DevToProfileLink() {
      return "https://dev.to/" + this.ConfigData.DevToUserName;
    },
    FormSubmitLink() {
      return "https://formsubmit.co/" + this.ConfigData.ContactMeEmail;
    },
    ThankYouUrl() {
      return window.location.origin;
    }
  },
  methods: {
    TooggleReadMore() {
      if (this.IsReadMoreClicked)
        return this.IsReadMoreClicked = false;
      return this.IsReadMoreClicked = true;
    },
  },
  components:{
    ShortDescriptionView
  },
  mounted() {

    return Promise.all([
      fetch(this.ConfigData.PersonalInformationApi)
        .then((res) => res.json())
        .then((data) => this.PersonaInformation = data)
        .catch((e) => console.log(e.message)),
      fetch(this.ConfigData.ServiceInformationApi)
        .then((res) => res.json())
        .then((data) => this.ServicesInfo = data)
        .catch((e) => console.log(e.message)),
      fetch(this.GithubFetchLink)
        .then((res) => res.json())
        .then((data) => {
          function compare(a, b) {
            if (a.stargazers_count < b.stargazers_count)
              return -1;
            if (a.stargazers_count > b.stargazers_count)
              return 1;
            return 0;
          }
          this.ProjectsInfo = data.sort(compare).reverse().slice(0, this.ConfigData.GithubProjectContToShow);
        }).catch(e => console.log(e.message)),
      fetch(this.ConfigData.EducationInformationApi)
        .then((res) => res.json())
        .then((data) => this.EducationInfo = data)
        .catch((e) => console.log(e.message)),
      fetch(this.ConfigData.ExperienceInformationApi)
        .then((res) => res.json())
        .then((data) => this.ExperienceInfo = data)
        .catch((e) => console.log(e.message)),
      fetch(this.DevToFetchLink)
        .then((res) => res.json())
        .then((data) => {
          function compare(a, b) {
            if (a.public_reactions_count < b.public_reactions_count)
              return -1;
            if (a.public_reactions_count > b.public_reactions_count)
              return 1;
            return 0;
          }
          this.BlogData = data.sort(compare).reverse().slice(0, 6);
        }).catch(e => console.log(e.message)),
    ])

  },
}
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container flex-lg-column">
      <a class="navbar-brand mx-lg-auto mb-lg-4" href="/">
        <span class="h3 fw-bold d-block d-lg-none" v-if="this.PersonaInformation">{{ this.PersonaInformation.Name
        }}</span>
        <span class="h3 fw-bold d-block d-lg-none" v-else>Common World</span>
        <img :src="this.PersonaInformation.ImageLink" v-if="this.PersonaInformation"
          class="d-none d-lg-block rounded-circle" alt="">
        <div v-else class="d-none d-lg-block">
          <div class="loader-div">
            <span class="loader"></span>
          </div>
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto flex-lg-column text-lg-center">

          <li class="nav-item">
            <a href="#home" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#services" class="nav-link">Services</a>
          </li>
          <li class="nav-item">
            <a href="#works" class="nav-link">Work</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">About</a>
          </li>
          <li v-if="this.ConfigData.DevToUserName" class="nav-item">
            <a href="#blogs" class="nav-link">Blog</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  <!-- //NAVBAR -->
  <div id="content-wrapper">

    <!-- HOME -->
    <section id="home" class="full-height px-lg-5">

      <div class="container">

        <div class="row">
          <div class="col-lg-10" v-if="this.PersonaInformation">
            <h1 class="display-4 fw-bold text-uppercase" data-aos="fade-up">I'M A <span class="text-brand ">{{
              PersonaInformation.Designation
            }}</span> From {{
  PersonaInformation.Address }}</h1>
            <p class="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">I am {{ PersonaInformation.Name }}, And {{
              PersonaInformation.ShortDescription }}
            </p>
            <div data-aos="fade-up" data-aos-delay="600">
              <a href="#works" class="btn btn-brand me-3">Explore My Work</a>
              <a :href="PersonaInformation.ResumeLink" target="_blank" class="btn btn-brand me-3">View Resume</a>

            </div>
          </div>

          <div class="loader-div" v-else>
            <span class="loader"></span>
          </div>
        </div>

      </div>

    </section>
    <!-- //HOME -->
    <!-- SERVICES -->
    <section id="services" class="full-height px-lg-5">
      <div class="container">

        <div class="row pb-4" data-aos="fade-up">
          <div class="col-lg-8">
            <h6 class="text-brand">SERVICES</h6>
            <h1>Services That I Provide</h1>
          </div>
        </div>

        <div class="row gy-4" v-if="this.ServicesInfo">
          <div v-for="service in ServicesInfo" class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="service p-4 bg-base rounded-4 shadow-effect">
              <div class="iconbox rounded-4">
                <i :class="service.la_icon"></i>
              </div>
              <h5 class="mt-4 mb-2">{{ service.Topic }}</h5>
              <ShortDescriptionView :ShortDescription="service.ShortDescription"/>
             
            </div>
          </div>

        </div>
        <div class="row gy-4" v-else>
          <div class="loader-div">
            <span class="loader"></span>
          </div>
        </div>


      </div>
    </section>
    <!-- SERVICES -->

    <!-- WORK -->
    <section id="works" class="full-height px-lg-5">
      <div class="container">

        <div class="row pb-4" data-aos="fade-up">
          <div class="col-lg-8">
            <h6 class="text-brand">WORK</h6>
            <h1>My Recent Projects</h1>
          </div>
        </div>

        <div class="row gy-4" v-if="ProjectsInfo">
          <div v-for="work in ProjectsInfo" class="col-md-12" data-aos="fade-up" data-aos-delay="200">
            <div class="card-custom rounded-4 bg-base shadow-effect">
              <div class="card-custom-content p-4">
                <div class="row pull-right">
                  <div class="col-md-11">
                    <h4>{{ work.name }} </h4>
                  </div>
                  <div class="col-md-1">
                    <h5 class="pull-right"><a class="la la-star"></a>&nbsp;{{work.stargazers_count}}</h5>

                  </div>
                  
                </div>
                
                <p>{{ work.description }}</p>
                <a :href="work.html_url" target="_blank" class="link-custom">Read More</a>
              </div>
            </div>
          </div>

        </div>
        <div class="row gy-4" v-else>
          <div class="loader-div">
            <span class="loader"></span>
          </div>
        </div>

      </div>
    </section>
    <!-- //WORK -->
    <!-- ABOUT -->
    <section id="about" class="full-height px-lg-5">
      <div class="container">

        <div class="row pb-4" data-aos="fade-up">
          <div class="col-lg-8">
            <h6 class="text-brand">ABOUT</h6>
            <h1>My Education & Experiance</h1>
          </div>
        </div>

        <div class="row gy-5">

          <h3 class="col-md-6" data-aos="fade-up" data-aos-delay="200">Education</h3>
          <div class="row gy-4" v-if="this.EducationInfo">

            <div v-for="edu in this.EducationInfo" class="col-md-6 col-lg-6 col-sm-12" data-aos="fade-up"
              data-aos-delay="400">
              <div class="bg-base p-4 rounded-4 shadow-effect">
                <h4>{{ edu.Course }}</h4>
                <p class="text-brand mb-2">{{ edu.University }} ({{ edu.StartYear }} - {{ edu.EndYear }})</p>
                <ShortDescriptionView :ShortDescription="edu.ShortDescription"/>

              </div>
            </div>


          </div>
          <div class="row gy-4" v-else>
            <div class="loader-div">
              <span class="loader"></span>
            </div>
          </div>


          <h3 class="mb-4" data-aos="fade-up" data-aos-delay="200">Experience</h3>
          <div class="row gy-4" v-if="this.ExperienceInfo">

            <div v-for="exp in this.ExperienceInfo" class="col-md-6 col-lg-6 col-sm-12" data-aos="fade-up"
              data-aos-delay="400">
              <div class="bg-base p-4 rounded-4 shadow-effect">
                <h4>{{ exp.JobTitle }}</h4>
                <p class="text-brand mb-2">{{ exp.CompanyName }} ({{ exp.StartYear }} - {{ exp.EndYear }})</p>
                <ShortDescriptionView :ShortDescription="exp.ShortDescription"/>

              </div>
            </div>
          </div>
          <div class="row gy-4" v-else>
            <div class="loader-div">
              <span class="loader"></span>
            </div>
          </div>


        </div>

      </div>
    </section>
    <!-- //ABOUT -->

    <!-- BLOG -->
    <section id="blogs" v-if="this.ConfigData.DevToUserName" class="full-height px-lg-5">
      <div class="container">

        <div class="row pb-4" data-aos="fade-up">
          <div class="col-lg-8">
            <h6 class="text-brand"> <a class="no-link"  :href="this.DevToProfileLink" target="_blank">BLOG</a></h6>
            <h1>My Blog Posts</h1>
          </div>
        </div>

        <div class="row gy-4" v-if="this.BlogData">

          <div v-for="blog in this.BlogData" class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card-custom blog-card rounded-4 bg-base shadow-effect">
              <div class="card-custom-image rounded-4">
                <img class="rounded-4" :src="blog.cover_image" alt="">
              </div>
              <div class="card-custom-content p-4">
                <h3 class="mb-1">{{ blog.title }}</h3>
                <p class="text-brand mb-2">{{ blog.readable_publish_date }}</p>
                <p class="mb-3">{{ blog.description }} &nbsp;<a :href="blog.url" target="_blank" class="link-custom">Read More</a></p>
                
              </div>
            </div>
          </div>

        </div>
        <div class="row gy-4" v-else>
          <div class="loader-div">
            <span class="loader"></span>
          </div>
        </div>
      </div>
    </section>
    <!-- //BLOG -->

    <!-- CONTACT -->
    <section id="contact" class="full-height px-lg-5">
      <div class="container">

        <div class="row justify-content-center text-center">
          <div class="col-lg-8 pb-4" data-aos="fade-up">
            <h6 class="text-brand">CONTACT</h6>
            <h1>Interested in working together? Let's talk
            </h1>
          </div>

          <div class="col-lg-8" data-aos="fade-up" data-aos-delay="300">
            <form :action="this.FormSubmitLink" method="POST" class="row g-lg-3 gy-3">
              <input type="hidden" name="_next" :value="this.ThankYouUrl">
              <input type="hidden" name="_captcha" value="false">
              <div class="form-group col-md-6">
                <input type="text" name="name" class="form-control" placeholder="Enter your name" autocomplete="off"
                  required>
              </div>
              <div class="form-group col-md-6">
                <input type="email" name="email" class="form-control" placeholder="Enter your email" autocomplete="off"
                  required>
              </div>
              <div class="form-group col-12">
                <input type="text" name="subject" class="form-control" placeholder="Enter subject" autocomplete="off"
                  required>
              </div>
              <div class="form-group col-12">
                <textarea rows="4" name="message" class="form-control" placeholder="Enter your message"
                  required></textarea>
              </div>
              <div class="form-group col-12 d-grid">

                <button type="submit" class="btn btn-brand">Contact me</button>

              </div>

            </form>
          </div>
        </div>


      </div>
    </section>
    <!-- //CONTACT -->

    <!-- FOOTER -->
    <footer class="py-5 px-lg-5">
      <div class="container">
        <div class="row gy-4 justify-content-between">
          <div class="col-auto">
            <p class="mb-0">Designed by <a href="#" class="fw-bold">CommonWorld</a></p>
          </div>
          <div class="col-auto">
            <div class="social-icons">
              <a :href="this.ConfigData.TwitterLink" target="_blank"><i class="lab la-twitter"></i></a>
              <a :href="this.ConfigData.InstagramLink" target="_blank"><i class="lab la-instagram"></i></a>
              <a :href="this.ConfigData.YoutubeLink" target="_blank"><i class="lab la-youtube"></i></a>
              <a :href="this.ConfigData.GithubLink" target="_blank"><i class="lab la-github"></i></a>
              <a :href="this.ConfigData.LinkedInLink" target="_blank"><i class="lab la-linkedin"></i></a>

            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- //FOOTER -->

  </div>
<!-- //CONTENT WRAPPER --></template>