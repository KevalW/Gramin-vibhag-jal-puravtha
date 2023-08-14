//img
import mainpage from '../img/mainpage.jpg'
import authority from '../img/authority.jpg'
import adminastrator from '../img/adminastrator.jpg'
import villagers from '../img/villagers.jpg'

const Index = () => {
  return (
    <div>
      <div className="container">
        <header data-bs-theme="dark">
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">ग्रामपंचायत देववाडी</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">मुख्यपृष्ठ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">महत्वाचा दुवा</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true"></a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">शोधा</button>
                </form>
              </div>
            </div>
          </nav>
        </header>
        <main>

          <img src={mainpage} class="img-fluid" alt="mainpage" />
          <div class="container marketing">
            <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>

          </div>
          <div class="users">
            <img src={adminastrator} class="roundedfloat-start" alt="adminastrator" />
            <img src={authority} class="roundedfloat-end" alt="authority" />
            <img src={villagers} class="roundedfloat-middle" alt="villagers" />
          </div>
          <div class="buttoncantainer">
            <button type="button" class="btnbtn-secondarybtn-lg-1">Adminastrator</button>
            <button type="button" class="btnbtn-secondarybtn-lg-2">Authority</button>
            <button type="button" class="btnbtn-secondarybtn-lg-3">Villagers</button>
          </div>


          <div class="card text-center">
            <div class="card-header">
              ग्रामीण जल पुरावठा कर विभाग,देववाडी.
            </div>
            <div class="card-body">
              <p class="card-text">
                डिस्क्लेमर:या संकेतस्थळावरील सर्व माहिती ग्रामपंचायत देववाडीने उपलब्ध करुन दिली असून ही सर्व माहिती अधिकृत आहे.
                शेवटची सुधारणा - August 10, 2023
              </p>
            </div>
            <div class="card-footer text-body-secondary">
              <span> कॉपीराइट © २०२३ ग्रामपंचायत देववाडी. सर्व हक्क राखीव.</span>
            </div>
          </div>
        </main>
      </div>
    </div>
      );
}

      export default Index;