document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("search-box");
    const resultsContainer = document.getElementById("search-results");

    // Dynamically extract content
    const sections = Array.from(document.querySelectorAll("section"));
    const contentMap = sections.map(section => ({
        id: section.id,
        title: section.querySelector("h2").textContent,
        content: section.textContent
    }));

    // Search function
    function search(query) {
        const results = contentMap.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.content.toLowerCase().includes(query.toLowerCase())
        );

        resultsContainer.innerHTML = results
            .map(result => `<a href="#${result.id}"><h3>${result.title}</h3></a><p>${result.content.substring(0, 150)}...</p>`)
            .join("") || "<p>No results found.</p>";
    }

    // Listen for input events
    searchBox.addEventListener("input", (e) => {
        const query = e.target.value.trim();
        if (query) {
            search(query);
        } else {
            resultsContainer.innerHTML = "";
        }
    });
});
