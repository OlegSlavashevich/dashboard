/* eslint-disable no-undef */
export const WidgetService = {
  getAllWidgets: () =>
    fetch(`${process.env.REACT_APP_BACKEND}/api/widgets`).then((res) => res.json()),
  getCurrency: (base, target) =>
    fetch(`${process.env.REACT_APP_BACKEND}/api/currency?base=${base}&target=${target}`)
      .then((res) => res.json())
      .then((data) => data.ratio),
  getWeather: (city) =>
    fetch(`${process.env.REACT_APP_BACKEND}/api/weather?city=${city}`).then((res) => res.json()),
  orderPizza: (params) =>
    fetch(`${process.env.REACT_APP_BACKEND}/api/pizza`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then((res) => {
        if (res.ok) {
          return res.blob();
        }
        throw new Error('Failed file generation');
      })
      .then((blob) => {
        console.log(blob);
        const fileBlob = new Blob([blob], {
          type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        });
        // saveAs(fileBlob, 'result.docx');
        const url = window.URL || window.webkitURL;
        const downloadUrl = url.createObjectURL(fileBlob);

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = downloadUrl;

        a.download = `pizza.jpeg`;
        document.body.appendChild(a);
        a.click();
      })
};
