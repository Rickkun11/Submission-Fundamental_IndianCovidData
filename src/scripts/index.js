/* eslint-disable import/no-duplicates */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-absolute-path */
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
// eslint-disable-next-line import/no-unresolved
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
// eslint-disable-next-line func-names, import/no-duplicates

// import world covid datas
$.ajax({
  // eslint-disable-next-line linebreak-style
  url: 'https://api.rootnet.in/covid19-in/stats/latest',
  success(data) {
    // entry point variable
    const globalData = data.data;
    const countriesData = globalData.regional;
    const myArray = countriesData;
    // eslint-disable-next-line no-use-before-define
    // eslint-disable-next-line no-shadow
    const buildTable = (data) => {
      const table = document.getElementById('myTable');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.length; i++) {
        const row = `<tr>
                                    <td>${data[i].loc}</td>
                                    <td>${data[i].confirmedCasesForeign}</td>
                                    <td>${data[i].confirmedCasesIndian}</td>
                                    <td>${data[i].deaths}</td>
                                    <td>${data[i].discharged}</td>
                                    <td>${data[i].totalConfirmed}</td>
                            </tr>`;
        table.innerHTML += row;
      }
    };
    buildTable(myArray);
  },
});

// fluid-container
class create_fluid extends HTMLElement {
  connectedCallback() {
    this.judul = this.getAttribute('judul');
    this.konten = this.getAttribute('konten');
    this.button = this.getAttribute('button');
    this.spesifik = this.getAttribute('spesifik');
    this.opsi = this.getAttribute('opsi');

    this.innerHTML = `
    <div class="p-5 my-4  rounded-3" style="margin-bottom:10px auto ;margin: 0 auto; width: 92%;">
        <h1>${this.judul}</h1>
        <p class="lead"><span>${this.konten}</span></p>
        
        <p><a href="${this.button} " class="btn btn-lg bg-primary text-white">More >></a></p>
        

    </div>
    `;
  }
}

window.customElements.define('fluid-contain', create_fluid);
