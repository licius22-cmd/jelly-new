// main.js

// 1. Delay de 1.5s para UTMify e Pixels
setTimeout(() => {
    // UTMify
    const utm = document.createElement('script');
    utm.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
    utm.setAttribute('data-utmify-prevent-subids', '');
    document.body.appendChild(utm);

    // Meta Pixels
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');

    const ids = [
        '901335525837933', '1435316934639038', '2157661164979333', 
        '1930652510882312', '1304063911565424', '797801516088163', 
        '885506097636747', '1910035972952167'
    ];
    ids.forEach(id => fbq('init', id));
    fbq('track', 'PageView');
    
}, 1500);


// 2. Delay de 2.0s para injetar o Vturb
setTimeout(() => {
    const container = document.getElementById('vturb-container');
    
    if (container) {
        // Injeta a tag do Smartplayer
        container.innerHTML = `<vturb-smartplayer id="vid-699de0a8f5e86dda40b4cdcc" style="display: block; width: 100%; aspect-ratio: 16/9;"></vturb-smartplayer>`;
        
        // Injeta o script pesado do Vturb
        const vturbScript = document.createElement('script');
        vturbScript.src = "https://scripts.converteai.net/6e3ae2f6-ad64-483b-9bc5-bafc50ec8005/players/699de0a8f5e86dda40b4cdcc/v4/player.js";
        vturbScript.async = true;
        document.body.appendChild(vturbScript);

        // Remove o skeleton (fundo animado) quando renderizar
        container.classList.remove('vsl-skeleton');

        // Fica checando a cada meio segundo se o player já carregou para aplicar o delay do Pitch (3654s)
        const checkPlayer = setInterval(() => {
            const player = document.querySelector("vturb-smartplayer");
            if (player && typeof player.displayHiddenElements === 'function') {
                player.addEventListener("player:ready", () => {
                    player.displayHiddenElements(3654, [".esconder"], { persist: true });
                });
                clearInterval(checkPlayer); // Para de checar
            }
        }, 500);
    }
}, 2000);
