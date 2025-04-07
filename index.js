// 31.3508916099721,30.057316244023994
let Geopro = [31.3508916099721,30.057316244023994]

const map = tt.map({
    key: "NkYMUbTzRUoHALzkBZHf9PdS3KA5VEWg",
    container: "map",
    center: Geopro,
    zoom: 14
})
map.on("load",() => {
    new tt.Marker().setLngLat(Geopro).addTo(map)
})

