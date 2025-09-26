Array.from(document.querySelectorAll('iframe')).filter((iframe) => {
    return iframe.src.startsWith(window.location.origin);
}).forEach((iframe) => {
    iframeResize({
        license: 'GPLv3',
    }, iframe);
});