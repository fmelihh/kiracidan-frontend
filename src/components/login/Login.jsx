import React from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-25">
      <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" />
      <MDBInput wrapperClass="mb-4" label="Şifre" id="form2" type="password" />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Beni Hatırla"
        />
        <a href="!#">Şifreni mi unuttun?</a>
      </div>

      <MDBBtn className="mb-4">Giriş Yap</MDBBtn>

      <div className="text-center">
        <p>
          Üye değil misin? <a href="#!">Kayıt Ol</a>
        </p>
        <p>veya ile kaydolun:</p>

        <div
          className="d-flex justify-content-between mx-auto"
          style={{ width: "40%" }}
        >
          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="facebook-f" size="xl" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="twitter" size="xl" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="google" size="xl" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="github" size="xl" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default App;
