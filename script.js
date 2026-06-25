document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FUNCIONALIDADE: Alternador de Tema Visual (Claro / Escuro Neutro)
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    themeToggle.addEventListener('click', () => {
        const isDarkMode = htmlElement.getAttribute('data-theme') === 'dark';
        
        if (isDarkMode) {
            htmlElement.removeAttribute('data-theme');
            themeToggle.textContent = 'Modo Escuro';
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = 'Modo Claro';
        }
    });

    // 2. FUNCIONALIDADE: Simulador Interativo de Atitudes Digitais
    const actionButtons = document.querySelectorAll('.btn-action');
    const feedbackCard = document.getElementById('simulatorFeedback');

    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const choiceType = button.getAttribute('data-choice');
            feedbackCard.style.display = 'block';

            if (choiceType === 'correta') {
                feedbackCard.innerHTML = `
                    <p style="margin-bottom: 0.5rem;"><strong>✓ Decisão Alinhada com a Cidadania Digital!</strong></p>
                    <p>Ao agir com empatia, respeito e responsabilidade online, o ambiente digital se torna mais seguro e saudável. Isso inclui pensar antes de postar, não compartilhar conteúdos que possam prejudicar alguém, respeitar a privacidade alheia e denunciar comportamentos abusivos.</p>
                `;
                feedbackCard.style.borderLeft = "4px solid var(--accent-dark)";
            } else {
                feedbackCard.innerHTML = `
                    <p style="margin-bottom: 0.5rem;"><strong>⚠ Alerta de Impacto Negativo!</strong></p>
                    <p>Se calar ou espalhar conteúdos humilhantes alimenta diretamente o cyberbullying. Lembre-se: essa prática causa graves impactos nas vítimas, como ansiedade, depressão, baixa autoestima, problemas de sono, isolamento social e, em casos mais graves, ideias suicidas. Os efeitos podem ser tão ou mais prejudiciais que o bullying presencial, pois o conteúdo humilhante fica registrado e pode se espalhar facilmente.</p>
                `;
                feedbackCard.style.borderLeft = "4px solid var(--text-muted)";
            }
        });
    });
});
