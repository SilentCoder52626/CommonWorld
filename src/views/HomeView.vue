<script>
import Config from "/config.json"

export default {
  data() {
    return {
      ConfigData: Config,
      PersonaInformation: {
        Name: "Rajesh Dai",
        Designation: "Khatra Actor",
        FullAddress: "Pyaro Desh, Nepal",
        ShortDescription: "I'm a software engineer specialised in frontend and backend development for complex scalable web apps.",
        ResumeLink: "https://drive.google.com/file/d/1-n1BHFEjT60eFrklWdp0FVfsfdRx8aPV/view?usp=sharing"
      },
      ServicesInfo: [{
        la_icon: "las la-feather",
        Topic: "UX Design",
        ShortDescription: "I craft high-performing and delightful experiences tailored and conversion-focused"
      },
      {
        la_icon: "las la-pencil-ruler",
        Topic: "Branding",
        ShortDescription: "I craft high-performing and delightful experiences tailored and conversion-focused"
      },
      {
        la_icon: "las la-laptop-code",
        Topic: "Web Designing",
        ShortDescription: "I craft high-performing and delightful experiences tailored and conversion-focused"
      },
      ],
      ProjectsInfo: null,
      EducationInfo: [{
        Title: "Bachelor of Computer Application",
        University: "Purwanchal University",
        StartYear: "2017",
        EndYear: "2021",
        ShortDescription: "All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing elit"
      }]
    }
  },
  computed: {
    GithubFetchLink() {
      return "https://api.github.com/users/" + this.ConfigData[0].GithubUserName + "/repos";
    }
  },
  mounted() {
    return Promise.all([
      fetch(this.ConfigData[0].PersonalInformationApi)
        .then((res) => res.json())
        .then((data) => this.PersonaInformation = data[0])
        .catch((e) => console.log(e.message)),
      fetch(this.ConfigData[0].ServiceInformationApi)
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
          this.ProjectsInfo = data.sort(compare).reverse().slice(0, this.ConfigData[0].GithubProjectContToShow);
        }).catch(e => console.log(e.message)),

    ])

  },
}
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container flex-lg-column">
      <a class="navbar-brand mx-lg-auto mb-lg-4" href="/">
        <span class="h3 fw-bold d-block d-lg-none">Kaman Khadka</span>
        <img src="../assets/images/person.jpg" class="d-none d-lg-block rounded-circle" alt="">
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
          <div class="col-lg-10">
            <h1 class="display-4 fw-bold text-uppercase" data-aos="fade-up">I'M A <span class="text-brand ">{{
              PersonaInformation.Designation
            }}</span> From {{
  PersonaInformation.FullAddress }}</h1>
            <p class="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">I am {{ PersonaInformation.Name }}, And {{
              PersonaInformation.ShortDescription }}
            </p>
            <div data-aos="fade-up" data-aos-delay="600">
              <a href="#works" class="btn btn-brand me-3">Explore My Work</a>
              <a :href="PersonaInformation.ResumeLink" target="_blank" class="btn btn-brand me-3">View Resume</a>

            </div>

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

        <div class="row gy-4">
          <div v-for="service in ServicesInfo" class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="service p-4 bg-base rounded-4 shadow-effect">
              <div class="iconbox rounded-4">
                <i :class="service.la_icon"></i>
              </div>
              <h5 class="mt-4 mb-2">{{ service.Topic }}</h5>
              <p>{{ service.ShortDescription }}</p>
            </div>
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
                <h4>{{ work.name }}</h4>
                <p>{{ work.description }}</p>
                <a :href="work.html_url" target="_blank" class="link-custom">Read More</a>
              </div>
            </div>
          </div>

        </div>
        <div class="row gy-4" v-else>
          <div class="col-md-12" data-aos="fade-up" data-aos-delay="200">
            <div class="card-custom rounded-4 bg-base shadow-effect">
              <div class="card-custom-content p-4">
                <h4> Getting Projects ........</h4>
              </div>
            </div>
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

          <h3 class="col-md-6" data-aos="fade-up" data-aos-delay="300">Education</h3>
          <div class="row gy-4">

            <div class="col-6" data-aos="fade-up" data-aos-delay="600">
              <div class="bg-base p-4 rounded-4 shadow-effect">
                <h4>Master of Software Engineering</h4>
                <p class="text-brand mb-2">De Mars University Venston Bay (2015 - 2020)</p>
                <p class="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing
                  elit</p>
              </div>
            </div>

            <div class="col-6" data-aos="fade-up" data-aos-delay="600">
              <div class="bg-base p-4 rounded-4 shadow-effect">
                <h4>Master of Software Engineering</h4>
                <p class="text-brand mb-2">De Mars University Venston Bay (2015 - 2020)</p>
                <p class="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing
                  elit</p>
              </div>
            </div>

            <div class="col-6" data-aos="fade-up" data-aos-delay="600">
              <div class="bg-base p-4 rounded-4 shadow-effect">
                <h4>Master of Software Engineering</h4>
                <p class="text-brand mb-2">De Mars University Venston Bay (2015 - 2020)</p>
                <p class="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing
                  elit</p>
              </div>
            </div>

          </div>



          <h3 class="mb-4" data-aos="fade-up" data-aos-delay="300">Experience</h3>
          <div class="row gy-4">

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div class="bg-base p-4 rounded-4 shadow-effect">
                <h4>Applications developer</h4>
                <p class="text-brand mb-2">Twitter (2018 - 2020)</p>
                <p class="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing
                  elit</p>
              </div>
            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div class="bg-base p-4 rounded-4 shadow-effect">
                <h4>Applications developer</h4>
                <p class="text-brand mb-2">Twitter (2018 - 2020)</p>
                <p class="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing
                  elit</p>
              </div>
            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div class="bg-base p-4 rounded-4 shadow-effect">
                <h4>Applications developer</h4>
                <p class="text-brand mb-2">Twitter (2018 - 2020)</p>
                <p class="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing
                  elit</p>
              </div>
            </div>

          </div>


        </div>

      </div>
    </section>
    <!-- //ABOUT -->


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
            <form action="#" class="row g-lg-3 gy-3">
              <div class="form-group col-md-6">
                <input type="text" class="form-control" placeholder="Enter your name">
              </div>
              <div class="form-group col-md-6">
                <input type="email" class="form-control" placeholder="Enter your email">
              </div>
              <div class="form-group col-12">
                <input type="text" class="form-control" placeholder="Enter subject">
              </div>
              <div class="form-group col-12">
                <textarea name="" rows="4" class="form-control" placeholder="Enter your message"></textarea>
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
              <a href="https://twitter.com/common_khadka" target="_blank"><i class="lab la-twitter"></i></a>
              <a href="https://www.instagram.com/common_khadka/" target="_blank"><i class="lab la-instagram"></i></a>
              <a href="https://www.youtube.com/channel/UCCLWyl10FvvwPsH6xvuvTLQ" target="_blank"><i
                  class="lab la-youtube"></i></a>
              <a href="https://github.com/SilentCoder52626" target="_blank"><i class="lab la-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- //FOOTER -->

  </div>
<!-- //CONTENT WRAPPER --></template>