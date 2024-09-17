// Estructura de carpetas y rutas de imágenes
const galleryPaths = {
    pie: {
        proyecto1: [
            "galeria/pie/proyecto1/img1.jpg", 
            "galeria/pie/proyecto1/img2.jpg",
            "galeria/pie/proyecto1/img3.jpg",
            "galeria/pie/proyecto1/img4.jpg",
            "galeria/pie/proyecto1/img5.jpg"
        ],
        proyecto2: [
            "galeria/pie/proyecto2/img1.jpg", 
            "galeria/pie/proyecto2/img2.jpg",
            "galeria/pie/proyecto2/img3.jpg",
            "galeria/pie/proyecto2/img4.jpg",
            "galeria/pie/proyecto2/img5.jpg"
        ],
        proyecto3: [
            "galeria/pie/proyecto3/img1.jpg", 
            "galeria/pie/proyecto3/img2.jpg",
            "galeria/pie/proyecto3/img3.jpg",
            "galeria/pie/proyecto3/img4.jpg",
            "galeria/pie/proyecto3/img5.jpg"
        ]
    },
    abp: {
        proyecto1: [
            "galeria/pie/proyecto1/img1.jpg", 
            "galeria/pie/proyecto1/img2.jpg",
            "galeria/pie/proyecto1/img3.jpg",
            "galeria/pie/proyecto1/img4.jpg",
            "galeria/pie/proyecto1/img5.jpg"
        ],
        proyecto2: [
            "galeria/pie/proyecto2/img1.jpg", 
            "galeria/pie/proyecto2/img2.jpg",
            "galeria/pie/proyecto2/img3.jpg",
            "galeria/pie/proyecto2/img4.jpg",
            "galeria/pie/proyecto2/img5.jpg"
        ],
        proyecto3: [
            "galeria/pie/proyecto3/img1.jpg", 
            "galeria/pie/proyecto3/img2.jpg",
            "galeria/pie/proyecto3/img3.jpg",
            "galeria/pie/proyecto3/img4.jpg",
            "galeria/pie/proyecto3/img5.jpg"
        ]
    },
    especial: {
        proyecto1: [
            "galeria/pie/proyecto1/img1.jpg", 
            "galeria/pie/proyecto1/img2.jpg",
            "galeria/pie/proyecto1/img3.jpg",
            "galeria/pie/proyecto1/img4.jpg",
            "galeria/pie/proyecto1/img5.jpg"
        ],
        proyecto2: [
            "galeria/pie/proyecto2/img1.jpg", 
            "galeria/pie/proyecto2/img2.jpg",
            "galeria/pie/proyecto2/img3.jpg",
            "galeria/pie/proyecto2/img4.jpg",
            "galeria/pie/proyecto2/img5.jpg"
        ],
        proyecto3: [
            "galeria/pie/proyecto3/img1.jpg", 
            "galeria/pie/proyecto3/img2.jpg",
            "galeria/pie/proyecto3/img3.jpg",
            "galeria/pie/proyecto3/img4.jpg",
            "galeria/pie/proyecto3/img5.jpg"
        ]
    },
    transversal: {
        proyecto1: [
            "galeria/pie/proyecto1/img1.jpg", 
            "galeria/pie/proyecto1/img2.jpg",
            "galeria/pie/proyecto1/img3.jpg",
            "galeria/pie/proyecto1/img4.jpg",
            "galeria/pie/proyecto1/img5.jpg"
        ],
        proyecto2: [
            "galeria/pie/proyecto2/img1.jpg", 
            "galeria/pie/proyecto2/img2.jpg",
            "galeria/pie/proyecto2/img3.jpg",
            "galeria/pie/proyecto2/img4.jpg",
            "galeria/pie/proyecto2/img5.jpg"
        ],
        proyecto3: [
            "galeria/pie/proyecto3/img1.jpg", 
            "galeria/pie/proyecto3/img2.jpg",
            "galeria/pie/proyecto3/img3.jpg",
            "galeria/pie/proyecto3/img4.jpg",
            "galeria/pie/proyecto3/img5.jpg"
        ]
    }
};

let currentFolder = '';
let currentImages = [];
let currentIndex = 0;

// Cargar carpetas principales
function loadMainFolders() {
    const mainFolders = Object.keys(galleryPaths);
    const folderNavigation = document.getElementById('folder-navigation');
    folderNavigation.innerHTML = '';

    // Crear botones para las carpetas principales
    mainFolders.forEach(folder => {
        const button = document.createElement('button');
        button.textContent = folder.toUpperCase();
        button.onclick = () => loadFolder(folder);
        folderNavigation.appendChild(button);
    });
}

// Cargar subcarpetas de la carpeta seleccionada
function loadFolder(folder) {
    currentFolder = folder;
    const subfolders = Object.keys(galleryPaths[folder]);
    const subfolderNavigation = document.getElementById('subfolder-navigation');
    subfolderNavigation.innerHTML = '';

    // Crear botones para las subcarpetas
    subfolders.forEach(subfolder => {
        const button = document.createElement('button');
        button.textContent = subfolder;
        button.onclick = () => loadImages(folder, subfolder);
        subfolderNavigation.appendChild(button);
    });

    // Ocultar el carrusel al cambiar de carpeta
    document.getElementById('carousel-container').style.display = 'none';
}

// Cargar imágenes de la subcarpeta seleccionada
function loadImages(folder, subfolder) {
    currentImages = galleryPaths[folder][subfolder];
    currentIndex = 0;
    showImage();
    document.getElementById('carousel-container').style.display = 'block';
}

// Mostrar la imagen actual en el carrusel
function showImage() {
    const carouselImage = document.getElementById('carousel-image');
    if (currentImages.length > 0) {
        carouselImage.src = currentImages[currentIndex];
    } else {
        carouselImage.src = '';
    }
}

// Cambiar a la imagen anterior
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        showImage();
    }
}

// Cambiar a la imagen siguiente
function nextImage() {
    if (currentIndex < currentImages.length - 1) {
        currentIndex++;
        showImage();
    }
}

// Cargar carpetas principales al iniciar
window.onload = loadMainFolders;