// 31.3508916099721,30.057316244023994
// let center = [31.3508916099721,30.057316244023994]
let center = [39.946714,21.554412]
const map = tt.map({
    key: "NkYMUbTzRUoHALzkBZHf9PdS3KA5VEWg",
    container: "map",
    center: center,
    zoom: 14
})
map.on("load",() => {
    new tt.Marker().setLngLat(center).addTo(map)
})

// Traffic Flow Tiles Tier

// var styleBase = "tomtom://vector/1/"
// var styleS1 = "s1"
// var styleRelative = "relative"
// var refreshTimeInMillis = 30000

// var trafficFlowTilesTier = new tt.TrafficFlowTilesTier({
//   key: "NkYMUbTzRUoHALzkBZHf9PdS3KA5VEWg",
//   style: styleBase + styleRelative,
//   refresh: refreshTimeInMillis,
// })

// function toggleTrafficFlowTilesTier() {
//   if (document.getElementById("flow-toggle").checked) {
//     map.addTier(trafficFlowTilesTier)
//   } else {
//     map.removeTier(trafficFlowTilesTier.getId())
//   }
// }
// document.getElementById("flow-toggle").addEventListener("change", toggleTrafficFlowTilesTier)