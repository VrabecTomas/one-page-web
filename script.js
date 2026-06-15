document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. EFEKT PLYNULÉHO VENOŘENÍ KARET (Intersection Observer) ---
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Přidá třídu pro spuštění CSS animace
                entry.target.classList.add('in-view');
                // Jakmile se prvek vykreslí, přestaneme ho sledovat (lepší výkon)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Registrace všech karet k animaci
    const cards = document.querySelectorAll('.animate-up');
    cards.forEach(card => cardObserver.observe(card));


    // --- 2. INTERAKTIVNÍ SÍŤOVÝ SIMULÁTOR (Ping Widget) ---
    const pingBtn = document.getElementById('ping-btn');
    const pingStatus = document.getElementById('ping-status');
    const pingMs = document.getElementById('ping-ms');

    if (pingBtn && pingStatus && pingMs) {
        pingBtn.addEventListener('click', () => {
            // Zamknutí tlačítka během testu
            pingBtn.disabled = true;
            pingStatus.textContent = 'Detekuji nejbližší edge server (Anycast)...';
            pingMs.textContent = '-- ms';
            pingMs.style.color = 'var(--text-body)';

            // Simulace reálného síťového zpoždění
            setTimeout(() => {
                // Vygenerování nízké odezvy typické pro Cloudflare sítě (2-9 ms)
                const generatedPing = Math.floor(Math.random() * 8) + 2;
                
                // Aktualizace UI výsledků
                pingStatus.textContent = '⚡ Připojeno přes uzel: Prague, CZ (PRG)';
                pingMs.textContent = `${generatedPing} ms`;
                pingMs.style.color = '#10b981'; // Zelená indikující excelentní rychlost
                
                // Odemknutí tlačítka
                pingBtn.disabled = false;
            }, 750);
        });
    }
});