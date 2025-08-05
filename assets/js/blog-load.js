document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded");

    const params = new URLSearchParams(window.location.search);
    const key = params.get("blogs");
    console.log("Blogs key:", key);

    console.log(blogs[key]);
    
    // Show fallback content if project not found
    if (!key || !blogs[key]) {
      document.querySelector('#projects').innerHTML = "<h2>404 – Project Not Found</h2><p>Sorry, we couldn't find that project.</p>";
      return;
    }

    const blog = blogs[key];
    console.log("Blog loaded:", blog);

    // Fill the text content
    document.getElementById("project-title").textContent = blog.title;

    document.getElementById("projects").innerHTML = blog.content;
});
