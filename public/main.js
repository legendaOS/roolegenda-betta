const { createApp } = Vue

// Импортирование компонент

import Header from "./components/Header.js"
import Banner from "./components/Banner.js"

// Монтиорвание компонент

createApp(Header).mount('#header_vue')
createApp(Banner).mount('#banner_vue')