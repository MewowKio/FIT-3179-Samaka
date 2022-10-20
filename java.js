var vg_1 = "cloreMap.vg.json";
vegaEmbed("#chropleth", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "propMap.vg.json";
vegaEmbed("#prop", vg_2).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "barchart.vg.json";
vegaEmbed("#bar", vg_3).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);