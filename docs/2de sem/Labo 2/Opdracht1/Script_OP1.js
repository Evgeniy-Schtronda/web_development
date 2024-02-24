const setup = () => {
    window.alert('Hallo');
    let confirm_value = window.confirm("Hopelijk gaat uw dag goed");
    let prompt_value = window.prompt("welke dag is het?", "Bedankt");

    console.log('De return value van window.confirm: ' + confirm_value);
    console.log('De return value van window.prompt: ' + prompt_value);
}

window.addEventListener("load", setup);