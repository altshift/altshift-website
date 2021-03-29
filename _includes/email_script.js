window.onload = function() {
    const emailComponents = [ '{{ site.exploded_email[0] }}', '{{ site.exploded_email[1] }}', '{{ site.exploded_email[2] }}' ];
    const emailIconLinks = document.getElementsByClassName('email-icon');
    for (const iconLink of emailIconLinks) {
        iconLink.addEventListener('click', _event => {
            _event.preventDefault();
            const rightEmail = `mailto:${emailComponents[1]}@${emailComponents[0]}.${emailComponents[2]}`;
            location.href = rightEmail;
        });
    }
    console.log('test');
};