class MicroFrontendFramework {
    constructor() {
        this.apps = {};
    }

    registerApp(name, url) {
        this.apps[name] = url;
    }

    loadApp(name, elementId) {
        const url = this.apps[name];
        if (!url) {
            console.error(`No app registered with the name ${name}`);
            return;
        }

        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById(elementId).innerHTML = html;
                this.executeScripts(elementId);
            })
            .catch(error => console.error(`Failed to load app ${name}:`, error));
    }

    executeScripts(elementId) {
        const element = document.getElementById(elementId);
        const scripts = Array.from(element.querySelectorAll("script"));

        scripts.forEach(script => {
            const newScript = document.createElement("script");
            Array.from(script.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(script.innerHTML));
            script.parentNode.replaceChild(newScript, script);
        });
    }
}

// Exporting the framework to be used in other parts of the application
window.MicroFrontendFramework = MicroFrontendFramework;
