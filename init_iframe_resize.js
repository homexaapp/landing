const resizable_iframes = Array.from(document.querySelectorAll('iframe')).filter((iframe) => {
    return iframe.src.startsWith(window.location.origin);
});

iframeResize({
    license: 'GPLv3',
}, ...resizable_iframes);