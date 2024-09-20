// myJS.js

// Function to create and inject the navbar dynamically
function createNavbar() {
    const navbar = document.getElementById("navbar");

    navbar.innerHTML = `
        <nav class="bg-gradient-to-r from-blue-500 to-green-500 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <!-- Logo -->
                <div class="text-white font-bold text-lg">
                    RazorPay Clone
                </div>

                <!-- Menu -->
                <div>
                    <ul class="flex space-x-4">
                        <li><a href="#" class="text-white hover:text-gray-200">Home</a></li>
                        <li><a href="#" class="text-white hover:text-gray-200">Pricing</a></li>
                        <li><a href="#" class="text-white hover:text-gray-200">Products</a></li>
                        <li><a href="#" class="text-white hover:text-gray-200">Contact</a></li>
                    </ul>
                </div>

                <!-- Login Button -->
                <div>
                    <a href="#" class="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-100">
                        Login
                    </a>
                </div>
            </div>
        </nav>
    `;
}

// Call the function to create the navbar
createNavbar();
