document.addEventListener('DOMContentLoaded', function() {
    fetch('wirefram.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('logo').innerHTML = `<h1>${data.Wireframe.Header.Logo}</h1>`;
            const navLinks = data.Wireframe.Header.Navigation.map(item => `<a href="#">${item}</a>`).join('');
            document.getElementById('navigation').innerHTML = `<nav>${navLinks}</nav>`;
            document.getElementById('banner').innerHTML = `<div>${data.Wireframe.Header.Banner}</div>`;

            document.getElementById('main-section').innerHTML = `
                <h2>Introduction</h2>
                <p>${data.Wireframe.MainSection.Introduction}</p>
                <p>${data.Wireframe.MainSection.AssistantPresentation}</p>
            `;

            const resourcesLinks = data.Wireframe.ResourcesSection.Links.map(item => `<li>${item}</li>`).join('');
            document.getElementById('resources-section').innerHTML = `
                <h2>Resources</h2>
                <ul>${resourcesLinks}</ul>
                <div>${data.Wireframe.ResourcesSection.InteractiveWidgets}</div>
            `;

            document.getElementById('community-section').innerHTML = `
                <h2>Community</h2>
                <p>${data.Wireframe.CommunitySection.UserTestimonials}</p>
                <p>${data.Wireframe.CommunitySection.JoinInvitation}</p>
            `;

            document.getElementById('footer').innerHTML = `
                <p>${data.Wireframe.Footer.ContactInfo}</p>
                <p>${data.Wireframe.Footer.SocialMediaLinks}</p>
                <p>${data.Wireframe.Footer.Copyright}</p>
            `;
        })
        .catch(error => console.error('Error loading the data:', error));
});
