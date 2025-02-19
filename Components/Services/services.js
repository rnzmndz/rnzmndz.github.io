const services = [
    {
        title: "Material Estimate",
        descriptions: [
            "Accurate quantity takeoffs",
            "Detailed cost analysis",
            "Material specifications",
            "Budget optimization"
        ]
    },
    {
        title: "Project Management",
        descriptions: [
            "Timeline planning",
            "Resource allocation",
            "Progress tracking",
            "Quality control"
        ]
    },
    // Add more services here following the same structure
];

function renderServices() {
    const servicesContainer = document.getElementById('listOfServices');
    servicesContainer.innerHTML = ''; // Clear existing content

    services.forEach(service => {
        const serviceElement = `
            <div class="service">
                <h1>${service.title}</h1>
                <ul class="descList">
                    ${service.descriptions.map(desc => `<li class="descItems">${desc}</li>`).join('')}
                </ul>
            </div>
        `;
        servicesContainer.innerHTML += serviceElement;
    });
}

document.addEventListener('DOMContentLoaded', renderServices);