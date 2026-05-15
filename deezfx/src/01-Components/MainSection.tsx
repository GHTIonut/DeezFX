import logo from "../assets/logo.svg";
export function MainSection() {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center pt-5">Categories</h1>
      <div className="container d-flex gap-3">
        <img src={logo} alt="" className="card card-body" />
        <img src={logo} alt="" className="card card-body" />
        <img src={logo} alt="" className="card card-body" />
        <img src={logo} alt="" className="card card-body" />
        <img src={logo} alt="" className="card card-body" />
        <img src={logo} alt="" className="card card-body" />
      </div>
    </div>
  );
}
