document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded");

    const params = new URLSearchParams(window.location.search);
    const key = params.get("project");
    console.log("Project key:", key);

    const container = document.querySelector("#unity-container");
    const canvas = document.querySelector("#unity-canvas");
    const loadingBar = document.querySelector("#unity-loading-bar");
    const progressBarFull = document.querySelector("#unity-progress-bar-full");
    const warningBanner = document.querySelector("#unity-warning");

    // Show fallback content if project not found
    if (!key || !projects[key]) {
      document.querySelector('#project-details').innerHTML = "<h2>404 – Project Not Found</h2><p>Sorry, we couldn't find that project.</p>";
      return;
    }

    const project = projects[key];
    console.log("Project loaded:", project);

    // Fill the text content
    document.getElementById("project-title").textContent = project.title;

    document.getElementById("project-tools").textContent = project.tools;
    document.getElementById("project-roles").textContent = project.roles;
    document.getElementById("project-team").textContent = project.team;

    document.getElementById("project-content").innerHTML = project.content;

    // Load Unity only if it's included
    if (project.unity) {

      const { buildUrl, buildName, companyName, productVersion, resolution } = project.unity;
            

      // Set resolution if defined
      const canvas = document.querySelector("#unity-canvas");

      if (resolution && resolution.width && resolution.height) {
        canvas.width = resolution.width;
        canvas.height = resolution.height;
      } else {
        // Default fallback
        canvas.width = 400;
        canvas.height = 300;
      }    
      function unityShowBanner(msg, type) {
        function updateBannerVisibility() {
          warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
        }
        
        const div = document.createElement('div');
        
        div.innerHTML = msg;
        
        warningBanner.appendChild(div);
        if (type === 'error') div.style = 'background: red; padding: 10px;';
        else {
          if (type === 'warning') div.style = 'background: yellow; padding: 10px;';
          setTimeout(() => {
            warningBanner.removeChild(div);
            updateBannerVisibility();
          }, 5000);
        }
        updateBannerVisibility();
      }

      const loaderUrl = `${buildUrl}/${buildName}.loader.js`;
      const config = {
        dataUrl: `${buildUrl}/${buildName}.data`,
        frameworkUrl: `${buildUrl}/${buildName}.framework.js`,
        codeUrl: `${buildUrl}/${buildName}.wasm`,
        streamingAssetsUrl: "StreamingAssets",
        companyName: companyName,
        productName: project.title,
        productVersion: productVersion,
        showBanner: unityShowBanner,
      };

      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
        document.getElementsByTagName('head')[0].appendChild(meta);
      }

      loadingBar.style.display = "block";

      const script = document.createElement("script");
      script.src = loaderUrl;
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then(() => {
          loadingBar.style.display = "none";
        }).catch((message) => {
          alert(message);
        });
      };
      document.body.appendChild(script);
    }
    else {
        document.getElementById("unity-container").innerHTML = ""; 
        document.getElementById("images-container").innerHTML = `
        
        <img src="${project.image}" alt="${project.title}"></img>
        
        `; 
        
    }
});
