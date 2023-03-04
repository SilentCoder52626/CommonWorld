<script>
import Config from "/config.json"


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
    <h1>Hello World</h1>
</template>