// 3D Interactive Periodic Table Implementation
class PeriodicTable3D {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.elements = [];
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.selectedElement = null;
        this.animationEnabled = true;
        this.currentViewMode = 'default';
        this.init();
    }

    init() {
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupControls();
        this.setupLighting();
        this.createPeriodicTable();
        this.setupEventListeners();
        this.animate();
        this.hideLoadingScreen();
    }

    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0a0a);
        
        // Add subtle fog for depth
        this.scene.fog = new THREE.Fog(0x0a0a0a, 50, 200);
    }

    setupCamera() {
        const container = document.getElementById('scene-container');
        this.camera = new THREE.PerspectiveCamera(
            75, 
            container.clientWidth / container.clientHeight, 
            0.1, 
            1000
        );
        this.camera.position.set(0, 10, 30);
    }

    setupRenderer() {
        const container = document.getElementById('scene-container');
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.5;
        container.appendChild(this.renderer.domElement);
    }

    setupControls() {
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 10;
        this.controls.maxDistance = 100;
        this.controls.target.set(9, 0, 0); // Center on the middle of the periodic table
    }

    setupLighting() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);

        // Main directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(20, 20, 20);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 500;
        this.scene.add(directionalLight);

        // Additional colored lights for ambiance
        const light1 = new THREE.PointLight(0x00ffff, 0.5, 50);
        light1.position.set(-20, 10, 10);
        this.scene.add(light1);

        const light2 = new THREE.PointLight(0xff00ff, 0.5, 50);
        light2.position.set(20, 10, -10);
        this.scene.add(light2);
    }

    createPeriodicTable() {
        elementsData.forEach(elementData => {
            this.createElement(elementData);
        });
    }

    createElement(elementData) {
        const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.2);
        
        // Create material with element category color
        const color = categoryColors[elementData.category] || 0x666666;
        const material = new THREE.MeshPhongMaterial({
            color: color,
            transparent: true,
            opacity: 0.9,
            shininess: 100
        });

        const cube = new THREE.Mesh(geometry, material);
        
        // Position based on periodic table layout
        const x = elementData.position[0] * 1.2;
        const y = -elementData.position[1] * 1.2;
        const z = 0;
        
        cube.position.set(x, y, z);
        cube.castShadow = true;
        cube.receiveShadow = true;
        
        // Store element data for interaction
        cube.elementData = elementData;
        cube.originalPosition = { x, y, z };
        cube.originalColor = color;
        
        // Create text label
        this.createElementLabel(cube, elementData);
        
        this.elements.push(cube);
        this.scene.add(cube);
    }

    createElementLabel(cube, elementData) {
        // Create canvas for text
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 128;
        canvas.height = 128;
        
        // Draw background
        context.fillStyle = 'rgba(0, 0, 0, 0.8)';
        context.fillRect(0, 0, 128, 128);
        
        // Draw atomic number
        context.fillStyle = '#00ffff';
        context.font = 'bold 16px Arial';
        context.textAlign = 'left';
        context.fillText(elementData.number, 8, 20);
        
        // Draw element symbol
        context.fillStyle = '#ffffff';
        context.font = 'bold 32px Arial';
        context.textAlign = 'center';
        context.fillText(elementData.symbol, 64, 70);
        
        // Draw element name
        context.fillStyle = '#cccccc';
        context.font = '12px Arial';
        context.textAlign = 'center';
        const name = elementData.name.length > 10 ? 
            elementData.name.substring(0, 8) + '...' : elementData.name;
        context.fillText(name, 64, 90);
        
        // Draw atomic mass
        context.fillStyle = '#aaaaaa';
        context.font = '10px Arial';
        context.fillText(elementData.mass.toFixed(2), 64, 105);
        
        // Create texture and material
        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        const labelMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            side: THREE.DoubleSide
        });
        
        // Create label geometry and mesh
        const labelGeometry = new THREE.PlaneGeometry(0.8, 0.8);
        const label = new THREE.Mesh(labelGeometry, labelMaterial);
        label.position.z = 0.11; // Slightly in front of the cube
        
        cube.add(label);
    }

    setupEventListeners() {
        // Mouse events for element interaction
        this.renderer.domElement.addEventListener('mousemove', (event) => {
            this.onMouseMove(event);
        });
        
        this.renderer.domElement.addEventListener('click', (event) => {
            this.onElementClick(event);
        });
        
        // Control buttons
        document.getElementById('resetView').addEventListener('click', () => {
            this.resetView();
        });
        
        document.getElementById('toggleAnimation').addEventListener('click', () => {
            this.toggleAnimation();
        });
        
        document.getElementById('viewMode').addEventListener('change', (event) => {
            this.changeViewMode(event.target.value);
        });
        
        document.getElementById('closeInfo').addEventListener('click', () => {
            this.hideElementInfo();
        });
        
        // Window resize
        window.addEventListener('resize', () => {
            this.onWindowResize();
        });
        
        // Keyboard controls
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.hideElementInfo();
            }
        });
    }

    onMouseMove(event) {
        const container = document.getElementById('scene-container');
        const rect = container.getBoundingClientRect();
        
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        // Raycast for hover effects
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.elements);
        
        // Reset all elements to normal state
        this.elements.forEach(element => {
            element.scale.set(1, 1, 1);
            element.material.emissive.setHex(0x000000);
        });
        
        // Highlight hovered element
        if (intersects.length > 0) {
            const hoveredElement = intersects[0].object;
            hoveredElement.scale.set(1.1, 1.1, 1.1);
            hoveredElement.material.emissive.setHex(0x222222);
            
            // Change cursor
            this.renderer.domElement.style.cursor = 'pointer';
        } else {
            this.renderer.domElement.style.cursor = 'default';
        }
    }

    onElementClick(event) {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.elements);
        
        if (intersects.length > 0) {
            const clickedElement = intersects[0].object;
            this.showElementInfo(clickedElement.elementData);
            this.selectedElement = clickedElement;
            
            // Highlight selected element
            this.elements.forEach(el => el.material.emissive.setHex(0x000000));
            clickedElement.material.emissive.setHex(0x444444);
        }
    }

    showElementInfo(elementData) {
        const infoPanel = document.getElementById('element-info');
        
        // Populate element information
        infoPanel.querySelector('.atomic-number').textContent = elementData.number;
        infoPanel.querySelector('.element-symbol').textContent = elementData.symbol;
        infoPanel.querySelector('.element-name').textContent = elementData.name;
        infoPanel.querySelector('.atomic-mass').textContent = elementData.mass;
        infoPanel.querySelector('.category').textContent = 
            elementData.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        infoPanel.querySelector('.electron-config').textContent = elementData.electronConfig;
        infoPanel.querySelector('.discovered').textContent = elementData.discovered;
        
        infoPanel.classList.remove('hidden');
    }

    hideElementInfo() {
        document.getElementById('element-info').classList.add('hidden');
        if (this.selectedElement) {
            this.selectedElement.material.emissive.setHex(0x000000);
            this.selectedElement = null;
        }
    }

    resetView() {
        this.camera.position.set(0, 10, 30);
        this.controls.target.set(9, 0, 0);
        this.controls.update();
        this.hideElementInfo();
        
        // Reset all element positions and colors
        this.elements.forEach(element => {
            element.position.copy(element.originalPosition);
            element.material.color.setHex(element.originalColor);
            element.scale.set(1, 1, 1);
            element.material.emissive.setHex(0x000000);
        });
        
        this.currentViewMode = 'default';
        document.getElementById('viewMode').value = 'default';
    }

    toggleAnimation() {
        this.animationEnabled = !this.animationEnabled;
        const button = document.getElementById('toggleAnimation');
        button.textContent = this.animationEnabled ? 'Disable Animation' : 'Enable Animation';
    }

    changeViewMode(mode) {
        this.currentViewMode = mode;
        this.hideElementInfo();
        
        switch (mode) {
            case 'category':
                this.arrangeByCategory();
                break;
            case 'period':
                this.arrangeByPeriod();
                break;
            case 'group':
                this.arrangeByGroup();
                break;
            default:
                this.resetView();
                break;
        }
    }

    arrangeByCategory() {
        const categories = {};
        let categoryIndex = 0;
        
        this.elements.forEach(element => {
            const category = element.elementData.category;
            if (!categories[category]) {
                categories[category] = categoryIndex++;
            }
            
            const targetY = categories[category] * 3 - 10;
            const targetX = (element.elementData.number % 20) * 1.2 - 10;
            
            this.animateElementToPosition(element, targetX, targetY, 0);
        });
    }

    arrangeByPeriod() {
        this.elements.forEach(element => {
            const period = element.elementData.period;
            const targetY = -period * 2;
            const targetX = element.originalPosition.x;
            
            this.animateElementToPosition(element, targetX, targetY, period * 0.5);
        });
    }

    arrangeByGroup() {
        this.elements.forEach(element => {
            const group = element.elementData.group;
            const targetX = group * 1.2;
            const targetY = element.originalPosition.y;
            
            this.animateElementToPosition(element, targetX, targetY, 0);
        });
    }

    animateElementToPosition(element, x, y, z) {
        const duration = 2000; // 2 seconds
        const startTime = Date.now();
        const startPos = element.position.clone();
        const targetPos = new THREE.Vector3(x, y, z);
        
        const animateStep = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            element.position.lerpVectors(startPos, targetPos, easeProgress);
            
            if (progress < 1) {
                requestAnimationFrame(animateStep);
            }
        };
        
        animateStep();
    }

    onWindowResize() {
        const container = document.getElementById('scene-container');
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (this.animationEnabled) {
            // Gentle floating animation
            const time = Date.now() * 0.001;
            this.elements.forEach((element, index) => {
                const offset = index * 0.1;
                element.position.y += Math.sin(time + offset) * 0.001;
                element.rotation.y += 0.005;
            });
        }
        
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }
}

// Initialize the 3D periodic table when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit to ensure Three.js is loaded
    setTimeout(() => {
        new PeriodicTable3D();
    }, 100);
});