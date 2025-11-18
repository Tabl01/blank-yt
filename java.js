function openYouTube() {
    // 1. This line opens a new, blank tab
    const newTab = window.open('about:blank', '_blank');

    // 2. This line checks if it worked (and wasn't blocked)
    if (newTab) {
        // 3. This line tells that new tab to go to YouTube
        newTab.location.href = 'https://www.youtube.com';
        newTab.focus();
    } 
    // ...
}
