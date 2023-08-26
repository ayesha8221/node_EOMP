<template>

<div>
        <form action="https://formspree.io/f/xoqzganj" method="POST">
      <h1 class="contact">Contact Me!</h1>
      <br>
      <div class="mt-1 col-md-4 m-auto">
        <div class="form-floating animate__animated animate__zoomIn">
          <input
            type="name"
            name="name"
            class="form-control"
            id="floatingInputGrid"
            placeholder="Name"
          />
          <label for="floatingInputGrid">Enter Your Name</label>
        </div>
      </div>
      <p></p>
      <div class="col-md-4 m-auto animate__animated animate__zoomIn">
        <div class="form-floating">
          <input
            type="email"
            name="email"
            class="form-control"
            id="floatingInputGrid"
            placeholder="mbuwalisa@gmail.com"
            required
          />
          <label for="floatingInputGrid">Email address</label>
        </div>
      </div>
      <p></p>
      <div class="col-md-4 m-auto animate__animated animate__zoomIn">
        <div class="form-floating">
          <textarea
            name="message"
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style="height: 100px"
            required
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
      </div>
      <p></p>
      <div class="col-md-4 m-auto animate__animated animate__zoomIn">
        <button type="submit" class="btn1">Submit</button>
      </div>
    </form>
    <br />
    
    </div>


    <!-- <div>
        <form action="https://formspree.io/f/xoqzganj" method="POST">
      <h1 class="contact">Contact Me!</h1>
      <br>
      <div class="mt-1 col-md-4 m-auto">
        <div class="form-floating animate__animated animate__zoomIn">
          <input
            type="name"
            name="name"
            class="form-control"
            id="floatingInputGrid"
            placeholder="Name"
          />
          <label for="floatingInputGrid">Enter Your Name</label>
        </div>
      </div>
      <p></p>
      <div class="col-md-4 m-auto animate__animated animate__zoomIn">
        <div class="form-floating">
          <input
            type="email"
            name="email"
            class="form-control"
            id="floatingInputGrid"
            placeholder="mbuwalisa@gmail.com"
            required
          />
          <label for="floatingInputGrid">Email address</label>
        </div>
      </div>
      <p></p>
      <div class="col-md-4 m-auto animate__animated animate__zoomIn">
        <div class="form-floating">
          <textarea
            name="message"
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style="height: 100px"
            required
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
      </div>
      <p></p>
      <div class="col-md-4 m-auto animate__animated animate__zoomIn">
        <button type="submit" class="btn1">Submit</button>
      </div>
    </form>
    <br />
    
    </div> -->
    
  </template>
  
  <script>
  export default {
    data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      formErrors: {
        name: false,
        email: false,
        message: false,
      },
    };
  },
  methods: {
    submitForm(event) {
      if (!this.formData.name) {
        this.formErrors.name = true;
        event.preventDefault();
      } else {
        this.formErrors.name = false;
      }

      if (!this.validateEmail(this.formData.email)) {
        this.formErrors.email = true;
        event.preventDefault();
      } else {
        this.formErrors.email = false;
      }

      if (!this.formData.message) {
        this.formErrors.message = true;
        event.preventDefault();
      } else {
        this.formErrors.message = false;
      }
    },
    validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
  },
  };
  </script>
  <style scoped>
.contact{
  float: left;
  justify-items: center;
  justify-content: center;
  color: antiquewhite;
}
.btn1 {
    border-radius: 5px !important;
    border-color: antiquewhite;
    background-color: lightpink;
    border-color: lightcoral 10px;
    margin: 12px;
    height: 50px;
    width: 120px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    font-family: "Damion", cursive;
    border: none;
    font-size: 16px;
    color: black;
    transition: 500ms;
  }
  .btn1:hover {
    box-shadow: -5px -5px 15px antiquewhite, 5px 5px 15px antiquewhite,
      inset 5px 5px 10px lightcoral, inset -5px -5px 10px lightcoral;
    color: black;
    transition: 500ms;
  }
  #app {
    background-color:sienna !important;
  }
  .form-control {
    background-color: antiquewhite;
    border-radius: 10px;
    border-color: lightpink;
  }
  .form-control:hover {
    background-color: lightpink;
  }

  .error-text {
    color: red;
    margin-top: 5px;
  }
  </style>